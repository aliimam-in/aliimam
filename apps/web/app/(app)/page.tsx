import { AboutAI } from "@/components/sections/about-ai"
import { AboutMe } from "@/components/sections/about-me"
import { Clients } from "@/components/sections/clients"
import { FAQs } from "@/components/sections/faq"
import { Figma } from "@/components/sections/figma"
import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/sections/testmonials"
import { Metadata } from "next"

const title = "Design Without Limits"
const description =
  "I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function Page() {
  return (
    <div className="">
      <Hero/>
      <AboutMe/>
      <AboutAI/>
      <Clients/>
      <Figma/>
      <Testimonials/>
      <FAQs/>
    </div>
  )
}
