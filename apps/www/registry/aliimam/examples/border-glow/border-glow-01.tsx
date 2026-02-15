import { BorderGlow } from "@/registry/aliimam/components/border-glow"

export default function BorderGlowExample() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BorderGlow height="300px">
        <div className="flex h-full items-center justify-center text-center text-lg font-semibold">
          Default Glow
        </div>
      </BorderGlow>
    </div>
  )
}
