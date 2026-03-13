"use client"

import { DitheredSwirl } from "@/registry/aliimam/components/shaders/dithered-swirl"

export default function DitheredSwirlDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <DitheredSwirl />
    </div>
  )
}
