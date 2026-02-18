/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"

import { Github, Instagram, LinkedIn, X } from "../logos"
import { ThemeSwitch } from "./mode-toggle"

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
}

export function SiteFooter() {
  const router = useRouter()
  return (
    <footer className="border-t">
      <div className="container flex flex-wrap items-center justify-center gap-4 py-4 md:justify-between md:gap-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-48 justify-between">
              Home
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-48">
            {navigation.categories.map((category, idx) => (
              <div key={category.name}>
                <DropdownMenuLabel className="text-muted-foreground text-xs">
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
        <div className="text-muted-foreground left-1/2 hidden -translate-x-1/2 justify-center gap-1 text-center text-xs lg:absolute lg:flex">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart
            fill="#f43f5e"
            className="h-4 w-4 animate-pulse text-rose-500"
          />
          <span> by </span>

          <Link
            aria-label="AI"
            className="hover:text-primary font-bold"
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
  )
}
