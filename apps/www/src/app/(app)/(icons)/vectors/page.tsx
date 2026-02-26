"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { VectorCategoryTabs } from "@/src/components/icons/vectors/vector-category"
import {
  VectorPreview,
  VectorPreviewPhone,
} from "@/src/components/icons/vectors/vector-preview"
import { VectorSearch } from "@/src/components/icons/vectors/vector-search"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { VectorGrid } from "@/src/components/icons/vectors/main-vectors"
import { useVectorFilter } from "@/src/components/icons/vectors/vector-filter-context"
import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

type VariantTab = "shapes" | "sketch" | "pattern" | "texture"

const VARIANT_TABS: { value: VariantTab; label: string }[] = [
  { value: "shapes", label: "Shapes" },
  { value: "sketch", label: "Sketch" },
  { value: "pattern", label: "Pattern" }, 
  { value: "texture", label: "Texture" }, 
]

export default function Page() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)
  const { variantTab, setVariantTab, setCategory } = useVectorFilter()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Tab sync from ?tab=
  useEffect(() => {
    const tab = searchParams.get("tab") as VariantTab | null
    if (tab && VARIANT_TABS.some((t) => t.value === tab)) {
      setVariantTab(tab)
    } else {
      setVariantTab("shapes")
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
  if (tab !== "shapes") params.set("tab", tab)
  const hash = window.location.hash
  router.push(`/vectors${params.size ? `?${params}` : ""}${hash}`, { scroll: false })
}

  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav />
        <div className="ml-auto hidden md:block">
          <VectorSearch />
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
        <VectorCategoryTabs />
        <div className="flex h-full w-full flex-col p-2 md:flex-row">
          <div className="h-[95vh] flex-1 overflow-auto">
            <VectorGrid selectedLogo={selectedLogo} onSelectLogo={setSelectedLogo} />
          </div>

          <div
            className={`relative transition-all duration-300 ${
              selectedLogo ? "w-fit translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0"
            }`}
          >
            {selectedLogo && (
              <VectorPreview
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            )}
          </div>

          {selectedLogo && (
            <div className="bg-background fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t md:hidden">
              <VectorPreviewPhone
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