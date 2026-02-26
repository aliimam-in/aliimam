/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { createContext, useContext, useMemo, useState } from "react"
import { allVectors } from "@aliimam/vectors"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
  variantTab: "shapes" | "sketch" | "pattern" | "texture"
  setVariantTab: (v: "shapes" | "sketch" | "pattern" | "texture") => void
  color: string
  setColor: (c: string) => void
  counts: {
    filtered: number
    outline: number
    filled: number
    circle: number
  }
}

const VectorFilterContext = createContext<LogoFilterContext | undefined>(
  undefined
)

export function VectorFilterProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [color, setColor] = useState("currentColor")
  const [variantTab, setVariantTab] = useState<
    "shapes" | "sketch" | "pattern" | "texture"
  >("shapes")

  const counts = useMemo(() => {
    const q = query.toLowerCase()
    let filteredCount = 0
    const variantCounts = { outline: 0, filled: 0, circle: 0 }

    Object.entries(allVectors).forEach(([cat, logos]) => {
      Object.values(logos as any).forEach((entry: any) => {
        const { baseId, tags, variant } = entry.metadata
        const v = (variant ?? "").toLowerCase()

        // 1. Calculate Tab Counts (Ignoring Search/Category filters for tabs usually)
        if (v === "default" || v === "outline" || v === "")
          variantCounts.outline++
        else if (v === "shapes") variantCounts.filled++
        else if (v === "sketch") variantCounts.circle++

        // 2. Calculate Search/Filtered Count (Specific to current Tab + Search)
        const isCurrentTab =
          (variantTab === "shapes" &&
            (v === "default" || v === "shapes" || v === "")) ||
          (variantTab === "sketch" && v === "sketch") ||
          (variantTab === "pattern" && v === "pattern") ||
          (variantTab === "texture" && v === "texture")

        if (isCurrentTab) {
          const matchesQuery =
            !q ||
            baseId.toLowerCase().includes(q) ||
            tags?.some((t: string) => t.toLowerCase().includes(q))
          const matchesCategory = !category || cat === category

          if (matchesQuery && matchesCategory) {
            filteredCount++
          }
        }
      })
    })

    return { filtered: filteredCount, ...variantCounts }
  }, [query, category, variantTab])

  return (
    <VectorFilterContext.Provider
      value={{
        query,
        setQuery,
        color,
        setColor,
        category,
        setCategory,
        variantTab,
        setVariantTab,
        counts,
      }}
    >
      {children}
    </VectorFilterContext.Provider>
  )
}

export function useVectorFilter() {
  const context = useContext(VectorFilterContext)
  if (!context) throw new Error("useIconFilter must be used within Provider")
  return context
}
