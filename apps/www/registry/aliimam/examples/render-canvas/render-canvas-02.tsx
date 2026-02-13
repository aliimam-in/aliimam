import { RenderCanvas } from "@/registry/aliimam/components/render-canvas"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden border">
      <RenderCanvas lineWidth={30} trails={200} />
    </div>
  )
}
