import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex h-screen flex-col">
        <h2 className="mt-40 text-2xl flex flex-col items-start relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Hi, I&apos;m Mayank{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">I make web & mobile applications.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">I make web & mobile applications.</span>
            </div>
          </div>
        </h2>
        <div className="flex items-center justify-center h-screen">
          <Image alt="desk" height={720} width={720} src="/desk2.png" />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
