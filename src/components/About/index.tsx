import React from "react";

const About = () => {
  return (
    <div className="p-32">
      <h2 className="text-2xl flex flex-col items-start relative z-20 md:text-4xl lg:text-7xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
        Who am I ?
      </h2>
      <div className="m-32">
        <h4 className="text-xl flex flex-col items-start md:text-3xl lg:text-5xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
          I am someone :
        </h4>
        <h5 className="ml-10 mt-10 text-lg flex flex-col items-start md:text-xl lg:text-2xl font-light text-center text-black dark:text-white font-sans tracking-normal">
          who&apos;s interested to know why are you reading this? Anyways,
        </h5>
        <h5 className="ml-10 mt-2 text-lg flex flex-col items-start md:text-xl lg:text-2xl font-light text-center text-black dark:text-white font-sans tracking-normal">
          who has extensive experience with MERN stack and Next JS.
        </h5>
        <h5 className="ml-10 mt-2 text-lg flex flex-col items-start md:text-xl lg:text-2xl font-light text-center text-black dark:text-white font-sans tracking-normal">
          who has worked with low level languages like Rust and Golang.
        </h5>
        <h5 className="ml-10 mt-2 text-lg flex flex-col items-start md:text-xl lg:text-2xl font-light text-center text-black dark:text-white font-sans tracking-normal">
          who has built both Web and React Native applications.
        </h5>
      </div>
      <div className="m-32">
        <h2 className="text-xl flex flex-col items-start relative z-20 md:text-3xl lg:text-6xl font-semibold text-center text-black dark:text-white font-sans tracking-tight">
          Anyways, Here's a globe for you ------
        </h2>
      </div>
      <div className="pt-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* {technologies.map((data) => (
          <SkillsCard name={data.name} icon={data.icon} />
        ))} */}
      </div>
    </div>
  );
};

export default About;
