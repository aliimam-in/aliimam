"use client"

import { useEffect, useState } from "react"
import { IconCategoryTabs } from "@/src/components/icons/icon-category"
import { useIconFilter } from "@/src/components/icons/icon-filter-context"
import {
  IconPreview,
  IconPreviewPhone,
} from "@/src/components/icons/icon-preview"
import { IconSearch } from "@/src/components/icons/icon-search"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { IconGrid } from "@/src/components/icons/main-icons"

import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

interface SelectedIcon {
  name: string
  variant: "solid" | "stroke" | "pixel" | "glass"
}

export default function Page() {
  const [selectedIcon, setSelectedIcon] = useState<SelectedIcon | null>(null)
  const { variant, setVariant } = useIconFilter()

  useEffect(() => {
      if (selectedIcon) {
        setSelectedIcon({ ...selectedIcon, variant })
      }
    }, [variant])

  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav />
        <div className="hidden ml-auto md:block">
          <IconSearch />
        </div>
        <Tabs
          className="ml-auto"
          value={variant}
          onValueChange={(v) => setVariant(v as "stroke" | "solid" | "pixel" | "glass")}
        >
          <TabsList>
            <TabsTrigger value="stroke">Stroke</TabsTrigger>
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="pixel">Pixel</TabsTrigger>
            <TabsTrigger value="glass">Glass</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex h-full w-full">
        <IconCategoryTabs />
        <div className="flex p-2 h-full w-full flex-col md:flex-row">
          <div className="h-[95vh] flex-1 overflow-auto">
            <IconGrid
              selectedIcon={selectedIcon?.name}
              onSelectIcon={setSelectedIcon}
            />
          </div>

          <div
            className={`relative transition-all duration-300 ${
              selectedIcon
                ? "w-fit translate-x-0 opacity-100"
                : "w-0 translate-x-full opacity-0"
            }`}
          >
            {selectedIcon && (
              <IconPreview
                selectedIcon={selectedIcon}
                onClearSelection={() => setSelectedIcon(null)}
              />
            )}
          </div>

          {selectedIcon && (
            <div className="bg-background fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t md:hidden">
              <IconPreviewPhone
                selectedIcon={selectedIcon}
                onClearSelection={() => setSelectedIcon(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
