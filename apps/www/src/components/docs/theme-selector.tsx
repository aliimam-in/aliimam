"use client";

import { useEffect, useState } from "react";
import { useThemeConfig } from "./active-theme";
import { useConfig } from "@/src/hooks/use-config";
import { cn } from "@/src/lib/utils";

import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Separator } from "@/registry/default/ui/separator";
import { Slider } from "@/registry/default/ui/slider";

import { ThemeCustomizer } from "./theme-customizer";

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Scaled",
    value: "scaled",
  },
  {
    name: "Mono",
    value: "mono",
  },
];

const COLOR_THEMES = [
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
  {
    name: "Rose",
    value: "rose",
  },
  {
    name: "Purple",
    value: "purple",
  },
  {
    name: "Orange",
    value: "orange",
  },
  {
    name: "Teal",
    value: "teal",
  },
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Yellow",
    value: "yellow",
  },
];

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [config, setConfig] = useConfig();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // optionally return skeleton or null
    return null;
  }

  return (
    <div className="flex flex-wrap my-3 justify-center gap-3">
      <div className={cn("flex items-center gap-2", className)}>
        <Label htmlFor="theme-selector" className="sr-only">
          Theme
        </Label>
        <Select value={activeTheme} onValueChange={setActiveTheme}>
          <SelectTrigger
            id="theme-selector"
            size="sm"
            className="bg-secondary text-secondary-foreground border-secondary justify-start shadow-none *:data-[slot=select-value]:w-12"
          >
            <span className="font-medium">Theme:</span>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>
              {DEFAULT_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Colors</SelectLabel>
              {COLOR_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {mounted && (
        <div className="flex items-center gap-2">
          <Label className="text-xs font-medium">Border Radius</Label>
          <Slider
            value={[config.radius]}
            onValueChange={(value) => {
              if (value[0] !== undefined) {
                setConfig({
                  ...config,
                  radius: value[0], // TypeScript knows value[0] is number here
                });
              }
            }}
            max={1.5}
            min={0}
            step={0.1}
            className="w-40"
          />
          <div className="text-muted-foreground flex justify-between gap-2 text-xs">
            <span className="font-medium">{config.radius} rem</span>
          </div>
        </div>
      )}

      <ThemeCustomizer />
    </div>
  );
}

export function DocThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [config, setConfig] = useConfig();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // optionally return skeleton or null
    return null;
  }

  return (
    <div className="flex flex-col px-4 pt-6 justify-center gap-3">
      {mounted && (
        <div className="flex flex-col items-center gap-3">
          <div className="text-muted-foreground flex justify-between gap-2 text-xs">
            <Label className="text-xs font-medium">Border Radius:</Label>
            <span className="text-brand font-semibold">
              {config.radius} rem
            </span>
          </div>
          <Slider
            value={[config.radius]}
            onValueChange={(value) => {
              if (value[0] !== undefined) {
                setConfig({
                  ...config,
                  radius: value[0], // TypeScript knows value[0] is number here
                });
              }
            }}
            max={1.5}
            min={0}
            step={0.1}
            className="w-40"
          />
        </div>
      )}
      <div
        className={cn(
          "flex w-full items-center justify-center gap-2",
          className
        )}
      >
        <Label htmlFor="theme-selector" className="sr-only">
          Theme
        </Label>
        <Select value={activeTheme} onValueChange={setActiveTheme}>
          <SelectTrigger
            id="theme-selector"
            size="sm"
            className="bg-secondary text-secondary-foreground border-secondary justify-start shadow-none *:data-[slot=select-value]:w-12"
          >
            <span className="font-medium">Theme:</span>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>
              {DEFAULT_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Colors</SelectLabel>
              {COLOR_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function BlockThemeSelector({}: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [config, setConfig] = useConfig();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // optionally return skeleton or null
    return null;
  }

  return (
    <div className="flex px-4 pt-6 items-end justify-center gap-3">
      {mounted && (
        <div className="flex flex-col items-center gap-3">
          <div className="text-muted-foreground flex justify-between gap-2 text-xs">
            <Label className="text-xs font-medium">Border Radius:</Label>
            <span className="text-brand font-semibold">
              {config.radius}rem
            </span>
          </div>
          <Slider
            value={[config.radius]}
            onValueChange={(value) => {
              if (value[0] !== undefined) {
                setConfig({
                  ...config,
                  radius: value[0], // TypeScript knows value[0] is number here
                });
              }
            }}
            max={1.5}
            min={0}
            step={0.1}
            className="w-40"
          />
        </div>
      )}
      <div className={cn("flex w-full items-center justify-center gap-2")}>
        <Label htmlFor="theme-selector" className="sr-only">
          Theme
        </Label>
        <Select value={activeTheme} onValueChange={setActiveTheme}>
          <SelectTrigger
            id="theme-selector"
            size="sm"
            className="bg-secondary text-secondary-foreground border-secondary justify-start shadow-none *:data-[slot=select-value]:w-12"
          >
            <span className="font-medium">Theme:</span>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>
              {DEFAULT_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Colors</SelectLabel>
              {COLOR_THEMES.map((theme) => (
                <SelectItem
                  key={theme.name}
                  value={theme.value}
                  className="data-[state=checked]:opacity-50"
                >
                  {theme.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
