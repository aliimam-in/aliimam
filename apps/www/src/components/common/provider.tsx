"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/registry/default/ui/sonner" 

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
      <Analytics />
      <GoogleAnalytics gaId="G-7DJXCEPQ1E" />
      <SpeedInsights />
    </div>
  );
}
