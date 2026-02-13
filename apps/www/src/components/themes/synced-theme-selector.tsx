"use client"

import { useEffect } from "react"
import { useThemeConfig } from "./active-theme"
import { ThemeSelector } from "./theme-selector"

export function ThemeSelectorWithSync() {
  const { activeTheme, radius, font } = useThemeConfig()

  // Send theme, radius, and font changes to all iframes
  useEffect(() => {
    const sendToIframes = () => {
      const iframes = document.querySelectorAll('iframe')
      iframes.forEach(iframe => {
        try {
          iframe.contentWindow?.postMessage(
            { type: 'THEME_CHANGE', theme: activeTheme, radius, font },
            window.location.origin
          )
        } catch (e) {
          console.error('Failed to send theme to iframe', e)
        }
      })
    }

    sendToIframes()
    const timeout = setTimeout(sendToIframes, 100)

    return () => clearTimeout(timeout)
  }, [activeTheme, radius, font])

  return (
    <div className="fixed z-50 bottom-0 h-14 w-full border-t bg-background flex justify-center">
      <ThemeSelector />
    </div>
  )
}