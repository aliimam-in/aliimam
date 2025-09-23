"use client"

import { useState } from "react" 
import { ChevronDown, Search, Settings } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Badge } from "@/registry/default/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import { Input } from "@/registry/default/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/registry/default/ui/sidebar"

import { sidebarItems } from "./data"

export function AppSidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  )

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex aspect-square size-6 items-center justify-center">
            Logo
          </div>
          <div>
            <h2 className="font-semibold">Dalim</h2>
            <p className="text-muted-foreground text-xs">UI Blocks</p>
          </div>
        </div>

        <div className="px-2">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="bg-muted w-full rounded-2xl py-2 pr-4 pl-9"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <Collapsible
                      open={expandedItems[item.title]}
                      onOpenChange={() => toggleExpanded(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            "w-full justify-between rounded-2xl",
                            item.isActive && "bg-primary/10 text-primary"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <Badge
                                variant="outline"
                                className="rounded-full px-2 py-0.5 text-xs"
                              >
                                {item.badge}
                              </Badge>
                            )}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                expandedItems[item.title] ? "rotate-180" : ""
                              )}
                            />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className="rounded-2xl"
                              >
                                <a
                                  href={subItem.url}
                                  className="flex items-center justify-between"
                                >
                                  {subItem.title}
                                  {subItem.badge && (
                                    <Badge
                                      variant="outline"
                                      className="rounded-full px-2 py-0.5 text-xs"
                                    >
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className="rounded-2xl"
                    >
                      <a href="#" className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="rounded-full px-2 py-0.5 text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-2xl">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-2xl">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                    />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <span>Ali Imam</span>
                </div>
                <Badge variant="outline">Pro</Badge>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
