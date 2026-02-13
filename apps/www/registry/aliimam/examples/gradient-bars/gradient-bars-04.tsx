"use client"

import { GradientBars } from "@/registry/aliimam/components/gradient-bars"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GradientBars
        numBars={40}
        minScale={0.1}
        maxScale={1}
        colors={["#00ff00", "transparent"]}
      />
    </div>
  )
}
