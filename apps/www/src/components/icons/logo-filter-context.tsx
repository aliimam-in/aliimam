"use client"

import {
  createContext,
  useContext,
  useState,
} from "react"

type Variant = "icon" | "wordmark" 

type IconFilterContextType = {
  variant: Variant
  setVariant: (v: Variant) => void

  query: string
  setQuery: (q: string) => void

  category: string | null
  setCategory: (c: string | null) => void

  tags: string[]
  setTags: (t: string[]) => void
}

const IconFilterContext =
  createContext<IconFilterContextType | null>(
    null
  )

export function LogoFilterProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [variant, setVariant] =
    useState<Variant>("icon")

  const [query, setQuery] = useState("")
  const [category, setCategory] =
    useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])

  return (
    <IconFilterContext.Provider
      value={{
        variant,
        setVariant,
        query,
        setQuery,
        category,
        setCategory,
        tags,
        setTags,
      }}
    >
      {children}
    </IconFilterContext.Provider>
  )
}

export function useLogoFilter() {
  const ctx = useContext(IconFilterContext)
  if (!ctx)
    throw new Error(
      "useIconFilter must be used inside IconFilterProvider"
    )
  return ctx
}