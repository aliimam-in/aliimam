"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl 
        spread={0.3}
        fg="#0022ff"
        scale={3}
        threshold={0.3}
      />
    </div>
  )
}
