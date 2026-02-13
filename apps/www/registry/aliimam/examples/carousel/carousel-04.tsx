import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const images = [
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-icons.jpg",
      alt: "Icons",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/social-media-posts.jpg",
      alt: "Icons",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/dalim.jpg",
      alt: "Icons",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/website-designs.jpg",
      alt: "Icons",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-logos.jpg",
      alt: "Icons",
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

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl items-center justify-center">
      <Carousel
        slides={slides}
        thumbnails={thumbnails}
        autoplayDelay={2500}
        showPlay={false}
        showDots={false}
        showProgress
      />
    </div>
  )
}
