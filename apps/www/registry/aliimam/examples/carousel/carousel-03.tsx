import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const images = [
    {
      src: "/r/hero-02-light.png",
      alt: "Icons",
    },
    {
      src: "/r/hero-03-light.png",
      alt: "Icons",
    },
    {
      src: "/r/hero-04-light.png",
      alt: "Icons",
    },
    {
      src: "/r/hero-05-light.png",
      alt: "Icons",
    },
    {
      src: "/r/hero-06-light.png",
      alt: "Icons",
    },
  ]
  const slides = images.map((img) => (
    <img
      key={img.src}
      src={img.src}
      className="h-full w-full rounded-xl"
      alt={img.alt}
    />
  ))
  const thumbnails = images.map((img) => (
    <img key={img.src} src={img.src} className="h-full w-full" alt={img.alt} />
  ))

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl items-center justify-center">
      <Carousel
        slides={slides}
        thumbnails={thumbnails}
        thumbPosition="left"
        showDots={false}
        showPlay={false}
        showProgress={false}
      />
    </div>
  )
}
