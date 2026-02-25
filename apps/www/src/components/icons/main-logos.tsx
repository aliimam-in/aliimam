"use client"

import { useMemo } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"

import { allLogos } from "../../../../../packages/logos/src/generated"
import { useLogoFilter } from "./logo-filter-context"
import { Logos } from "./logos"

interface LogoGridProps {
  selectedLogo?: string | null
  onSelectLogo?: (name: string) => void
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allLogos)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.values(logos).forEach((e: any) => {
      if (e.metadata.baseId === baseId) {
        result.push({ id: e.metadata.id, variant: e.metadata.variant })
      }
    })
  }
  return result
}

export function LogoGrid({ selectedLogo, onSelectLogo }: LogoGridProps) {
  const { query, category, variantTab } = useLogoFilter()

  const allEntries = useMemo(() => {
  const seen = new Set<string>()
  const result: { baseId: string; category: string; tags: string[] }[] = []

  Object.entries(allLogos).forEach(([cat, logos]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.values(logos).forEach((entry: any) => {
      const { baseId, tags, variant } = entry.metadata

      // variantTab ke hisaab se filter karo
      // icon tab → sirf default variant wale baseIds
      // wordmark tab → sirf _wordmark variant wale baseIds
      const isWordmark = baseId.includes("wordmark") || variant.includes("wordmark")
      if (variantTab === "wordmark" && !isWordmark) return
      if (variantTab === "icon" && isWordmark) return

      if (!seen.has(baseId)) {
        seen.add(baseId)
        result.push({ baseId, category: cat, tags: tags ?? [] })
      }
    })
  })

  return result
}, [variantTab])

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
    <div className="grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
      {filtered.map(({ baseId }) => {
        const isActive = selectedLogo === baseId
        const variants = getVariants(baseId) // har baseId ke liye call karo

        return (
          <Tooltip delayDuration={300} key={baseId}>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => onSelectLogo?.(baseId)}
                className={`hover:bg-muted relative flex aspect-square cursor-pointer flex-col items-center justify-center border p-2 transition ${
                  isActive ? "border-primary transition duration-300" : ""
                }`}
              >
                <Logos name={baseId} size={40} />

                {variants.length > 1 && (
                  <div className="absolute bottom-1 flex gap-0.5">
                    {variants.map((v) => (
                      <div
                        key={v.id}
                        className="h-1 w-1 rounded-full bg-blue-500"
                      />
                    ))}
                  </div>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent sideOffset={-10}>
              <p className="text-xs">{baseId}</p>
              {variants.length > 1 && (
                <p className="text-muted-foreground text-xs">
                  {variants.length} variants
                </p>
              )}
            </TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
