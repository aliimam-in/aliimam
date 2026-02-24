"use client"

import { useState } from "react"
import { glassIcons, pixelIcons, solidIcons, strokeIcons } from "@/src/lib/icons"
import { Check, ChevronDownIcon, Copy, Download } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/registry/aliimam/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"

interface IconDownloadPanelProps {
  iconName: string
  variant: "solid" | "stroke"  | "pixel" | "glass"
  size: number
  color: string
  strokeWidth?: number
}

export function IconDownloadPanel({
  iconName,
  variant,
  size,
  color,
  strokeWidth,
}: IconDownloadPanelProps) {
  const iconSet =
        variant === "solid"
          ? solidIcons
          : variant === "stroke"
            ? strokeIcons
            : variant === "pixel"
              ? pixelIcons
              : glassIcons
              
  const icon = iconSet[iconName]
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null)

  if (!icon) return null

  const generateSVG = () => {
    const cleanedBody = icon.body
      .replace(/stroke=".*?"/g, "")
      .replace(/fill=".*?"/g, "")
      .replace(/stroke-width=".*?"/g, "")

    return `<svg 
      width="${size}" 
      height="${size}" 
      viewBox="0 0 24 24" 
      fill="${variant === "solid" ? color : "none"}" 
      stroke="${variant === "stroke" ? color : "none"}" 
      stroke-width="${variant === "stroke" ? (strokeWidth ?? 2) : 0}" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${cleanedBody}
    </svg>`
  }

  const download = (format: "svg" | "png" | "jpg") => {
    const svgString = generateSVG()

    if (format === "svg") {
      const blob = new Blob([svgString], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${iconName}.svg`
      a.click()
      URL.revokeObjectURL(url)
      toast(`${iconName}.svg downloaded!`)
    } else {
      // Convert SVG to Canvas for PNG/JPG
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      canvas.width = size
      canvas.height = size

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, size, size)
      }

      const img = new Image()
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      })
      const url = URL.createObjectURL(blob)
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size)
        canvas.toBlob(
          (blob) => {
            if (!blob) return
            const downloadUrl = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = downloadUrl
            a.download = `${iconName}.${format}`
            a.click()
            URL.revokeObjectURL(downloadUrl)
            toast(`${iconName}.${format} downloaded!`)
          },
          format === "png" ? "image/png" : "image/jpeg",
          1.0
        )
        URL.revokeObjectURL(url)
      }
      img.src = url
    }
  }

  const copy = async (format: "svg" | "png" | "jpg" | "name") => {
    if (format === "name") {
      await navigator.clipboard.writeText(iconName)
      setCopiedFormat("name")
      toast(`${iconName} copied!`)
      setTimeout(() => setCopiedFormat(null), 1500)
      return
    }

    // Otherwise copy SVG/PNG as before
    const svgString = generateSVG()

    if (format === "svg") {
      await navigator.clipboard.writeText(svgString)
      setCopiedFormat("svg")
      toast(`${iconName}.svg copied!`)
    } else {
      // PNG/JPG copy
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      canvas.width = size
      canvas.height = size

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, size, size)
      }

      const img = new Image()
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      })
      const url = URL.createObjectURL(blob)
      img.onload = async () => {
        ctx.drawImage(img, 0, 0, size, size)
        canvas.toBlob(
          async (blob) => {
            if (!blob) return
            try {
              await navigator.clipboard.write([
                new ClipboardItem({ [blob.type]: blob }),
              ])
              setCopiedFormat(format)
              toast(`${iconName}.${format} copied!`)
            } catch (err) {
              console.error(`Failed to copy ${format}:`, err)
            }
            setTimeout(() => setCopiedFormat(null), 2000)
          },
          format === "png" ? "image/png" : "image/jpeg"
        )
        URL.revokeObjectURL(url)
      }
      img.src = url
    }
  }

  // Converts "a-arrow-up" → "AArrowUp"
  function toPascalCase(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  }

  return (
    <div className="space-y-2 pt-4">
      <div className="flex w-full flex-wrap gap-2 md:gap-0">
         
        <div className="divide-primary-background/30 flex flex-1 divide-x">
          <Button
            variant="outline"
            onClick={() => copy("svg")}
            className="flex-1 justify-center"
          >
            {copiedFormat === "svg" ? (
              <Check className="mr-1 opacity-60" size={16} />
            ) : (
              <Copy className="mr-1 opacity-60" size={16} />
            )}
            Copy
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Copy options">
                <ChevronDownIcon size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuItem onClick={() => copy("svg")}>
                SVG{" "}
                {copiedFormat === "svg" && <Check className="ml-2 h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => copy("png")}>
                PNG{" "}
                {copiedFormat === "png" && <Check className="ml-2 h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

         
        <div className="divide-primary-foreground/30 pl-2 flex flex-1 divide-x">
          <Button
            onClick={() => download("svg")}
            className="flex-1 justify-center"
          >
            <Download className="mr-1 opacity-60" size={16} />
            Download
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" aria-label="Download options">
                <ChevronDownIcon size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuItem onClick={() => download("svg")}>
                SVG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => download("png")}>
                PNG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => download("jpg")}>
                JPG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          const pascalName = toPascalCase(iconName)
          navigator.clipboard.writeText(pascalName)
          setCopiedFormat("name")
          toast(`${pascalName} copied!`)
          setTimeout(() => setCopiedFormat(null), 1500)
        }}
        className="w-full"
      >
        {copiedFormat === "name" ? (
          <Check className="mr-1 opacity-60" size={16} />
        ) : (
          <Copy className="mr-1 opacity-60" size={16} />
        )}
        Copy Component Name
      </Button>
    </div>
  )
}
