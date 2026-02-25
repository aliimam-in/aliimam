"use client"

import { useEffect, useMemo, useState } from "react"
import { allLogos } from "../../../../../packages/icons/src/generated"
import { useIconFilter } from "./icon-filter-context"

const HIDDEN_CATEGORIES = new Set(["outline", "filled"])

export function IconCategoryTabs() {
  const { category, setCategory } = useIconFilter()
  const [currentHash, setCurrentHash] = useState<string | null>(null)

  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>()

    Object.entries(allLogos).forEach(([cat, logos]) => {
      if (HIDDEN_CATEGORIES.has(cat.toLowerCase())) return

      const uniqueBaseIds = new Set(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.values(logos).map((entry: any) => entry.metadata.baseId)
      )
      map.set(cat, uniqueBaseIds.size)
    })

    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [])

  const totalCount = useMemo(() => {
    return categoriesWithCount.reduce((acc, [, count]) => acc + count, 0)
  }, [categoriesWithCount])

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash.slice(1))
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  useEffect(() => {
    if (currentHash) {
      setCategory(currentHash === "logos" ? null : currentHash)
    }
  }, [currentHash, setCategory])

  const handleClick = (cat: string | null) => {
    const hash = cat ?? "logos"
    window.location.hash = hash
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
          <span>{totalCount}</span>
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