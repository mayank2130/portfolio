import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-7">
      <div className="space-y-5 mb-5">
        <h2 className="font-semibold text-xl font-mono">
          Upvote me on ProductHunt
        </h2>
        <div className="">
          <Link
            href="https://www.producthunt.com/posts/tap-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tap&#0045;ui"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=726935&theme=dark"
              alt="Tap&#0032;UI - Custom&#0032;mobile&#0032;UI&#0032;components | Product Hunt"
              className="width: 250px; height: 54px;"
              width="200"
              height="28"
            />
          </Link>
        </div>
      </div>
      <h2 className="font-semibold text-2xl font-mono">All Blogs</h2>
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="wtf" className="border rounded-lg">
          <AccordionTrigger className="hover:no-underline px-4">
            <div className="flex items-center gap-4">
              <p>The right way!</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="flex justify-between flex-row">
              <div className="space-y-4 text-gray-600 mt-20">
                <p>
                  I&apos;m sharing about my experience of building my first solo
                  product{" "}
                  <Link
                    className="text-blue-600 underline"
                    href="https://goalbets.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    goalbets.in
                  </Link>
                  . For the past month I have been working on this project and
                  now that I think it&apos;s decent enough I am sharing my
                  thoughts and things I would do differently knowing what I know
                  a month later. <br />
                </p>

                <p>
                  The biggest thing that worked against me was that I knew a
                  lot—a lot of nonsense. I spent too much time watching
                  tutorials and tech videos about how one should go about
                  programming and writing clean code. This need to know
                  knowledge wasted more of my time than procrastination ever
                  did. Best practices are the worst for building products as an
                  indie developer. I focused on the best way to save compute,
                  minimize requests to my database, and make my product
                  efficient.So, I became obsessed with caching data—but dealing
                  with cache invalidation and refetching turned out to be
                  pointless for things that could&apos;ve been handled with a
                  simple POST/GET request.
                </p>
                <p>
                  But I needed to know I was doing things right, the way it was
                  shown in that 12-hour tutorial, the way the &ldquo;best`&rdquo; programmers
                  did it. That obsession slowed me down. Instead of building, I
                  kept getting lost in making things correct according to
                  someone else&apos;s standard. I did learn a lot by doing
                  things &ldquo;the right way,&rdquo; but it wasted a ton of time. Now I
                  know—doing things the right way only matters when it actually
                  saves you money on compute, storage, database requests, and
                  all that jazz.
                </p>

                <p>
                  Not in the early days. But I just had to do it perfectly. The
                  width, the border-radius—hell, I wasted an entire day on a
                  background gradient because it didn&apos;t look pleasing
                  enough for me. And when it got frustrating (which, honestly, I
                  made frustrating for myself), I thought, Let&apos;s just copy
                  a project from one of those tutorials, delete what I
                  don&apos;t need, and build on top of it. Great right? No, it
                  was a BIG FUCKING MISTAKE. Because then, I was stuck doing
                  things their way—the backend calls, the schema, the
                  design—because now it had to be at least on par with the
                  project I copied, right? The need to be perfect, the literal
                  fear of seeing an error I hadn&apos;t seen in the tutorial,
                  became so monumental that I just stopped building. What if I
                  saw something I hadn&apos;t encountered before? What if I
                  couldn&apos;t find the solution and had to solve it myself?
                </p>
                <p>
                  That what if took far too long to turn into how do I build it
                  fast? I worried about how people would perceive my way of
                  building things—my code—when no one had even seen my product.
                  It&apos;s cliché at this point, but the fear of failure wastes
                  a lot of time—time you don&apos;t have. There&apos;s a small
                  window where you&apos;re hyperfocused, usually after
                  experiencing something bad. But once your mind returns to a
                  comfortable state, you go back to scrolling, wasting
                  time—that&apos;s just the reality today. We only focus when we
                  feel like we have to. That&apos;s exactly what happened to me.
                  So, I started telling myself: I have to launch my product on
                  this exact day. No matter what. Pressuring myself was the only
                  thing that actually worked—because no one, absolutely no one,
                  was going to tell me that the quality of my code doesn&apos;t
                  even matter until the damn thing is working.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Page;
