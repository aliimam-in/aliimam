"use client"

import { createContext, useContext, useState } from "react"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
  variantTab: "outline" | "filled"
  setVariantTab: (v: "outline" | "filled") => void
}

const LogoFilterContext = createContext<LogoFilterContext>({
  query: "",
  setQuery: () => {},
  category: null,
  setCategory: () => {},
  variantTab: "outline",
  setVariantTab: () => {},
})

export function IconFilterProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [variantTab, setVariantTab] = useState<"outline" | "filled">("outline")

  return (
    <LogoFilterContext.Provider value={{ query, setQuery, category, setCategory, variantTab, setVariantTab }}>
      {children}
    </LogoFilterContext.Provider>
  )
}

export function useIconFilter() {
  return useContext(LogoFilterContext)
}