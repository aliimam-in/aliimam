 import { ColorPalette } from "@/src/components/docs/colors/color-palette";
import { ColorPicker } from "@/src/components/docs/colors/color-picker";
import { getColors } from "@/src/lib/colors";

export default function BlocksPage() {
  const colors = getColors();
  return (
    <div
      data-slot="colors"
      className="flex relative items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex  min-w-0 flex-1 border rounded-md flex-col">
        
        <div className="px-6 flex flex-1 gap-10 pb-10 md:gap-20 min-w-0 flex-col">
          <div className="space-y-6 my-6 md:my-10 text-center px-6">
            <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
              Colors
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-xl">
              Coming Soon!
            </p>
          </div>
          <div className="grid gap-3">
            <ColorPicker />
            {colors.map((colorPalette) => (
              <ColorPalette
                key={colorPalette.name}
                colorPalette={colorPalette}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
