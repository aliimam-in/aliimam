"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { pagesCategories } from "@/src/lib/categories"

import { ScrollArea, ScrollBar } from "@/registry/aliimam/ui/scroll-area"
import { SheetTrigger } from "@/registry/aliimam/ui/sheet"

export function PagesNav() {
  const pathname = usePathname()

  return (
    <div className="bg-background sticky top-14 z-30 border-b">
      <div className="no-scrollbar flex overflow-auto">
        <ScrollArea className="max-w-none py-4">
          <div className="flex items-start gap-2 pr-20">
            <BlocksNavLink
              category={{ name: "Featured", slug: "", hidden: false }}
              isActive={pathname === "/pages"}
            />
            {pagesCategories.map((category) => (
              <BlocksNavLink
                key={category.slug}
                category={category}
                isActive={pathname === `/pages/${category.slug}`}
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
        <SheetTrigger className="bg-background absolute right-2.5 w-20 border-l py-3.5">
          ToC
        </SheetTrigger>
      </div>
    </div>
  )
}

function BlocksNavLink({
  category,
  isActive,
}: {
  category: (typeof pagesCategories)[number]
  isActive: boolean
}) {
  if (category.hidden) {
    return null
  }

  return (
    <Link
      href={`/pages/${category.slug}`}
      key={category.slug}
      className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex items-center justify-center px-4 text-sm text-nowrap uppercase transition-colors"
      data-active={isActive}
    >
      <h1>{category.name}</h1>
    </Link>
  )
}
