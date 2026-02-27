// src/components/ClientThemeWrapper.tsx
"use client"

import { useEffect, useState } from "react"
import { META_THEME_COLORS } from "@/src/lib/config"
import { cn } from "@/src/lib/utils"
import { fontVariables } from "@/src/lib/fonts"

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    try {
      // Theme
      const theme = localStorage.getItem("theme")
      if (
        theme === "dark" ||
        ((!theme || theme === "system") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", META_THEME_COLORS.dark)
      }

      // Layout
      const layout = localStorage.getItem("layout")
      if (layout) document.documentElement.classList.add("layout-" + layout)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {}
  }, [])

  if (!mounted) return null // render nothing until client mounts

  return (
    <div className={cn(
      "group/body bg-background overscroll-none font-mono antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
      fontVariables
    )}>
      {children}
    </div>
  )
}