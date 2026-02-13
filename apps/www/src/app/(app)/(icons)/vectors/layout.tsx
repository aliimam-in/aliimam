import { SidebarProvider } from "@/registry/aliimam/ui/sidebar";
import { Tabs } from "@/registry/aliimam/ui/tabs";
import { VectorsCategoryTabs } from "@/src/components/icons/category";
import { IconsNav } from "@/src/components/icons/icons-nav"; 
import { LogoSearch } from "@/src/components/icons/search";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
      <div>
        <Tabs defaultValue="icon">
          <div className="flex sticky h-14 z-40 top-14 bg-background items-center border-b px-4">
            <div className="flex-none">
              <IconsNav />
            </div>
            <div className="absolute hidden md:block left-1/3 xl:left-1/2 transform -translate-x-1/2">
              <LogoSearch />
            </div>
            <div className=""></div>
          </div>
          <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
            <VectorsCategoryTabs />
            <div className="h-full w-full">{children}</div>
          </SidebarProvider>
        </Tabs>
      </div> 
  );
}
