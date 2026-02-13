"use client"

import { DotPattern } from "@/registry/aliimam/components/dot-pattern"

export default function Quote() {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="relative flex flex-col items-center rounded-md border border-red-500">
        <DotPattern dotSize={0.5} width={5} height={5} />

        <div className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-md bg-red-500 text-white" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-md bg-red-500 text-white" />
        <div className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-md bg-red-500 text-white" />
        <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 rounded-md bg-red-500 text-white" />

        <div className="relative p-10 md:py-20">
          <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-2xl">
            I believe
          </p>
          <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
            <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <h1 className="font-semibold">&quot;Design should be</h1>
              <p className="font-thin">easy to</p>
            </div>
            <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <p className="font-thin">understand</p>
              <h1 className="font-semibold">because</h1>
              <p className="font-thin">simple</p>
            </div>
            <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <p className="font-thin">ideas</p>
              <h1 className="font-semibold">are quicker to</h1>
            </div>
            <h1 className="font-semibold">grasp...&quot;</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
