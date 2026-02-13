"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

const DEFAULT_THEME = "aliimam"
const DEFAULT_RADIUS = "0.5"
const DEFAULT_FONT = "mono" // default font

type ThemeContextType = {
  activeTheme: string
  setActiveTheme: (theme: string) => void
  radius: string
  setRadius: (radius: string) => void
  font: string
  setFont: (font: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ActiveThemeProvider({
  children,
  initialTheme,
  initialRadius,
  initialFont,
}: {
  children: ReactNode
  initialTheme?: string
  initialRadius?: string
  initialFont?: string
}) {
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('activeTheme') || initialTheme || DEFAULT_THEME
    }
    return initialTheme || DEFAULT_THEME
  })
  
  const [radius, setRadius] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('radius') || initialRadius || DEFAULT_RADIUS
    }
    return initialRadius || DEFAULT_RADIUS
  })

  const [font, setFont] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('font') || initialFont || DEFAULT_FONT
    }
    return initialFont || DEFAULT_FONT
  })

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('activeTheme', activeTheme)
  }, [activeTheme])

  useEffect(() => {
    localStorage.setItem('radius', radius)
  }, [radius])

  useEffect(() => {
    localStorage.setItem('font', font)
  }, [font])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, radius, setRadius, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}