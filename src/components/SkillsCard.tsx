import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";

type skillProps = {
  name: String;
  icon: any;
};

export function SkillsCard({ name, icon }: skillProps) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-row justify-start items-center gap-5">
          <Image alt="skills icon" width={40} height={40} src={icon} />
          <Meteors number={20} />
          {name}
        </div>
      </div>
    </div>
  );
}
