/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { allLogos } from "@aliimam/logos"
import { createContext, useContext, useMemo, useState } from "react"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
  variantTab: "icon" | "wordmark" | "symbols" 
  setVariantTab: (v: "icon" | "wordmark" | "symbols") => void
  counts: {
    filtered: any
    icon: number      
    wordmark: number        
    symbols: number          
  }
  
}

const LogoFilterContext = createContext<LogoFilterContext>({
  query: "",
  setQuery: () => {},
  category: null,
  setCategory: () => {},
  variantTab: "icon",
  setVariantTab: () => {},
  counts: {
    filtered: 0,
    icon: 0,
    wordmark: 0,
    symbols: 0,
  },
})

export function LogoFilterProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [variantTab, setVariantTab] = useState<"icon" | "wordmark" | "symbols">("icon")

  const counts = useMemo(() => {
    const q = query.toLowerCase() 
    let filteredCount = 0
    const variantCounts = { icon: 0, wordmark: 0, symbols: 0 }

    Object.entries(allLogos).forEach(([cat, logos]) => {
      Object.values(logos as any).forEach((entry: any) => {
        const { baseId, tags, variant } = entry.metadata
        const v = (variant ?? "").toLowerCase()
        
        // 1. Calculate Tab Counts (Ignoring Search/Category filters for tabs usually)
        if (v === "default" || v === "icon" || v === "") variantCounts.icon++
        else if (v === "filled") variantCounts.wordmark++  
        else if (v === "symbols") variantCounts.symbols++ 

        // 2. Calculate Search/Filtered Count (Specific to current Tab + Search)
        const isCurrentTab = 
          (variantTab === "icon" && (v === "default" || v === "icon" || v === "")) ||
          (variantTab === "wordmark" && v === "wordmark") ||
          (variantTab === "symbols" && v === "symbols")

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

    return { filtered: filteredCount, icon: variantCounts.icon, wordmark: variantCounts.wordmark, symbols: variantCounts.symbols }
  }, [query, category, variantTab])

  return (
    <LogoFilterContext.Provider
      value={{ query, counts, setQuery, category, setCategory, variantTab, setVariantTab }}
    >
      {children}
    </LogoFilterContext.Provider>
  )
}

export function useLogoFilter() {
  return useContext(LogoFilterContext)
}