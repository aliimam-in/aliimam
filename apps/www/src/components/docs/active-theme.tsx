"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { useConfig } from "@/src/hooks/use-config"

const DEFAULT_THEME = "default"

type ThemeContextType = {
  activeTheme: string
  setActiveTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: string
}) {
  const [activeTheme, setActiveThemeState] = useState<string>(
    initialTheme || DEFAULT_THEME
  )
  
  const [config] = useConfig()

  // ✅ Only read from localStorage after mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("activeTheme")
    if (storedTheme && storedTheme !== activeTheme) {
      setActiveThemeState(storedTheme)
    }
  }, [])

  const setActiveTheme = (theme: string) => {
    setActiveThemeState(theme)
    localStorage.setItem("activeTheme", theme)
  }

  useEffect(() => {
    // Update body classes
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })
    document.body.classList.add(`theme-${activeTheme}`)
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled")
    }

    localStorage.setItem("activeTheme", activeTheme)
  }, [activeTheme])

  // Update CSS vars dynamically
  useEffect(() => { 
    const themeContainers = document.querySelectorAll('.theme-container')
    themeContainers.forEach((container) => {
      if (container instanceof HTMLElement) {
        container.style.setProperty("--radius", `${config.radius}rem`)
      }
    })
  }, [config.radius])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}
