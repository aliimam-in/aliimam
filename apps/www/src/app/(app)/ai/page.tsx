import { Clients } from "@/src/components/sections/ai/clients"
import { Connect } from "@/src/components/sections/ai/connect"
import { Craete } from "@/src/components/sections/ai/create"
import { Hero } from "@/src/components/sections/ai/hero"
import { Journey } from "@/src/components/sections/ai/journey"
import { Metadata } from "next"

const title = "Ali Imam"
const description =
  "Coming Soon!"

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
  return (
    <div> 
      <Hero />
      <Clients/>
      <Journey/>
      <Craete/>
      <Connect/>
    </div>
  )
}
