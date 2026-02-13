import React from "react"
import { BadgeQuestionMark } from "@aliimam/icons"
import { Instagram, Threads, X } from "@aliimam/logos"

import { Separator } from "@/registry/aliimam/ui/separator"

export default function HeroSection03() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute z-0 h-full w-full bg-[radial-gradient(circle,_black_1px,_transparent_1px)] [background-size:20px_20px] opacity-15 dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)]" />
      <header className="flex items-center justify-between px-8 pt-6">
        <div className="text-2xl font-bold italic">aliimam.in</div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a
            href="#"
            className="font-semibold transition-opacity hover:opacity-60"
          >
            Index
          </a>
          <a
            href="#"
            className="text-gray-400 transition-opacity hover:opacity-60"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 transition-opacity hover:opacity-60"
          >
            Work
          </a>
          <a
            href="#"
            className="text-gray-400 transition-opacity hover:opacity-60"
          >
            Archive
          </a>
          <a
            href="#"
            className="text-gray-400 transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="relative pt-20 pb-20">
        <div className="relative flex w-full flex-col justify-center gap-2 px-6 md:items-center">
          <div className="items-center gap-6 md:flex">
            <p className="text-muted-foreground max-w-[220px] text-start text-xs leading-5 md:max-w-[180px] md:text-right md:text-sm">
              I am india digital product designer based in Bokaro Steel City,
              India.
            </p>
            <h1 className="text-6xl leading-none font-light tracking-wider md:text-7xl xl:text-[10rem]">
              DIGITAL
            </h1>
          </div>

          <div className="items-center gap-6 md:flex">
            <h1 className="flex text-6xl leading-none font-light tracking-wider md:text-7xl xl:text-[10rem]">
              <span>PR</span>
              <BadgeQuestionMark
                type="solid"
                className="text-primary size-14 md:size-18 lg:size-40"
              />
              <span>DUCTS</span>
            </h1>
            <p className="text-muted-foreground max-w-[250px] pt-8 text-xs leading-5 md:max-w-[180px] md:text-sm">
              Open to all forms of design collaboration, regardless of location
              and language.
            </p>
          </div>

          <div className="items-center gap-6 md:flex">
            <h1 className="text-6xl leading-none font-light tracking-wider md:flex md:text-7xl xl:text-[10rem]">
              <span>DESIGN</span>
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <div className="block lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <span>CODE</span>
            </h1>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl gap-3 px-6">
          <div className="grid items-center gap-3 md:mx-8 md:flex md:justify-end">
            <Separator className="mx-auto my-6 w-full max-w-3xl" />
            <div className="text-xs whitespace-nowrap md:text-sm">
              BOKARO STEEL CITY, INDIA 827010
            </div>
            <div className="flex w-full items-end gap-3">
              <span className="text-2xl font-thin md:text-4xl">DESIGNER</span>
              <span className="text-3xl font-bold text-orange-600 italic md:text-5xl">
                ali
              </span>
            </div>
          </div>
        </div>

        <div className="items-end gap-6 px-6 pt-12 md:flex md:px-20">
          <div className="mb-8 h-48 w-84 overflow-hidden rounded-md border shadow-lg md:mb-0">
            <img
              src="/r/hero-01-light.png"
              alt="Portfolio"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-muted-foreground pt-8 text-xs leading-5 md:text-sm">
            Open to all forms of design collaboration, regardless of location
            and language.
          </p>
        </div>

        <div className="absolute right-8 bottom-8 flex gap-6 md:right-12">
          <Instagram />
          <X />
          <Threads />
        </div>

        <div className="fixed top-1/2 right-0 flex h-36 -translate-y-1/2 transform items-center">
          <div className="bg-foreground text-background px-3 py-6 text-sm font-bold">
            <span className="rotate-180 [writing-mode:vertical-rl]">
              Design Award
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
