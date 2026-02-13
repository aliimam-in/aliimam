import { Metadata } from "next"

import { BlocksNav } from "@/src/components/docs/blocks-nav"
import { Sheet } from "@/registry/aliimam/ui/sheet" 
import { ThemeSelectorWithSync } from "@/src/components/themes/synced-theme-selector"

const title = "Blocks"
const description =
  "A collection of building blocks for agents and audio that you can customize and extend."

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

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeSelectorWithSync />
      <div className="">
        <Sheet>
          <BlocksNav />
          <div className="h-full container 2xl:border-x py-14 w-full">{children}</div>
        </Sheet>
      </div>
    </>
  )
}
