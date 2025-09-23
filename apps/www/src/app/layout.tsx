import type { Metadata } from "next";
import "@/src/styles/globals.css";
import { Geist } from "next/font/google";

import { Provider } from "@/src/components/common/provider";
import { META_THEME_COLORS, siteConfig } from "@/src/lib/config";
import { cn } from "@/registry/default/lib/utils";
import { ActiveThemeProvider } from "../components/docs/active-theme";
import { LayoutProvider } from "../hooks/use-layout";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Components", "Ali Imam"],
  authors: [
    {
      name: "Ali Imam",
      url: "https://aliimam.in",
    },
  ],
  creator: "aliimam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.jpg`,
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
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.jpg`],
    creator: "@aliimam",
  },
  icons: {
    icon: "/ai-logo.png",
    shortcut: "/ai-logo.png",
    apple: "/ai-logo.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground bg-background group/body overscroll-none antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          fontSans
        )}
      >
        <Provider>
          <LayoutProvider>
            <ActiveThemeProvider>{children}</ActiveThemeProvider>
          </LayoutProvider>
        </Provider>
      </body>
    </html>
  );
}
