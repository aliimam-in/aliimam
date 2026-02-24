"use client"

import { useState } from "react"
import Link from "next/link"
import { iconIcons, wordmarkIcons } from "@/src/lib/icons"
import { Link2 } from "@aliimam/icons"
import { Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

import { ContentCopyButton } from "../copy-button"
import { LogoControlsPanel } from "./logo-controls"
import { LogoDownloadPanel } from "./logo-download"
import { useLogoFilter } from "./logo-filter-context"
import { Logos } from "./logos"

interface Props {
  selectedIcon: {
    name: string
    variant: "icon" | "wordmark"
  }
  onClearSelection: () => void
}

export function LogoPreview({ selectedIcon, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")

  const { variant } = useLogoFilter()

  const iconSet = variant === "icon" ? iconIcons : wordmarkIcons

  const iconData = iconSet[selectedIcon.name] as {
    category?: string
    tags?: string[]
    link?: string
  }

  const link = iconData?.link ?? "logos"

  return (
    <div className="hidden h-full flex-col justify-between pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="bg-code flex aspect-square h-full w-80 items-center justify-center border">
          <Logos
            id="preview-svg"
            name={selectedIcon.name}
            variant={selectedIcon.variant}
            size={size}
            color={color}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between p-2">
          <Link href={`/logos/${selectedIcon.name}`}>
            <Button
              className="text-muted-foreground cursor-pointer"
              variant="ghost"
              size="sm"
            >
              [Open]
            </Button>
          </Link>
          <Button variant={"ghost"} size={"icon"}>
            <Link target="_blank" href={link}>
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
          {selectedIcon.name}
        </h2>

        <LogoControlsPanel
          size={size}
          color={color}
          variant={selectedIcon.variant}
          onSizeChange={setSize}
          onColorChange={setColor}
        />

        <LogoDownloadPanel
          iconName={selectedIcon.name}
          variant={selectedIcon.variant}
          size={size}
          color={color}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          target="_blank"
          href={
            "https://www.figma.com/community/file/1553397064284560809/ai-logos"
          }
        >
          <Button variant={"outline"} className="w-full">
            <Figma /> Open in Figma
          </Button>
        </Link>

        <ContentCopyButton
          className="w-full font-mono text-xs"
          value={"npm i @aliimam/logos"}
        />

        <Link href={"/docs/icons/introduction"}>
          <Button className="w-full">See Docs</Button>
        </Link>
      </div>
    </div>
  )
}

export function LogoPreviewPhone({ selectedIcon, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="bg-code flex aspect-square h-full w-60 flex-1 items-center justify-center border">
        <Logos
          id="preview-svg"
          name={selectedIcon.name}
          variant={selectedIcon.variant}
          size={size}
          color={color}
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        <h2 className="w-40 truncate text-sm font-medium">
          {selectedIcon.name}
        </h2>

        <div className="flex flex-wrap items-center justify-between p-2">
          <Button
            className="text-muted-foreground cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
          >
            [Close]
          </Button>
          <Link href={`/icons/${selectedIcon.name}`}>
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
        variant={selectedIcon.variant}
        onSizeChange={setSize}
        onColorChange={setColor}
      />

      <LogoDownloadPanel
        iconName={selectedIcon.name}
        variant={selectedIcon.variant}
        size={size}
        color={color}
      />
    </div>
  )
}
