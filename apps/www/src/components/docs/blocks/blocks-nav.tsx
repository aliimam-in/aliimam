"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area"
import { registryCategories } from "@/registry/registry-categories"

export function BlocksNav() {
  const pathname = usePathname()

  return (
    <div className="relative px-6 overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex whitespace-nowrap gap-2 items-center">
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
      className="text-sm data-[active=true]:text-primary data-[active=true]:bg-secondary hover:bg-secondary rounded-md px-3 flex h-8 items-center text-start transition-colors"
      data-active={isActive}
    >
      {category.name}
    </Link>
  )
}
