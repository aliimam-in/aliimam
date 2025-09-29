/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { ThemeSwitch } from "./mode-toggle";
import { Heart } from "lucide-react";
import { Separator } from "@/registry/default/ui/separator";
import { LinkedIn, X, Instagram } from "../logos";

const navigation = {
  categories: [
    {
      id: "menus",
      name: "Menus",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Components", href: "/components" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Templates", href: "/templates" },
            { name: "Blocks", href: "/blocks" },
            { name: "components", href: "/docs/ui" },
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

export function Footer() {
  return (
    <footer className="">
      <Separator className="my-10" />
      <div>
        {navigation.categories.map((category) => (
          <div
            key={category.name}
            className="grid text-center grid-cols-3 gap-6"
          >
            {category.sections.map((section) => (
              <div key={section.name}>
                <ul
                  role="list"
                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                  className="flex flex-col space-y-2"
                >
                  {section.items.map((item) => (
                    <li key={item.name} className="flow-root">
                      <Link
                        href={item.href}
                        className="text-xs text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Separator className="my-10" />
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
        </div>
        <ThemeSwitch />
      </div>

      <div className="my-10 text-muted-foreground flex justify-center gap-1 text-center text-xs">
        <span> © </span>
        <span>{new Date().getFullYear()}</span>
        <span>Made with</span>
        <Heart fill="#f43f5e" className="text-rose-500 animate-pulse" />
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
    </footer>
  );
}
