/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { allVectors } from "@aliimam/vectors"

import { useVectorFilter } from "./vector-filter-context"

function matchesVariantTab(
  variant: string,
  tab: "shapes" | "sketch" | "pattern" | "character" | "texture"
): boolean {
  const v = (variant ?? "").toLowerCase()
  if (tab === "shapes") return v === "default" || v === "shapes" || v === ""
  if (tab === "sketch") return v === "sketch"
  if (tab === "pattern") return v === "pattern"
  if (tab === "texture") return v === "texture" 
  if (tab === "character") return v === "character" 
  return false
}

export function VectorCategoryTabs() {
  const { setCategory, variantTab } = useVectorFilter()
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
    ;(Object.entries(allVectors) as [string, Record<string, any>][]).forEach(
      ([cat, logos]) => {
        const uniqueBaseIds = new Set(
          Object.values(logos)
            .filter((entry: any) =>
              matchesVariantTab(entry.metadata.variant, variantTab)
            )
            .map((entry: any) => entry.metadata.baseId as string)
        )
        if (uniqueBaseIds.size > 0) map.set(cat, uniqueBaseIds.size)
      }
    )
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
    window.history.pushState(null, "", `/vectors${search}${hash}`)
    // Manually fire hashchange so listeners update
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <div className="sticky top-30 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 scroll-mt-40 bg-transparent lg:flex">
      <aside className="h-full w-full space-y-3 overflow-y-auto p-3 pb-40">
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
