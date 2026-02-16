import { BlockDisplay } from "@/src/components/docs/block-display"
import { BlockToc } from "@/src/components/docs/block-viewer"

import { SheetContent } from "@/registry/aliimam/ui/sheet"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = ["landing-01", "home-01", "about-01"]

export default async function BlocksPage() {
  return (
    <div className="relative flex items-stretch justify-center xl:w-full">
      <div className="flex w-full min-w-0 flex-col gap-12 md:gap-24">
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
