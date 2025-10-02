"use client";

import * as React from "react"; 

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/default/ui/navigation-menu";
import { cn } from "@/src/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Docs",
    href: "#",
    description:
      "Explore our comprehensive UI design and components docs, empowering integration.",
  },  
  {
    title: "Colors",
    href: "#",
    description:
      "Vibrant, accessible color palette for intuitive, seamless UI design and components.",
  },  
  {
    title: "Blocks",
    href: "#",
    description: "Modular, flexible UI blocks for intuitive, seamless design and robust functionality.",
  },
  {
    title: "UI",
    href: "#",
    description:
      "Stunning UI component showcase for inspiring, seamless design exploration.",
  },
  {
    title: "Blogs",
    href: "#",
    description:
      "Engaging UI design blogs with insights for seamless component integration.",
  },
  {
    title: "Contact",
    href: "#",
    description:
      "Get in touch for UI design inquiries, support, and seamless collaboration opportunities.",
  },
];

export function Menus() {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
          >
            <a href="#">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
          >
            <a href="#">Templates</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
          >
            <a href="#">Blocks</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3">
            <ul className="grid gap-3 md:grid-cols-3 lg:w-3xl">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
          >
            <a href="#">Icons</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
          >
            <a href="#">Components</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a className="p-6" href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
