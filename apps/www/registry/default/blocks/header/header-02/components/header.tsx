"use client";

import { useState } from "react";
import {  Equal, ArrowRight } from "@aliimam/icons"; 
import { Button } from "@/registry/default/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/registry/default/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Search } from "@/registry/default/blocks/header/header-02/components/search";
import { ModeToggle } from "@/registry/default/blocks/header/header-02/components/theme-switch";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
  ];

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
  ];

  return (
    <>
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
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
                className="h-10 z-10 w-full hidden dark:block object-contain"
              />
              <img
                src="/ai-logo-black.png"
                alt="Design Logo"
                height={50}
                width={50}
                className="h-10 z-10 w-full dark:hidden block object-contain"
              />
              <span className="font-semibold text-xl">Ali Imam</span>
            </a>

             <Search/>
 
            <div className="flex items-center gap-2">
               <ModeToggle />
              <Button className="md:flex items-center hidden gap-2">
                <span>Start Designing</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
 
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}> 
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Equal className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] overflow-y-auto"
                >
                  <div className="m-6 mt-14"> 
                    <Accordion type="single" collapsible className="mb-8">
                      <AccordionItem value="navigation" className="border-none">
                        <AccordionTrigger className="bg-accent hover:bg-accent/80 px-4 rounded-lg hover:no-underline">
                          <div className="text-left">
                            <div className="font-medium">Design Hub</div>
                            <div className="text-sm text-muted-foreground">
                              / Overview
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className=" border rounded-lg overflow-hidden">
                            {navItems.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className={`block px-4 py-3 text-sm border-b last:border-b-0 hover:bg-accent transition-colors ${
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
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                            {property.location}
                          </p>
                          <ul className="space-y-2">
                            {property.venues.map((venue, vIdx) => (
                              <li key={vIdx} className="border-t border-black">
                                <a
                                  href={venue.href}
                                  className="block py-3 text-lg font-medium hover:text-muted-foreground transition-colors"
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
          <nav className="hidden lg:block border-t">
            <ul className="flex justify-center items-center -mx-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      item.active
                        ? "border-b-2 border-primary font-semibold"
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
  );
}
