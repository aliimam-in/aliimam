import NowPlaying from "@/src/components/layout/now-playing"
import { SiteFooter } from "@/src/components/layout/site-footer"
import { SiteHeader } from "@/src/components/layout/site-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 container-wrapper flex-col">
        <div className="border-x">
          {children}
          </div> 
      </main>
      <SiteFooter />
      <NowPlaying />
    </div>
  )
}
