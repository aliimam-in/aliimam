import type { Metadata } from "next";
import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import { Loader } from "lucide-react";

import { Provider } from "@/components/common/provider";
import { siteConfig } from "@/lib/config";

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950 font-sans tracking-[-0.25px] antialiased`}
      >
        <Provider>
          <Suspense
            fallback={
              <div className="mt-[400px] flex h-screen justify-center">
                <Loader strokeWidth={0.5} className="h-10 w-10 animate-spin" />
              </div>
            }
          >
            <main className="grow">{children}</main>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
