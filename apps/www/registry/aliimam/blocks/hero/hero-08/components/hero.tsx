"use client"

import Link from "next/link"

import { Button } from "@/registry/aliimam/ui/button"

export function Hero() {
  return (
    <div className="bg-background/20 relative z-20 mx-4 mt-20 flex flex-col items-center rounded-md border py-20 shadow-2xl backdrop-blur-md md:p-10">
      <main className="relative flex w-full flex-col justify-center overflow-hidden p-10">
        <h1 className="mb-3 text-center text-6xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
          Designs
          <br />
          That Give
        </h1>
        <p className="text-muted-foreground px-6 text-center text-xs md:text-sm lg:text-lg">
          Unleashing creativity through bold visuals, seamless interfaces, and
          limitless possibilities.
        </p>
        <div className="my-8 flex items-center justify-center gap-1">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-xs text-green-500">Available for New Projects</p>
        </div>
        <Link className="flex flex-col justify-center pt-4" href={"/"}>
          <Button size={"xl"}>Let&apos;s Go</Button>
        </Link>
      </main>
    </div>
  )
}
