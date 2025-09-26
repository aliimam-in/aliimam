"use client";

import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
 

export function ColorSidebar() {
  return (
    <Sidebar className="top-20 bg-transparent sticky h-[60%]"> 
      <SidebarContent className="no-scrollbar pt-3 px-2 pb-12"> 
      </SidebarContent>
    </Sidebar>
  );
}
