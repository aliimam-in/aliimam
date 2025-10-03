/* eslint-disable @next/next/no-img-element */
"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";
import { Button } from "@/registry/default/ui/button";
import { ClaudeAI, Cursor, Github, Google, Grok, OpenAI } from "@aliimam/logos";
import { Marquee } from "@/registry/default/components/marquee";

const technologies = [
  {
    name: "Figma",
    designation: "UI/UX Design Tool",
    description: "Collaborative interface design and prototyping platform",
    logo: "/ali.jpg",
    icon: <Github className="h-6 w-6 text-black" />,
  },
  {
    name: "Adobe XD",
    designation: "Design & Prototyping",
    description: "Create wireframes, prototypes, and screen designs quickly",
    logo: "/ali.jpg",
    icon: <OpenAI className="h-6 w-6 text-black" />,
  },
  {
    name: "Sketch",
    designation: "Vector Design Tool",
    description: "Professional digital design for macOS",
    logo: "/ali.jpg",
    icon: <Cursor className="h-6 w-6 text-black" />,
  },
  {
    name: "Canva",
    designation: "Graphic Design Platform",
    description:
      "Easily create social media posts, presentations, and graphics",
    logo: "/ali.jpg",
    icon: <Google className="h-6 w-6 text-black" />,
  },
];

export default function HeroSection() {
  return (
    <div className="bg-background min-h-screen relative">
      <div className=" overflow-hidden flex flex-col px-6 items-center justify-center">
        <GradientWave className="absolute inset-0 opacity-30 dark:opacity-20" /> 
        <div className="flex w-full absolute z-20 top-4 px-4 justify-between">
          <div>
            <img
              src="/ai-logo.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="h-10 w-full object-contain"
            />
          </div>
          <Button className="rounded-full">Explore Designs</Button>
        </div>

        <div className="z-10 mt-40 my-20 space-y-10 border shadow-2xl backdrop-blur-sm rounded-xl p-10 lg:p-20 mx-auto max-w-7xl flex flex-col">
          <div className="flex justify-center flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <h1 className="text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-8xl text-center">
              Design Code
            </h1>
            <p className="max-w-md text-sm text-center lg:text-left">
              Discover top-notch design tools and resources that help you craft
              stunning interfaces and graphics. Learn and create with the best
              in the design industry.
            </p>
          </div>

          {/* Logos Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex justify-center flex-wrap -space-y-4 -space-x-6">
              <OpenAI
                className="bg-white border text-black shadow-2xl h-20 w-20 rounded-full p-5"
                size={20}
                height={25}
              />
              <ClaudeAI
                className="bg-white border shadow-2xl h-20 w-20 rounded-full p-5"
                size={20}
                height={24}
              />
              <Cursor
                className="bg-white hidden md:block h-20 w-20 text-black border shadow-2xl rounded-full p-5"
                size={20}
                height={16}
              />
              <Github
                className="bg-white h-20 border text-black shadow-2xl w-20 rounded-full p-5"
                size={20}
                height={20}
              />
              <Grok
                className="bg-white hidden md:block h-20 w-20 text-black border shadow-2xl rounded-full p-5"
                size={20}
                height={30}
              />
              <Google
                className="bg-white h-20 w-20 border shadow-2xl rounded-full p-5"
                size={20}
                height={30}
              />
            </div>
            <h1 className="text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-8xl text-center">
              Creative Tools
            </h1>
          </div>
 
          <div className="flex flex-col lg:flex-row lg:items-end gap-10">
            <h1 className="underline font-medium text-3xl mix-blend-overlay md:text-5xl lg:text-8xl text-center">
              Learn & Create
            </h1>
            <Button className="px-20 h-20 rounded-full">Explore Designs</Button>
          </div>
        </div>

       
      </div>
       <div className=" w-full z-10 relative flex flex-col items-center">
          <p className="text-center text-muted-foreground mb-10 text-lg z-10 relative">
            Some of the top design tools used by professionals
          </p>
          <Marquee className="w-full">
            {technologies.map((tech, index) => (
              <div key={index} className="h-full">
                <div className="flex items-center gap-3 h-full overflow-visible border backdrop-blur-md rounded-xl mx-10 min-w-[220px]">
                  <div className="absolute bg-white border-r -z-50 p-3 rounded-l-md -left-12.5 top-6">
                    {tech.icon}
                  </div>
                  <div className="flex flex-col px-4 py-3 flex-1">
                    <h3 className="font-semibold text-md">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.designation}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {tech.description}
                    </p>
                  </div>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-full w-24 object-cover rounded-r-xl"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
    </div>
  );
}
