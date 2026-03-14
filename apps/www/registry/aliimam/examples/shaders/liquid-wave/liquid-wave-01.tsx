"use client"

import { LiquidWave } from "@/registry/aliimam/components/shaders/liquid-wave"

export default function LiquidWaveDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <LiquidWave />
    </div>
  )
}
