"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Label } from "@/registry/aliimam/ui/label"
import { Slider } from "@/registry/aliimam/ui/slider"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/aliimam/ui/toggle-group"

import { useIconFilter } from "./icon-filter-context"

interface LogoControlsPanelProps {
  size: number
  color: string
  strokeWidth: number
  strokeLinejoin?: "round" | "miter" | "bevel"
  strokeLinecap?: "round" | "butt" | "square"
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
  onstrokeWidthChange: (value: number) => void
  onStrokeLinejoinChange?: (value: "round" | "miter" | "bevel") => void
  onStrokeLinecapChange?: (value: "round" | "butt" | "square") => void
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
    variantName.includes("filled") || variantName.includes("doodle")

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

      <div className="flex flex-wrap items-center justify-between gap-2">
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
  strokeLinejoin,
  strokeLinecap,
  onStrokeLinecapChange,
  onStrokeLinejoinChange,
  onstrokeWidthChange,
  onSizeChange,
  onColorChange,
  activeVariant,
}: LogoControlsPanelProps) {
  const { variantTab } = useIconFilter()
  const isFilled =
    activeVariant === "filled" || 
    activeVariant === "rounded" ||
    activeVariant === "doodle" ||
    variantTab === "filled" ||
    variantTab === "doodle"

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

      <div className="flex w-full gap-2">
        {!isFilled && (onStrokeLinecapChange || onStrokeLinejoinChange) && (
          <div className="flex w-full gap-2">
            {!isFilled && onStrokeLinecapChange && (
              <div className="flex-1 space-y-2">
                <Label>Cap: {strokeLinecap}</Label>
                <ToggleGroup
                  type="single"
                  size="sm"
                  variant="outline"
                  value={strokeLinecap}
                  onValueChange={(val) =>
                    val &&
                    onStrokeLinecapChange(val as "round" | "butt" | "square")
                  }
                  className="w-full"
                >
                  {(["round", "butt", "square"] as const).map((val) => (
                    <ToggleGroupItem
                      key={val}
                      value={val}
                      className="flex-1 text-xs"
                    >
                      {val}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            )}

            {activeVariant !== "filled" &&
              activeVariant !== "pixel" &&
              onStrokeLinejoinChange && (
                <div className="flex-1 space-y-2">
                  <Label>Join: {strokeLinejoin}</Label>
                  <ToggleGroup
                    type="single"
                    size="sm"
                    variant="outline"
                    value={strokeLinejoin}
                    onValueChange={(val) =>
                      val &&
                      onStrokeLinejoinChange(val as "round" | "miter" | "bevel")
                    }
                    className="w-full"
                  >
                    {(["round", "miter", "bevel"] as const).map((val) => (
                      <ToggleGroupItem
                        key={val}
                        value={val}
                        className="flex-1 text-xs"
                      >
                        {val}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              )}
          </div>
        )}
      </div>

      <div className="flex -mt-4 flex-wrap items-center justify-between gap-2">
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
