import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const slides = [
    <div
      key={"4"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/r/hero-06-light.png"
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
         src="/r/hero-02-light.png"
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
          src="/r/hero-03-light.png"
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
          src="/r/hero-04-light.png"
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
         src="/r/hero-05-light.png"
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
  ]

  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <Carousel slides={slides} />
    </div>
  )
}
