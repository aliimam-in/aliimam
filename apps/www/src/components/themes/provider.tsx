"use client";

import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/registry/aliimam/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { TooltipProvider } from "@/registry/aliimam/ui/tooltip";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LayoutProvider } from "@/src/hooks/use-layout";
import { ActiveThemeProvider } from "./active-theme";
import { TailwindIndicator } from "./tailwind-indicator";
import { IconsProvider } from "../icons/icon-context";
import { LogosProvider } from "../icons/logo-context";

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
                <LayoutProvider>
                    <ActiveThemeProvider>
                        <NuqsAdapter>
                            <TooltipProvider>
                                <IconsProvider>
                                    <LogosProvider> 
                                        {children} 
                                        <Toaster position="bottom-center" />
                                    </LogosProvider>
                                </IconsProvider>
                            </TooltipProvider>
                        </NuqsAdapter>
                    </ActiveThemeProvider>
                    <TailwindIndicator />
                </LayoutProvider>
            </ThemeProvider>
            <Analytics />
            <GoogleAnalytics gaId="G-7DJXCEPQ1E" />

        </div>
    );
}
