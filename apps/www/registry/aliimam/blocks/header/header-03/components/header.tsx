"use client"

import React, { useState } from "react"
import { ArrowUpRight, Equal, X } from "@aliimam/icons"

import { ModeToggle } from "@/registry/aliimam/blocks/header/header-03/components/theme-switch"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"
import { Button } from "@/registry/aliimam/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/aliimam/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/aliimam/ui/sheet"

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Web Design", href: "/services/web-design" },
  { name: "Branding", href: "/services/branding" },
]

const industries = [
  { name: "Technology", href: "/industries/technology" },
  { name: "E-commerce", href: "/industries/e-commerce" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Entertainment", href: "/industries/entertainment" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Hospitality", href: "/industries/hospitality" },
]

const insights = [
  { name: "Design Trends", href: "/insights/design-trends" },
  { name: "Case Studies", href: "/insights/case-studies" },
  { name: "Design Tips", href: "/insights/design-tips" },
  { name: "Podcast Hub", href: "/insights/podcasts" },
]

const aboutUs = [
  { name: "Our Team", href: "/about/team" },
  { name: "Portfolio", href: "/about/portfolio" },
  { name: "Careers", href: "/careers" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background/50 fixed top-0 left-0 z-50 w-full backdrop-blur-md">
      <div className="px-3">
        <div className="flex h-20 items-center justify-between">
          <div className="bg-primary flex h-14 items-center rounded-md border px-4">
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
                className="z-10 h-10 w-full object-contain"
              />
              <span className="text-primary-foreground hidden pr-2 text-xl font-semibold md:block">
                Ali Imam
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            <NavigationMenu viewport={true}>
              <NavigationMenuList>
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background h-14 px-6 text-lg">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {services.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="hover:text-background hover:bg-primary focus:bg-primary block space-y-1 rounded-lg p-3 leading-none no-underline transition-colors outline-none select-none"
                            >
                              <div className="text-sm leading-none font-medium">
                                {item.name}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background h-14 px-6 text-lg">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] grid-cols-2 gap-3 p-4">
                      {industries.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="hover:text-background hover:bg-primary focus:bg-primary block space-y-1 rounded-lg p-3 leading-none no-underline transition-colors outline-none select-none"
                            >
                              <div className="text-sm leading-none font-medium">
                                {item.name}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Insights */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background h-14 px-6 text-lg">
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {insights.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="hover:text-background hover:bg-primary focus:bg-primary block space-y-1 rounded-lg p-3 leading-none no-underline transition-colors outline-none select-none"
                            >
                              <div className="text-sm leading-none font-medium">
                                {item.name}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground text-background h-14 px-6 text-lg">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {aboutUs.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="hover:text-background hover:bg-primary focus:bg-primary block space-y-1 rounded-lg p-3 leading-none no-underline transition-colors outline-none select-none"
                            >
                              <div className="text-sm leading-none font-medium">
                                {item.name}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-1 lg:flex">
            <ModeToggle />
            <Button className="h-14 px-6">
              <a href="/contact" className="flex items-center gap-2">
                Get in touch
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost">
                {isOpen ? (
                  <X className="size-8" />
                ) : (
                  <Equal className="size-8" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto p-6 sm:w-[550px]"
            >
              <div className="flex h-full flex-col">
                <div className="flex-1 py-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services">
                      <AccordionTrigger className="text-lg font-semibold">
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {services.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-lg font-semibold">
                        Industries
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {industries.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="insights">
                      <AccordionTrigger className="text-lg font-semibold">
                        Insights
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {insights.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="about">
                      <AccordionTrigger className="text-lg font-semibold">
                        About Us
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {aboutUs.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="pb-6">
                  <Button asChild className="w-full">
                    <a
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      Get in touch
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4.20687 14.938L13.1804 5.96443C13.4511 5.69377 13.2594 5.23097 12.8766 5.23098L4 5.23118L4 4L16.0301 4L16.0301 16.0301H14.7989L14.7989 7.13951C14.7989 6.75674 14.3361 6.56505 14.0655 6.8357L5.08481 15.8159L4.20687 14.938Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
