/* eslint-disable @next/next/no-img-element */
 import { AspectRatio } from "@/registry/default/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-lg">
      <img
        src="/images/device/display.jpg"
        alt="Photo by Ali Imam" 
        className="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}
