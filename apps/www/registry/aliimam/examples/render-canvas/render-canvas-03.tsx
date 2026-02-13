import { RenderCanvas } from "@/registry/aliimam/components/render-canvas"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden border">
      <RenderCanvas dampening={0.001} lineWidth={20} trails={300} />
    </div>
  )
}
