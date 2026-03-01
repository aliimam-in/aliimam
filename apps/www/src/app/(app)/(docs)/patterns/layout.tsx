import { ThemeSelectorPattern } from "@/src/components/themes/synced-theme-selector"
import { ThemeListenerPattern } from "@/src/components/themes/theme-listener"
import { FavoritesProvider } from "@/src/context/favourites-context"
import { Metadata } from "next"

const title = "Patterns"
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

export default function GraphicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full w-full">
      <ThemeListenerPattern />
      <ThemeSelectorPattern />
      <FavoritesProvider>
        <div className="relative">{children}</div>
      </FavoritesProvider>
    </div>
  )
}
