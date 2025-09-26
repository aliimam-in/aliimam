import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";
import { ColorSidebar } from "@/src/components/docs/colors/color-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SidebarProvider className="py-20 border-b"> 
          <div className="h-full p-2 w-full">{children}</div> 
      </SidebarProvider>
    </div>
  );
}
