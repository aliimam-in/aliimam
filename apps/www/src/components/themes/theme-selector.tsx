"use client"

import { Shuffle } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { useThemeConfig } from "@/src/components/themes/active-theme"
import { Label } from "@/registry/aliimam/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/aliimam/ui/select"
import { Slider } from "@/registry/aliimam/ui/slider"
import { Button } from "@/registry/aliimam/ui/button"
import { CopyCodeButton } from "./theme-customizer"

import { THEME_PRESETS, COLOR_OPTIONS, FONT_OPTIONS } from "@/src/lib/themes"

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const {
    activeTheme,
    setActiveTheme,
    radius,
    setRadius,
    font,
    setFont,
  } = useThemeConfig()

  const sans = FONT_OPTIONS.filter(f => f.category === "sans")
  const serif = FONT_OPTIONS.filter(f => f.category === "serif")
  const mono = FONT_OPTIONS.filter(f => f.category === "mono")
  const display = FONT_OPTIONS.filter(f => f.category === "display")

  function applyThemePreset(presetName: string) {
    const preset = THEME_PRESETS.find(p => p.name === presetName)
    if (!preset) return

    setActiveTheme(preset.theme)
    setFont(preset.font)
    setRadius(preset.radius)
  }

  function applyColorOnly(color: string) {
    setActiveTheme(color)
  }

  function applyRandomTheme() {
    const preset =
      THEME_PRESETS[Math.floor(Math.random() * THEME_PRESETS.length)]

    setActiveTheme(preset.theme)
    setFont(preset.font)
    setRadius(preset.radius)
  }

  /* -----------------------------
   * UI
   * ----------------------------- */

  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      {/* Random */}
      <Button
        onClick={applyRandomTheme}
        size="sm"
        variant="outline"
        className="gap-2 cursor-pointer"
      >
        <Shuffle className="h-4 w-4" />
        Random
      </Button>

      {/* THEME PRESET SELECT (color + font + radius) */}
      <Label className="sr-only">Theme</Label>
      <Select onValueChange={applyThemePreset}>
        <SelectTrigger className="bg-secondary shadow-none w-44">
          <span className="font-medium">Theme:</span>
          <SelectValue placeholder="Choose preset" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Presets</SelectLabel>
            {THEME_PRESETS.map(preset => (
              <SelectItem key={preset.name} value={preset.name}>
                {preset.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* COLOR ONLY SELECT */}
      <Label className="sr-only">Color</Label>
      <Select value={activeTheme} onValueChange={applyColorOnly}>
        <SelectTrigger className="bg-secondary shadow-none w-40">
          <span className="font-medium">Color:</span>
          <SelectValue placeholder="Pick color" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {COLOR_OPTIONS.map(color => (
              <SelectItem
                key={color}
                value={color}
                className="capitalize data-[state=checked]:opacity-50"
              >
                {color}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>


      <Select value={font} onValueChange={setFont}>
        <SelectTrigger className="bg-secondary shadow-none w-48">
          <span className="font-medium">Font:</span>
          <SelectValue placeholder="Select font" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Sans Serif</SelectLabel>
            {sans.map(f => (
              <SelectItem key={f.value} value={f.value}>
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Serif</SelectLabel>
            {serif.map(f => (
              <SelectItem key={f.value} value={f.value}>
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Monospace</SelectLabel>
            {mono.map(f => (
              <SelectItem key={f.value} value={f.value}>
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Display</SelectLabel>
            {display.map(f => (
              <SelectItem key={f.value} value={f.value}>
                {f.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* RADIUS */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Radius:</span>

        <Slider
          value={[Number(radius)]}
          onValueChange={v => setRadius(String(v[0]))}
          min={0}
          max={2}
          step={0.05}
          className="w-28"
        />

        <span className="w-8 text-xs tabular-nums text-muted-foreground">
          {radius}
        </span>
      </div>

      <CopyCodeButton size="sm" variant="outline" className="ml-auto" />
    </div>
  )
}
