import { SidebarProvider } from "@/registry/default/ui/sidebar";
import { Tabs } from "@/registry/default/ui/tabs";
import { FlagCategoryTabs } from "@/src/components/icons/category";
import { IconsNav } from "@/src/components/icons/icons-nav";
import { LogosProvider } from "@/src/components/icons/logo-context";
import { LogoSearch } from "@/src/components/icons/search"; 

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LogosProvider>
      <div>
        <Tabs defaultValue="icon">
          <div className="flex sticky h-14 z-40 top-20 bg-background py-3 items-center border-y px-6">
            <div className="flex-none">
              <IconsNav />
            </div>
            <div className="absolute hidden md:block left-1/3 xl:left-1/2 transform -translate-x-1/2">
              <LogoSearch />
            </div>
            <div className="">
               
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
            <FlagCategoryTabs />
            <div className="h-full px-2 w-full">{children}</div>
          </SidebarProvider>
        </Tabs>
      </div>
    </LogosProvider>
  );
}
