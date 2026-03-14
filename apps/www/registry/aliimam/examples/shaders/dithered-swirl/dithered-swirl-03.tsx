"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl
        fg="#ff00ff"
        ac="#00ff00"
        acMix={1} 
        threshold={10/200}
        intensity={0}
        scale={10}
      />
    </div>
  )
}
