import React from "react";
import { ThreeDCardDemo } from "../Card";
import { Lamp } from "../Lamp";

export const Projects = () => {
  return (
    <div className="flex flex-col mt-96">
      <Lamp />
      {/* <div className="gap-6 flex-row flex">
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div> */}
    </div>
  );
};
