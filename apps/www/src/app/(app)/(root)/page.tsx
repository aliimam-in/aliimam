import { Metadata } from "next"
import { Hero } from "@/src/components/sections/home/hero"
import { BentoLanding } from "@/src/components/sections/home/bento"
import { getBentoBlocks } from "@/src/lib/get-bento-images";
import { Pricing } from "@/src/components/sections/home/pricing";
import { Services } from "@/src/components/sections/home/services";
import { Components } from "@/src/components/sections/home/components";
import { FAQs } from "@/src/components/sections/home/faq";
import { CallToAction } from "@/src/components/sections/home/cta";

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

export default function IndexPage() {
  const blocks = getBentoBlocks();
  return (
    <div>
      <Hero />
      <BentoLanding blocks={blocks} />
      <Services/>
      <Components/>
      <Pricing/>
      <FAQs/>
      <CallToAction/>
    </div>
  )
}
