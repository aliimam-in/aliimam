import {
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  Google,
  Grok,
  OpenAI,
  Replicate,
} from "@aliimam/logos"

import { ChartPie } from "@/registry/aliimam/blocks/bento/bento-01/chart-pie"
import { FieldHear } from "@/registry/aliimam/blocks/bento/bento-01/hear"
import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { DotPattern } from "@/registry/aliimam/components/dot-pattern"
import { Marquee } from "@/registry/aliimam/components/marquee"
import { Button } from "@/registry/aliimam/ui/button"
import { Calendar } from "@/registry/aliimam/ui/calendar"

export default function BentoExample() {
  return (
    <div className="container py-4 md:py-10">
      <BentoGrid
        cols={{ base: 2, md: 3, lg: 4 }}
        rowHeight={{ base: "180px", md: "200px", lg: "220px" }}
      >
        <BentoGridItem className="p-0" colSpan={2} rowSpan={2}>
          <div className="relative flex h-full flex-col items-center justify-center p-6">
            <DotPattern />
            <h1 className="px-14 text-center text-3xl font-semibold tracking-tight md:text-5xl lg:text-7xl">
              DESIGN <br /> WITHOUT LIMITS
            </h1>
            <div className="flex items-center justify-center gap-1 pt-3">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500">Available Now</p>
            </div>
            <div className="relative z-10 flex justify-center gap-2 pt-10">
              <Button className="cursor-pointer" variant="default" size="lg">
                Start Project
              </Button>
              <Button className="cursor-pointer" variant="outline" size="lg">
                Book a call
              </Button>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem>
          <div className="flex h-full flex-col justify-between">
            <h1 className="text-muted-foreground text-sm">Design Systems</h1>
            <div>
              <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-2xl">
                Consistency at scale.
              </h1>
              <h1 className="text-muted-foreground w-full text-sm font-medium tracking-tight lg:text-xl">
                Designs, grids, components, and patterns.
              </h1>
            </div>
            <p className="text-muted-foreground">
              The Foundation for your Design System
            </p>
          </div>
        </BentoGridItem>

        <BentoGridItem className="flex h-full flex-col items-center justify-center">
          <h1 className="text-primary text-7xl font-bold tracking-tight">Aa</h1>
          <p className="text-muted-foreground mt-2 text-sm">Typography</p>
        </BentoGridItem>

        <BentoGridItem
          colSpan={2}
          className="flex h-full justify-between gap-3"
        >
          <div className="bg-primary/20 flex flex-col justify-between gap-3 rounded-md border p-4">
            <p className="mb-2 text-sm font-semibold">Brand Identity</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Logo systems, color palettes, scalable visual language, and
              cohesive brand storytelling across digital platforms.
            </p>
            <p className="text-lg font-bold tracking-tight lg:text-3xl">
              shadcn/ui Components.
            </p>
          </div>

          <Calendar
            mode="single"
            className="w-full overflow-hidden rounded-lg border"
          />
        </BentoGridItem>

        <BentoGridItem className="flex h-full flex-col items-center justify-center md:px-8">
          <FieldHear />
        </BentoGridItem>

        <BentoGridItem>
          <ChartPie />
        </BentoGridItem>

        <BentoGridItem
          className="flex h-full flex-col items-center justify-center overflow-hidden p-0"
          colSpan={2}
        >
          <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-muted-foreground mb-4 px-20 text-center text-sm font-medium">
              Trusted by the world’s most creative companies.
            </h1>
            <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-center overflow-hidden px-6">
              <div>
                <Marquee gap={"70px"}>
                  <OpenAI type="wordmark" size={100} />
                  <ClaudeAI type="wordmark" size={100} />
                  <Replicate type="wordmark" size={100} />
                  <Cursor type="wordmark" size={100} />
                  <Gemini type="wordmark" size={90} />
                  <Github type="wordmark" size={90} />
                  <Grok type="wordmark" size={100} />
                  <Google className="mr-16" type="wordmark" size={100} />
                </Marquee>
              </div>
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}
