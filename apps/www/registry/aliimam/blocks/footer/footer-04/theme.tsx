"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/registry/aliimam/ui/switch"

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(resolvedTheme === "dark")
  }, [resolvedTheme])

  const handleToggle = (checked: boolean) => {
    setIsDark(checked)
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="group inline-flex items-center gap-2">
      <span
        className={`${
          isDark ? "text-white/60" : ""
        } flex-1 cursor-pointer text-right text-sm font-medium`}
        onClick={() => handleToggle(false)}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
      <Switch
        id="theme-switch"
        checked={isDark}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
      <span
        className={`${
          !isDark ? "text-white/60" : ""
        } flex-1 cursor-pointer text-left text-sm font-medium`}
        onClick={() => handleToggle(true)}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
    </div>
  )
}
