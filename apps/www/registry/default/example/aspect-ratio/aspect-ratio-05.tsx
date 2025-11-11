import { AspectRatio } from "@/registry/default/ui/aspect-ratio";

export default function AspectRatio05() {
  return (
    <div className="w-5xl overflow-hidden">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/_-AS5DtDeqs?si=Ri26lnU8jxC6nAWr"
          title="Demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0 rounded-lg"
        />
      </AspectRatio>
    </div>
  );
}
