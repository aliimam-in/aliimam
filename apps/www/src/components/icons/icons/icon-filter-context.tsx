/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { createContext, useContext, useMemo, useState } from "react"
import { allIcons } from "@aliimam/icons"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
  variantTab: "outline" | "filled" | "rounded" | "doodle"
  setVariantTab: (v: "outline" | "filled" | "rounded" | "doodle") => void
  counts: {
    filtered: number      
    outline: number        
    filled: number         
    rounded: number        
    doodle: number        
  }
}

const LogoFilterContext = createContext<LogoFilterContext | undefined>(undefined)

export function IconFilterProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [variantTab, setVariantTab] = useState<"outline" | "filled" | "rounded" | "doodle">("outline")

  const counts = useMemo(() => {
    const q = query.toLowerCase() 
    let filteredCount = 0
    const variantCounts = { outline: 0, filled: 0, doodle: 0, rounded: 0 }

    Object.entries(allIcons).forEach(([cat, logos]) => {
      Object.values(logos as any).forEach((entry: any) => {
        const { baseId, tags, variant } = entry.metadata
        const v = (variant ?? "").toLowerCase()
        
        // 1. Calculate Tab Counts (Ignoring Search/Category filters for tabs usually)
        if (v === "default" || v === "outline" || v === "") variantCounts.outline++
        else if (v === "filled") variantCounts.filled++
        else if (v === "doodle") variantCounts.doodle++ 
        else if (v === "rounded") variantCounts.rounded++

        // 2. Calculate Search/Filtered Count (Specific to current Tab + Search)
        const isCurrentTab = 
          (variantTab === "outline" && (v === "default" || v === "outline" || v === "")) ||
          (variantTab === "filled" && v === "filled") ||
          (variantTab === "rounded" && v === "rounded") ||
          (variantTab === "doodle" && v === "doodle")

        if (isCurrentTab) {
          const matchesQuery = !q || baseId.toLowerCase().includes(q) || 
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
    <LogoFilterContext.Provider value={{ query, setQuery, category, setCategory, variantTab, setVariantTab, counts }}>
      {children}
    </LogoFilterContext.Provider>
  )
}

export function useIconFilter() {
  const context = useContext(LogoFilterContext)
  if (!context) throw new Error("useIconFilter must be used within Provider")
  return context
}