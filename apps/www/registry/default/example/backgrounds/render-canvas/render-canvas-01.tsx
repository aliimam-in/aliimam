import { RenderCanvas } from "@/registry/default/components/render-canvas";

export default function Component() {
  return (
    <main className="flex h-[600px] w-5xl items-center justify-center overflow-hidden rounded-md border">
      <RenderCanvas />
    </main>
  );
}
