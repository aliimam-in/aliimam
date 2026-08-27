"use client";

import Link from "next/link";

import { cn } from "@workspace/ui/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

import { Button } from "@workspace/ui/components/button";
import { MobileNav } from "@/components/layout/mobile-nav";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

export const navLinks = [
	{
		label: "Components",
		href: "https://old.aliimam.in/docs/components",
	  },
  {
    label: "Blocks",
    dropdown: [
      {
        label: "Blocks",
        href: "https://old.aliimam.in/blocks",
      },
      {
        label: "Backgrounds",
        href: "https://old.aliimam.in/backgrounds",
      },
      {
        label: "Patterns",
        href: "https://old.aliimam.in/patterns",
      },
    ],
  },
  {
    label: "Icons",
    dropdown: [
      {
        label: "Icons",
        href: "https://old.aliimam.in/icons",
      },
      {
        label: "Logos",
        href: "https://old.aliimam.in/logos",
      },
      {
        label: "Vectors",
        href: "https://old.aliimam.in/vectors",
      },
    ],
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl border-x md:transition-all md:ease-out",
        {
          "border-border bg-background/90 border backdrop-blur-md supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow-2xl":
            scrolled,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-2 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          }
        )}
      >
        {/* Logo */}
        <a
          className="hover:bg-muted dark:hover:bg-muted/50"
          href="/"
        >
          <img
            src="/ai-logo-white.png"
            alt="Your Image"
            height={50}
            width={50}
            className="z-10 hidden h-8 w-full object-contain dark:block"
          />

          <img
            src="/ai-logo-black.png"
            alt="Your Image"
            height={50}
            width={50}
            className="z-10 block h-8 w-full object-contain dark:hidden"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        size="sm"
                        variant="ghost"
                        className={cn(
                          "gap-1",
                          "hover:bg-muted cursor-pointer dark:hover:bg-muted/50"
                        )}
                      />
                    }
                  >
                    {link.label}

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent 
                    align="start"
                    className={cn(
                      "w-44 cursor-pointer p-1",
                      "border-border/50",
                      "bg-background/95 backdrop-blur-xl"
                    )}
                  >
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        render={
                          <Link
                            href={item.href}
                            target="_blank"
                          />
                        }
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={link.label}
                  size="sm"
                  variant="ghost"
                  render={<Link href={link.href} />}
                  nativeButton={false}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>

          {/* Book a Call */}
          <Button size="sm">
            <Link
              target="_blank"
              href="https://cal.com/aliimam/30min"
            >
              Book a Call
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <MobileNav />
      </nav>
    </header>
  );
}