"use client"

import { useState } from "react"
import { IconCategoryTabs } from "@/src/components/icons/icon-category"
import {
  IconPreview,
  IconPreviewPhone,
} from "@/src/components/icons/icon-preview"
import { IconSearch } from "@/src/components/icons/icon-search"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { IconGrid } from "@/src/components/icons/main-icons"
import { useIconFilter } from "@/src/components/icons/icon-filter-context"

import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

// These are hidden from the category sidebar but shown as variant tabs
const VARIANT_TABS = [
  { value: "outline", label: "Outline" },
  { value: "filled", label: "Filled" },
  { value: "circle", label: "Circle" },
]

export default function Page() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)
  const { variantTab, setVariantTab } = useIconFilter()

  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav />
        <div className="ml-auto hidden md:block">
          <IconSearch totalCount={1701} />
        </div>
        <Tabs
          className="ml-auto"
          value={variantTab}
          onValueChange={(v) => {
            setVariantTab(v as "outline" | "filled" | "circle")
            setSelectedLogo(null)
          }}
        >
          <TabsList>
            {VARIANT_TABS.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex h-full w-full">
        <IconCategoryTabs />

        <div className="flex h-full w-full flex-col p-2 md:flex-row">
          <div className="h-[95vh] flex-1 overflow-auto">
            <IconGrid
              selectedLogo={selectedLogo}
              onSelectLogo={setSelectedLogo}
            />
          </div>

          <div
            className={`relative transition-all duration-300 ${
              selectedLogo
                ? "w-fit translate-x-0 opacity-100"
                : "w-0 translate-x-full opacity-0"
            }`}
          >
            {selectedLogo && (
              <IconPreview
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            )}
          </div>

          {selectedLogo && (
            <div className="bg-background fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t md:hidden">
              <IconPreviewPhone
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}