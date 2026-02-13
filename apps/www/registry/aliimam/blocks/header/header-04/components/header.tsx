"use client"

import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useScroll } from "motion/react"

import { cn } from "@/registry/aliimam/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"
import { Separator } from "@/registry/aliimam/ui/separator"

import { Search } from "./search"
import { ModeToggle } from "./theme-switch"

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
  { name: "Contact", href: "#link" },
]

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 h-14 w-full border-b transition-colors duration-150",
          scrolled && "bg-background/50 backdrop-blur-xl"
        )}
      >
        <div className="h-full px-3 transition-all duration-300">
          <div className="relative flex h-full flex-wrap items-center justify-between gap-3 lg:gap-0">
            <div className="flex h-full w-full items-center justify-between gap-6 lg:w-auto">
              <a
                href="#"
                aria-label="home"
                className="-mr-3 flex items-center gap-2 whitespace-nowrap"
              >
                <img
                  src="/ai-logo-white.png"
                  alt="Design Logo"
                  height={50}
                  width={50}
                  className="z-10 hidden h-10 w-full object-contain dark:block"
                />
                <img
                  src="/ai-logo-black.png"
                  alt="Design Logo"
                  height={50}
                  width={50}
                  className="z-10 block h-10 w-full object-contain dark:hidden"
                />
              </a>

              <Separator className="hidden lg:block" orientation="vertical" />

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 mr-2 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-10 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:h-14 lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator orientation="vertical" />
              <Search />
              <Separator orientation="vertical" />
              <ModeToggle />
              <Separator orientation="vertical" />
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
