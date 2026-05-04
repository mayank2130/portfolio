"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogPage() {
  const [blogContent, setBlogContent] = useState("");
  const [blogError, setBlogError] = useState("");
  const [isBlogLoading, setIsBlogLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setBlogError("");
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog content.");
        }
        const data = (await response.json()) as { content: string };
        setBlogContent(data.content);
      } catch {
        setBlogError("Could not load blog post right now.");
      } finally {
        setIsBlogLoading(false);
      }
    };

    void fetchBlog();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#0f3c2d_0,#0b291e_35%,#051510_100%)] text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full mx-auto space-y-6 sm:space-y-8">
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <h1 className="text-xl sm:text-2xl font-light text-white">Blog</h1>
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm sm:text-base transition-colors"
          >
            Back Home
          </Link>
        </div>

        {isBlogLoading && (
          <p className="text-sm sm:text-base text-white/70">Loading blog...</p>
        )}

        {blogError && <p className="text-sm sm:text-base text-red-300">{blogError}</p>}

        {!isBlogLoading && !blogError && blogContent && (
          <article className="space-y-5 text-white/90">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl sm:text-3xl font-light text-white">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl sm:text-2xl font-light text-white pt-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg sm:text-xl font-medium text-white">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm sm:text-base leading-7 text-white/85">{children}</p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/40 hover:decoration-green-400 transition-colors"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="leading-7">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l border-white/30 pl-4 text-white/70 italic">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="border-white/20 my-6" />,
                code: ({ className, children }) => {
                  const language = className?.replace("language-", "");
                  const content = String(children).replace(/\n$/, "");

                  if (language) {
                    return (
                      <SyntaxHighlighter
                        language={language}
                        style={oneDark}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: "1rem",
                          borderRadius: "0.5rem",
                          background: "rgba(2, 6, 23, 0.7)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {content}
                      </SyntaxHighlighter>
                    );
                  }

                  return (
                    <code className="text-xs sm:text-sm bg-white/10 rounded px-1.5 py-0.5">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => <>{children}</>,
                table: ({ children }) => (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">{children}</table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border-b border-white/20 px-2 py-2 font-medium text-white">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-b border-white/10 px-2 py-2 text-white/80">
                    {children}
                  </td>
                ),
              }}
            >
              {blogContent}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}
