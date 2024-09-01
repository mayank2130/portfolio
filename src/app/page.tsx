import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import LampDemo from "@/components/ui/lamp";

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
      <div id="lamp-demo">
        <LampDemo />
      </div>
    </>
  );
}
