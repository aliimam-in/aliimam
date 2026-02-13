import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const slides = [
    <div
      key={"4"}
      className="bg-card text-card-foreground relative h-full w-full overflow-hidden rounded-md border"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-icons.jpg"
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
          src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/social-media-posts.jpg"
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
          src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/dalim.jpg"
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
          src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/website-designs.jpg"
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
          src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-logos.jpg"
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
