"use client";

import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
import { SwitchPage } from "../switch-pages"; 

export function ColorSidebar() {
  return (
    <Sidebar
      className="sticky ml-auto top-20 pr-2 z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar px-2 pb-12">
        <SwitchPage />
       
      </SidebarContent>
    </Sidebar>
  );
}
