import React from "react";
import { SkillsCard } from "../SkillsCard";
import { technologies } from "@/constants/skills";

const Skills = () => {
  return (
    <div className="pt-16 p-32">
      <h2 className="text-2xl flex flex-col items-start relative z-20 md:text-4xl lg:text-7xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
        What do I know ?
      </h2>
      <div className="pt-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((data) => (
          <SkillsCard key={data.name} name={data.name} icon={data.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
