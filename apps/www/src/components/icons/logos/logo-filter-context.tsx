"use client"

import { createContext, useContext, useState } from "react"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
  variantTab: "icon" | "wordmark" | "symbols" 
  setVariantTab: (v: "icon" | "wordmark" | "symbols") => void
}

const LogoFilterContext = createContext<LogoFilterContext>({
  query: "",
  setQuery: () => {},
  category: null,
  setCategory: () => {},
  variantTab: "icon",
  setVariantTab: () => {},
})

export function LogoFilterProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [variantTab, setVariantTab] = useState<"icon" | "wordmark" | "symbols">("icon")

  return (
    <LogoFilterContext.Provider
      value={{ query, setQuery, category, setCategory, variantTab, setVariantTab }}
    >
      {children}
    </LogoFilterContext.Provider>
  )
}

export function useLogoFilter() {
  return useContext(LogoFilterContext)
}