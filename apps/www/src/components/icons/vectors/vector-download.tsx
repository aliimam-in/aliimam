 
"use client"

import { useState } from "react"
import { Check, ChevronDownIcon, Copy, Download } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/registry/aliimam/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"

interface LogoDownloadPanelProps {
  logoName: string // exact id e.g. "ad" or "ad_filled"
  size: number
  color: string
}

function getSvgString(size: number, color: string): string | null {
  const el = document.getElementById("preview-svg")
  if (!el) return null
  const clone = el.cloneNode(true) as SVGElement
  clone.setAttribute("width", String(size))
  clone.setAttribute("height", String(size))
  // color apply karo — currentColor ko actual color se replace karo
  clone.style.color = color === "currentColor" ? "black" : color
  // currentColor references ko actual color value se replace karo
  const svgStr = new XMLSerializer().serializeToString(clone)
  const resolvedColor = color === "currentColor" ? "black" : color
  return svgStr.replace(/currentColor/g, resolvedColor)
}
 
function toPascalCase(name: string): string {
  return (
    name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  )
}

export function VectorDownloadPanel({ logoName, size, color }: LogoDownloadPanelProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null)

  const download = (format: "svg" | "png" | "jpg") => {
    const svgString = getSvgString(size, color)  // ← color pass karo
    if (!svgString) return
    if (!svgString) return

    if (format === "svg") {
      const blob = new Blob([svgString], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${logoName}.svg`
      a.click()
      URL.revokeObjectURL(url)
      toast(`${logoName}.svg downloaded!`)
      return
    }

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
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size)
      canvas.toBlob(
        (blob) => {
          if (!blob) return
          const downloadUrl = URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = downloadUrl
          a.download = `${logoName}.${format}`
          a.click()
          URL.revokeObjectURL(downloadUrl)
          toast(`${logoName}.${format} downloaded!`)
        },
        format === "png" ? "image/png" : "image/jpeg",
        1.0
      )
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  const copy = async (format: "svg" | "png" | "name") => {
    if (format === "name") {
      const pascalName = toPascalCase(logoName)
      await navigator.clipboard.writeText(pascalName)
      setCopiedFormat("name")
      toast(`${pascalName} copied!`)
      setTimeout(() => setCopiedFormat(null), 1500)
      return
    }

    const svgString = getSvgString(size, color) 
    if (!svgString) return

    if (format === "svg") {
      await navigator.clipboard.writeText(svgString)
      setCopiedFormat("svg")
      toast(`${logoName}.svg copied!`)
      setTimeout(() => setCopiedFormat(null), 1500)
      return
    }

    // PNG copy
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = size
    canvas.height = size

    const img = new Image()
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    img.onload = async () => {
      ctx.drawImage(img, 0, 0, size, size)
      canvas.toBlob(async (blob) => {
        if (!blob) return
        try {
          await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })])
          setCopiedFormat("png")
          toast(`${logoName}.png copied!`)
        } catch (err) {
          console.error("Failed to copy PNG:", err)
        }
        setTimeout(() => setCopiedFormat(null), 2000)
      }, "image/png")
      URL.revokeObjectURL(url)
    }
    img.src = url
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
                SVG {copiedFormat === "svg" && <Check className="ml-2 h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => copy("png")}>
                PNG {copiedFormat === "png" && <Check className="ml-2 h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="divide-primary-foreground/30 flex flex-1 divide-x pl-2">
          <Button onClick={() => download("svg")} className="flex-1 justify-center">
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
              <DropdownMenuItem onClick={() => download("svg")}>SVG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => download("png")}>PNG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => download("jpg")}>JPG</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Button variant="outline" onClick={() => copy("name")} className="w-full">
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