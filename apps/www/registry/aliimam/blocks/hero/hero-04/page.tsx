/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Oswald } from "next/font/google"
import { ArrowDownRight } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

const myFont = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function HeroSection04() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20">
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="relative">
          <p className="absolute -top-4 left-20 text-sm font-medium tracking-wider">
            1,996
          </p>
          <h1
            className={`${myFont.className} text-primary relative z-20 text-center text-7xl font-bold tracking-[-7px] md:text-9xl md:tracking-[-14px] xl:text-[10rem] xl:tracking-[-1rem]`}
          >
            CREATIVE DESIGNER
          </h1>
          <p className="absolute right-24 -bottom-12 hidden text-4xl font-thin tracking-[6px] xl:block">
            ALI IMAM
          </p>
          <p className="absolute -bottom-12 left-24 text-4xl font-thin tracking-[6px] xl:hidden">
            ALI IMAM
          </p>
        </div>

        <div className="relative grid">
          <div className="flex justify-center gap-6 space-y-8 pt-20">
            <div className="bg-secondary flex h-fit w-full max-w-xl items-end gap-6 space-y-2 p-10 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="text-xl font-semibold">
                <div>/ ART DIRECTION</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ WEB DEVELOPMENT</div>
              </div>
              <div className="bg-secondary absolute -top-10 left-1/2 hidden w-fit overflow-hidden md:flex">
                <img
                  src="/ai.jpg"
                  alt="Designer portrait"
                  className="h-100 w-full object-contain grayscale"
                />
                <div className="rotate-180 p-2 text-left text-xs font-medium tracking-widest [writing-mode:vertical-rl]">
                  BASED IN BOKARO STEEL CITY
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary -top-10 left-1/2 flex w-full overflow-hidden md:hidden md:w-fit">
            <img
              src="/ai.jpg"
              alt="Designer portrait"
              className="h-100 w-full object-contain grayscale"
            />
            <div className="rotate-180 p-2 text-left text-xs font-medium tracking-widest [writing-mode:vertical-rl]">
              BASED IN BOKARO STEEL CITY
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-40">
          <p className="mx-auto max-w-2xl text-center font-mono text-sm font-medium tracking-wide md:text-base">
            I&apos;M EXPERIENCED WEB AND UX/UI DESIGNER,
            <br />
            WHO DESIGN MEMORABLE WEB EXPERIENCES FOR
            <br />
            BRANDS OF ALL SIZES
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <Button size={"lg"}>Book a call</Button>
        </div>

        <div className="mt-20 items-end justify-between md:flex">
          <div className="relative">
            <div className="mb-8 h-36 w-60 overflow-hidden rounded-md border shadow-lg md:mb-0">
              <img
                src="/r/hero-01-light.png"
                alt="Portfolio"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 left-6 mb-8 h-36 w-60 overflow-hidden rounded-md border shadow-lg md:mb-0">
              <img
                src="/r/hero-02-light.png"
                alt="Portfolio"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-12 left-12 mb-8 h-36 w-60 overflow-hidden rounded-md border shadow-lg md:mb-0">
              <img
                src="/r/hero-03-light.png"
                alt="Portfolio"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 md:justify-end">
              <span className="text-lg font-medium tracking-wider">
                RECENT WORK
              </span>
              <ArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2
                className={`${myFont.className} text-5xl tracking-[-4px] uppercase`}
              >
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
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
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
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
    </section>
  )
}
