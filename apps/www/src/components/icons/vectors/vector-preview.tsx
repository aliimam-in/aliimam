/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { allVectors } from "@aliimam/vectors"

import { Button } from "@/registry/aliimam/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/aliimam/ui/toggle-group"

import { ContentCopyButton } from "../../copy-button"
import { IconGridLines } from "../../logos"
import { VectorControlsPanel } from "./vector-controls"
import { VectorDownloadPanel } from "./vector-download"
import { useVectorFilter } from "./vector-filter-context"
import { Vectors } from "./vectors"

interface Props {
  selectedLogo: string
  onClearSelection: () => void
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

function getInitialVariant(
  variants: { id: string; variant: string }[],
  variantTab: "shapes" | "sketch" | "pattern" | "character" | "texture"
): string {
  if (variantTab === "shapes") {
    return (
      variants.find(
        (v) =>
          v.variant === "default" || v.variant === "shapes" || v.variant === ""
      )?.variant ??
      variants[0]?.variant ??
      "default"
    )
  }
  if (variantTab === "character") {
    return (
      variants.find((v) => v.variant === "character")?.variant ??
      variants[0]?.variant ??
      "default"
    )
  }
  if (variantTab === "texture") {
    return (
      variants.find((v) => v.variant === "texture")?.variant ??
      variants[0]?.variant ??
      "default"
    )
  }
  return (
    variants.find((v) => v.variant === variantTab)?.variant ??
    variants[0]?.variant ??
    "default"
  )
}

export function VectorPreview({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const { variantTab, color, setColor } = useVectorFilter()

  const variants = getVariants(selectedLogo)
  const [activeVariant, setActiveVariant] = useState(() =>
    getInitialVariant(variants, variantTab)
  )

  useEffect(() => {
    setActiveVariant(getInitialVariant(getVariants(selectedLogo), variantTab))
  }, [selectedLogo, variantTab])

  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="hidden h-full flex-col justify-between pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="flex aspect-square h-80 w-80 items-center justify-center border">
          <Vectors id="preview-svg" name={activeId} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-80 opacity-15" />
        </div>

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

        <div className="flex flex-wrap items-center justify-between p-2">
          <Link href={`/vectors/${selectedLogo}`}>
            <Button
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size="sm"
            >
              [Open]
            </Button>
          </Link>
          <Button
            className="text-muted-foreground cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
          >
            [Close]
          </Button>
        </div>

        <h2 className="truncate pb-6 text-center text-sm font-medium">
          {selectedLogo}
        </h2>

        <VectorControlsPanel
          size={size}
          color={color}
          onSizeChange={setSize}
          onColorChange={setColor}
        />

        <VectorDownloadPanel logoName={activeId} size={size} color={color} />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <ContentCopyButton
          className="w-full font-mono text-xs"
          value="npm i @aliimam/vectors"
        />
        <Button asChild className="w-full">
          <Link href="/docs/icons/introduction">See Docs</Link>
        </Button>
      </div>
    </div>
  )
}

export function VectorPreviewPhone({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const { color, setColor } = useVectorFilter()
  const [activeVariant, setActiveVariant] = useState("default")

  const variants = getVariants(selectedLogo)
  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex aspect-square h-60 w-60 flex-1 items-center justify-center border">
        <Vectors id="preview-svg" name={activeId} size={size} color={color} />
        <IconGridLines className="bg-code absolute -z-10 h-60 w-60 opacity-15" />
      </div>

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

      <div className="flex items-center justify-between pt-2">
        <h2 className="w-40 truncate text-sm font-medium">{selectedLogo}</h2>
        <div className="flex flex-wrap items-center justify-between p-2">
          <Button
            className="text-muted-foreground cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
          >
            [Close]
          </Button>
          <Link href={`/vectors/${selectedLogo}`}>
            <Button
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size="sm"
            >
              [Open]
            </Button>
          </Link>
        </div>
      </div>

      <VectorControlsPanel
        size={size}
        color={color}
        onSizeChange={setSize}
        onColorChange={setColor}
      />
      <VectorDownloadPanel logoName={activeId} size={size} color={color} />
    </div>
  )
}
