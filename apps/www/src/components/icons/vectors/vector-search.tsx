"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/registry/aliimam/ui/input"
import { useVectorFilter } from "./vector-filter-context"

export function VectorSearch() {
  const { query, setQuery, counts } = useVectorFilter()

  return (
    <div className="relative w-80">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        placeholder={`Search ${counts.filtered} icons...`} // <--- Dynamic Count
        className="pl-10"
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