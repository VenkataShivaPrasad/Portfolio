"use client"

import { SparklesCore } from "@/app/components/ui/sparkles";
import { TypewriterEffect } from "@/app/components/ui/typewriter-effect";

export default function Home() {

  const words = [
    {
      text: "Venkata",
    },
    {
      text: "Shiva",
    },
    {
      text: "Prasad",
    },
    {
      text: "Nannuri",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div id="home" className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffect words={words} className="max-sm:text-[40px] sm:text-[38px]  max-sm:leading-10"/>
      </h1>
      <h2 className="
       text-slate-400 mt-5 text-xl max-sm:text-[20px] 
      ">WEB DEVELOPER</h2>
    </div>

  );
}
