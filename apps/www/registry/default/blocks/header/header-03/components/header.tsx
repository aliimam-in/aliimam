"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu";
import { Button } from "@/registry/default/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/registry/default/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { ModeToggle } from "@/registry/default/blocks/header/header-03/components/theme-switch";
import { ArrowUpRight, Equal, X } from "@aliimam/icons";

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Web Design", href: "/services/web-design" },
  { name: "Branding", href: "/services/branding" },
];

const industries = [
  { name: "Technology", href: "/industries/technology" },
  { name: "E-commerce", href: "/industries/e-commerce" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education", href: "/industries/education" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Entertainment", href: "/industries/entertainment" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Hospitality", href: "/industries/hospitality" },
];

const insights = [
  { name: "Design Trends", href: "/insights/design-trends" },
  { name: "Case Studies", href: "/insights/case-studies" },
  { name: "Design Tips", href: "/insights/design-tips" },
  { name: "Podcast Hub", href: "/insights/podcasts" },
];

const aboutUs = [
  { name: "Our Team", href: "/about/team" },
  { name: "Portfolio", href: "/about/portfolio" },
  { name: "Careers", href: "/careers" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 bg-background/50 backdrop-blur-md left-0 w-full z-50">
      <div className="px-3">
        <div className="flex items-center justify-between h-20">
          <div className="flex border bg-primary rounded-md h-14 px-4 items-center">
            <a
              href="#"
              aria-label="home"
              className="flex gap-2 whitespace-nowrap items-center"
            >
              <img
                src="/ai-logo-white.png"
                alt="Design Logo"
                height={50}
                width={50}
                className="h-10 z-10 w-full object-contain"
              />
              <span className="font-semibold pr-2 hidden md:block text-primary-foreground text-xl">
                Ali Imam
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu viewport={true}>
              <NavigationMenuList>
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-foreground h-14 px-6 text-lg text-background">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {services.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 hover:text-background leading-none no-underline outline-none transition-colors hover:bg-primary focus:bg-primary"
                            >
                              <div className="text-sm font-medium leading-none">
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
                  <NavigationMenuTrigger className="bg-foreground h-14 px-6 text-lg text-background">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] grid-cols-2 gap-3 p-4">
                      {industries.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 hover:text-background leading-none no-underline outline-none transition-colors hover:bg-primary focus:bg-primary"
                            >
                              <div className="text-sm font-medium leading-none">
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
                  <NavigationMenuTrigger className="bg-foreground h-14 px-6 text-lg text-background">
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {insights.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 hover:text-background leading-none no-underline outline-none transition-colors hover:bg-primary focus:bg-primary"
                            >
                              <div className="text-sm font-medium leading-none">
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
                  <NavigationMenuTrigger className="bg-foreground h-14 px-6 text-lg text-background">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-3 p-4">
                      {aboutUs.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 hover:text-background leading-none no-underline outline-none transition-colors hover:bg-primary focus:bg-primary"
                            >
                              <div className="text-sm font-medium leading-none">
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
          <div className="hidden gap-1 lg:flex items-center">
            <ModeToggle />
            <Button className="px-6 h-14 ">
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
              className="w-full p-6 sm:w-[550px] overflow-y-auto"
            >
              <div className="flex flex-col h-full">
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
                                className="block py-2 text-muted-foreground hover:text-foreground"
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
                                className="block py-2 text-muted-foreground hover:text-foreground"
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
                                className="block py-2 text-muted-foreground hover:text-foreground"
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
                                className="block py-2 text-muted-foreground hover:text-foreground"
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
                        className="w-4 h-4"
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
  );
}
