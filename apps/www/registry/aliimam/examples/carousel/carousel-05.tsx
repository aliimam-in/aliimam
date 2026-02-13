import { Carousel } from "@/registry/aliimam/components/carousel"

export default function DemoOne() {
  const images = [
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-icons.jpg",
      alt: "Icons",
      caption: "AI Icons",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/social-media-posts.jpg",
      alt: "Icons",
      caption: "Social Media Posts",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/dalim.jpg",
      alt: "Icons",
      caption: "Dalim",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/works/website-designs.jpg",
      alt: "Icons",
      caption: "Website Designs",
    },
    {
      src: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/ai-logos.jpg",
      alt: "Icons",
      caption: "AI Logos",
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
