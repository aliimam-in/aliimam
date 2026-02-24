"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { LogoCode } from "@/src/components/icons/logo-code"
import { LogoViewControlsPanel } from "@/src/components/icons/logo-controls"
import { LogoDownloadPanel } from "@/src/components/icons/logo-download"
import { useLogoFilter } from "@/src/components/icons/logo-filter-context"
import { Logos } from "@/src/components/icons/logos"
import { IconGridLines } from "@/src/components/logos"
import { iconIcons, wordmarkIcons } from "@/src/lib/icons"
import { Link2 } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

export default function IconDetailPage() {
  const params = useParams()
  const name = typeof params.name === "string" ? params.name : ""
  const router = useRouter()
  const { variant } = useLogoFilter()

  const iconSet = variant === "icon" ? iconIcons : wordmarkIcons

  const iconNames = useMemo(() => Object.keys(iconSet), [iconSet])
  const currentIndex = iconNames.findIndex((n) => n === name)

  const [size, setSize] = useState(200)
  const [color, setColor] = useState("currentColor")

  if (!iconSet[name]) {
    return (
      <div className="text-muted-foreground flex h-[80vh] items-center justify-center p-4 text-sm">
        No icons found
      </div>
    )
  }

  const iconData = iconSet[name] as {
    category?: string
    tags?: string[]
    link?: string
  }

  const category = iconData?.category ?? "Uncategorized"
  const link = iconData?.link ?? "logos"
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
    router.replace(`/logos/${iconNames[nextIndex]}`)
  }

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + iconNames.length) % iconNames.length
    router.replace(`/logos/${iconNames[prevIndex]}`)
  }

  return (
    <div className="container flex h-full w-full max-w-6xl flex-col gap-2 p-2 lg:border-x">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-end">
        <div className="flex h-80 w-80 items-center justify-center border md:h-120 md:w-120">
          <Logos name={name} variant={variant} size={size} color={color} />
          <IconGridLines className="bg-code absolute -z-10 h-80 w-full opacity-15 md:h-120" />
        </div>
        <div className="w-full flex-1 justify-between space-y-2">
          <div className="flex justify-between gap-2">
            <h1 className="text-lg font-medium">{componentName}</h1>
            <Button variant={"ghost"} size={"icon"}>
              <Link target="_blank" href={link}>
                <Link2 className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Button
            size="sm"
            className="cursor-pointer"
            variant="secondary"
            onClick={() => {
              window.location.href = `/logos#${category}`
            }}
          >
            {category}
          </Button>
          <p className="text-md text-muted-foreground pb-6">
            {tagsArray.length > 0 ? tagsArray.join(" • ") : "No tags"}
          </p>

          <LogoViewControlsPanel
            size={size}
            color={color}
            variant={variant}
            onSizeChange={setSize}
            onColorChange={setColor}
          />
          <LogoDownloadPanel
            iconName={name}
            variant={variant}
            size={size}
            color={color}
          />
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
      <LogoCode iconName={name} size={size} color={color} variant={variant} />
    </div>
  )
}
