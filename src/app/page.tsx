import Skills from "@/components/Skills";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import LampDemo from "@/components/ui/lamp";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div className="" id="about">
        <About />
      </div>
      <div className="" id="tech">
        <Skills />
      </div>
      <div id="projects">
        <LampDemo />
      </div>
    </>
  );
}
