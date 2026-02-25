/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"

import { allLogos } from "@aliimam/logos"
import { useLogoFilter } from "./logo-filter-context"
import { Logos } from "./logos"

interface LogoGridProps {
  selectedLogo?: string | null
  onSelectLogo?: (name: string) => void
}

const BATCH_SIZE = 100

// Flat list of all entries — computed once
const allEntries_flat: any[] = []
for (const icons of Object.values(allLogos) as Record<string, any>[]) {
  for (const entry of Object.values(icons)) {
    allEntries_flat.push(entry)
  }
}

function matchesVariantTab(
  variant: string,
  tab: "icon" | "wordmark" | "flags" | "cards" | "stickers"
): boolean {
  const v = (variant ?? "").toLowerCase()
  if (tab === "icon") return v === "default" || v === "icon" || v === ""
  if (tab === "wordmark") return v === "wordmark"
  if (tab === "flags") return v === "flags"
  if (tab === "cards") return v === "cards"
  if (tab === "stickers") return v === "stickers"
  return false
}

export function LogoGrid({ selectedLogo, onSelectLogo }: LogoGridProps) {
  const { query, category, variantTab } = useLogoFilter()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const allGridEntries = useMemo(() => {
    const seen = new Set<string>()
    const result: {
      baseId: string
      iconId: string
      category: string
      tags: string[]
    }[] = []

    ;(Object.entries(allLogos) as [string, Record<string, any>][]).forEach(
      ([cat, logos]) => {
        Object.values(logos).forEach((entry: any) => {
          const { baseId, tags, variant } = entry.metadata

          // Sirf current variantTab wale icons
          if (!matchesVariantTab(variant, variantTab)) return

          const key = `${cat}:${baseId}`
          if (!seen.has(key)) {
            seen.add(key)
            result.push({
              baseId,
              iconId: entry.metadata.id, // exact id store karo
              category: cat,
              tags: tags ?? [],
            })
          }
        })
      }
    )

    return result
  }, [variantTab])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return allGridEntries.filter(({ baseId, category: cat, tags }) => {
      const matchesQuery =
        !q ||
        baseId.toLowerCase().includes(q) ||
        tags.some((t) => t.toLowerCase().includes(q))
      const matchesCategory = !category || cat === category
      return matchesQuery && matchesCategory
    })
  }, [allGridEntries, query, category])

  function getSizeByVariant(
    tab: "icon" | "wordmark" | "flags" | "cards" | "stickers"
  ) {
    switch (tab) {
      case "icon":
        return 60
      case "wordmark":
        return 140
      case "flags":
        return 100
      case "cards":
        return 100
      case "stickers":
        return 240
      default:
        return 50
    }
  }

  function getGridClasses(
    tab: "icon" | "wordmark" | "flags" | "cards" | "stickers"
  ) {
    switch (tab) {
      case "icon":
        return "grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8"

      case "wordmark":
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"

      case "flags":
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"

      case "cards":
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"

      case "stickers":
        return "grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"

      default:
        return "grid-cols-3"
    }
  }

  useEffect(() => {
    setVisibleCount(BATCH_SIZE)
  }, [query, category, variantTab])

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filtered.length))
  }, [filtered.length])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore()
      },
      { rootMargin: "200px" }
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
      <div className={`grid gap-2 ${getGridClasses(variantTab)}`}>
        {visible.map(({ baseId, iconId }) => {
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
                  <Logos name={iconId} size={getSizeByVariant(variantTab)} />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={-10}>
                <p className="text-xs">{baseId}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>

      <div ref={sentinelRef} className="flex items-center justify-center py-6">
        {hasMore ? (
          <div className="flex items-center gap-2">
            <div className="border-muted-foreground h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
            <span className="text-muted-foreground text-xs">
              Loading {Math.min(BATCH_SIZE, filtered.length - visibleCount)}{" "}
              more…
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
