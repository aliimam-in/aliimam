import { Metadata } from "next"
import { BlocksNav } from "@/src/components/docs/blocks-nav"
import { ThemeSelectorWithSync } from "@/src/components/themes/synced-theme-selector"

import { Sheet } from "@/registry/aliimam/ui/sheet"
 
const title = "Blocks"
const description =
"I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end."

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
          <div className="container h-full w-full pt-4 pb-14 2xl:border-x">
            {children}
          </div>
        </Sheet>
      </div>
    </>
  )
}
