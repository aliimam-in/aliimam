"use client"

import Link from "next/link"
import { GrainGradient } from "@paper-design/shaders-react"

import { Button } from "@/registry/aliimam/ui/button"

export default function HeroSection01() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <GrainGradient
          width={1920}
          height={1080}
          colors={["#7300ff", "#eba8ff"]}
          colorBack="#000"
          shape="corners"
          className="hidden dark:block"
        />
        <GrainGradient
          width={1920}
          height={1080}
          colors={["#7300ff", "#eba8ff"]}
          colorBack="#fff"
          shape="corners"
          className="block dark:hidden"
        />
      </div>
      <div className="flex flex-col text-center">
        <img
          src="/ai-logo.png"
          alt="Your Image"
          height={50}
          width={50}
          className="z-40 h-30 w-full object-contain"
        />
        <h2 className="z-10 pt-10 text-7xl font-extrabold tracking-tighter md:text-7xl lg:text-9xl">
          Design <br /> without Limits
        </h2>
        <div className="z-10 flex flex-col items-center justify-center space-y-6 px-6 pt-20 text-center">
          <p className="w-full max-w-lg text-sm font-light md:text-xl">
            I create digital experiences that connect and inspire. I build apps,
            websites, brands, and products end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link target="_blank" href="https://cal.com/aliimam-in/30min">
              <Button className="h-12 cursor-pointer px-8 md:h-14 md:px-10">
                Book an Intro Call
              </Button>
            </Link>
            <Button
              variant={"secondary"}
              className="h-12 cursor-pointer px-8 md:h-14 md:px-10"
            >
              Get Started Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
