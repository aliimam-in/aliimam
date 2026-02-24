"use client"

import { useState } from "react"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { LogoCategoryTabs } from "@/src/components/icons/logo-category"
import { LogoSearch } from "@/src/components/icons/logo-search"
import { LogoGrid } from "@/src/components/icons/main-logos"
import { LogoPreview, LogoPreviewPhone } from "@/src/components/icons/logo-preview" 

export default function Page() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)

  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav />
        <div className="mx-auto hidden md:block">
          <LogoSearch totalCount={520} />
        </div>
      </div>

      <div className="flex h-full w-full">
        <LogoCategoryTabs />

        <div className="flex h-full w-full flex-col p-2 md:flex-row">
          <div className="h-[95vh] flex-1 overflow-auto">
            <LogoGrid
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
              <LogoPreview
                selectedLogo={selectedLogo}
                onClearSelection={() => setSelectedLogo(null)}
              />
            )}
          </div>

          {selectedLogo && (
            <div className="bg-background fixed bottom-0 left-1/2 z-20 w-full -translate-x-1/2 border-t md:hidden">
              <LogoPreviewPhone
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