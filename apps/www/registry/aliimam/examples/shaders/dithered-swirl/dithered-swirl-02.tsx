"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl
        width={600}
        height={600}
        fg="#ff0000"
        intensity={50}
        scale={5}
      />
    </div>
  )
}
