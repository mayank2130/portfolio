import React from "react";
import { SkillsCard } from "../SkillsCard";

const About = () => {
  return (
    <div className="p-32">
      <h2 className="text-2xl flex flex-col items-start relative z-20 md:text-4xl lg:text-7xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
        What do I know ?
      </h2>
      <div className="p-44">
      <SkillsCard />
      </div>
    </div>
  );
};

export default About;