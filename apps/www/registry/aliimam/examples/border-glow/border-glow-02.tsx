import { BorderGlow } from "@/registry/aliimam/components/border-glow"

export default function BorderGlowExample() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BorderGlow height="300px" colorPreset="pastel" animationDuration={6}>
        <div className="flex h-full items-center justify-center text-xl font-bold">
          Pastel Glow
        </div>
      </BorderGlow>
    </div>
  )
}
