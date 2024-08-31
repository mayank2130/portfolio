import { Hero } from "@/components/Hero";
import LampDemo from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center h-screen">
        <LampDemo />
      </div>
    </>
  );
}
