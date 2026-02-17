"use client"

import { Carousel } from "@/registry/aliimam/components/carousel"
import { Badge } from "@/registry/aliimam/ui/badge"

export default function DocumentationSection() {
  const slides = [
    <div
      key={"1"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/templates/ai-hero-black.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    <div
      key={"2"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/templates/ai-icons.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    <div
      key={"3"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/templates/ai-icons-1.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    <div
      key={"4"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full">
        <img
          src="/templates/ai-logos.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    <div
      key={"5"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/templates/ai-logos-1.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
  ]

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 60%)",
        }}
      >
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
            height: "100%",
            left: "0",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
            opacity: "0.25",
            pointerEvents: "none",
            position: "absolute",
            top: "0",
            width: "100%",
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8 sm:px-6 md:px-24 md:py-16">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Selected Work</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            A closer look at our design craft
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            Explore interfaces, branding systems, and product experiences
            <br className="hidden sm:block" />
            thoughtfully designed to balance beauty and performance.
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-full w-full items-center justify-center border-b pb-20">
        <Carousel slides={slides} />
      </div>
    </div>
  )
}
