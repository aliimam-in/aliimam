// src/app/layout.tsx
import type { Metadata } from "next"
import { fontVariables } from "@/src/lib/fonts"
import { cn } from "@/src/lib/utils"
import "@/src/styles/globals.css"
import { Provider } from "@/src/components/themes/provider"
import ClientThemeLayout from "@/src/components/layout/client-layout"
import { category, keywords, siteConfig } from "../lib/config"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: keywords,
  classification: "Web Development, CSS Tools, Design Resources",
  category: Array.isArray(category) ? category.join(", ") : category,
  authors: [
    { name: "Ali Imam", url: "https://aliimam_in" },
  ],
  creator: "Ali Imam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@aliimam",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  applicationName: "Ali Imam",
  other: {
    "application-name": "Ali Imam",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Ali Imam",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "article:author": "Ali Imam",
    "article:publisher": "https://github.com/aliimam-in",
    "article:section": "Web Development",
    "article:tag": "CSS, Background Patterns, Gradients, Web Design",
    "og:updated_time": new Date().toISOString(),
    "og:locale": "en_US",
    "og:type": "website",
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    copyright: "© 2026 Ali Imam. All rights reserved.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cn( "group/body bg-background overscroll-none font-mono antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]", fontVariables )}>
        <Provider>
          <ClientThemeLayout>{children}</ClientThemeLayout>
        </Provider>
      </body>
    </html>
  )
}