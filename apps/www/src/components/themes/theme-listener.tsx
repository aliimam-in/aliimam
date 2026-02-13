"use client"

import { useEffect, useRef } from "react"
import { useThemeConfig } from "./active-theme"
import { GOOGLE_FONTS_MAP } from "@/src/lib/themes"
 

export function ThemeListener() {
  const { setActiveTheme, setRadius, setFont, activeTheme, radius, font } = useThemeConfig()
  const fontRef = useRef(font)
  const loadedFontsRef = useRef<Set<string>>(new Set())

  // Listen for messages from parent (blocks page)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      
      if (event.data.type === 'THEME_CHANGE') {
        if (event.data.theme) {
          setActiveTheme(event.data.theme)
        }
        if (event.data.radius !== undefined) {
          setRadius(event.data.radius)
        }
        if (event.data.font !== undefined) {
          setFont(event.data.font)
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [setActiveTheme, setRadius, setFont])

  // Apply theme classes
  useEffect(() => {
    // Remove existing theme classes
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })
    
    // Add new theme class
    document.body.classList.add(`theme-${activeTheme}`)
    
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled")
    }

    // Reapply font after theme change
    applyFont(fontRef.current)
  }, [activeTheme])

  // Apply radius
  useEffect(() => {
    document.documentElement.style.setProperty("--radius", `${radius}rem`)
  }, [radius])

  // Apply font
  useEffect(() => {
    fontRef.current = font
    applyFont(font)
  }, [font])

  function loadGoogleFont(fontName: string) {
    // Check if already loaded
    if (loadedFontsRef.current.has(fontName)) {
      return
    }

    // Create link element for Google Font
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`
    document.head.appendChild(link)
    
    loadedFontsRef.current.add(fontName)
  }

  function applyFont(selectedFont: string) {
    let fontFamily: string

    // Check if it's a Google Font
    if (GOOGLE_FONTS_MAP[selectedFont]) {
      const googleFontName = GOOGLE_FONTS_MAP[selectedFont]
      loadGoogleFont(googleFontName)
      fontFamily = `"${googleFontName}", sans-serif`
    } else {
      // Default/system fonts
      const fontMap: Record<string, string> = {
        sans: "var(--font-geist-sans)",
        serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "var(--font-geist-mono)",
      }
      fontFamily = fontMap[selectedFont] || fontMap.sans
    }
    
    // Apply font
    document.documentElement.style.setProperty("--font-sans", fontFamily)
    document.body.style.fontFamily = fontFamily
    
    // Also set it on the theme-container
    const themeContainer = document.querySelector('.theme-container')
    if (themeContainer instanceof HTMLElement) {
      themeContainer.style.fontFamily = fontFamily
    }
  }

  return null
}