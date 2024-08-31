import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center h-screen">
        <Projects />
      </div>
    </>
  );
}
