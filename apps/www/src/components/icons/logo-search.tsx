"use client"

import { useMemo } from "react"
import { iconIcons, wordmarkIcons } from "@/src/lib/icons"
import { Search, X } from "lucide-react"

import { Input } from "@/registry/aliimam/ui/input"

import { useLogoFilter } from "./logo-filter-context"

export function LogoSearch() {
  const { variant, query, setQuery } = useLogoFilter()

  const iconSet =
    variant === "icon" ? iconIcons : wordmarkIcons

  const totalCount = useMemo(() => {
    const q = query.toLowerCase()
    return Object.keys(iconSet).filter((name) => {
      const icon = iconSet[name] as { tags?: string[] }

      const matchesName = name.toLowerCase().includes(q)
      const matchesTag =
        icon.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false

      return matchesName || matchesTag
    }).length
  }, [iconSet, query])

  return (
    <div className="relative w-80">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder={`Search ${variant} ${totalCount} icons...`}
        className="pr-10 pl-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transform transition-colors"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
