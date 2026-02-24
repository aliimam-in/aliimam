"use client"

import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { IconCode } from "@/src/components/icons/icon-code"
import { IconViewControlsPanel } from "@/src/components/icons/icon-controls"
import { IconDownloadPanel } from "@/src/components/icons/icon-download"
import { useIconFilter } from "@/src/components/icons/icon-filter-context"
import { Icon } from "@/src/components/icons/icons"
import { IconGridLines } from "@/src/components/logos"
import { pixelIcons, solidIcons, strokeIcons } from "@/src/lib/icons"

import { Button } from "@/registry/aliimam/ui/button"

export default function IconDetailPage() {
  const params = useParams()
  const name = typeof params.name === "string" ? params.name : ""
  const router = useRouter()
  const { variant } = useIconFilter()  

  const iconSet =
        variant === "solid"
          ? solidIcons
          : variant === "stroke"
            ? strokeIcons
            : pixelIcons
            
  const iconNames = useMemo(() => Object.keys(iconSet), [iconSet])
  const currentIndex = iconNames.findIndex((n) => n === name)

  const [size, setSize] = useState(200)
  const [color, setColor] = useState("currentColor")
  const [strokeWidth, setStrokeWidth] = useState(1.5)

  if (!iconSet[name]) {
    return <div className="text-muted-foreground flex h-[80vh] items-center justify-center p-4 text-sm">
        No icons found
      </div>
  }

  const iconData = iconSet[name] as {
    category?: string
    tags?: string[]
  }

  const category = iconData?.category ?? "Uncategorized"
  const tags = iconData?.tags?.join(", ") ?? "No tags"
  const tagsArray = tags ? tags.split(",") : []

  function toPascalCase(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  }

  const componentName = toPascalCase(name)

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % iconNames.length
    router.replace(`/icons/${iconNames[nextIndex]}`)
  }

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + iconNames.length) % iconNames.length
    router.replace(`/icons/${iconNames[prevIndex]}`)
  }

  return (
    <div className="container flex h-full w-full max-w-6xl flex-col gap-2 p-2 lg:border-x">
      <div className="flex w-full md:items-end flex-col gap-3 md:flex-row">
        <div className="flex h-80 w-80 items-center justify-center border md:h-120 md:w-120">
          <Icon
            name={name}
            variant={variant}
            size={size}
            color={color}
            strokeWidth={variant === "stroke" ? strokeWidth : undefined}
          />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-full opacity-15 md:h-120" />
        </div>
        <div className="w-full justify-between flex-1 space-y-2">
          <div className="flex justify-between gap-2">
            <h1 className="text-lg font-medium">{componentName}</h1>
            <h1 className="text-md text-muted-foreground">{name}</h1>
          </div>
          <Button
            size="sm"
            className="cursor-pointer"
            variant="secondary"
            onClick={() => {
              // Navigate to /icons with hash
              window.location.href = `/icons#${category}`
            }}
          >
            {category}
          </Button>
          <p className="text-md pb-6 text-muted-foreground">
            {tagsArray.length > 0 ? tagsArray.join(" • ") : "No tags"}
          </p>

          <IconViewControlsPanel
            size={size}
            strokeWidth={strokeWidth}
            color={color}
            variant={variant}
            onSizeChange={setSize}
            onStrokeWidthChange={
              variant === "stroke" ? setStrokeWidth : undefined
            }
            onColorChange={setColor}
          />
          <IconDownloadPanel
            iconName={name}
            variant={variant}
            size={size}
            color={color}
            strokeWidth={variant === "stroke" ? strokeWidth : undefined}
          />
          <div className="flex justify-between gap-2">
            <Button className="cursor-pointer" onClick={goPrev}>Back</Button>
            <Button className="cursor-pointer" onClick={goNext}>Next</Button>
          </div>
        </div>
      </div>
      <IconCode
        iconName={name}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        variant={variant}
      />
    </div>
  )
}
