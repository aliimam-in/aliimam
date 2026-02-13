"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/src/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/aliimam/ui/navigation-menu"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string; new: boolean }[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      {items.map((item) => (
        <Button key={item.href} variant="ghost" className="relative" asChild size="sm">
          <Link
            href={item.href}
            className={cn(pathname === item.href && "text-primary")}
          >
            {item.label}
            {item.new && (
              <span className="absolute right-1 top-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
            )} 
          </Link>
        </Button>
      ))}
    </nav>
  )
}

type MoreNavItem =
  | {
    label: string
    href: string
  }
  | {
    label: string
    items: {
      title: string
      href: string
      description?: string
    }[]
  }


export function MoreMainNav({
  items,
  className,
}: {
  items: MoreNavItem[]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {items.map((item) => {
          // 🔹 Simple link
          if ("href" in item) {
            const isActive = pathname === item.href

            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive && "text-primary"
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          }

          // 🔹 Dropdown
          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger className="uppercase">{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="shadow-xl">
                <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2">
                  {item.items.map((subItem) => (
                    <ListItem
                      key={subItem.href}
                      title={subItem.title}
                      href={subItem.href}
                    >
                      {subItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


function ListItem({
  title,
  children,
  href,
}: {
  title: string
  href: string
  children?: React.ReactNode
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-col gap-1 rounded-md p-3 text-sm transition-colors hover:bg-muted"
        >
          <span className="font-medium uppercase leading-none">{title}</span>
          {children && (
            <span className="line-clamp-2 text-muted-foreground">
              {children}
            </span>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
