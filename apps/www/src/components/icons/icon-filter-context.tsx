"use client"

import { createContext, useContext, useState } from "react"

type LogoFilterContext = {
  query: string
  setQuery: (q: string) => void
  category: string | null
  setCategory: (c: string | null) => void
}

const LogoFilterContext = createContext<LogoFilterContext>({
  query: "",
  setQuery: () => {},
  category: null,
  setCategory: () => {},
})

export function IconFilterProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)

  return (
    <LogoFilterContext.Provider value={{ query, setQuery, category, setCategory }}>
      {children}
    </LogoFilterContext.Provider>
  )
}

export function useLogoFilter() {
  return useContext(LogoFilterContext)
}