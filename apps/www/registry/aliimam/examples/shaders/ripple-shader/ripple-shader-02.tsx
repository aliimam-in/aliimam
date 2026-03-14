"use client"

import { RippleShader } from "@/registry/aliimam/components/shaders/ripple-shader"

export default function RippleShaderDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <RippleShader
        pixelSize={1}
        speed={1}
        waveFrequency={10}
        threshold={0.7}
        grainAmount={0.3}
        gridOpacity={0.5}
        cursorRadius={0.25}
        cursorPush={0.08}
        color="#0000ff"
      />
    </div>
  )
}
