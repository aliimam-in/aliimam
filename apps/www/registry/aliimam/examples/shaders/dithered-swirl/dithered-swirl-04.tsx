"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl
  fg="#00ffff"
  ac="#ff00ff"
  acMix={0.6}
  acMode="pattern"
  pixelSize={4}
/>
    </div>
  )
}
