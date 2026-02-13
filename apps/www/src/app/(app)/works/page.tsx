import { Metadata } from "next"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/src/components/layout/page-header"


const title = "Works"
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
    <div className="flex flex-1 flex-col">

      <div className="relative h-screen flex justify-center items-center overflow-hidden">
        <PageHeader className="relative z-10">
          <PageHeaderHeading>
            {title}
          </PageHeaderHeading>
          <PageHeaderDescription>
            {description}
          </PageHeaderDescription>

        </PageHeader>
      </div>
    </div>
  )
}
