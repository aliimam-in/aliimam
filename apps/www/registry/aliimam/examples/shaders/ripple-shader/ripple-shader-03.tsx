"use client"

import { RippleShader } from "@/registry/aliimam/components/shaders/ripple-shader"

export default function RippleShaderDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <RippleShader
        pixelSize={5}
        waveFrequency={100}
        speed={0.3}
        threshold={1}
        grainAmount={0.04}
        gridOpacity={0.8}
        cursorPush={0.2}
        color="orange"
      />
    </div>
  )
}
