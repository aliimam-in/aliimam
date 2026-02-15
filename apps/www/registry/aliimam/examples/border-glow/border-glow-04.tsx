import { BorderGlow } from "@/registry/aliimam/components/border-glow"

export default function BorderGlowExample() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3">
      <BorderGlow height="300px" gradientType="radial" colorPreset="cyberpunk">
        <div className="flex h-full items-center justify-center">
          Radial Type
        </div>
      </BorderGlow>
      <BorderGlow height="300px" blurAmount="3rem">
        <div className="flex h-full items-center justify-center">Full Glow</div>
      </BorderGlow>
      <BorderGlow height="300px" rotationDirection="reverse">
        <div className="flex h-full items-center justify-center">
          Reverse Rotation
        </div>
      </BorderGlow>
    </div>
  )
}
