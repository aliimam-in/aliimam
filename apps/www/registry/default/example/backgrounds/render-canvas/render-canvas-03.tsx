import { RenderCanvas } from "@/registry/default/components/render-canvas"

export default function Component() {
  return (
    <main className="flex h-[600px] w-5xl items-center justify-center overflow-hidden rounded-md border">
      <RenderCanvas dampening={0.001} lineWidth={20} trails={300} />
    </main>
  )
}
