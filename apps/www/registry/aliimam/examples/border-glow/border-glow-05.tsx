import { BorderGlow } from "@/registry/aliimam/components/border-glow"

export default function BorderGlowExample() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <BorderGlow height="300px" paused={true}>
        <div className="flex h-full items-center justify-center">Pause</div>
      </BorderGlow>
    </div>
  )
}
