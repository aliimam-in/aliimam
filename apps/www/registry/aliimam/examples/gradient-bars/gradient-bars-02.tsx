"use client"

import { GradientBars } from "@/registry/aliimam/components/gradient-bars"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GradientBars
        orientation="horizontal"
        colors={["#ff0000", "transparent"]}
      />
      <GradientBars
        orientation="horizontal"
        colors={["#ff0000", "transparent"]}
        className="rotate-180"
      />
    </div>
  )
}
