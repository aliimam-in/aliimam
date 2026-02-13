"use client"

import React from "react"
import { Equal, X } from "@aliimam/icons"

import { Menus } from "@/registry/aliimam/blocks/header/header-01/components/menus"
import { ModeToggle } from "@/registry/aliimam/blocks/header/header-01/components/theme-switch"
import { cn } from "@/registry/aliimam/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"

const menuItems = [
  { name: "About", href: "#" },
  { name: "Components", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
]

const Header = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full px-3 transition-colors duration-300 md:px-4",
          isScrolled ? "border-transparent" : "border-b"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 transition-all duration-300",
            isScrolled &&
              "bg-[oklch(0.141 0.005 285.823)]/50 max-w-5xl rounded-2xl border px-3 backdrop-blur-xl"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="#" aria-label="home" className="flex items-center gap-2">
                <img
                  src="/ai-logo-white.png"
                  alt="Your Image"
                  height={50}
                  width={50}
                  className="z-10 hidden h-10 w-full object-contain dark:block"
                />
                <img
                  src="/ai-logo-black.png"
                  alt="Your Image"
                  height={50}
                  width={50}
                  className="z-10 block h-10 w-full object-contain dark:hidden"
                />
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2.5 pr-4 lg:hidden"
                >
                  <Equal className="m-auto scale-120 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-120 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <Menus />
            </div>

            <div className="shadow-3xl hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm border p-3 shadow-zinc-300/20 backdrop-blur-2xl in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="block p-3 lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary block text-sm duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0">
                <ModeToggle />
                <Button asChild className={cn(isScrolled && "lg:hidden")}>
                  <a target="_blank" href="https://cal.com/aliimam-in/30min">
                    <span>Book an Intro call</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }
