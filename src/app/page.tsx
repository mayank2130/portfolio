"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import React, { useState } from "react";
import Projects from "@/components/Projects";

export default function JustinGuoPortfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#0f3c2d_0,#0b291e_35%,#051510_100%)] text-white p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-6">
        {!showProjects && (
          <>
            <div className="space-y-2">
              <h1 className="text-4xl font-light">
                <span className="text-white">mayank thakur</span>
                <span className="text-green-400"> • elon&apos;s successor</span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium">
                i want to remove inefficiency from the world.
              </p>

              <p className="text-base">
                however, I&apos;m not a farmer removing weeds. I&apos;m a
                software engineer.
              </p>

              <p className="text-xl italic underline decoration-2">
                I ship products that solve problems.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base">
                I&apos;m currently building{" "}
                <Link
                  href="https://tryvidhi.com"
                  target="_blank"
                  className="underline decoration-2"
                >
                  <LinkPreview
                    isStatic={true}
                    imageSrc="vidhi.png"
                    url="https://tryvidhi.com"
                    className="text-white italic font-semibold hover:text-green-400 transition-colors"
                  >
                    Vidhi
                  </LinkPreview>
                </Link>
                , where we&apos;re turning the typical website chatbot — the one
                floating in the bottom-right corner — into what it was always
                meant to be: a true AI-native assistant.
              </p>

              <p className="text-base">
                I built{" "}
                <span className="italic">
                  a clip generator turns youtube videos into short clips
                </span>
                , several other projects I&apos;m proud of; paid my debts, and
                completed <span className="italic">3 internships</span> at
                seed-stage startups.
              </p>

              <p className="text-base">
                these experiences have built a{" "}
                <span className="font-semibold">versatile skillset</span> in
                product, design, engineering, and distribution while building a
                sharp, entrepreneurial character.
              </p>

              <p className="text-base">
                personally, I&apos;m a{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    {" "}
                    <span className="decoration-dotted cursor-pointer underline decoration-2 decoration-green-400 underline-offset-4">
                      football player
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm border-none bg-gradient-to-r from-emerald-700 to-emerald-900">
                    CF/RW/LF. Life peaked when i scored an exact goal
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

              <p className="text-base">
                I love meeting new people and hearing new ideas-{" "}
                <span className="font-semibold">
                  mayankthakur1712@gmail.com
                </span>
              </p>
            </div>
          </>
        )}

        {showProjects && <Projects />}
        <div className="flex items-center space-x-8 pt-6 border-t border-white/20">
          <div className=" flex items-center space-x-2" title="Projects">
            <Button
              className={`p-0 bg-transparent border-none px-2 hover:bg-transparent text-white/70 hover:text-white transition-all duration-300 ${
                showProjects
                  ? "bg-gray-200 hover:bg-gray-300 hover:text-black text-black"
                  : "bg-transparent"
              }`}
              onClick={() => setShowProjects(!showProjects)}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 22h20L12 2z"></path>
                </svg>
                <span className="text-base">Projects</span>
              </div>
            </Button>
          </div>

          <Link
            href="https://x.com/MaianciusThakur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 flex items-center space-x-2"
            title="Twitter"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="text-base">Twitter</span>
            </div>
          </Link>

          <Link
            href="https://mayank2130.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 flex items-center space-x-2"
            title="Writing"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"></path>
              </svg>
              <span className="text-sm sm:text-base">Writing</span>
            </div>
          </Link>

          <Link
            href="https://www.canva.com/design/DAFr3jQMPDI/oQ2_PofKolXK1hztSgmPgA/view?utm_content=DAFr3jQMPDI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a5cb2e22e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 flex items-center space-x-2"
            title="Resume"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
