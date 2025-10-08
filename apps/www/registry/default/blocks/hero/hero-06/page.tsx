"use client"

import { Hero } from "@/registry/default/blocks/hero/hero-06/components/hero"
import { RenderCanvas } from "@/registry/default/components/render-canvas"

export default function Page() {
  return (
    <div className="relative min-h-svh w-full overflow-y-auto">
      <RenderCanvas
        lineWidth={20}
        trails={100}
        width={1400}
        height={920}
        className="absolute inset-0"
      />

      <div className="relative z-40 flex min-h-svh items-center justify-center">
        <Hero />
      </div>
    </div>
  )
}
