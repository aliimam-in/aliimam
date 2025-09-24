"use client";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import Image from "next/image";
import { Menus } from "./menus";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Components", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/docs/legal/contact" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-3 md:px-4"
      >
        <div
          className={cn(
            "mx-auto mt-2 transition-all duration-300",
            isScrolled &&
              "bg-[oklch(0.141 0.005 285.823)]/50 max-w-5xl rounded-2xl border backdrop-blur-xl px-3" 
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex gap-2 items-center"
              >
                <Image
                  src="/ai-logo-white.png"
                  alt="Your Image"
                  height={50}
                  width={50}
                  className="h-10 z-10 w-full hidden dark:block object-contain"
                />
                <Image
                  src="/ai-logo-black.png"
                  alt="Your Image"
                  height={50}
                  width={50}
                  className="h-10 z-10 w-full dark:hidden block object-contain"
                />
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 pr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Equal className="in-data-[state=active]:rotate-180 scale-160 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-160 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <Menus/>
            </div>

            <div className="in-data-[state=active]:block border backdrop-blur-2xl lg:in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm p-3 shadow-3xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                 <div className="lg:hidden block p-3">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-primary text-sm block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0">
                <ModeToggle />
                <Button variant={'secondary'} asChild className={cn(isScrolled && "lg:hidden")}>
                  <Link target="_blank" href="https://cal.com/aliimam-in/30min">
                    <span>Book an Intro call</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
