"use client"

import { useMemo } from "react"
import { allLogos } from "../../../../../packages/icons/src/generated"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"
import { useLogoFilter } from "./icon-filter-context"
import { Icons } from "./icons"

interface LogoGridProps {
  selectedLogo?: string | null
  onSelectLogo?: (name: string) => void
}

export function IconGrid({ selectedLogo, onSelectLogo }: LogoGridProps) {
  const { query, category } = useLogoFilter()

  // baseId ke hisaab se unique logos flatten karo
  const allEntries = useMemo(() => {
    const seen = new Set<string>()
    const result: { baseId: string; category: string; tags: string[] }[] = []

    Object.entries(allLogos).forEach(([cat, logos]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.values(logos).forEach((entry: any) => {
        const { baseId, tags } = entry.metadata
        if (!seen.has(`${cat}/${baseId}`)) {
          seen.add(`${cat}/${baseId}`)
          result.push({ baseId, category: cat, tags: tags ?? [] })
        }
      })
    })

    return result
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()

    return allEntries
      .filter(({ baseId, category: cat, tags }) => {
        const matchesQuery =
          !q ||
          baseId.toLowerCase().includes(q) ||
          tags.some((t) => t.toLowerCase().includes(q))

        const matchesCategory = !category || cat === category

        return matchesQuery && matchesCategory
      })
      .slice(0, 400)
  }, [allEntries, query, category])

  if (filtered.length === 0) {
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center p-4 text-sm">
        No logos found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12">
      {filtered.map(({ baseId }) => {
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
  )
}