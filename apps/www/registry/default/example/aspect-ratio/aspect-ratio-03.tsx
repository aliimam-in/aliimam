import { AspectRatio } from "@/registry/default/ui/aspect-ratio";

export default function AspectRatio03() {
  return (
    <div className="w-[350px] rounded-lg  border shadow-sm overflow-hidden">
      <AspectRatio ratio={4 / 3}>
        <img
          src="/images/device/macbook.jpg"
          alt="Photo by Ali Imam"
          className="h-full w-full rounded-lg rounded-b-none object-cover"
        />
      </AspectRatio>
      <div className="p-4">
        <h3 className="font-semibold text-base">Portfolio Project</h3>
        <p className="text-sm text-muted-foreground">
          A creative design case study
        </p>
      </div>
    </div>
  );
}
