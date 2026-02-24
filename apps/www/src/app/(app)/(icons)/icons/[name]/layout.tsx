"use client"

import { useIconFilter } from "@/src/components/icons/icon-filter-context"
import { IconsNav } from "@/src/components/icons/icons-nav"

import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { variant, setVariant } = useIconFilter()
  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav /> 
        <Tabs
          className="ml-auto"
          value={variant}
          onValueChange={(v) => setVariant(v as "stroke" | "solid" | "pixel")}
        >
          <TabsList>
            <TabsTrigger value="stroke">Stroke</TabsTrigger>
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="pixel">Pixel</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>{children}</div>
    </div>
  )
}
