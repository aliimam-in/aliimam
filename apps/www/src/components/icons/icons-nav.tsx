"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { iconCategories } from "@/src/lib/categories"

import { ScrollArea, ScrollBar } from "@/registry/aliimam/ui/scroll-area"

export function IconsNav() {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center gap-2">
          <IconsNavLink
            category={{ name: "Icons", slug: "icons", hidden: false }}
            isActive={pathname === "/icons"}
          />
          {iconCategories.map((category) => (
            <IconsNavLink
              key={category.slug}
              category={category}
              isActive={pathname === `/${category.slug}`}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function IconsNavLink({
  category,
  isActive,
}: {
  category: (typeof iconCategories)[number]
  isActive: boolean
}) {
  if (category.hidden) {
    return null
  }

  return (
    <Link
      href={`/${category.slug}`}
      key={category.slug}
      className="data-[active=true]:text-primary data-[active=true]:bg-secondary hover:bg-secondary flex h-8 items-center rounded-md px-3 text-start text-sm transition-colors"
      data-active={isActive}
    >
      {category.name}
    </Link>
  )
}
