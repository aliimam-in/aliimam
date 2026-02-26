"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { IconCategoryTabs } from "@/src/components/icons/icons/icon-category"
import {
  IconPreview,
  IconPreviewPhone,
} from "@/src/components/icons/icons/icon-preview"
import { IconSearch } from "@/src/components/icons/icons/icon-search"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { IconGrid } from "@/src/components/icons/icons/main-icons"
import { useIconFilter } from "@/src/components/icons/icons/icon-filter-context"
import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs" 

type VariantTab = "outline" | "filled" 

const VARIANT_TABS: { value: VariantTab; label: string }[] = [
  { value: "outline", label: "Outline" },
  { value: "filled", label: "Filled" }, 
]

export default function Page() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)
  const { variantTab, setVariantTab, setCategory } = useIconFilter()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Tab sync from ?tab=
  useEffect(() => {
    const tab = searchParams.get("tab") as VariantTab | null
    if (tab && VARIANT_TABS.some((t) => t.value === tab)) {
      setVariantTab(tab)
    } else {
      setVariantTab("outline")
    }
    setSelectedLogo(null)
  }, [searchParams, setVariantTab])

  // Category sync from #hash — only on mount + hashchange
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "") || null
      setCategory(hash)
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [setCategory])

  const handleTabChange = (value: string) => {
  const tab = value as VariantTab
  const params = new URLSearchParams()
  if (tab !== "outline") params.set("tab", tab)
  const hash = window.location.hash
  router.push(`/icons${params.size ? `?${params}` : ""}${hash}`, { scroll: false })
}

  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav /> 
        <div className="ml-auto hidden md:block">
          <IconSearch />
        </div>
        <Tabs className="ml-auto" value={variantTab} onValueChange={handleTabChange}>
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
            <IconGrid selectedLogo={selectedLogo} onSelectLogo={setSelectedLogo} />
          </div>

          <div
            className={`relative transition-all duration-300 ${
              selectedLogo ? "w-fit translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0"
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