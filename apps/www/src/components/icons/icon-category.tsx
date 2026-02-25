/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { allLogos } from "../../../../../packages/icons/src/generated"
import { useIconFilter } from "./icon-filter-context"

function matchesVariantTab(variant: string, tab: "outline" | "filled" | "circle"): boolean {
  const v = (variant ?? "").toLowerCase()
  if (tab === "outline") return v === "default" || v === "outline" || v === ""
  if (tab === "filled") return v === "filled"
  if (tab === "circle") return v === "circle"
  return false
}

export function IconCategoryTabs() {
  const { setCategory, variantTab } = useIconFilter()
  const searchParams = useSearchParams()
  const [activeHash, setActiveHash] = useState<string | null>(null)
  const activeRef = useRef<HTMLButtonElement | null>(null)

  // Hash sync
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "") || null
      setActiveHash(hash)
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  // Scroll active item into view
  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [activeHash])

  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>()
    ;(Object.entries(allLogos) as [string, Record<string, any>][]).forEach(([cat, logos]) => {
      const uniqueBaseIds = new Set(
        Object.values(logos)
          .filter((entry: any) => matchesVariantTab(entry.metadata.variant, variantTab))
          .map((entry: any) => entry.metadata.baseId as string)
      )
      if (uniqueBaseIds.size > 0) map.set(cat, uniqueBaseIds.size)
    })
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [variantTab])

  const totalCount = useMemo(
    () => categoriesWithCount.reduce((acc, [, count]) => acc + count, 0),
    [categoriesWithCount]
  )

  const handleClick = (cat: string | null) => {
    setCategory(cat)

    // Tab param preserve karo, hash update karo — no full page navigation
    const tab = searchParams.get("tab")
    const params = new URLSearchParams()
    if (tab) params.set("tab", tab)

    const search = params.size ? `?${params}` : ""
    const hash = cat ? `#${cat}` : ""

    // history.pushState — Next.js router trigger nahi hoga, sirf URL update hoga
    window.history.pushState(null, "", `/icons${search}${hash}`)
    // Manually fire hashchange so listeners update
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <div className="sticky top-30 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 scroll-mt-40 bg-transparent lg:flex">
      <aside className="h-full w-full overflow-y-auto space-y-3 p-3">
        <button
          ref={activeHash === null ? activeRef : null}
          onClick={() => handleClick(null)}
          className={`flex w-full cursor-pointer justify-between text-left ${
            activeHash === null ? "font-semibold" : "text-muted-foreground"
          }`}
        >
          <span className="text-sm">ALL</span>
          <span>{totalCount}</span>
        </button>

        {categoriesWithCount.map(([cat, count]) => (
          <button
            key={cat}
            ref={activeHash === cat ? activeRef : null}
            onClick={() => handleClick(cat)}
            className={`flex w-full cursor-pointer justify-between text-left text-sm uppercase ${
              activeHash === cat ? "font-semibold" : "text-muted-foreground"
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