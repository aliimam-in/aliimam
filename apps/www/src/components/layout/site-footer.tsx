/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { ThemeSwitch } from "./mode-toggle";
import { Heart } from "lucide-react";
import { LinkedIn, X, Instagram, Github } from "../logos";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "@/registry/aliimam/ui/button";

const navigation = {
  categories: [
    {
      id: "menus",
      name: "Home",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "AI", href: "/ai" },
            { name: "Works", href: "/works" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Templates", href: "/templates" },
            { name: "Blocks", href: "/blocks" },
            { name: "Components", href: "/docs/components" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Graphic", href: "/graphics" },
            { name: "Backgrounds", href: "/backgrounds" },
            { name: "Designs", href: "/designs" },
          ],
        },
        {
          id: "icons",
          name: "Icons",
          items: [
            { name: "Icons", href: "/icons" },
            { name: "Logos", href: "/logos" },
            { name: "Flags", href: "/flags" },
          ],
        },
        {
          id: "privacy",
          name: "Privacy",
          items: [
            { name: "Privacy", href: "/docs/legal/privacy" },
            { name: "Terms", href: "/docs/legal/terms" },
            { name: "Contact", href: "/docs/legal/privacy" },
          ],
        },
      ],
    },
  ],
};

export function SiteFooter() {
  const router = useRouter()
  return (
    <footer className="border-t">
      <div className="flex py-4 gap-4 md:gap-10 justify-center flex-wrap md:justify-between items-center container">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-48 justify-between">
              Home
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-48">
            {navigation.categories.map((category, idx) => (
              <div key={category.name}>
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  {category.name}
                </DropdownMenuLabel>

                {category.sections.map((section) =>
                  section.items.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => router.push(item.href)}
                    >
                      {item.name}
                    </DropdownMenuItem>
                  ))
                )}

                {idx !== navigation.categories.length - 1 && (
                  <DropdownMenuSeparator />
                )}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="lg:absolute hidden left-1/2 -translate-x-1/2 lg:flex justify-center gap-1 text-center text-xs text-muted-foreground">
        <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart fill="#f43f5e" className="text-rose-500 w-4 h-4 animate-pulse" />
          <span> by </span>

          <Link
            aria-label="AI"
            className="font-bold hover:text-primary"
            href="https://www.instagram.com/aliimam.in/"
            target="_blank"
          >
            Ali Imam
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-10 gap-y-6">
            <Link
              aria-label="x"
              href="https://x.com/aliimam_in"
              rel="noreferrer"
              target="_blank"
            >
              <div className="hover:scale-105">
                <X />
              </div>
            </Link>
            <Link
              aria-label="instagram"
              href="https://www.instagram.com/aliimam.in/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="hover:scale-105">
                <Instagram />
              </div>
            </Link>
            <Link
              aria-label="linkedin"
              href="https://www.linkedin.com/in/aliimam-in"
              rel="noreferrer"
              target="_blank"
            >
              <div className="hover:scale-105">
                <LinkedIn />
              </div>
            </Link>
            <Link
              aria-label="Github"
              href="https://github.com/aliimam-in"
              rel="noreferrer"
              target="_blank"
            >
              <div className="hover:scale-105">
                <Github />
              </div>
            </Link>
          </div>
          <ThemeSwitch />
        </div> 
      </div>
    </footer>
  );
}
