"use client"

import { useEffect, useMemo, useState } from "react"
import { iconIcons, wordmarkIcons } from "@/src/lib/icons"
 
import { useLogoFilter } from "./logo-filter-context"

export function LogoCategoryTabs() {
  const { variant, category, setCategory } = useLogoFilter()
  const [currentHash, setCurrentHash] = useState<string | null>(null)

  const iconSet = 
    variant === "icon" ? iconIcons : wordmarkIcons
 
  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>()

    Object.values(iconSet).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (icon: any) => {
        if (icon.category) {
          map.set(icon.category, (map.get(icon.category) ?? 0) + 1)
        }
      }
    )

    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [iconSet])

  // Update currentHash on mount and when hash changes
  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash.slice(1))
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  // When currentHash changes, update context category
  useEffect(() => {
    if (currentHash) {
      setCategory(currentHash === "icons" ? null : currentHash)
    }
  }, [currentHash, setCategory])

  const handleClick = (cat: string | null) => {
    const hash = cat ?? "icons"
    window.location.hash = hash // update URL hash
    setCategory(cat)
    setCurrentHash(hash)
  }

  return (
    <div className="sticky top-30 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 scroll-mt-20 bg-transparent lg:flex">
      <aside className="h-full w-full space-y-3 p-3">
        <button
          onClick={() => handleClick(null)}
          className={`flex w-full cursor-pointer justify-between text-left ${
            category === null ? "font-semibold" : "text-muted-foreground"
          }`}
        >
          <span className="text-sm">ALL</span>
          <span>{Object.keys(iconSet).length}</span>
        </button>

        {categoriesWithCount.map(([cat, count]) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`flex w-full text-sm cursor-pointer justify-between text-left uppercase ${
              category === cat ? "font-semibold" : "text-muted-foreground"
            }`}
          >
            <span>{cat}</span>
            <span>{count}</span>
          </button>
        ))}
      </aside>
    </div>
  )
}
