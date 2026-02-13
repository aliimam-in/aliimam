import {
  ArrowRight,
  Award,
  Code,
  Eye,
  Globe,
  Layers,
  Palette,
  Sparkles,
  Star,
  Zap,
} from "@aliimam/icons"
import { Instagram, LinkedIn, Twitter } from "@aliimam/logos"

import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { Button } from "@/registry/aliimam/ui/button"

export function LuxuryStudioBento() {
  return (
    <div className="container py-4 md:py-10">
      <BentoGrid
        cols={{ base: 2, md: 4, lg: 6 }}
        rowHeight={{ base: "160px", md: "190px", lg: "200px" }}
        className="mx-auto max-w-[1400px] gap-3"
      >
        <BentoGridItem
          colSpan={{ base: 2, lg: 4 }}
          rowSpan={2}
          className="relative overflow-hidden border"
        >
          <div className="relative z-10 flex h-full flex-col justify-between p-10">
            <div className="flex items-start justify-between">
              <div className="bg-primary/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-[10px] tracking-widest uppercase">
                  Est. 2014 · Brand Studio
                </span>
              </div>
              <div className="flex gap-3">
                <Instagram className="hover:text-primary h-4 w-4 cursor-pointer transition-colors" />
                <Twitter className="hover:text-primary h-4 w-4 cursor-pointer transition-colors" />
                <LinkedIn className="hover:text-primary h-4 w-4 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h1 className="text-5xl leading-[0.95] font-light tracking-[-0.02em] md:text-7xl">
                We build brands
                <br />
                <span className="text-primary italic">that endure.</span>
              </h1>
              <div className="mt-6 flex items-center gap-4">
                <Button>
                  View Our Work <ArrowRight className="h-4 w-4" />
                </Button>
                <span className="text-xs tracking-widest uppercase">
                  Scroll to explore
                </span>
              </div>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="">
          <div className="flex h-full items-center justify-around p-6">
            {[
              { num: "10+", label: "Years" },
              { num: "80+", label: "Clients" },
              { num: "3", label: "Studios" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-primary text-3xl font-light">{s.num}</p>
                <p className="mt-1 text-[10px] tracking-widest uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="">
          <div className="flex h-full flex-col justify-between p-6">
            <Palette className="text-primary h-5 w-5" />
            <div>
              <p className="mb-2 text-2xl tracking-widest uppercase">
                Philosophy
              </p>
              <p className="text-base leading-snug font-light italic">
                Simplicity is the ultimate
                <br />
                sophistication.
              </p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="relative overflow-hidden">
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <p className="text-primary/70 text-[10px] tracking-widest uppercase">
                Featured Work
              </p>
              <Award className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-light">Maison Aurelia</h3>
              <p className="mt-1 text-xs">Paris Couture · Identity System</p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem className="">
          <div className="flex h-full flex-col justify-between p-5">
            <Layers className="text-primary h-5 w-5" />
            <div>
              <p className="text-primary mb-1 text-[10px] tracking-widest uppercase">
                Services
              </p>
              <p className="text-sm font-light">Brand Identity</p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem className="">
          <div className="flex h-full flex-col justify-between p-5">
            <Code className="text-primary h-5 w-5" />
            <div>
              <p className="text-primary mb-1 text-[10px] tracking-widest uppercase">
                Services
              </p>
              <p className="text-sm font-light">Digital Design</p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="">
          <div className="flex h-full flex-col justify-between p-6">
            <Globe className="text-primary h-5 w-5" />
            <div>
              <p className="text-primary mb-3 text-[10px] tracking-widest uppercase">
                Sectors
              </p>
              <div className="flex flex-wrap gap-2">
                {["Luxury", "Fashion", "Hospitality", "Lifestyle", "Art"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-[10px]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} rowSpan={2} className="">
          <div className="flex h-full flex-col justify-between p-7">
            <div>
              <p className="text-primary mb-5 text-[10px] tracking-widest uppercase">
                Our Process
              </p>
              <div className="space-y-5">
                {[
                  {
                    n: "01",
                    title: "Discovery",
                    desc: "Deep dive into your world, vision, and audience.",
                  },
                  {
                    n: "02",
                    title: "Strategy",
                    desc: "Positioning and brand architecture.",
                  },
                  {
                    n: "03",
                    title: "Design",
                    desc: "Visual language crafted with intention.",
                  },
                  {
                    n: "04",
                    title: "Launch",
                    desc: "Rollout with precision and care.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <span className="mt-0.5 w-5 shrink-0 text-[10px]">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="">
          <div className="flex h-full flex-col justify-between p-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary h-3 w-3" />
              ))}
            </div>
            <div>
              <p className="text-sm leading-relaxed font-light italic">
                They transformed our vision into reality with precision and
                elegance — truly world class.
              </p>
              <p className="text-primary mt-3 text-[10px] tracking-wider uppercase">
                — Céline Morel, Maison Aurelia
              </p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="">
          <div className="flex h-full flex-col justify-between p-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary h-3 w-3" />
              ))}
            </div>
            <div>
              <p className="text-sm leading-relaxed font-light italic">
                The studio redefined our brand DNA. Results exceeded every
                expectation.
              </p>
              <p className="text-primary mt-3 text-[10px] tracking-wider uppercase">
                — Haruki Tanaka, Obori Tokyo
              </p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={2} className="relative overflow-hidden">
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-widest uppercase">
                Featured Work
              </p>
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h3 className="*: text-xl font-light">Verde Natura</h3>
              <p className="mt-1 text-xs">Milan · Sustainable Luxury Brand</p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem className="">
          <div className="flex h-full flex-col justify-between p-5">
            <Eye className="text-primary h-5 w-5" />
            <div>
              <p className="text-primary mb-1 text-[10px] tracking-widest uppercase">
                Services
              </p>
              <p className="text-sm font-light">Art Direction</p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem className="">
          <div className="flex h-full flex-col justify-between p-5">
            <Zap className="text-primary h-5 w-5" />
            <div>
              <p className="text-primary mb-1 text-[10px] tracking-widest uppercase">
                Services
              </p>
              <p className="text-sm font-light">Motion & Film</p>
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}
