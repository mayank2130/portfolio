import React from "react";
import { Mail, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { workExperience } from "@/constants/workExperience";

const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Mayank Thakur</h1>
          <div className="flex items-center text-gray-600">
            {/* <div className="flex items-center gap-2">San Francisco, CA</div> */}
          </div>

          {/* Social Links */}
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
        </div>

        {/* Bio Sections */}
        <div className="space-y-4 text-gray-600">
          <p>
            I'm currently building FavProf, an AI professor that teaches
            anything you want, starting with biology.
          </p>

          <p>
            I've independently developed multiple apps using React Native as a
            freelance developer. Along the way, I taught myself coding, design,
            and system architecture. I have a strong background in web
            development, low-level programming languages, and machine learning.
          </p>

          <p>
            I like to learn about different empires, philosophers and Romans.
            <br /> Reach out if you want to chat, you can usually find me on
            Twitter.
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Work</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {workExperience.map((work, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
