import { AnalyticsCard } from "@/registry/aliimam/blocks/bento/bento-05/analytics"
import { BarVisualizerDemo } from "@/registry/aliimam/blocks/bento/bento-05/bar-visual"
import { Contributors } from "@/registry/aliimam/blocks/bento/bento-05/contributers"
import { ToggleGroupFontWeight } from "@/registry/aliimam/blocks/bento/bento-05/font-weight"
import { Messages } from "@/registry/aliimam/blocks/bento/bento-05/message"
import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { Orb } from "@/registry/aliimam/ui/orb"

export function StudioBentoV2() {
  return (
    <div className="container py-4 md:py-10">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }} rowHeight="200px">
        <BentoGridItem
          colSpan={2}
          rowSpan={2}
          className="flex h-full flex-col items-center justify-center"
        >
          <BarVisualizerDemo />
        </BentoGridItem>
        <BentoGridItem className="flex h-full flex-col items-center justify-center">
          <div className="bg-muted relative aspect-square h-full rounded-full p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
            <div className="bg-background aspect-square h-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]">
              <Orb />
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem className="p-0">
          <Contributors />
        </BentoGridItem>
        <BentoGridItem rowSpan={2} colSpan={2}>
          <Messages />
        </BentoGridItem>
        <BentoGridItem className="overflow-hidden p-0">
          <AnalyticsCard />
        </BentoGridItem>
        <BentoGridItem>
          <ToggleGroupFontWeight />
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}
