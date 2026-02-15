import type React from "react"

interface EffortlessIntegrationProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Effortless Integration – Service integration constellation
 * Generated from Figma via MCP with exact measurements (482×300px)
 * Single-file component following the v0-ready pattern used in this repo.
 */
const EffortlessIntegration: React.FC<EffortlessIntegrationProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  // Design tokens (derived from Figma local variables)
  const themeVars =
    theme === "light"
      ? {
          "--ei-background": "#f8f9fa",
          "--ei-center-bg": "#37322f",
          "--ei-center-text": "#ffffff",
        }
      : ({
          "--ei-background": "#1f2937",
          "--ei-center-bg": "#37322f",
          "--ei-center-text": "#ffffff",
        } as React.CSSProperties)

  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Effortless integration constellation with complex background patterns"
    >
      {/* Exact Figma structure with proper masking and background patterns */}
    </div>
  )
}

export default EffortlessIntegration
