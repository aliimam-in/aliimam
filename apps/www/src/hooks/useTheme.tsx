"use client"

import { useState } from "react"
import { THEME_CONFIG } from "@/src/lib/categories"
import { Pattern } from "@/src/types/pattern"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const updateThemeFromPattern = (
    activePattern: string | null,
    patterns: Pattern[]
  ) => {
    if (!activePattern) {
      setTheme(THEME_CONFIG.light)
      return
    }

    const activePatternObj = patterns.find((p) => p.id === activePattern)
    if (!activePatternObj) {
      setTheme(THEME_CONFIG.light)
      return
    }

    // Check if pattern ID starts with "dark-" or contains specific dark colors
  }

  return {
    theme,
    setTheme,
    updateThemeFromPattern,
  }
}
