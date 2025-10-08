"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button" 

export function Hero() {
  return (
    <div className="px-6">
      <div className="w-full max-w-3xl border border-black/20 p-0 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]">
        <div className="p-1">
          <main className="relative overflow-hidden rounded-md border border-white/20 bg-black/20 py-10 shadow-2xl backdrop-blur-md">
            <h1 className="mb-3 px-6 text-center text-5xl font-extrabold tracking-tighter text-white md:text-[clamp(2rem,8vw,7rem)]">
              Design is <span className="text-primary">Everything</span>
            </h1>
            <p className="lg:text-md px-6 text-center text-xs text-white/60 md:text-sm">
              Unleashing creativity through bold visuals and limitless
              possibilities.
            </p>
            <div className="my-8 flex items-center justify-center gap-1">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500">
                Available for New Projects
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant={"outline"}
                className="cursor-pointer border border-white/20 bg-white/10 text-white hover:bg-white/10 hover:text-white"
                size={"lg"}
              >
                Let&apos;s Go
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
