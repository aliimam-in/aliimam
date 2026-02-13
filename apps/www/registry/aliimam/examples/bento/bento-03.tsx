import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"

export default function DashboardExample() {
  return (
    <BentoGrid rowHeight={{ base: "60px", md: "120px", lg: "120px" }}>
      <BentoGridItem rowSpan={{ base: 1, md: 3, lg: 3 }}>
        Full Height Banner
      </BentoGridItem>
      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>Feature 1</BentoGridItem>
      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>Feature 1</BentoGridItem>

      <BentoGridItem rowSpan={{ base: 1, lg: 2 }}>Feature 1</BentoGridItem>

      <BentoGridItem rowSpan={{ base: 1, md: 2, lg: 3 }}>
        Full Height Banner
      </BentoGridItem>
      <BentoGridItem colSpan={{ base: 1, lg: 3 }}>Feature 1</BentoGridItem>
    </BentoGrid>
  )
}
