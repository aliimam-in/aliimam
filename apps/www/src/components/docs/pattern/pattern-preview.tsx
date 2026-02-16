"use client"

import { gridPatterns } from "@/src/config/patterns"

interface ActivePatternPreviewProps {
  activePattern: string | null
}

export function PatternPreview({ activePattern }: ActivePatternPreviewProps) {
  const activePatternObj = activePattern
    ? gridPatterns.find((p) => p.id === activePattern)
    : null

  if (!activePatternObj) return null

  return (
    <div className="absolute theme-container inset-0 -z-10">
      {activePatternObj.render ? (
        activePatternObj.render()
      ) : activePatternObj.style ? (
        <div className="absolute inset-0" style={activePatternObj.style} />
      ) : null}
    </div>
  )
}
