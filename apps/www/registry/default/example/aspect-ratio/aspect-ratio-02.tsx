import { AspectRatio } from "@/registry/default/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="w-[300px] overflow-hidden">
      <AspectRatio ratio={9 / 16}>
        <img
          src="/images/device/iphone.png"
          alt="Photo by Ali Imam"
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  );
}
