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
      "Coming Soon!",
  },  
  {
    title: "UI",
    href: "/docs/ui",
    description:
      "Coming Soon!",
  },  
  {
    title: "Pricing",
    href: "/pricing",
    description: "Coming Soon!",
  },
  {
    title: "Showcase",
    href: "/showcase",
    description:
      "Coming Soon!",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description:
      "Coming Soon!",
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
            <ul className="grid gap-3 md:grid-cols-2 lg:w-[400px]">
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
            <Link href="/design">Design</Link>
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
        <Link className="p-6" href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
