import React from "react";
import { Mail, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { greatWorkExp, workExperience } from "@/constants/workExperience";

const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-7">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">Mayank' Thakur</h1>
            <Link href={"/blogs"}>
              <button className="text-xl bg-gray-500 rounded-lg py-2 px-4">
                Blogs
              </button>
            </Link>
          </div>
          <div className="flex items-center text-gray-600">
            {/* <div className="flex items-center gap-2">San Francisco, CA</div> */}
          </div>

          {/* Social Links */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2">
              <Link
                href="mailto:mayankthakur1712@gmail.com"
                className="p-2 rounded-md hover:bg-gray-100 bg-slate-100"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </Link>
              <Link
                href="https://github.com/mayank2130"
                className="p-2 rounded-md hover:bg-gray-100 bg-slate-100"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </Link>
              <Link
                href="https://x.com/mayank01322310"
                className="p-2 rounded-md hover:bg-gray-100 bg-slate-100"
              >
                <Twitter className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
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
        </div>

        {/* Bio Sections */}
        <div className="space-y-4 text-gray-600">
          <p>
            I&apos;m currently trying to build a web container, browser with an
            engine, so AI models run on local machines instead of a rented
            servers.
          </p>

          <p>
            I&apos;ve independently developed multiple apps using React Native.
            Along the way, I taught myself coding, design, and system
            architecture. I have a strong background in web development,
            low-level programming languages, and machine learning.
          </p>

          <p>
            I like to learn about different empires, philosophers and Romans.
            <br /> Reach out if you want to chat, you can usually find me on
            Twitter.
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Full Stack Projects</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {greatWorkExp.map((work, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border rounded-lg"
              >
                <AccordionTrigger className="hover:no-underline px-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                    >
                      {work.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="font-semibold">{work.company}</div>
                      {work.role && (
                        <div className="text-sm text-gray-500">{work.role}</div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="pl-14">
                    <p className="text-gray-600">{work.shortdesc}</p>
                    <br />
                    <p className="text-gray-600">{work.desc}</p>
                  </div>
                  <div className="flex justify-between flex-row">
                    <div className="pl-14">
                      <br />
                      {work.sourceCode === "" ? null : (
                        <Link
                          href={work.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-white hover:bg-slate-800 bg-black p-3 rounded-md">
                            <p>Source Code</p>
                          </button>
                        </Link>
                      )}
                    </div>
                    <div className="pl-14">
                      <br />
                      {work.webLink === "" ? null : (
                        <Link
                          href={work.webLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-white bg-[#1F305E] hover:bg-[#003262] p-3 rounded-md">
                            <p>Website</p>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h2 className="text-xl font-semibold mb-4 mt-10">
            Frontend Projects
          </h2>
          {workExperience.map((work, index) => (
            <div key={index} className="border rounded-lg p-3 mb-2">
              <Link
                href={work.webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                  >
                    {work.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="font-semibold">{work.company}</div>
                    {work.role && (
                      <div className="text-sm text-gray-500">{work.role}</div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
