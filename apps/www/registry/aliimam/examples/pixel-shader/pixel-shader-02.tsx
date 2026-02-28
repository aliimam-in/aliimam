"use client"

import { PixelShader } from "@/registry/aliimam/components/pixel-shader"

export default function PixelShaderDemo() {
    return (
        <div className="relative h-full w-full border overflow-hidden">
            <PixelShader
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
