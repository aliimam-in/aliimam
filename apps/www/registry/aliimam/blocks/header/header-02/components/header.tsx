"use client"

import { useState } from "react"
import { ArrowRight, Equal } from "@aliimam/icons"

import { Search } from "@/registry/aliimam/blocks/header/header-02/components/search"
import { ModeToggle } from "@/registry/aliimam/blocks/header/header-02/components/theme-switch"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"
import { Button } from "@/registry/aliimam/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/aliimam/ui/sheet"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: "Overview", href: "#", active: true },
    { label: "Design Systems", href: "#" },
    { label: "UI Kits", href: "#" },
    { label: "Brand Assets", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "Design Labs", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "#" },
  ]

  const properties = [
    {
      location: "Design Hub – India",
      venues: [{ name: "Creative Studio", href: "#" }],
    },
    {
      location: "Design Hub – Global",
      venues: [
        { name: "UI/UX Studio", href: "#" },
        { name: "Branding Lab", href: "#" },
      ],
    },
  ]

  return (
    <>
      <header className="bg-background sticky top-0 z-50 border-b">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <a
              href="#"
              aria-label="home"
              className="flex items-center gap-2 whitespace-nowrap"
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
              <span className="text-xl font-semibold">Ali Imam</span>
            </a>

            <Search />

            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button className="hidden items-center gap-2 md:flex">
                <span>Start Designing</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Equal className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full overflow-y-auto sm:w-[400px]"
                >
                  <div className="m-6 mt-14">
                    <Accordion type="single" collapsible className="mb-8">
                      <AccordionItem value="navigation" className="border-none">
                        <AccordionTrigger className="bg-accent hover:bg-accent/80 rounded-lg px-4 hover:no-underline">
                          <div className="text-left">
                            <div className="font-medium">Design Hub</div>
                            <div className="text-muted-foreground text-sm">
                              / Overview
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className="overflow-hidden rounded-lg border">
                            {navItems.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className={`hover:bg-accent block border-b px-4 py-3 text-sm transition-colors last:border-b-0 ${
                                  item.active ? "bg-accent font-medium" : ""
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="space-y-6">
                      {properties.map((property, idx) => (
                        <div key={idx}>
                          <p className="text-muted-foreground mb-2 text-xs tracking-wider uppercase">
                            {property.location}
                          </p>
                          <ul className="space-y-2">
                            {property.venues.map((venue, vIdx) => (
                              <li key={vIdx} className="border-t border-black">
                                <a
                                  href={venue.href}
                                  className="hover:text-muted-foreground block py-3 text-lg font-medium transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {venue.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Secondary Navigation */}
          <nav className="hidden border-t lg:block">
            <ul className="-mx-2 flex items-center justify-center">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      item.active
                        ? "border-primary border-b-2 font-semibold"
                        : "hover:bg-primary/20"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
