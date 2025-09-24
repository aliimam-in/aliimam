"use client";

import * as React from "react";
import Link from "next/link";

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
    href: "/docs",
    description:
      "Explore our comprehensive UI design and components docs, empowering integration.",
  },  
  {
    title: "Colors",
    href: "/colors",
    description:
      "Vibrant, accessible color palette for intuitive, seamless UI design and components.",
  },  
  {
    title: "Blocks",
    href: "/blocks",
    description: "Modular, flexible UI blocks for intuitive, seamless design and robust functionality.",
  },
  {
    title: "Showcase",
    href: "/showcase",
    description:
      "Stunning UI component showcase for inspiring, seamless design exploration.",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description:
      "Engaging UI design blogs with insights for seamless component integration.",
  },
  {
    title: "Contact",
    href: "/docs/legal/contact",
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
            <Link href="/about">About</Link>
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
            <Link href="/docs/ui">Components</Link>
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
        <Link className="p-3" href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
