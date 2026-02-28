"use client"

import { RippleShader } from "@/registry/aliimam/components/ripple-shader"

export default function RippleShaderDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <RippleShader
        pixelSize={10}
        speed={3}
        waveFrequency={1}
        threshold={0.002}
        grainAmount={0.2}
        gridOpacity={0.4}
        cursorRadius={0}
        color="red"
      />
    </div>
  )
}
