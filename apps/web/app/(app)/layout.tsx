 
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import NowPlaying from "@/components/layout/now-playing"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <Header />
      <main className="container-wrapper px-2 border-t flex flex-1 flex-col">
        <div className="border-x w-full max-w-6xl mx-auto">{children}</div>
      </main>
      <Footer/>
      <NowPlaying/>
    </div>
  )
}
