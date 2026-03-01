import { Suspense } from "react"
import type { Metadata } from "next"

const title = "Icons"
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

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-muted-foreground flex h-[85vh] items-center justify-center p-4 text-sm">
            Loading icons...
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  )
}