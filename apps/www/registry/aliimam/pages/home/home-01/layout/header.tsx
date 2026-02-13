"use client"

import * as React from "react"
import type { ReactElement } from "react"
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import {
  AArrowUp,
  AppWindow,
  BookText,
  Bot,
  Box,
  BriefcaseBusiness,
  Calendar1,
  ChartNoAxesColumnIncreasing,
  CirclePlus,
  Code,
  Codepen,
  Component,
  Cpu,
  Globe,
  Layers,
  LayoutGrid,
  LogOut,
  Network,
  PenTool,
  ScanText,
  ScreenShare,
  Shield,
  Smile,
  Sparkle,
  Sparkles,
} from "@aliimam/icons"
import { Vercel } from "@aliimam/logos"

import { cn } from "@/registry/aliimam/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/aliimam/ui/avatar"
import { Button } from "@/registry/aliimam/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/aliimam/ui/navigation-menu"

import { ThemeSwitcher } from "./theme"

const cloud: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "AI SDK",
    href: "#",
    icon: <Box strokeWidth={2} />,
    description: "The AI Toolkit for Typescript",
  },
  {
    title: "AI Gateway",
    href: "#",
    icon: <Sparkle strokeWidth={2} />,
    description: "One endpoint, all your models",
  },
  {
    title: "Vercel Agent",
    href: "#",
    icon: <AArrowUp strokeWidth={2} />,
    description: "An agent that knows your stack",
  },
]

const core: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "CI/CD",
    href: "#",
    icon: <LayoutGrid strokeWidth={2} />,
    description: "Helping teams ship 6× faster",
  },
  {
    title: "Content Delivery",
    href: "#",
    icon: <Globe strokeWidth={2} />,
    description: "Fast, scalable, and reliable",
  },
  {
    title: "Fluid Compute",
    href: "#",
    icon: <Cpu strokeWidth={2} />,
    description: "Servers, in serverless form",
  },
  {
    title: "Observability",
    href: "#",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2} />,
    description: "Trace every step",
  },
]

const security: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Bot Management",
    href: "#",
    icon: <Bot strokeWidth={2} />,
    description: "Scalable bot protection",
  },
  {
    title: "BotID",
    href: "#",
    icon: <ScanText strokeWidth={2} />,
    description: "Invisible CAPTCHA",
  },
  {
    title: "Platform Security",
    href: "#",
    icon: <Shield strokeWidth={2} />,
    description: "DDOS Protection, Firewall",
  },
  {
    title: "Web Application Firewall",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Granular, custom protection",
  },
]

const company: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Customers",
    href: "#",
    icon: <Smile strokeWidth={2} />,
    description: "Trusted by the best teams",
  },
  {
    title: "Blog",
    href: "#",
    icon: <PenTool strokeWidth={2} />,
    description: "The latest posts and changes",
  },
  {
    title: "Changelog",
    href: "#",
    icon: <BookText strokeWidth={2} />,
    description: "See what shipped",
  },
  {
    title: "Press",
    href: "#",
    icon: <BriefcaseBusiness strokeWidth={2} />,
    description: "Read the latest news",
  },
  {
    title: "Events",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Join us at an event",
  },
]

const open: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Next.js",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "The native Next.js platform",
  },
  {
    title: "Nuxt",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "The progressive web framework",
  },
  {
    title: "Svelte",
    href: "#",
    icon: <Codepen strokeWidth={2} />,
    description: "The web's efficient Ul framework",
  },
  {
    title: "Turborepo",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Speed with Enterprise scale",
  },
]

const tools: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Academy",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Learn the ins and outs of Vercel",
  },
  {
    title: "Marketplace",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Extend and automate workflows",
  },
  {
    title: "Templates",
    href: "#",
    icon: <Codepen strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Guides",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Find help quickly",
  },
  {
    title: "Partner Finder",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Get help from solution partners",
  },
]

const cases: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Al Apps",
    href: "#",
    icon: <Sparkles strokeWidth={2} />,
    description: "Deploy at the speed of Al",
  },
  {
    title: "Composable Commerce",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Power storefronts that convert",
  },
  {
    title: "Marketing Sites",
    href: "#",
    icon: <ScreenShare strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Multi-tenant Platforms",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Scale apps with one codebase",
  },
  {
    title: "Web Apps",
    href: "#",
    icon: <AppWindow strokeWidth={2} />,
    description: "Ship features, not infrastructure",
  },
]

const users: {
  title: string
  icon: ReactElement
  href: string
  description: string
}[] = [
  {
    title: "Platform Engineers",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Automate away repetition",
  },
  {
    title: "Design Engineers",
    href: "#",
    icon: <Layers strokeWidth={2} />,
    description: "Deploy for every idea",
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div
      className={`bg-background transition-border sticky top-0 z-50 flex h-16 w-full items-center justify-between px-4 duration-300 ${
        scrolled ? "border-b" : "border-b-0"
      }`}
    >
      {" "}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex h-14 justify-center">
          <Vercel size={100} className="h-14" type="wordmark" />
          <NavigationMenu className="ml-8 hidden lg:flex" viewport={true}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-3 pt-2 md:w-[800px]">
                    <div>
                      <span className="text-muted-foreground p-4">
                        AI Cloud
                      </span>
                      {cloud.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="text-muted-foreground p-4">
                        Core Platform
                      </span>
                      {core.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="text-muted-foreground p-4">
                        Security
                      </span>
                      {security.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-3 pt-2 md:w-[800px]">
                    <div>
                      <span className="text-muted-foreground p-4">Company</span>
                      {company.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="text-muted-foreground p-4">
                        Open Source
                      </span>
                      {open.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="text-muted-foreground p-4">Tools</span>
                      {tools.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] grid-cols-2 pt-2 md:w-[550px]">
                    <div>
                      <span className="text-muted-foreground p-4">
                        Use Cases
                      </span>
                      {cases.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="text-muted-foreground p-4">Users</span>
                      {users.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  <Link href="#">Enterprise</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  <Link href="#">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-muted-foreground h-7.5 rounded-full font-normal"
                  )}
                >
                  <Link href="#">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} size={"sm"}>
            Contact
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Dashboard
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="border">
                <AvatarImage src="/ali.jpg" alt="Ali Imam" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70 rounded-xl p-3" align="end">
              <div className="p-2">
                <h1 className="font-semibold">Ali Imam</h1>
                <p className="text-muted-foreground text-sm">
                  contact@aliimam.in
                </p>
              </div>
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-3">Dadhboard</DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-between py-3">
                  Create Taems <CirclePlus strokeWidth={2} />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-3" />
              <DropdownMenuGroup>
                <DropdownMenuItem className="justify-between py-3">
                  Theme <ThemeSwitcher />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-3" />

              <DropdownMenuItem className="justify-between py-3">
                Logout <LogOut strokeWidth={2} />
              </DropdownMenuItem>
              <DropdownMenuSeparator className="-mx-3" />
              <DropdownMenuItem className="pt-3">
                <Button className="w-full">Upgrade to Pro</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

function ListItem({
  title,
  icon,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon: ReactElement
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="hover:bg-transparent">
        <Link href={href}>
          <div className="flex items-start gap-3 rounded-md p-2">
            <div className="icon-container rounded-sm border p-2">{icon}</div>
            <div className="text-container">
              <div className="text-sm leading-none font-medium">{title}</div>
              <p className="text-muted-foreground line-clamp-2 pt-1 text-xs leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>

      <style jsx>{`
        li:hover .icon-container {
          background-color: var(--foreground);
          color: var(--background);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

        li:hover .text-container .text-sm {
          color: var(--foreground); /* Change title color on hover */
          transition: color 0.2s ease;
        }

        li:hover .text-container p {
          color: var(--foreground); /* Change description color on hover */
          transition: color 0.2s ease;
        }
      `}</style>
    </li>
  )
}
