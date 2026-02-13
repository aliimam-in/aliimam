import { SheetContent } from "@/registry/aliimam/ui/sheet"
import { BlockDisplay } from "@/src/components/docs/block-display"
import { BlockToc } from "@/src/components/docs/block-viewer"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = [
  "bento-grid-02",
  "header-01",
  "hero-09",
  "logos-02",
  "feature-01",
  "pricing-01",
  "faq-01",
  "footer-02",
]

export default async function BlocksPage() {
  return (
    <div className="flex relative justify-center items-stretch xl:w-full">
      <div className="flex min-w-0 w-full flex-col gap-12 md:gap-24">
        {FEATURED_BLOCKS.map((name) => (
          <BlockDisplay name={name} key={name} />
        ))}
      </div>
      <SheetContent className="w-60 pt-6">
        <BlockToc blocks={FEATURED_BLOCKS} />
      </SheetContent>
    </div>
  )
}
