import { source } from "@/src/lib/source";
import { DocsSidebar } from "@/src/components/docs/docs-sidebar";
import { SidebarProvider } from "@/registry/default/ui/sidebar";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-3">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "18rem",
          } as React.CSSProperties
        }
        className="py-20 border-b"
      >
        <DocsSidebar tree={source.pageTree} />
        <div className="h-full p-2 w-full">{children}</div>
      </SidebarProvider>
    </div>
  );
}
