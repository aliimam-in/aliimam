import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"

export default function DashboardExample() {
  return (
    <BentoGrid
      cols={{ base: 2, md: 3, lg: 4 }}
      rowHeight={{ base: "60px", md: "80px", lg: "120px" }}
    >
      <BentoGridItem colSpan={2} rowSpan={2}>
        Hero Card
      </BentoGridItem>
      <BentoGridItem>Stats 1</BentoGridItem>
      <BentoGridItem>Stats 2</BentoGridItem>

      <BentoGridItem rowSpan={2} colSpan={2}>
        Wide Card
      </BentoGridItem>

      <BentoGridItem>Small</BentoGridItem>
      <BentoGridItem>Small</BentoGridItem>
    </BentoGrid>
  )
}
