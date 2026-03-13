"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl
  fg="#ffffff"
  ac="#ff00ff"
  pixelSize={3}
  twist={10}
  speed={1.2}
  scale={12}
  acMix={0.5}
  acMode="blend"
/>
    </div>
  )
}
