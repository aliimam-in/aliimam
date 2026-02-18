import { Metadata } from "next"
import { PagesNav } from "@/src/components/docs/pages-nav"
import { ThemeSelectorWithSync } from "@/src/components/themes/synced-theme-selector"

import { Sheet } from "@/registry/aliimam/ui/sheet"

const title = "Pages"
const description =
  "A collection of building pages for designers and developers that you can customize and extend."

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
          <PagesNav />
          <div className="container h-full w-full pt-4 pb-14 2xl:border-x">
            {children}
          </div>
        </Sheet>
      </div>
    </>
  )
}
