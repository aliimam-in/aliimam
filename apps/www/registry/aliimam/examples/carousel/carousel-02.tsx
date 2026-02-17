import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const slides = [
    <div
      key={"4"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/r/hero-07-light.png"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    <div
      key={"1"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/r/hero-08-light.png"
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
          src="/r/hero-09-light.png"
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
          src="/r/hero-10-light.png"
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
          src="/r/hero-11-light.png"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
  ]

  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <Carousel
        slides={slides}
        showArrows
        showDots={false}
        showCounter
        showProgress={false}
      />
    </div>
  )
}
