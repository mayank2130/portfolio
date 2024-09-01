import React from "react";
import { GlobeDemo } from "../Globe";

const About = () => {
  return (
    <>
      <div className="pb-0 pl-16 pt-32">
        <h2 className="text-2xl flex flex-col items-start relative z-20 md:text-4xl lg:text-7xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
          Who am I ?
        </h2>
      </div>
      <div className="p-32 pt-0 pb-0">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full md:w-1/2 space-y-6">
            <h4 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black dark:text-white font-sans tracking-tight">
              I am someone:
            </h4>
            <div className="space-y-4 ml-10">
              <h5 className="text-lg md:text-xl lg:text-2xl font-light text-black dark:text-white font-sans tracking-normal">
                who&apos;s interested to know why are you reading this? Anyways,
              </h5>
              <h5 className="text-lg md:text-xl lg:text-2xl font-light text-black dark:text-white font-sans tracking-normal">
                who has extensive experience with MERN stack and Next JS.
              </h5>
              <h5 className="text-lg md:text-xl lg:text-2xl font-light text-black dark:text-white font-sans tracking-normal">
                who has worked with low level languages like Rust and Golang.
              </h5>
              <h5 className="text-lg md:text-xl lg:text-2xl font-light text-black dark:text-white font-sans tracking-normal">
                who has built both Web and React Native applications.
              </h5>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <GlobeDemo />
          </div>
        </div>
        <div className="m-32">
          <h2 className="text-xl flex flex-col items-start relative z-20 md:text-3xl lg:text-6xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
            Anyways, Here&apos;s a globe for you -----
          </h2>
        </div>

        <div className="pt-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* {technologies.map((data) => (
          <SkillsCard name={data.name} icon={data.icon} />
        ))} */}
        </div>
      </div>
    </>
  );
};

export default About;
