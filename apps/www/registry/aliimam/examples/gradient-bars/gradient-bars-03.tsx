"use client"

import { GradientBars } from "@/registry/aliimam/components/gradient-bars"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GradientBars
        animation="wave"
        duration={3}
        colors={["#f97316", "transparent"]}
      />
    </div>
  )
}
