"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Projects from "@/components/Projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JustinGuoPortfolio() {
  const [activeSection, setActiveSection] = useState<"projects" | "blogs" | null>(
    null,
  );
  const [blogContent, setBlogContent] = useState("");
  const [blogError, setBlogError] = useState("");
  const [isBlogLoading, setIsBlogLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (activeSection !== "blogs" || blogContent) {
        return;
      }

      setIsBlogLoading(true);
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
  }, [activeSection, blogContent]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#0f3c2d_0,#0b291e_35%,#051510_100%)] text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-4 sm:space-y-6">
        {!activeSection && (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">
                <span className="text-white">mayank thakur</span>
                <span className="text-green-400"> • elon&apos;s successor</span>
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg font-medium">
                i want to remove inefficiency from the world.
              </p>

              <p className="text-sm sm:text-base">
                however, I&apos;m not a farmer removing weeds. I&apos;m a
                software engineer.
              </p>

              <p className="text-lg sm:text-xl italic underline decoration-2">
                I ship products that solve problems.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-sm sm:text-base">
                I&apos;m currently building{" "}
                <Link
                  href="https://echoed.in"
                  target="_blank"
                  className="underline decoration-2"
                >
                  <LinkPreview
                    isStatic={true}
                    imageSrc="echoed.png"
                    url="https://echoed.in"
                    className="text-white italic font-semibold hover:text-green-400 transition-colors"
                  >
                    Echoed,{' '}
                  </LinkPreview>
                </Link>
                a platform that replaces inefficient surveys and scheduled calls
                with instant voice feedback. We help companies capture authentic
                user insights directly on their website, without the friction of
                mass emails.
              </div>

              <p className="text-sm sm:text-base">
                Last Month, I built a clip generator turns youtube videos into
                short clips, meanwhile I participated in 7 hackathons this year
                and maintaining a 30% win-rate.
              </p>

              <p className="text-sm sm:text-base">
                personally, I&apos;m a{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    {" "}
                    <span className="decoration-dotted cursor-pointer underline decoration-2 decoration-green-400 underline-offset-4">
                      football player
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm border-none bg-gradient-to-r from-emerald-700 to-emerald-900">
                    CF/RW/LW. Life peaked when i scored an exact goal
                    <Link
                      href="https://www.youtube.com/shorts/p9YQGFIzQe0"
                      target="_blank"
                      className="text-green-400"
                    >
                      {" "}
                      like this.
                    </Link>
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    <span className="decoration-dotted cursor-pointer underline decoration-2 decoration-green-400 underline-offset-4">
                      reader
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm border-none bg-gradient-to-r from-emerald-700 to-emerald-900">
                    I am too fascinated by the world of Romans. Also, Robert
                    Greene.
                  </HoverCardContent>
                </HoverCard>
                , and{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    <span className="decoration-dotted cursor-pointer underline decoration-2 decoration-green-400 underline-offset-4">
                      a deep thinker
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm border-none bg-gradient-to-r from-emerald-900 to-emerald-700">
                    I spend my mental thrust on first principles thinking about
                    things i am interested in.
                  </HoverCardContent>
                </HoverCard>
                .
              </p>

              <p className="text-sm sm:text-base">
                I love meeting new people and hearing new ideas-{" "}
                <span className="font-semibold">
                  mayankthakur1712@gmail.com
                </span>
              </p>
            </div>
          </>
        )}

        {activeSection === "projects" && <Projects />}
        {activeSection === "blogs" && (
          <div className="p-6 sm:py-12">
            {isBlogLoading && (
              <p className="text-sm sm:text-base text-white/70">Loading blog...</p>
            )}

            {blogError && (
              <p className="text-sm sm:text-base text-red-300">{blogError}</p>
            )}

            {!isBlogLoading && !blogError && blogContent && (
              <article className="space-y-5 text-white/90">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl sm:text-3xl font-light text-white">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl sm:text-2xl font-light text-white pt-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg sm:text-xl font-medium text-white">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-sm sm:text-base leading-7 text-white/85">
                        {children}
                      </p>
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
                        <table className="w-full text-sm text-left border-collapse">
                          {children}
                        </table>
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
        )}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/20">
          <div className="flex items-center" title="Projects">
            <Button
              className={`p-0 bg-transparent border-none px-2 py-2 hover:bg-transparent text-white/70 hover:text-white transition-all duration-300 min-h-[44px] ${
                activeSection === "projects"
                  ? "bg-gray-200 hover:bg-gray-300 hover:text-black text-black"
                  : "bg-transparent"
              }`}
              onClick={() =>
                setActiveSection((current) =>
                  current === "projects" ? null : "projects",
                )
              }
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 22h20L12 2z"></path>
                </svg>
                <span className="text-sm sm:text-base">Projects</span>
              </div>
            </Button>
          </div>

          <Link
            href="https://x.com/MaianciusThakur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 flex items-center min-h-[44px] px-2"
            title="Twitter"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="text-sm sm:text-base">Twitter</span>
            </div>
          </Link>

          <Button
            className={`p-0 bg-transparent border-none px-2 py-2 hover:bg-transparent text-white/70 hover:text-white transition-all duration-300 min-h-[44px] ${
              activeSection === "blogs"
                ? "bg-gray-200 hover:bg-gray-300 hover:text-black text-black"
                : "bg-transparent"
            }`}
            onClick={() =>
              setActiveSection((current) => (current === "blogs" ? null : "blogs"))
            }
            title="Blogs"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"></path>
              </svg>
              <span className="text-sm sm:text-base">Blogs</span>
            </div>
          </Button>

          <Link
            href="https://www.canva.com/design/DAFr3jQMPDI/oQ2_PofKolXK1hztSgmPgA/view?utm_content=DAFr3jQMPDI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a5cb2e22e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 flex items-center min-h-[44px] px-2"
            title="Resume"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.25 2.5h-9a1.5 1.5 0 00-1.5 1.5v16a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.25L14.25 2.5zm0 1.5L18.75 8h-4.5V4zm-9 15.5V4h7.5v4.5a1.5 1.5 0 001.5 1.5h4.5v10h-13.5zm3-8.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z"></path>
              </svg>
              <span className="text-sm sm:text-base">Resume</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
