import { 
  SidebarProvider,
} from "@/registry/aliimam/ui/sidebar"; 

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SidebarProvider className=""> 
          <div className="h-full w-full">{children}</div> 
      </SidebarProvider>
    </div>
  );
}
