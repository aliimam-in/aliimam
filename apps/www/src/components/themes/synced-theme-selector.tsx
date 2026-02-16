"use client"

import { useEffect } from "react"

import { useThemeConfig } from "./active-theme"
import { ThemePattern, ThemeSelector } from "./theme-selector"

export function ThemeSelectorWithSync() {
  const { activeTheme, radius, font } = useThemeConfig()

  // Send theme, radius, and font changes to all iframes
  useEffect(() => {
    const sendToIframes = () => {
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            { type: "THEME_CHANGE", theme: activeTheme, radius, font },
            window.location.origin
          )
        } catch (e) {
          console.error("Failed to send theme to iframe", e)
        }
      })
    }

    sendToIframes()
    const timeout = setTimeout(sendToIframes, 100)

    return () => clearTimeout(timeout)
  }, [activeTheme, radius, font])

  return (
    <div className="bg-background fixed bottom-0 z-50 flex h-14 w-full justify-center border-t">
      <ThemeSelector />
    </div>
  )
}

export function ThemeSelectorPattern() {
  const { activeTheme } = useThemeConfig()

  useEffect(() => {
    const sendToIframes = () => {
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            { type: "THEME_CHANGE", theme: activeTheme },
            window.location.origin
          )
        } catch (e) {
          console.error("Failed to send theme to iframe", e)
        }
      })
    }

    sendToIframes()
    const timeout = setTimeout(sendToIframes, 100)

    return () => clearTimeout(timeout)
  }, [activeTheme])

  return (
    <div className="bg-background fixed bottom-0 z-50 flex h-14 w-full justify-center border-t">
      <ThemePattern />
    </div>
  )
}
