import { RenderCanvas } from "@/registry/default/components/render-canvas"

export default function Component() {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border">
      <RenderCanvas lineWidth={30} trails={200} />
    </main>
  )
}
