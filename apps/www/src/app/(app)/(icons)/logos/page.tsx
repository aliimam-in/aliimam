"use client"

import { useEffect, useState } from "react" 
import { IconsNav } from "@/src/components/icons/icons-nav"
import { LogoCategoryTabs } from "@/src/components/icons/logo-category"
import { useLogoFilter } from "@/src/components/icons/logo-filter-context"
import { LogoSearch } from "@/src/components/icons/logo-search"
import { LogoGrid } from "@/src/components/icons/main-logos"

import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"
import { LogoPreview, LogoPreviewPhone } from "@/src/components/icons/logo-preview"

interface SelectedIcon {
  name: string
  variant: "icon" | "wordmark"
}

export default function Page() {
  const [selectedIcon, setSelectedIcon] = useState<SelectedIcon | null>(null)
  const { variant, setVariant } = useLogoFilter()

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
          <LogoSearch />
        </div>
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
      <div className="flex h-full w-full">
        <LogoCategoryTabs />
        <div className="flex h-full w-full flex-col p-2 md:flex-row">
          <div className="h-[95vh] flex-1 overflow-auto">
            <LogoGrid
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
              <LogoPreview
                selectedIcon={selectedIcon}
                onClearSelection={() => setSelectedIcon(null)}
              />
            )}
          </div>

          {selectedIcon && (
            <div className="bg-background fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t md:hidden">
              <LogoPreviewPhone
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
