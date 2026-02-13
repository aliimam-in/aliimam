/* eslint-disable @next/next/no-img-element */
"use client"

import { ClaudeAI, Cursor, Github, Google, Grok, OpenAI } from "@aliimam/logos"
import { Dithering } from "@paper-design/shaders-react"

import { Marquee } from "@/registry/aliimam/components/marquee"
import { Button } from "@/registry/aliimam/ui/button"

const technologies = [
  {
    name: "Figma",
    designation: "UI/UX Design Tool",
    description: "Collaborative interface design.",
    logo: "/r/hero-01-light.png",
    icon: <Github className="h-6 w-6 text-black" />,
  },
  {
    name: "Adobe XD",
    designation: "Design & Prototyping",
    description: "Create wireframes, prototypes.",
    logo: "/r/hero-05-light.png",
    icon: <OpenAI className="h-6 w-6 text-black" />,
  },
  {
    name: "Sketch",
    designation: "Vector Design Tool",
    description: "Professional digital design for macOS",
    logo: "/r/hero-03-light.png",
    icon: <Cursor className="h-6 w-6 text-black" />,
  },
  {
    name: "Canva",
    designation: "Graphic Design Platform",
    description: "Easily create social media posts.",
    logo: "/r/hero-04-light.png",
    icon: <Google className="h-6 w-6 text-black" />,
  },
]

export default function HeroSection02() {
  return (
    <div className="relative overflow-auto pb-10">
      <div className="absolute h-full w-full overflow-hidden opacity-20">
        <Dithering
          width={1920}
          height={1080}
          colorBack="#000"
          colorFront="#fff"
          shape="warp"
          type="4x4"
          size={1}
          speed={1}
          className="hidden dark:block"
        />
        <Dithering
          width={1920}
          height={1080}
          colorBack="#fff"
          colorFront="#000"
          shape="warp"
          type="4x4"
          size={1}
          speed={1}
          className="dark:hidden"
        />
      </div>
      <div className="flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute top-4 z-20 flex w-full justify-between px-4">
          <div>
            <img
              src="/ai-logo.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="h-10 w-full object-contain"
            />
          </div>
          <Button>Book a Call</Button>
        </div>

        <div className="z-10 mx-auto my-20 mt-28 flex max-w-7xl flex-col space-y-10 rounded-xl border p-10 shadow-2xl backdrop-blur-sm lg:p-20">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
            <h1 className="text-center text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-7xl">
              Design Code
            </h1>
            <p className="max-w-md text-center text-sm lg:text-left">
              Discover top-notch design tools and resources that help you craft
              stunning interfaces and graphics. Learn and create with the best
              in the design industry.
            </p>
          </div>

          {/* Logos Row */}
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex flex-wrap justify-center -space-y-4 -space-x-6">
              <OpenAI
                className="h-20 w-20 rounded-full border bg-white p-5 text-black shadow-2xl"
                size={20}
                height={25}
              />
              <ClaudeAI
                className="h-20 w-20 rounded-full border bg-white p-5 shadow-2xl"
                size={20}
                height={24}
              />
              <Cursor
                className="hidden h-20 w-20 rounded-full border bg-white p-5 text-black shadow-2xl md:block"
                size={20}
                height={16}
              />
              <Github
                className="h-20 w-20 rounded-full border bg-white p-5 text-black shadow-2xl"
                size={20}
                height={20}
              />
              <Grok
                className="hidden h-20 w-20 rounded-full border bg-white p-5 text-black shadow-2xl md:block"
                size={20}
                height={30}
              />
              <Google
                className="h-20 w-20 rounded-full border bg-white p-5 shadow-2xl"
                size={20}
                height={30}
              />
            </div>
            <h1 className="text-center text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-7xl">
              Creative Tools
            </h1>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
            <h1 className="text-center text-3xl font-medium underline mix-blend-overlay md:text-5xl lg:text-7xl">
              Learn & Create
            </h1>
            <Button className="h-20 rounded-full px-20">Explore Designs</Button>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center">
        <p className="text-muted-foreground relative z-10 mb-10 text-center text-lg">
          Some of the top design tools used by professionals
        </p>
        <Marquee className="w-full">
          {technologies.map((tech, index) => (
            <div key={index} className="h-full">
              <div className="mx-10 flex h-full min-w-[220px] items-center gap-3 overflow-visible rounded-md border backdrop-blur-md">
                <div className="absolute top-6 -left-12.5 -z-50 rounded-l-sm border-r bg-white p-3">
                  {tech.icon}
                </div>
                <div className="flex flex-1 flex-col px-4 py-3">
                  <h3 className="text-md font-semibold">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {tech.designation}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {tech.description}
                  </p>
                </div>
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-full w-38 rounded-r-md object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
