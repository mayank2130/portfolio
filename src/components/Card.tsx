"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

type projectProps = {
  title: String;
  description: String;
  sourceLink: String;
  siteLink:String;
};
export function ThreeDCardDemo({ title, description, sourceLink, siteLink }: projectProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[320px] sm:w-[320px] md:w-[400px] lg:w-[26rem] xl:w-[28rem] h-auto rounded-xl p-4 sm:p-5 lg:p-6 border">
        <CardItem
          translateZ="50"
          className="text-base sm:text-lg lg:text-xl font-bold text-neutral-600 dark:text-white tracking-normal"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300 tracking-normal"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10 sm:mt-14 lg:mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={sourceLink}
            target="__blank"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white tracking-normal"
          >
            Source Code →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={siteLink}
            target="__blank"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl tracking-normal bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit Site
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
