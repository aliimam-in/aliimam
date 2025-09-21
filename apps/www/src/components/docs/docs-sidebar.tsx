"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { source } from "@/src/lib/source"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/default/ui/sidebar"

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname()

  return (
    <Sidebar
      className="sticky ml-auto top-[calc(var(--header-height)+1px)] px-2 z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar px-2 pb-12">
        <div className="h-[var(--top-spacing)] shrink-0" />

        <Accordion defaultValue="backgrounds" type="single" collapsible className="w-full">
          {tree.children.map((item) => (
            <AccordionItem key={item.$id} value={String(item.$id)}>
              <AccordionTrigger className="text-muted-foreground py-2 font-medium">{item.name}</AccordionTrigger>

              <AccordionContent>
                {item.type === "folder" && item.children && (
                  <SidebarMenu className="gap-0.5 pl-1">
                    {item.children.map((child) => {
                      return (
                        child.type === "page" && (
                          <SidebarMenuItem key={child.url}>
                            <SidebarMenuButton
                              asChild
                              isActive={child.url === pathname}
                              className="data-[active=true]:bg-accent w-full data-[active=true]:border-accent relative h-[30px] overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                            >
                              <Link href={child.url}>{child.name}</Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      )
                    })}
                  </SidebarMenu>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SidebarContent>
    </Sidebar>
  )
}
