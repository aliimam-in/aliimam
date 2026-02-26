/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { VectorCode } from "@/src/components/icons/vectors/vector-code"
import { VectorViewControlsPanel } from "@/src/components/icons/vectors/vector-controls"
import { VectorDownloadPanel } from "@/src/components/icons/vectors/vector-download"
import { Vectors } from "@/src/components/icons/vectors/vectors"
import { IconGridLines } from "@/src/components/logos"
import { allVectors } from "@aliimam/vectors"

import { Button } from "@/registry/aliimam/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/aliimam/ui/toggle-group"

function getAllEntries() {
  const entries: { baseId: string; category: string; tags: string[] }[] = []
  const seen = new Set<string>()
  Object.entries(allVectors).forEach(([cat, logos]) => {
    Object.values(logos).forEach((entry: any) => {
      const { baseId, tags } = entry.metadata
      if (!seen.has(baseId)) {
        seen.add(baseId)
        entries.push({ baseId, category: cat, tags: tags ?? [] })
      }
    })
  })
  return entries
}

function getMetadata(name: string) {
  let fallback = null
  for (const logos of Object.values(allVectors)) {
    for (const entry of Object.values(logos)) {
      const e = entry as any
      if (e.metadata.baseId === name) {
        if (e.metadata.variant === "default") return e.metadata
        if (!fallback) fallback = e.metadata
      }
    }
  }
  return fallback
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allVectors) as Record<string, any>[]) {
    Object.values(logos).forEach((e: any) => {
      if (e.metadata.baseId === baseId) {
        result.push({ id: e.metadata.id, variant: e.metadata.variant })
      }
    })
  }
  return result
}

function toPascalCase(name: string) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

export default function LogoDetailPage() {
  const params = useParams()
  const name = typeof params.name === "string" ? params.name : ""
  const router = useRouter()

  const allEntries = useMemo(() => getAllEntries(), [])
  const currentIndex = allEntries.findIndex((e) => e.baseId === name)

  const [size, setSize] = useState(200)
  const [color, setColor] = useState("currentColor")

  const variants = getVariants(name)
  const [activeVariant, setActiveVariant] = useState(
    variants.find(
      (v) =>
        v.variant === "default" || v.variant === "outline" || v.variant === ""
    )?.variant ??
      variants[0]?.variant ??
      "default"
  )

  const activeId = variants.find((v) => v.variant === activeVariant)?.id ?? name

  const metadata = getMetadata(name)

  if (!metadata) {
    return (
      <div className="text-muted-foreground flex h-[80vh] items-center justify-center p-4 text-sm">
        No logo found
      </div>
    )
  }

  const category = metadata.category ?? "Uncategorized"
  const tagsArray: string[] = metadata.tags ?? []
  const componentName = toPascalCase(name)

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % allEntries.length
    router.replace(`/vectors/${allEntries[nextIndex].baseId}`)
  }

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + allEntries.length) % allEntries.length
    router.replace(`/vectors/${allEntries[prevIndex].baseId}`)
  }

  return (
    <div className="container flex min-h-[85vh] w-full max-w-6xl flex-col gap-2 p-2 lg:border-x">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-end">
        <div className="relative flex h-80 w-80 items-center justify-center border md:h-150 md:w-150">
          <Vectors id="preview-svg" name={activeId} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-full opacity-15 md:h-150" />
        </div>

        <div className="w-full flex-1 justify-between space-y-2">
          <div className="flex justify-between gap-2">
            <h1 className="text-lg font-medium">{componentName}</h1>
          </div>

          <Button
            size="sm"
            className="cursor-pointer"
            variant="secondary"
            onClick={() => {
              window.location.href = `/vectors#${category}`
            }}
          >
            {category}
          </Button>

          <p className="text-md text-muted-foreground pb-6">
            {tagsArray.length > 0 ? tagsArray.join(" • ") : "No tags"}
          </p>

          {variants.length > 1 && (
            <div className="space-y-2">
              <ToggleGroup
                type="single"
                size="sm"
                variant="outline"
                value={activeVariant}
                onValueChange={(val) => val && setActiveVariant(val)}
                className="w-full flex-wrap"
              >
                {variants.map((v) => (
                  <ToggleGroupItem
                    key={v.id}
                    value={v.variant}
                    className="flex-1 text-xs"
                  >
                    {v.variant}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          )}

          <VectorViewControlsPanel
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />

          <VectorDownloadPanel logoName={activeId} size={size} color={color} />

          <div className="flex justify-between gap-2">
            <Button className="cursor-pointer" onClick={goPrev}>
              Back
            </Button>
            <Button className="cursor-pointer" onClick={goNext}>
              Next
            </Button>
          </div>
        </div>
      </div>

      <VectorCode iconName={name} size={size} color={color} />
    </div>
  )
}
