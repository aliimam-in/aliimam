"use client"

import { useMemo } from "react"
import { Icon } from "@/src/components/icons/icons"
import {
  glassIcons,
  pixelIcons,
  solidIcons,
  strokeIcons,
} from "@/src/lib/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"

import { useIconFilter } from "./icon-filter-context"

interface IconGridProps {
  selectedIcon?: string | null
  onSelectIcon?: (icon: {
    name: string
    variant: "solid" | "stroke" | "pixel" | "glass"
  }) => void
}

export function IconGrid({ selectedIcon, onSelectIcon }: IconGridProps) {
  const { variant, query, category, tags } = useIconFilter()

  const iconSet =
    variant === "solid"
      ? solidIcons
      : variant === "stroke"
        ? strokeIcons
        : variant === "pixel"
          ? pixelIcons
          : glassIcons

  const filtered = useMemo(() => {
    const q = query.toLowerCase()

    return (
      Object.entries(iconSet)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter(([name, meta]: any) => {
          // Check query against name or tags
          const matchesQuery =
            !q ||
            name.toLowerCase().includes(q) ||
            (meta.tags?.some((tag: string) => tag.toLowerCase().includes(q)) ??
              false)

          if (!matchesQuery) return false

          if (category && meta.category !== category) return false

          if (tags.length && !tags.every((t: string) => meta.tags?.includes(t)))
            return false

          return true
        })
        .map(([name]) => name)
        .slice(0, 400)
    )
  }, [iconSet, query, category, tags])

  if (filtered.length === 0) {
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center p-4 text-sm">
        No icons found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-10 lg:grid-cols-10 2xl:grid-cols-16">
      {filtered.map((name) => {
        const isActive = selectedIcon === name

        return (
          <Tooltip delayDuration={300} key={name}>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() =>
                  onSelectIcon?.({
                    name,
                    variant,
                  })
                }
                className={`hover:bg-muted flex aspect-square cursor-pointer items-center justify-center border p-4 transition ${isActive ? "border-primary transition duration-300" : ""} `}
              >
                <Icon name={name} variant={variant} size={24} />
              </button>
            </TooltipTrigger>

            <TooltipContent sideOffset={-10}>
              <p className="text-xs">{name}</p>
            </TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
