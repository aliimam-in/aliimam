"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/registry/aliimam/ui/scroll-area"
import { registryCategories } from "@/src/lib/categories"
import { SheetTrigger } from "@/registry/aliimam/ui/sheet"

export function BlocksNav() {
  const pathname = usePathname()

  return (
    <div className="border-b z-30 bg-background sticky top-14">
      <div className="no-scrollbar flex overflow-auto">
        <ScrollArea className="max-w-none py-4">
          <div className="flex gap-2 items-start pr-20">
            <BlocksNavLink
              category={{ name: "Featured", slug: "", hidden: false }}
              isActive={pathname === "/blocks"}
            />
            {registryCategories.map((category) => (
              <BlocksNavLink
                key={category.slug}
                category={category}
                isActive={pathname === `/blocks/${category.slug}`}
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
        <SheetTrigger className="w-20 bg-background py-3.5 right-2.5 absolute border-l">ToC</SheetTrigger>
      </div>
    </div>

  )
}

function BlocksNavLink({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number]
  isActive: boolean
}) {
  if (category.hidden) {
    return null
  }

  return (
    <Link
      href={`/blocks/${category.slug}`}
      key={category.slug}
      className="text-muted-foreground uppercase text-sm text-nowrap hover:text-primary data-[active=true]:text-primary flex items-center justify-center px-4 transition-colors"
      data-active={isActive}
    >
      <h1>{category.name}</h1>
    </Link>
  )
}
