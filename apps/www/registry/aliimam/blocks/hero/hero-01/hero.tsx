"use client"

import Link from "next/link"

import { Button } from "@/registry/aliimam/ui/button"

export default function HeroSection01() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <div className="relative min-h-screen w-full">
          <div
            className="absolute inset-0 z-0 opacity-15 dark:opacity-30"
            style={{
              backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage: `
              repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
            `,
              WebkitMaskImage: `
              repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
             `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, transparent 40%, var(--primary) 100%)",
            }}
          />
        </div>
      </div>
      <div className="container flex flex-col text-center">
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
