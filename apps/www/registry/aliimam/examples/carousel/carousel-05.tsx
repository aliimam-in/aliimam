import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const images = [
    {
      src: "/r/hero-02-light.png",
      alt: "Icons",
      caption: "Icons",
    },
    {
      src: "/r/hero-03-light.png",
      alt: "Icons",
      caption: "Icons",
    },
    {
      src: "/r/hero-04-light.png",
      alt: "Icons",
      caption: "Icons",
    },
    {
      src: "/r/hero-05-light.png",
      alt: "Icons",
      caption: "Icons",
    },
    {
      src: "/r/hero-06-light.png",
      alt: "Icons",
      caption: "Icons",
    },
  ]

  const slides = images.map((img) => (
    <img
      key={img.src}
      src={img.src}
      className="h-64 w-full rounded-xl object-cover"
      alt={img.alt}
    />
  ))
  const thumbnails = images.map((img) => (
    <img
      key={img.src}
      src={img.src}
      className="h-full w-full object-cover"
      alt={img.alt}
    />
  ))
  const captions = images.map((img) => img.caption)

  return (
    <div className="mx-auto w-full max-w-xl">
      <Carousel
        slides={slides}
        thumbnails={thumbnails}
        thumbPosition="bottom"
        captions={captions}
        showArrows
        showDots
        showCounter
        showProgress
        keyboardNavigation
        lightbox
        autoplayDelay={4000}
      />
    </div>
  )
}
