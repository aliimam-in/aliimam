"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@/src/components/icons/icons"
import { Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

import { ContentCopyButton } from "../copy-button"
import { IconControlsPanel } from "./icon-controls"
import { IconDownloadPanel } from "./icon-download"

interface Props {
  selectedIcon: {
    name: string
    variant: "solid" | "stroke" | "pixel" | "glass"
  }
  onClearSelection: () => void
}

export function IconPreview({ selectedIcon, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [strokeWidth, setStrokeWidth] = useState(1.5)
  const [color, setColor] = useState("currentColor")

  return (
    <div className="hidden h-full flex-col justify-between pl-2 md:flex">
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="bg-code flex aspect-square h-full w-80 items-center justify-center border">
          <Icon
            id="preview-svg"
            name={selectedIcon.name}
            variant={selectedIcon.variant}
            size={size}
            strokeWidth={
              selectedIcon.variant === "stroke" ? strokeWidth : undefined
            }
            color={color}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between p-2">
          <Link href={`/icons/${selectedIcon.name}`}>
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
          {selectedIcon.name}
        </h2>

        <IconControlsPanel
          size={size}
          strokeWidth={strokeWidth}
          color={color}
          variant={selectedIcon.variant}
          onSizeChange={setSize}
          onStrokeWidthChange={
            selectedIcon.variant === "stroke" ||
            selectedIcon.variant === "pixel"
              ? setStrokeWidth
              : undefined
          }
          onColorChange={setColor}
        />

        <IconDownloadPanel
          iconName={selectedIcon.name}
          variant={selectedIcon.variant}
          size={size}
          color={color}
          strokeWidth={
            selectedIcon.variant === "stroke" ||
            selectedIcon.variant === "pixel"
             ? strokeWidth : undefined
          }
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          target="_blank"
          href={
            "https://www.figma.com/community/file/1553397064284560809/ai-icons"
          }
        >
          <Button variant={"outline"} className="w-full">
            <Figma /> Open in Figma
          </Button>
        </Link>

        <ContentCopyButton
          className="w-full font-mono text-xs"
          value={"npm i @aliimam/icons"}
        />

        <Link href={"/docs/icons/introduction"}>
          <Button className="w-full">See Docs</Button>
        </Link>
      </div>
    </div>
  )
}

export function IconPreviewPhone({ selectedIcon, onClearSelection }: Props) {
  const [size, setSize] = useState(96)
  const [strokeWidth, setStrokeWidth] = useState(1.5)
  const [color, setColor] = useState("currentColor")

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="bg-code flex aspect-square h-full w-60 flex-1 items-center justify-center border">
        <Icon
          id="preview-svg"
          name={selectedIcon.name}
          variant={selectedIcon.variant}
          size={size}
          strokeWidth={
            selectedIcon.variant === "stroke" ? strokeWidth : undefined
          }
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

      <IconControlsPanel
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        variant={selectedIcon.variant}
        onSizeChange={setSize}
        onStrokeWidthChange={
          selectedIcon.variant === "stroke" ? setStrokeWidth : undefined
        }
        onColorChange={setColor}
      />

      <IconDownloadPanel
          iconName={selectedIcon.name}
          variant={selectedIcon.variant}
          size={size}
          color={color}
          strokeWidth={
            selectedIcon.variant === "stroke" ||
            selectedIcon.variant === "pixel"
             ? strokeWidth : undefined
          }
        />
    </div>
  )
}
