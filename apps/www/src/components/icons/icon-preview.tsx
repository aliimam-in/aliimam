"use client"

import { useState } from "react"
import Link from "next/link" 
import { Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

import { allLogos } from "../../../../../packages/icons/src/generated"
import { ContentCopyButton } from "../copy-button"
import { IconControlsPanel } from "./icon-controls"
import { IconDownloadPanel } from "./icon-download"
import { Icons } from "./icons"

interface Props {
  selectedLogo: string
  onClearSelection: () => void
}

function getVariants(baseId: string) {
  const result: { id: string; variant: string }[] = []
  for (const logos of Object.values(allLogos)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.values(logos).forEach((e: any) => {
      if (e.metadata.baseId === baseId) {
        result.push({ id: e.metadata.id, variant: e.metadata.variant })
      }
    })
  }
  return result
}

export function IconPreview({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [strokeWidth, setstrokeWidth] = useState(2)
  const [color, setColor] = useState("currentColor")
  const [activeVariant, setActiveVariant] = useState("default")

  const variants = getVariants(selectedLogo)
  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="hidden h-full flex-col justify-between pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="bg-code flex aspect-square h-full w-80 items-center justify-center border">
          <Icons
            id="preview-svg"
            name={activeId}
            size={size}
            color={color}
            strokeWidth={strokeWidth}
          />
        </div>

        {/* Variant tabs */}
        {variants.length > 1 && (
          <div className="flex flex-wrap justify-center gap-1 px-2">
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
          <Link href={`/icons/${selectedLogo}`}>
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

        <IconControlsPanel
          size={size}
          color={color}
          onSizeChange={setSize}
          onColorChange={setColor}
          strokeWidth={strokeWidth}
          onstrokeWidthChange={setstrokeWidth}
        />

        <IconDownloadPanel logoName={activeId} size={size} color={color} />
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

export function IconPreviewPhone({ selectedLogo, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [strokeWidth, setstrokeWidth] = useState(2)
  const [color, setColor] = useState("currentColor")
  const [activeVariant, setActiveVariant] = useState("default")

  const variants = getVariants(selectedLogo)
  const activeId =
    variants.find((v) => v.variant === activeVariant)?.id ?? selectedLogo

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="bg-code flex aspect-square h-full w-60 flex-1 items-center justify-center border">
        <Icons id="preview-svg" name={activeId} size={size} color={color} />
      </div>

       
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
          <Link href={`/icons/${selectedLogo}`}>
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

      <IconControlsPanel
        size={size}
        color={color}
        onSizeChange={setSize}
        onColorChange={setColor}
        strokeWidth={strokeWidth}
        onstrokeWidthChange={setstrokeWidth}
      />
      <IconDownloadPanel logoName={activeId} size={size} color={color} />
    </div>
  )
}
