# Building on Speculative Decoding in MLX: A Runtime Task Router for DFlash

*This post builds directly on [Sabesh's empirical evaluation of speculative decoding on Apple Silicon](https://www.sabesh.space/musings/research/speculative-decoding-in-mlx-using-dflash) using MLX and DFlash. His work — the 300-run parameter sweep, the identification of block size 16 as optimal, the temperature analysis, and the prompt category findings — is the foundation everything here rests on. We replicated his setup, confirmed his results, and then implemented the one thing his conclusion recommended but left unbuilt.*

---

## What Sabesh Found

The setup is straightforward. DFlash replaces the standard autoregressive drafter with a block diffusion model that generates an entire draft block in a single parallel forward pass. The target model then verifies the full block in one pass. When acceptance is high — when the draft's proposals agree with what the target would have sampled — you get multiple tokens for the cost of one forward pass.

Sabesh ran 300 configurations across six variables on an M5 Pro with 48 GB unified memory, using the matched pair `Qwen/Qwen3.5-4B` as the target and `z-lab/Qwen3.5-4B-DFlash` as the draft. The key findings:

- Block size 16 is the empirical optimum for this pair. Speedup increases from 4 through 8 to 16, then drops sharply at 24 and stays flat through 64.
- Acceptance rate peaks at temperature 0.3. Above that the target's distribution flattens and draft tokens are less likely to match what the target actually samples.
- Task type is the strongest predictor of speedup. Deterministic tasks like code and math produce the highest gains. Open-ended tasks like prose and random output occasionally fall below baseline.

His conclusion: *"speculative decoding should be gated by task type in production settings."* He didn't implement the gate.

---

## Replication on 16 GB Apple Silicon

We ran the same model pair on a 16 GB Apple Silicon machine — a significant step down from Sabesh's M5 Pro. Absolute token speed is lower (baseline ~13 tps vs ~60 tps on the M5 Pro) because LLM inference on Apple Silicon is memory-bandwidth-bound, and the M5 Pro has roughly 2.5x the memory bandwidth of older chips.

The speedup ratios, however, are what matter for evaluating speculative decoding. Our results:

*[Insert results screenshot here]*

| Category | Baseline tps | DFlash tps | Speedup | Acceptance |
|---|---|---|---|---|
| math | 14.02 | 50.22 | **3.58x** | 86% |
| code | 13.30 | 40.21 | **3.02x** | 84% |
| list | 13.87 | 33.43 | 2.41x | 80% |
| random | 13.23 | 25.12 | 1.90x | 73% |
| instruction | 13.74 | 24.95 | 1.82x | 73% |
| qa | 11.98 | 21.37 | 1.78x | 72% |
| prose | 13.83 | 19.67 | 1.42x | 70% |

These numbers exceed Sabesh's reported ~2x. The average across seven categories is ~2.3x, with math and code as clear outliers at 3x+. A few things contributed to the clean measurement:

**Explicit warmup.** Sabesh's setup used a persistent interactive loop, which naturally compiles the MLX computation graph before any timing begins. A fixed benchmark script has to do this deliberately. We run 20 tokens through the target model before the benchmark loop starts, ensuring every prompt is measured at steady-state compiled speed.

**`stream_generate` directly for baseline.** The `generate` wrapper in mlx_lm runs string decoding and I/O on every token when `verbose=True`. Using `stream_generate` directly measures pure generation throughput, making the baseline and speculative decode comparable on the same code path.

**Temperature at 0.3 from the start.** Sabesh's own sweep identified 0.3 as the acceptance peak. We ran at this temperature throughout, which puts us at the optimal configuration his analysis identified.

---

## The Router

Sabesh's conclusion flagged task type as the key operational variable but left the routing as an exercise. The obvious implementation — a keyword classifier that routes "write a function" to DFlash and "write a story" to baseline — works but is brittle. It requires you to enumerate task types upfront and it fails on ambiguous prompts.

A better signal is already available: the draft model's own acceptance rate on the incoming prompt.

The mechanism: run a short probe through DFlash before committing to it. Two blocks (32 tokens at block size 16) is enough to get a reliable acceptance signal. If acceptance over those two blocks is above a threshold, continue with DFlash for the full generation. If below, abandon and fall back to baseline.

The threshold is derived directly from the data. Math and code acceptance sits at 84–87%. Prose and QA sit at 70–73%. A threshold of 0.75 cleanly separates the two groups without requiring any task classification.

```python
PROBE_BLOCKS     = 2     # 32 tokens at block size 16
ROUTER_THRESHOLD = 0.75  # derived from sweep data

def run_routed(formatted_prompt):
    chunks = []
    probe_accepted = 0
    probe_total    = 0
    decision       = None

    for chunk in dflash_stream_generate(
        target_model, draft_model, tokenizer,
        prompt=formatted_prompt,
        block_size=BLOCK_SIZE,
        max_tokens=MAX_TOKENS,
        temperature=TEMPERATURE,
    ):
        chunks.append(chunk)
        blocks_done = len(chunks)

        if blocks_done <= PROBE_BLOCKS:
            probe_accepted += max(0, chunk.accepted - 1)
            probe_total    += chunk.accepted

        if blocks_done == PROBE_BLOCKS:
            acceptance = probe_accepted / probe_total if probe_total > 0 else 0.0
            if acceptance >= ROUTER_THRESHOLD:
                decision = "dflash"   # keep iterating
            else:
                decision = "baseline"
                break

    if decision == "baseline":
        # fall back — run full baseline
        ...
```

*[Insert router results screenshot here]*

The router correctly identifies math and code as DFlash candidates and falls back to baseline for prose and QA. On a mixed workload the router produces better average throughput than either naive DFlash or baseline alone.

One clarification worth making explicit: this is not "draft model acceptance" in isolation. The acceptance signal is a joint property of both models on a specific input — it measures how often the draft's proposals agreed with what the target would have sampled. The draft model alone produces no acceptance signal. It only exists because DFlash is running both models and comparing their outputs.

---

## What the Acceptance Rate is Actually Measuring

This is worth pausing on because it's easy to misread.

Speculative decoding's acceptance rate is not a property of the draft model. It is a property of the alignment between the draft's distribution and the target's distribution on a specific input. A prompt that produces narrow, predictable token distributions — code, math, structured output — gives both models fewer choices, so they agree more often. A prompt that produces broad distributions — creative prose, random output — means the target's sampled token is less likely to match the draft's argmax, regardless of how good the draft model is.

This is why the router works. The probe acceptance tells you something real about the prompt's structure, not just about the draft model's quality. It's a fast, cheap measurement of whether this specific input is a good candidate for speculative decoding.

---

## What Didn't Make It

A few directions looked promising but didn't have enough substance to include.

**Adaptive block sizing** — growing the block size dynamically when acceptance is high and shrinking it when acceptance drops — is theoretically well-motivated. Empirically, block size 16 is already close to the optimum for this pair and the variance in acceptance within a generation is high enough that adaptive sizing would oscillate rather than converge. Not worth the complexity.

**MLP activation pruning** to reduce verification cost is a real architectural lever but requires either retraining or careful calibration to avoid destroying output quality. It also changes the target's distribution in ways that would reduce acceptance, potentially netting negative. Out of scope for a runtime-only approach.

---

## Setup

```bash
pip install mlx mlx-lm
git clone https://github.com/z-lab/dflash && cd dflash && pip install -e .
```

One non-obvious requirement: `mlx_lm`'s `stream_generate` passes kwargs directly to `generate_step`, which takes a `sampler` callable rather than a raw `temperature` float. Use `make_sampler` from `mlx_lm.sample_utils`:

```python
from mlx_lm.sample_utils import make_sampler

for chunk in mlx_stream_generate(
    model, tokenizer,
    prompt=prompt,
    sampler=make_sampler(temp=0.3),
):
    ...
```

DFlash's `stream_generate` takes `temperature` directly and handles sampler construction internally. Passing a `make_sampler` object to DFlash bypasses its own sampler setup and produces incorrect results — keep the two call sites separate.

The Metal wired limit needs to be set once before any generation:

```python
if mx.metal.is_available():
    info = mx.device_info()
    limit = info.get("max_recommended_working_set_size", 0)
    if limit > 0:
        mx.set_wired_limit(limit)
```

Without this, `mlx_lm`'s internal `wired_limit` context manager re-sets it on every generation call, which on machines close to the memory ceiling causes Metal command buffer timeouts — the GPU stalls waiting for memory pressure to ease and macOS kills the command buffer after ~5 seconds.

---

*Full implementation available on GitHub. Results run on Apple Silicon, 16 GB unified memory. Model pair: `Qwen/Qwen3.5-4B` + `z-lab/Qwen3.5-4B-DFlash`.*
