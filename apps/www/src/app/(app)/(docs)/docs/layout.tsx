import { source } from "@/src/lib/source";
import { DocsSidebar } from "@/src/components/docs/docs-sidebar";
import { SidebarProvider } from "@/registry/default/ui/sidebar";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-3 container-wrapper flex flex-1 flex-col">
      <SidebarProvider className="py-20 border-b 3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DocsSidebar tree={source.pageTree} />
        <div className="h-full p-2 w-full">{children}</div>
      </SidebarProvider>
    </div>
  );
}
