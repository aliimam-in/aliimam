import { Skills } from "@/registry/aliimam/blocks/hero/hero-09/skills"
import { Button } from "@/registry/aliimam/ui/button"

export default function DemoOne() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden py-20">
      <div className="relative z-20 px-6">
        <div className="w-full max-w-3xl rounded-md border p-0 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]">
          <div className="p-6">
            <main className="relative overflow-hidden rounded-md border py-10 shadow-md backdrop-blur-md">
              <h1 className="mb-3 px-6 text-center text-5xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
                Design is Everything
              </h1>
              <p className="lg:text-md text-muted-foreground px-6 text-center text-xs md:text-sm">
                Unleashing creativity through bold visuals and limitless
                possibilities.
              </p>
              <div className="my-8 flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">
                  Available for New Projects
                </p>
              </div>

              <div className="flex justify-center">
                <Button size={"lg"}>
                  Let&apos;s Go
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  )
}
