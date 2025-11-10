import { AspectRatio } from "@/registry/default/ui/aspect-ratio";

export default function AspectRatio04() {
  return (
    <div className="w-[300px] overflow-hidden">
      <AspectRatio ratio={1 / 1}>
        <img
          src="/ali.jpg"
          alt="Photo by Ali Imam"
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  );
}
