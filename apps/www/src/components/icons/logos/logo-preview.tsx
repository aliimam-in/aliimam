/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Link2 } from "@aliimam/icons"
import { allLogos, Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

import { ContentCopyButton } from "../../copy-button"
import { IconGridLines } from "../../logos"
import { LogoControlsPanel } from "./logo-controls"
import { LogoDownloadPanel } from "./logo-download"
import { useLogoFilter } from "./logo-filter-context"
import { Logos } from "./logos"

interface Props {
  selectedLogo: string
  onClearSelection: () => void
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allLogos) as Record<string, any>[]) {
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
  variantTab: "icon" | "wordmark" | "symbols"
): string {
  if (variantTab === "icon") {
    return (
      variants.find(
        (v) =>
          v.variant === "default" || v.variant === "icon" || v.variant === ""
      )?.variant ??
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

export function LogoPreview({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")
  const variants = getVariants(selectedLogo)

  const { variantTab } = useLogoFilter()
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
          <Logos id="preview-svg" name={activeId} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-80 opacity-15" />
        </div>

        {variants.length > 1 && (
          <div className="flex w-80 flex-wrap justify-center gap-1 px-2">
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

        <div className="flex flex-wrap items-center justify-between p-2">
          <Link href={`/logos/${selectedLogo}`}>
            <Button
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size="sm"
            >
              [Open]
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Link target="_blank" href="/logos">
              <Link2 className="h-4 w-4" />
            </Link>
          </Button>
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

        <LogoControlsPanel
          size={size}
          color={color}
          onSizeChange={setSize}
          onColorChange={setColor}
        />

        <LogoDownloadPanel logoName={activeId} size={size} color={color} />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          target="_blank"
          href="https://www.figma.com/community/file/1553397064284560809/ai-logos"
        >
          <Button variant="outline" className="w-full">
            <Figma /> Open in Figma
          </Button>
        </Link>
        <ContentCopyButton
          className="w-full font-mono text-xs"
          value="npm i @aliimam/logos"
        />
        <Link href="/docs/logos/introduction">
          <Button className="w-full">See Docs</Button>
        </Link>
      </div>
    </div>
  )
}

export function LogoPreviewPhone({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")
  const [activeVariant, setActiveVariant] = useState("default")

  const variants = getVariants(selectedLogo)
  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex aspect-square h-60 w-60 flex-1 items-center justify-center border">
        <Logos id="preview-svg" name={activeId} size={size} color={color} />
        <IconGridLines className="bg-code absolute -z-10 h-60 w-60 opacity-15" />
      </div>

      {/* Variant tabs */}
      {variants.length > 1 && (
        <div className="flex flex-wrap justify-center gap-1 py-2">
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
          <Link href={`/logos/${selectedLogo}`}>
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

      <LogoControlsPanel
        size={size}
        color={color}
        onSizeChange={setSize}
        onColorChange={setColor}
      />
      <LogoDownloadPanel logoName={activeId} size={size} color={color} />
    </div>
  )
}
