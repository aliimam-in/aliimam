import { PixelGrid } from "@/registry/default/components/pixelated-grid";

export default function Component() {
  return (
      <div className="flex h-[600px] w-5xl overflow-hidden items-center justify-center">
      <PixelGrid pixelSize={10} />
    </div>
  );
}
