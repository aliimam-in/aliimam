"use client";

import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
 
import { BlocksNav } from "./blocks-nav";

export function BlockSidebar() {
  return (
    <Sidebar variant="inset" className="top-20 sticky bg-transparent h-[60%]">
       
      <SidebarContent className="no-scrollbar pt-3 px-2 pb-12">
        <BlocksNav />
      </SidebarContent>
    </Sidebar>
  );
}
