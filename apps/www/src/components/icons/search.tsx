"use client"

import { Search, X } from "lucide-react"

import { Input } from "@/registry/aliimam/ui/input"

import { useIcons } from "./icon-context"
import { useLogos } from "./logo-context"

interface LogoSearchProps {
  placeholder?: string
}

interface IconSearchProps {
  placeholder?: string
}

export function IconSearch({ placeholder = "icons..." }: IconSearchProps) {
  const { searchQuery, setSearchQuery, iconComponents } = useIcons()

  // Calculate total icons
  const totalIcons = iconComponents?.length || 0
  const dynamicPlaceholder = `Search ${totalIcons} ${placeholder}`

  return (
    <div className="lg:w-80">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          type="text"
          placeholder={dynamicPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 pl-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transform transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export function LogoSearch({ placeholder = "logos..." }: LogoSearchProps) {
  const { searchQuery, setSearchQuery, iconComponents } = useLogos() // Adjust based on actual context

  // Calculate total logos (assuming logoComponents exists; adjust if different)
  const totalLogos = iconComponents?.length || 0
  const dynamicPlaceholder = `Search ${totalLogos} ${placeholder} `

  return (
    <div className="lg:w-80">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          type="text"
          placeholder={dynamicPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 pl-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transform transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
