import { ThemeSelectorPattern } from "@/src/components/themes/synced-theme-selector"
import { ThemeListenerPattern } from "@/src/components/themes/theme-listener"
import { FavoritesProvider } from "@/src/context/favourites-context"

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
