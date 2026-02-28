"use client"

import { PixelShader } from "@/registry/aliimam/components/pixel-shader"

export default function PixelShaderDemo() {
    return (
        <div className="relative border h-full w-full overflow-hidden">      
        <PixelShader 
            pixelSize={0.5}
            speed={1.2}
            waveFrequency={2}
            threshold={0.9}
            grainAmount={0.2}
            gridOpacity={0.4}
            cursorRadius={1}
            cursorPush={0.8}
            color="purple"
            />
        </div>
    )
}
