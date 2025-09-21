import type { Metadata } from "next";
import "@/src/styles/globals.css"; 
import { Geist } from "next/font/google";
import { Suspense } from "react";
import { Loader } from "lucide-react";

import { Provider } from "@/src/components/common/provider";
import { siteConfig } from "@/src/lib/config";
import { Header } from "@/src/components/layout/header";
import { Footer } from "../components/layout/footer";
import { cn } from "@/registry/default/lib/utils";

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
  keywords: ["Next.js", "React", "Tailwind CSS", "Components", "aliimam"],
  authors: [
    {
      name: "aliimam",
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
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          fontSans
        )}
      >
        <Provider>
          <Header />
          <Suspense
            fallback={
              <div className="mt-[400px] flex h-screen justify-center">
                <Loader strokeWidth={0.5} className="h-10 w-10 animate-spin" />
              </div>
            }
          >
            <main className="grow">{children}</main>
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
