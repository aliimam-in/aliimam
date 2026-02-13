import { getAllBlockIds } from "@/src/lib/blocks"
import { BlockDisplay } from "@/src/components/docs/block-display"
import { registryCategories } from "@/src/lib/categories"
import { BlockToc } from "@/src/components/docs/block-viewer"
import { 
  SheetContent, 
} from "@/registry/aliimam/ui/sheet"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const { categories = [] } = await params
  const blocks = await getAllBlockIds(["registry:block"], categories)
  return (
    <div className="flex items-stretch xl:w-full">
      <SheetContent className="w-60 pt-6">
            <BlockToc blocks={blocks} />
          </SheetContent>
      <div className="flex min-w-0 w-full flex-col gap-12 md:gap-24">
        {blocks.map((name) => (
          <BlockDisplay name={name} key={name} />
        ))}
      </div> 
    </div>

  )
}
