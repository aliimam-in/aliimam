import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"

export default function DashboardExample() {
  return (
    <BentoGrid rowHeight={{ base: "70px", md: "120px", lg: "120px" }}>
      <BentoGridItem colSpan={{ base: 1, md: 3, lg: 5 }}>
        Full Width Banner
      </BentoGridItem>
      <BentoGridItem colSpan={{ base: 1, lg: 2 }}>Feature 1</BentoGridItem>
      <BentoGridItem>Feature 3</BentoGridItem>

      <BentoGridItem colSpan={{ base: 1, lg: 2 }}>Feature 1</BentoGridItem>

      <BentoGridItem colSpan={{ base: 1, md: 3, lg: 5 }}>
        Full Width Banner
      </BentoGridItem>
    </BentoGrid>
  )
}
