"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Label } from "@/registry/aliimam/ui/label"
import { Slider } from "@/registry/aliimam/ui/slider"

interface LogoControlsPanelProps {
  size: number
  color: string
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
}

export function LogoControlsPanel({
  size,
  color,
  onSizeChange,
  onColorChange,
}: LogoControlsPanelProps) {
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

      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color === "currentColor" ? "#000000" : color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div className="h-8 w-8 border" style={{ backgroundColor: color === "currentColor" ? "#000000" : color }} />
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
            onSizeChange(64)
            onColorChange("currentColor")
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}

export function LogoViewControlsPanel({
  size,
  color,
  onSizeChange,
  onColorChange,
}: LogoControlsPanelProps) {
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

      <div className="flex flex-wrap items-center gap-2">
        <input
          id="color"
          type="color"
          value={color === "currentColor" ? "#000000" : color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div className="h-8 w-8 border" style={{ backgroundColor: color === "currentColor" ? "#000000" : color }} />
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
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}