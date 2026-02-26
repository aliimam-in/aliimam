"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Label } from "@/registry/aliimam/ui/label"
import { Slider } from "@/registry/aliimam/ui/slider"

import { useIconFilter } from "./icon-filter-context"

interface LogoControlsPanelProps {
  size: number
  color: string
  strokeWidth: number
  onstrokeWidthChange: (value: number) => void
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
  activeVariant?: string
}

export function IconControlsPanel({
  size,
  color,
  strokeWidth,
  onstrokeWidthChange,
  onSizeChange,
  onColorChange,
  activeVariant,
}: LogoControlsPanelProps) {
  const variantName = activeVariant?.toLowerCase() || ""
  const isFilled =
    variantName.includes("filled") || variantName.includes("pixel")

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Slider
          min={16}
          max={300}
          step={4}
          value={[size]}
          onValueChange={(v) => onSizeChange(v[0])}
        />
      </div>

      {!isFilled && (
        <div className="space-y-2">
          <Label>strokeWidth: {strokeWidth}</Label>
          <Slider
            min={0.1}
            max={4}
            step={0.1}
            value={[strokeWidth]}
            onValueChange={(v) => onstrokeWidthChange(v[0])}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color === "currentColor" ? "#000000" : color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div
          className="h-8 w-8 border"
          style={{
            backgroundColor: color === "currentColor" ? "#000000" : color,
          }}
        />
        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="currentColor"
        />
        <Button
          variant="secondary"
          size="icon"
          onClick={() => {
            onSizeChange(120)
            onColorChange("currentColor")
            onstrokeWidthChange(0.5)
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}

export function IconViewControlsPanel({
  size,
  color,
  strokeWidth,
  onstrokeWidthChange,
  onSizeChange,
  onColorChange,
  activeVariant,
}: LogoControlsPanelProps) {
  const { variantTab } = useIconFilter()
  const isFilled =
    activeVariant === "filled" ||
    activeVariant === "pixel" ||
    variantTab === "filled" ||
    variantTab === "pixel"

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Slider
          min={16}
          max={400}
          step={4}
          value={[size]}
          onValueChange={(v) => onSizeChange(v[0])}
        />
      </div>

      {!isFilled && (
        <div className="space-y-2">
          <Label>strokeWidth: {strokeWidth}</Label>
          <Slider
            min={0.1}
            max={4}
            step={0.1}
            value={[strokeWidth]}
            onValueChange={(v) => onstrokeWidthChange(v[0])}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color === "currentColor" ? "#000000" : color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div
          className="h-8 w-8 border"
          style={{
            backgroundColor: color === "currentColor" ? "#000000" : color,
          }}
        />
        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="currentColor"
        />
        <Button
          variant="secondary"
          size="icon"
          onClick={() => {
            onSizeChange(200)
            onColorChange("currentColor")
            onstrokeWidthChange(1)
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}
