"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { allLogos } from "../../../../../packages/icons/src/generated"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"
import { useIconFilter } from "./icon-filter-context"
import { Icons } from "./icons"

interface LogoGridProps {
  selectedLogo?: string | null
  onSelectLogo?: (name: string) => void
}

const BATCH_SIZE = 100
const HIDDEN_CATEGORIES = new Set(["outline", "filled", "circle"])

export function IconGrid({ selectedLogo, onSelectLogo }: LogoGridProps) {
  const { query, category, variantTab } = useIconFilter()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // Build full deduplicated list filtered by variant tab
  const allEntries = useMemo(() => {
    const seen = new Set<string>()
    const result: { baseId: string; category: string; tags: string[] }[] = []

    Object.entries(allLogos).forEach(([cat, logos]) => {
      if (HIDDEN_CATEGORIES.has(cat.toLowerCase())) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.values(logos).forEach((entry: any) => {
        const { baseId, tags, variant } = entry.metadata

        const variantLower = (variant ?? "").toLowerCase()
        const catLower = cat.toLowerCase()

        // outline → show all icons
        // filled  → only icons whose variant or category is "filled"
        // circle  → only icons whose variant or category is "circle"
        if (variantTab !== "outline") {
          if (variantLower !== variantTab && catLower !== variantTab) return
        }

        if (!seen.has(baseId)) {
          seen.add(baseId)
          result.push({ baseId, category: cat, tags: tags ?? [] })
        }
      })
    })

    return result
  }, [variantTab])

  // Filter by search query + category
  const filtered = useMemo(() => {
    const q = query.toLowerCase()

    return allEntries.filter(({ baseId, category: cat, tags }) => {
      const matchesQuery =
        !q ||
        baseId.toLowerCase().includes(q) ||
        tags.some((t) => t.toLowerCase().includes(q))

      const matchesCategory = !category || cat === category

      return matchesQuery && matchesCategory
    })
  }, [allEntries, query, category])

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE)
  }, [query, category, variantTab])

  // Load more when sentinel enters viewport
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filtered.length))
  }, [filtered.length])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { rootMargin: "200px" } // start loading 200px before hitting the bottom
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  if (filtered.length === 0) {
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center p-4 text-sm">
        No icons found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12">
        {visible.map(({ baseId }) => {
          const isActive = selectedLogo === baseId

          return (
            <Tooltip delayDuration={300} key={baseId}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => onSelectLogo?.(baseId)}
                  className={`hover:bg-muted flex aspect-square cursor-pointer items-center justify-center border p-2 transition ${
                    isActive ? "border-primary transition duration-300" : ""
                  }`}
                >
                  <Icons strokeWidth={1} name={baseId} size={30} />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={-10}>
                <p className="text-xs">{baseId}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>

      {/* Sentinel + loader */}
      <div ref={sentinelRef} className="flex items-center justify-center py-6">
        {hasMore ? (
          <div className="flex items-center gap-2">
            <div className="border-muted-foreground h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
            <span className="text-muted-foreground text-xs">
              Loading {Math.min(BATCH_SIZE, filtered.length - visibleCount)} more…
            </span>
          </div>
        ) : (
          <span className="text-muted-foreground text-xs">
            {filtered.length} icons
          </span>
        )}
      </div>
    </div>
  )
}