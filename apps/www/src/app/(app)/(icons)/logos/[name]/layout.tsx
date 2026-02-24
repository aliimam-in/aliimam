"use client"

import { useLogoFilter } from "@/src/components/icons/logo-filter-context"
import { IconsNav } from "@/src/components/icons/icons-nav"

import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { variant, setVariant } = useLogoFilter()
  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav /> 
        <Tabs
          className="ml-auto"
          value={variant}
          onValueChange={(v) => setVariant(v as "icon" | "wordmark")}
        >
          <TabsList>
            <TabsTrigger value="icon">Icon</TabsTrigger>
            <TabsTrigger value="wordmark">Wordmark</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>{children}</div>
    </div>
  )
}
