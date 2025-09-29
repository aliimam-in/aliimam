"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area"
import { iconCategories } from "@/registry/registry-categories"

export function IconsNav() {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex gap-2 items-center">
          <BlocksNavLink
            category={{ name: "Icons", slug: "icons", hidden: false }}
            isActive={pathname === "/icons"}
          />
          {iconCategories.map((category) => (
            <BlocksNavLink
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

function BlocksNavLink({
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
      className="text-sm data-[active=true]:text-primary data-[active=true]:bg-secondary hover:bg-secondary rounded-md px-3 flex h-8 items-center text-start transition-colors"
      data-active={isActive}
    >
      {category.name}
    </Link>
  )
}
