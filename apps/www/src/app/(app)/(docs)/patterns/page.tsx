"use client"

import { useEffect, useState } from "react"
import PatternShowcase from "@/src/components/docs/pattern/pattern-showcase"
import { gridPatterns } from "@/src/config/patterns"
import { useTheme } from "@/src/hooks/useTheme"
import { PatternPreview } from "@/src/components/docs/pattern/pattern-preview"

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(null)
  const { theme, updateThemeFromPattern } = useTheme()

  useEffect(() => {
    updateThemeFromPattern(activePattern, gridPatterns)
  }, [activePattern, updateThemeFromPattern])

  return (
    <>
      <div className="relative z-10">
        <PatternPreview activePattern={activePattern}/>
        <PatternShowcase
          activePattern={activePattern}
          setActivePattern={setActivePattern}
          theme={theme}
        />
      </div>
    </>
  )
}
