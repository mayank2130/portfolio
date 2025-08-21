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
    <div className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-7">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <Tabs
            defaultValue="fullstack"
            className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6"
          >
            {/* Mobile Horizontal Tabs */}
            <TabsList className="grid w-full grid-cols-3 mb-4 bg-transparent gap-1 lg:hidden">
              <TabsTrigger
                value="fullstack"
                className="text-xs sm:text-sm font-semibold hover:border-white/60 border-white/20 border-b-2 justify-center px-2 sm:px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
              >
                Full Stack
              </TabsTrigger>
              <TabsTrigger
                value="vibes"
                className="text-xs sm:text-sm font-semibold hover:border-white/60 border-white/20 border-b-2 justify-center px-2 sm:px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
              >
                Vibe Coded
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="text-xs sm:text-sm font-semibold hover:border-white/60 border-white/20 border-b-2 justify-center px-2 sm:px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
              >
                Frontend
              </TabsTrigger>
            </TabsList>

            {/* Desktop Vertical Tabs */}
            <TabsList className="hidden lg:flex flex-col h-fit bg-transparent p-2 rounded-lg w-64">
              <TabsTrigger
                value="fullstack"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
              >
                Full Stack Projects
              </TabsTrigger>
              <TabsTrigger
                value="vibes"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
              >
                Vibe Coded
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="text-base font-semibold hover:border-white/60 border-white/20 border-b-2 w-full justify-start px-4 py-2 bg-transparent data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-white"
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
                      <AccordionTrigger className="hover:no-underline px-3 sm:px-4 py-2">
                        <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                          <div
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium text-sm sm:text-base flex-shrink-0`}
                          >
                            {work.icon}
                          </div>
                          <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
                            <div className="font-semibold text-white text-sm sm:text-base truncate w-full">
                              {work.company}
                            </div>
                            {work.role && (
                              <div className="text-xs sm:text-sm text-gray-200 break-words w-full">
                                {work.role}
                              </div>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 sm:px-4 pb-4 overflow-hidden">
                        <div className="space-y-6">
                          <div className="space-y-2 mt-3">
                            <p className="text-gray-300 text-sm sm:text-base mt-2 break-words">
                              {work.shortdesc}
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base break-words">
                              {work.desc}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {work.sourceCode !== "" && (
                              <Link
                                href={work.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial"
                              >
                                <button className="text-white bg-transparent hover:bg-transparent hover:border-white/60 border-white/20 border p-2 rounded-md text-sm sm:text-sm w-full">
                                  Source Code
                                </button>
                              </Link>
                            )}
                            {work.webLink !== "" && (
                              <Link
                                href={work.webLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial"
                              >
                                <button className="text-white bg-transparent hover:bg-transparent hover:border-white/60 border-white/20 border p-2 rounded-md text-sm sm:text-sm w-full">
                                  Website
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
                <div className="space-y-2">
                  {vibeCoded.map((work, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-lg p-3 overflow-hidden"
                    >
                      <Link
                        href={work.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium text-sm sm:text-base flex-shrink-0`}
                          >
                            {work.icon}
                          </div>
                          <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
                            <div className="font-semibold text-sm sm:text-base truncate w-full">
                              {work.company}
                            </div>
                            {work.role && (
                              <div className="text-xs sm:text-sm text-gray-200 truncate w-full">
                                {work.role}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="frontend" className="mt-0">
                <div className="space-y-2">
                  {workExperience.map((work, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-lg p-3 overflow-hidden"
                    >
                      <Link
                        href={work.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium text-sm sm:text-base flex-shrink-0`}
                          >
                            {work.icon}
                          </div>
                          <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
                            <div className="font-semibold text-sm sm:text-base truncate w-full">
                              {work.company}
                            </div>
                            {work.role && (
                              <div className="text-xs sm:text-sm text-gray-200 truncate w-full">
                                {work.role}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
