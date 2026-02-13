"use client"

import * as React from "react"
import { IconCheck, IconCopy } from "@tabler/icons-react"
import { cn } from "@/src/lib/utils"
import { useThemeConfig } from "@/src/components/themes/active-theme"
import { copyToClipboardWithMeta } from "@/src/components/copy-button"
import { Button } from "@/registry/aliimam/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/aliimam/ui/dialog"
import { getFontVariable, GOOGLE_FONTS_MAP } from "@/src/lib/themes"
import { THEME_COLORS } from "@/src/lib/theme-colors"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/aliimam/ui/tabs"

export function CopyCodeButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { activeTheme = "neutral", radius, font } = useThemeConfig()
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (!hasCopied) return
    const t = setTimeout(() => setHasCopied(false), 2000)
    return () => clearTimeout(t)
  }, [hasCopied])

  const themeCode = React.useMemo(
    () => generateThemeCode(activeTheme, Number(radius), font),
    [activeTheme, radius, font]
  )

  const fontCode = React.useMemo(
    () => generateFontCode(font),
    [font]
  )

  const handleCopy = (code: string) => {
    copyToClipboardWithMeta(code, {
      name: "copy_theme_code",
      properties: {
        theme: activeTheme,
        radius,
        font,
      },
    })
    setHasCopied(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-2 cursor-pointer", className)}
          {...props}
        >
          <IconCopy className="h-4 w-4" />
          <span className="hidden sm:inline">Copy Code</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl h-full w-full max-h-[60vh] overflow-auto">
        <Tabs defaultValue="color" className="w-full">
          <TabsList>
            <TabsTrigger value="color">Color Theme</TabsTrigger>
            <TabsTrigger value="font">Font Setup</TabsTrigger>
          </TabsList>
 
          <TabsContent value="color" className="max-w-[405px]">
            <DialogHeader className="py-3">
              <DialogTitle className="capitalize">
                {activeTheme} Theme
              </DialogTitle>
              <DialogDescription>
                Copy and paste this into your CSS file
              </DialogDescription>
            </DialogHeader>

            <div className="relative">
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 z-10"
                onClick={() => handleCopy(themeCode)}
              >
                {hasCopied ? (
                  <IconCheck className="h-4 w-4" />
                ) : (
                  <IconCopy className="h-4 w-4" />
                )}
              </Button>

              <pre className="bg-code p-4 pt-12 overflow-auto text-sm">
                <code>{themeCode}</code>
              </pre>
            </div>
          </TabsContent>
 
          <TabsContent value="font" className="max-w-[405px]">
          <DialogHeader className="py-3">
               
              <DialogDescription>
                Copy and paste this into your app/layout.tsx file
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 z-10"
                onClick={() => handleCopy(fontCode)}
              >
                {hasCopied ? (
                  <IconCheck className="h-4 w-4" />
                ) : (
                  <IconCopy className="h-4 w-4" />
                )}
              </Button>

              <pre className="bg-code p-4 pt-12 overflow-auto text-sm">
                <code>{fontCode}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}


function generateThemeCode(
  themeName: string,
  radiusValue: number,
  fontValue: string
): string {
  let fontFamily = "system-ui, sans-serif"
  let fontImport = ""

  if (GOOGLE_FONTS_MAP[fontValue]) {
    const name = GOOGLE_FONTS_MAP[fontValue]
    fontFamily = `"${name}", sans-serif`
    fontImport = `@import url("https://fonts.googleapis.com/css2?family=${name.replace(
      / /g,
      "+"
    )}:wght@300;400;500;600;700&display=swap");\n\n`
  }

  const themeColors = THEME_COLORS[themeName] ?? THEME_COLORS.neutral

  const formatVars = (vars: Record<string, string>) =>
    Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n")

  return `${fontImport}:root {
  --radius: ${radiusValue}rem;
${formatVars(themeColors.light)}
}

.dark {
${formatVars(themeColors.dark)}
}

* {
  font-family: ${fontFamily};
}`.trim()
}


function generateFontCode(font: string): string {
  const fontName = GOOGLE_FONTS_MAP[font] ?? "Inter"
  const variable = getFontVariable(font)

  const importName = fontName.replace(/ /g, "_")

  return `import { ${importName} } from "next/font/google"

export const font = ${importName}({
  subsets: ["latin"], 
  variable: "${variable}",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  )
}`
}
