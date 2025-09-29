"use client";
import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import * as Icons from "@aliimam/logos";

interface LogosContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  allCategories: string[];
  iconComponents: Array<{
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }>;
}

const LogosContext = createContext<LogosContextType | undefined>(undefined);

export function LogosProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get all icon components
  const iconComponents = useMemo(() => {
    return Object.keys(Icons)
      .filter((key) => {
        const value = Icons[key as keyof typeof Icons];
        return typeof value === "function" || typeof value === "object";
      })
      .map((key) => ({
        name: key,
        Component: Icons[key as keyof typeof Icons] as React.ComponentType<
          React.SVGProps<SVGSVGElement>
        >,
      }));
  }, []);

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    iconComponents.forEach(({ Component }) => {
      const category =
        (Component as any).metadata?.category || "Uncategorized";
      categories.add(category);
    });
    return ["all", ...Array.from(categories).sort()];
  }, [iconComponents]);

  return (
    <LogosContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        allCategories,
        iconComponents,
      }}
    >
      {children}
    </LogosContext.Provider>
  );
}

export function useLogos() {
  const context = useContext(LogosContext);
  if (!context) {
    throw new Error("useLogos must be used within LogosProvider");
  }
  return context;
}