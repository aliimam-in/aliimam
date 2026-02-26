"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { allLogos } from "@aliimam/logos"
import { LogoCode } from "@/src/components/icons/logos/logo-code"
import { LogoViewControlsPanel } from "@/src/components/icons/logos/logo-controls"
import { LogoDownloadPanel } from "@/src/components/icons/logos/logo-download"
import { Logos } from "@/src/components/icons/logos/logos"
import { IconGridLines } from "@/src/components/logos"

import { Button } from "@/registry/aliimam/ui/button"

function getAllEntries() {
  const entries: { baseId: string; category: string; tags: string[] }[] = []
  const seen = new Set<string>()
  Object.entries(allLogos).forEach(([cat, logos]) => {
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
  for (const logos of Object.values(allLogos)) {
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
  for (const logos of Object.values(allLogos)) {
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
    .join("") + "Logo"
}

export default function LogoDetailPage() {
  const params = useParams()
  const name = typeof params.name === "string" ? params.name : ""
  const router = useRouter()

  const allEntries = useMemo(() => getAllEntries(), [])
  const currentIndex = allEntries.findIndex((e) => e.baseId === name)

  const [size, setSize] = useState(200)
  const [color, setColor] = useState("currentColor")
  const [activeVariant, setActiveVariant] = useState("default")

  const metadata = getMetadata(name)
  const variants = useMemo(() => getVariants(name), [name])

  // active variant change hone pe reset karo
  const activeId = variants.find((v) => v.variant === activeVariant)?.id ?? name

  if (!metadata) {
    return (
      <div className="text-muted-foreground flex h-[80vh] items-center justify-center p-4 text-sm">
        No logo found
      </div>
    )
  }

  const category = metadata.category ?? "Uncategorized"
  const tagsArray: string[] = metadata.tags ?? []
  const componentName = toPascalCase(activeId)

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % allEntries.length
    setActiveVariant("default")
    router.replace(`/logos/${allEntries[nextIndex].baseId}`)
  }

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + allEntries.length) % allEntries.length
    setActiveVariant("default")
    router.replace(`/logos/${allEntries[prevIndex].baseId}`)
  }

  return (
    <div className="container flex h-[85vh] w-full max-w-6xl flex-col gap-2 p-2 lg:border-x">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-end">
        <div className="relative flex h-80 w-80 items-center justify-center border md:h-120 md:w-120">
          <Logos name={activeId} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-full opacity-15 md:h-120" />
        </div>

        <div className="w-full flex-1 justify-between space-y-2">
          <div className="flex justify-between gap-2">
            <h1 className="text-lg font-medium">{componentName}</h1>
          </div>

          <Button
            size="sm"
            className="cursor-pointer"
            variant="secondary"
            onClick={() => { window.location.href = `/logos#${category}` }}
          >
            {category}
          </Button>

          <p className="text-md text-muted-foreground pb-2">
            {tagsArray.length > 0 ? tagsArray.join(" • ") : "No tags"}
          </p>

          {/* Variant buttons */}
          {variants.length > 1 && (
            <div className="flex flex-wrap gap-1 pb-4">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.variant)}
                  className={`cursor-pointer rounded border px-2 py-1 text-xs transition ${
                    activeVariant === v.variant
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {v.variant}
                </button>
              ))}
            </div>
          )}

          <LogoViewControlsPanel
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />

          <LogoDownloadPanel
            logoName={activeId}
            size={size}
            color={color}
          />

          <div className="flex justify-between gap-2">
            <Button className="cursor-pointer" onClick={goPrev}>Back</Button>
            <Button className="cursor-pointer" onClick={goNext}>Next</Button>
          </div>
        </div>
      </div>

      <LogoCode
        iconName={activeId}
        size={size}
        color={color}
        isLogo={true}
      />
    </div>
  )
}