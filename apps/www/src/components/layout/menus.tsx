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
    title: "Easings",
    href: "/easings",
    description:
      "A set of easing functions ready to copy and paste into your Tailwind CSS project.",
  },
  {
    title: "UI",
    href: "/docs/ui",
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <Link href="/templates">Templates</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent flex text-xs"
            )}
          >
            <Link href="/blocks">
              <div className="flex w-fit">
                Blocks
                <span className="ml-2 rounded-full bg-[#fff000] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                  New
                </span>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[650px]">
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
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <Link href="/icons">Icons</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <Link href="/backgrounds">Graphics</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs"
            )}
          >
            <Link href="/docs/backgrounds/gradient-mesh">Components</Link>
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
        <div className="hover:bg-secondary rounded-md p-5">
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </div>
      </NavigationMenuLink>
    </li>
  );
}
