"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useConfig } from "@/src/hooks/use-config";

const DEFAULT_THEME = "default";

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  radius: number;
  setRadius: (radius: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: string;
}) {
  const [activeTheme, setActiveThemeState] = useState<string>(
    initialTheme || DEFAULT_THEME
  );
  const [config] = useConfig();
  const [radius, setRadiusState] = useState<number>(config.radius || 1);

  // Load theme & radius from localStorage after mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("activeTheme");
    if (storedTheme && storedTheme !== activeTheme) {
      setActiveThemeState(storedTheme);
    }

    const storedRadius = localStorage.getItem("radius");
    if (storedRadius) {
      setRadiusState(parseFloat(storedRadius));
    }
  }, []);

  // Update theme
  const setActiveTheme = (theme: string) => {
    setActiveThemeState(theme);
    localStorage.setItem("activeTheme", theme);
  };

  // Update radius
  const setRadius = (newRadius: number) => {
    setRadiusState(newRadius);
    localStorage.setItem("radius", newRadius.toString());
  };

  // Apply theme classes to body
  useEffect(() => {
    const body = document.body;

    // Remove old theme classes
    Array.from(body.classList)
      .filter((cls) => cls.startsWith("theme-"))
      .forEach((cls) => body.classList.remove(cls));

    // Add new theme
    body.classList.add(`theme-${activeTheme}`);
    if (activeTheme.endsWith("-scaled")) {
      body.classList.add("theme-scaled");
    }

    localStorage.setItem("activeTheme", activeTheme);
  }, [activeTheme]);
 
  useEffect(() => {
    document.body.style.setProperty("--radius", `${radius}rem`);
    localStorage.setItem("radius", radius.toString()); 
  }, [radius]);

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, radius, setRadius }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider"
    );
  }
  return context;
}
