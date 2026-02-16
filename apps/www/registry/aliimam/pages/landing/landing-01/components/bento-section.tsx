import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { GridPattern } from "@/registry/aliimam/components/grid-pattern"
import { Badge } from "@/registry/aliimam/ui/badge"
import { Button } from "@/registry/aliimam/ui/button"

export function BentoSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8 sm:px-6 md:px-24 md:py-16">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Creative Studio</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            Design that defines modern brands
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            We craft thoughtful digital products
            <br className="hidden sm:block" />
            that blend strategy, clarity, and visual impact.
          </div>
        </div>
      </div>

      <div className="border-y p-4">
        <BentoGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          rowHeight={{ base: "180px", md: "220px", lg: "240px" }}
          className=""
        >
          <BentoGridItem colSpan={2} rowSpan={2} className="rounded-none p-0">
            <div className="relative flex h-full flex-col justify-between p-8">
              <GridPattern
                width={80}
                height={80}
                squares={[
                  [6, 2],
                  [2, 3],
                  [4, 4],
                ]}
              />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Crafted for <br /> Ambitious Ideas.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-md text-sm md:text-base">
                  From concept to launch, we design experiences that feel
                  intuitive, refined, and built to scale.
                </p>
              </div>
              <div className="relative z-10 flex gap-3">
                <Button size="lg">Explore Projects</Button>
                <Button variant="outline" size="lg">
                  Start a Project
                </Button>
              </div>
            </div>
          </BentoGridItem>

          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Capabilities</span>
              <div className="space-y-2 text-sm font-medium">
                <p>Product Design</p>
                <p>Visual Identity</p>
                <p>Web Experiences</p>
                <p>Motion & Interaction</p>
              </div>
            </div>
          </BentoGridItem>

          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Approach</span>
              <p className="text-sm font-medium">
                Research → Strategy → Design → Launch
              </p>
              <p className="text-muted-foreground text-xs">
                Intentional design, measurable impact.
              </p>
            </div>
          </BentoGridItem>

          <BentoGridItem colSpan={2} className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">
                Highlighted Work
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  AI Productivity Platform
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Redesigned core workflows to improve usability and boost
                  retention across enterprise teams.
                </p>
              </div>
            </div>
          </BentoGridItem>

          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Client Words</span>
              <p className="text-sm italic">
                “A seamless blend of creativity and strategic thinking.”
              </p>
              <p className="text-muted-foreground text-xs">
                — Head of Product, Tech Company
              </p>
            </div>
          </BentoGridItem>

          <BentoGridItem className="flex items-center justify-center rounded-none">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-tight">150+</h2>
              <p className="text-muted-foreground text-sm">
                Successful Launches
              </p>
            </div>
          </BentoGridItem>

          <BentoGridItem colSpan={2} className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">
                Our Toolkit
              </span>
              <p className="text-sm font-medium">
                Figma · Framer · Next.js · React · Tailwind
              </p>
              <p className="text-muted-foreground text-xs">
                Built for speed, clarity, and long-term growth.
              </p>
            </div>
          </BentoGridItem>
        </BentoGrid>
      </div>


      <div className="relative h-12 self-stretch overflow-hidden border-b">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
