import { SidebarProvider } from "@/registry/default/ui/sidebar";
import { Tabs } from "@/registry/default/ui/tabs";
import { IconCategoryTabs } from "@/src/components/icons/category";
import { IconsNav } from "@/src/components/icons/icons-nav";
import { IconsProvider } from "@/src/components/icons/icon-context";
import { IconSearch } from "@/src/components/icons/search";
import { IconsTypeTabs } from "@/src/components/icons/type-tabs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IconsProvider>
      <div>
        <Tabs defaultValue="stroke">
          <div className="flex sticky z-40 top-20 bg-background py-3 items-center border-y px-6">
            <div className="flex-none">
              <IconsNav />
            </div>
            <div className="absolute hidden md:block left-1/3 xl:left-1/2 transform -translate-x-1/2">
              <IconSearch />
            </div>
            <div className="flex-1 flex justify-end">
              <IconsTypeTabs />
            </div>
          </div> 
          <SidebarProvider
            style={
              {
                "--sidebar-width": "16rem",
              } as React.CSSProperties
            }
            className=""
          >
            <IconCategoryTabs />
            <div className="h-full px-2 w-full">{children}</div>
          </SidebarProvider>
        </Tabs>
      </div>
    </IconsProvider>
  );
}
