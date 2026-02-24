"use client"

import { LayoutProvider } from "@/src/hooks/use-layout"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { Toaster } from "@/registry/aliimam/ui/sonner"
import { TooltipProvider } from "@/registry/aliimam/ui/tooltip"

import { ActiveThemeProvider } from "./active-theme"
import { TailwindIndicator } from "./tailwind-indicator"
import { ThemeProvider } from "./theme-provider"

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LayoutProvider>
          <ActiveThemeProvider>
            <NuqsAdapter>
              <TooltipProvider>
                {children}
                <Toaster position="bottom-center" />
              </TooltipProvider>
            </NuqsAdapter>
          </ActiveThemeProvider>
          <TailwindIndicator />
        </LayoutProvider>
      </ThemeProvider>
      <Analytics />
      <GoogleAnalytics gaId="G-7DJXCEPQ1E" />
    </div>
  )
}
