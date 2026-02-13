"use client"

import { GradientBars } from "@/registry/aliimam/components/gradient-bars"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GradientBars colors={["#6366f1", "#22d3ee", "transparent"]} />
    </div>
  )
}
