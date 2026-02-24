"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Label } from "@/registry/aliimam/ui/label"
import { Slider } from "@/registry/aliimam/ui/slider"

interface IconControlsPanelProps {
  size: number
  strokeWidth?: number
  color: string
  variant: "solid" | "stroke" | "pixel" | "glass"
  onSizeChange: (value: number) => void
  onStrokeWidthChange?: (value: number) => void
  onColorChange: (value: string) => void
}

export function IconControlsPanel({
  size,
  strokeWidth,
  color,
  variant,
  onSizeChange,
  onStrokeWidthChange,
  onColorChange,
}: IconControlsPanelProps) {
  return (
    <div className="space-y-6">
       
      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Slider
          min={16}
          max={200}
          step={4}
          value={[size]}
          onValueChange={(v) => onSizeChange(v[0])}
        />
      </div>

      {(variant === "stroke" || variant === "pixel") &&
        strokeWidth !== undefined &&
        onStrokeWidthChange && (
          <div className="space-y-2">
            <Label>Stroke Width: {strokeWidth}</Label>
            <Slider
              min={0.5}
              max={4}
              step={0.1}
              value={[strokeWidth]}
              onValueChange={(v) => onStrokeWidthChange(v[0])}
            />
          </div>
        )}
 
      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div className="h-8 w-8 border" style={{ backgroundColor: color }} />
        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="currentColor"
        />
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={() => {
            onSizeChange(64)
            onColorChange("currentColor")
            if (onStrokeWidthChange) {
              onStrokeWidthChange(2)
            }
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
  strokeWidth,
  color,
  variant,
  onSizeChange,
  onStrokeWidthChange,
  onColorChange,
}: IconControlsPanelProps) {
  return (
    <div className="space-y-6">
      {/* Size */}
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

      {(variant === "stroke" || variant === "pixel") &&
        strokeWidth !== undefined &&
        onStrokeWidthChange && (
          <div className="space-y-2">
            <Label>Stroke Width: {strokeWidth}</Label>
            <Slider
              min={0.5}
              max={4}
              step={0.1}
              value={[strokeWidth]}
              onValueChange={(v) => onStrokeWidthChange(v[0])}
            />
          </div>
        )}

      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div className="h-8 w-8 border" style={{ backgroundColor: color }} />
        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="currentColor"
        />
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={() => {
            onSizeChange(64)
            onColorChange("currentColor")
            if (onStrokeWidthChange) {
              onStrokeWidthChange(2)
            }
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}
