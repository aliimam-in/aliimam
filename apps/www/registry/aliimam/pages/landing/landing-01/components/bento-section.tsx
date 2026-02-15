import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { GridPattern } from "@/registry/aliimam/components/grid-pattern"
import { Badge } from "@/registry/aliimam/ui/badge"
import { Button } from "@/registry/aliimam/ui/button"

export function BentoSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8 sm:px-6 md:px-24 md:py-16">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Work with Brands Like</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            Confidence backed by results
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
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
                  We Build <br /> Digital Experiences.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-md text-sm md:text-base">
                  Strategy, branding, and interface design crafted to move
                  businesses forward.
                </p>
              </div>
              <div className="relative z-10 flex gap-3">
                <Button size="lg">View Work</Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </BentoGridItem>
          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Services</span>
              <div className="space-y-2 text-sm font-medium">
                <p>Brand Identity</p>
                <p>UI/UX Design</p>
                <p>Web Design</p>
                <p>Design Systems</p>
              </div>
            </div>
          </BentoGridItem>
          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Process</span>
              <p className="text-sm font-medium">
                Discover → Define → Design → Deliver
              </p>
              <p className="text-muted-foreground text-xs">
                Clear strategy. Thoughtful execution.
              </p>
            </div>
          </BentoGridItem>
          <BentoGridItem colSpan={2} className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">
                Featured Project
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Fintech Dashboard Redesign
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Increased engagement by 42% with a simplified, data-first
                  interface.
                </p>
              </div>
            </div>
          </BentoGridItem>
          <BentoGridItem className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">Testimonial</span>
              <p className="text-sm italic">
                “Ali transformed our product experience completely.”
              </p>
              <p className="text-muted-foreground text-xs">
                — Product Lead, SaaS Startup
              </p>
            </div>
          </BentoGridItem>
          <BentoGridItem className="flex items-center justify-center rounded-none">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-tight">120+</h2>
              <p className="text-muted-foreground text-sm">
                Projects Delivered
              </p>
            </div>
          </BentoGridItem>
          <BentoGridItem colSpan={2} className="rounded-none">
            <div className="flex h-full flex-col justify-between">
              <span className="text-muted-foreground text-sm">
                Tools We Use
              </span>
              <p className="text-sm font-medium">
                Figma · Framer · Webflow · React · Tailwind
              </p>
              <p className="text-muted-foreground text-xs">
                Built with performance and scalability in mind.
              </p>
            </div>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </div>
  )
}
