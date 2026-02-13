import { Metadata } from "next"

import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"

const title = "Test"
const description =
  "Coming Soon!"

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="container flex h-svh flex-col items-center justify-center py-10">
        <BentoGrid >
          <BentoGridItem colSpan={{ base: 1, md: 2, lg: 3 }} rowSpan={2}>Item 1</BentoGridItem>
          <BentoGridItem>Item 2</BentoGridItem>
          <BentoGridItem rowSpan={2}>Item 3</BentoGridItem>
          <BentoGridItem>Item 4</BentoGridItem>
          <BentoGridItem rowSpan={{ base: 1, md: 1, lg: 2 }}>Item 3</BentoGridItem>
          <BentoGridItem rowSpan={2}>Item 3</BentoGridItem> 
          <BentoGridItem colSpan={{ base: 1, md: 2, lg: 3 }} rowSpan={2}>Item 1</BentoGridItem>
        </BentoGrid> 
      </div> 
    </div>
  )
}
