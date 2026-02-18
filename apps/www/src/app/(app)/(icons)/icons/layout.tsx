import { IconCategoryTabs } from "@/src/components/icons/category"
import { IconsNav } from "@/src/components/icons/icons-nav"
import { IconSearch } from "@/src/components/icons/search"
import { IconsTypeTabs } from "@/src/components/icons/type-tabs"

import { SidebarProvider } from "@/registry/aliimam/ui/sidebar"
import { Tabs } from "@/registry/aliimam/ui/tabs"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Tabs defaultValue="stroke">
        <div className="bg-background sticky top-14 z-40 flex h-14 items-center border-b px-4 py-3">
          <div className="flex-none">
            <IconsNav />
          </div>
          <div className="absolute left-1/3 hidden -translate-x-1/2 transform md:block xl:left-1/2">
            <IconSearch />
          </div>
          <div className="flex flex-1 justify-end">
            <IconsTypeTabs />
          </div>
        </div>
        <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
          <IconCategoryTabs />
          <div className="h-full w-full">{children}</div>
        </SidebarProvider>
      </Tabs>
    </div>
  )
}
