"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Label } from "@/registry/aliimam/ui/label"
import { Slider } from "@/registry/aliimam/ui/slider"
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerFormatSelect,
  ColorPickerHueSlider,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerTrigger,
} from "@/registry/aliimam/ui/color-picker"

interface LogoControlsPanelProps {
  size: number
  color: string
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
}

export function VectorControlsPanel({
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

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ColorPicker
          value={color === "currentColor" ? "currentColor" : color}
          onValueChange={onColorChange}
          defaultValue="currentColor"
          format="hex"
        >
          <div className="flex gap-2">
          <ColorPickerTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 p-0 pr-3 pl-1.5"
            >
              <ColorPickerSwatch className="size-6" />
              Pick Color
            </Button>
          </ColorPickerTrigger>
          <Input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 w-32"
            placeholder="currentColor"
          />
          </div>

          <ColorPickerContent className="w-60" side="left" align="start">
            <ColorPickerArea />

            <div className="flex items-center gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <ColorPickerHueSlider />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ColorPickerFormatSelect />
              <ColorPickerInput withoutAlpha/>
            </div>
          </ColorPickerContent>
        </ColorPicker>
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

export function VectorViewControlsPanel({
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

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ColorPicker
          value={color === "currentColor" ? "#000000" : color}
          onValueChange={onColorChange}
          format="hex"
        >
          <div className="flex gap-2">
          <ColorPickerTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 p-0 pr-3 pl-1.5"
            >
              <ColorPickerSwatch className="size-6" />
              Pick Color
            </Button>
          </ColorPickerTrigger>
          <Input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 w-32"
            placeholder="currentColor"
          />
          </div>

          <ColorPickerContent>
            <ColorPickerArea />

            <div className="flex items-center gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <ColorPickerHueSlider />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ColorPickerFormatSelect />
              <ColorPickerInput />
            </div>
          </ColorPickerContent>
        </ColorPicker>
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