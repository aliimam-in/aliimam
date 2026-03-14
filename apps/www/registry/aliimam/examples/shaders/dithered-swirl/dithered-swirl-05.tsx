"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl
        fg="#ff0000"
        ac="#00ff00"
        acMix={0.5}
        acMode="blend"
        intensity={20}
      />
    </div>
  )
}
