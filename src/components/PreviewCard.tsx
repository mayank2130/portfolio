// components/SitePreviewCard.tsx
import React, { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  height?: number | string;
};

export default function SitePreviewCard({ url, height = 600 }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "blocked" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
    const timer = setTimeout(() => {
      // If after 3.5s we haven't gotten a load event, assume blocked/fallback.
      if (status === "loading") setStatus("blocked");
    }, 3500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  function onLoad() {
    // We can't reliably inspect contentWindow for cross-origin pages,
    // but a successful load event usually means the iframe displayed.
    setStatus("loaded");
  }

  function onError() {
    setStatus("error");
  }

  return (
    <div className="rounded-2xl w-full shadow-lg overflow-hidden border border-gray-200">
      <div className="px-4 py-3 bg-white flex items-center justify-between">
        <div className="text-sm text-gray-700 truncate max-w-[70%]">{url}</div>
        <div className="text-xs text-gray-500">
          {status === "loading" && "loading…"}
          {status === "loaded" && "live preview"}
          {status === "blocked" && "preview blocked — showing snapshot"}
          {status === "error" && "error loading preview"}
        </div>
      </div>

      <div style={{ height }} className="bg-white">
        {status !== "blocked" ? (
          <iframe
            ref={iframeRef}
            src={url}
            onLoad={onLoad}
            onError={onError}
            title={`preview-${url}`}
            sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {/* Fallback: show server screenshot endpoint (see Option B) */}
            <img
              alt={`snapshot of ${url}`}
              src={`/api/screenshot?url=${encodeURIComponent(url)}&w=1400&h=900`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
