import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  greatWorkExp,
  vibeCoded,
  workExperience,
} from "@/constants/workExperience";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-7">
      <div className="space-y-6">
        <div>
          <Tabs
            orientation="vertical"
            defaultValue="fullstack"
            className="w-full flex flex-row gap-6"
          >
            <TabsList
              orientation="vertical"
              className="flex flex-col h-fit bg-transparent p-2 rounded-lg"
            >
              <TabsTrigger
                orientation="vertical"
                value="fullstack"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent"
              >
                Full Stack Projects
              </TabsTrigger>
              <TabsTrigger
                orientation="vertical"
                value="vibes"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent"
              >
                Vibe Coded
              </TabsTrigger>
              <TabsTrigger
                orientation="vertical"
                value="frontend"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent"
              >
                Frontend Projects
              </TabsTrigger>
            </TabsList>

            <div className="flex-1">
              <TabsContent value="fullstack" className="mt-0">
                <Accordion type="single" collapsible className="space-y-2">
                  {greatWorkExp.map((work, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="border border-white/20 rounded-lg"
                    >
                      <AccordionTrigger className="hover:no-underline px-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                          >
                            {work.icon}
                          </div>
                          <div className="flex flex-col items-start">
                            <div className="font-semibold text-white">
                              {work.company}
                            </div>
                            {work.role && (
                              <div className="text-sm text-gray-200">
                                {work.role}
                              </div>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="pl-14">
                          <p className="text-gray-300">{work.shortdesc}</p>
                          <br />
                          <p className="text-gray-300">{work.desc}</p>
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
                                <button className="text-white bg-transparent hover:bg-transparent hover:border-white/60 border-white/20 border p-2 rounded-md">
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
                                <button className="text-white bg-transparent hover:bg-transparent hover:border-white/60 border-white/20 border p-2 rounded-md">
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
              </TabsContent>

              <TabsContent value="vibes" className="mt-0">
                {vibeCoded.map((work, index) => (
                  <div key={index} className="border border-white/20 rounded-lg p-3 mb-2">
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
                            <div className="text-sm text-gray-200">
                              {work.role}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="frontend" className="mt-0">
                {workExperience.map((work, index) => (
                  <div key={index} className="border border-white/20 rounded-lg p-3 mb-2">
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
                            <div className="text-sm text-gray-200">
                              {work.role}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
