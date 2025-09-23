import { SidebarProvider } from "@/registry/default/ui/sidebar";
import { ColorSidebar } from "@/src/components/docs/colors/color-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 pt-20 flex-col px-3">
      <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing))]">
          <ColorSidebar /> 
          <div className="h-full w-full">{children}</div>
        </SidebarProvider>
    </div>
  );
}
