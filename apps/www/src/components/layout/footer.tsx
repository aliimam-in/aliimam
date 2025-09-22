"use client";

import Link from "next/link";

import { ThemeSwitch } from "./mode-toggle";
import { Heart } from "lucide-react"; 
import { Separator } from "@/registry/default/ui/separator";
import Image from "next/image";
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
            { name: "Blogs", href: "/blogs" },
            { name: "Showcase", href: "/showcase" },
            { name: "Contact", href: "/" },
          ],
        },
        {
          id: "privacy",
          name: "Privacy",
          items: [
            { name: "Privacy", href: "/" },
            { name: "Terms", href: "/" },
            { name: "Cookie", href: "/" },
          ],
        },  
      ],
    },
  ],
};

export function Footer() {
  return (
    <footer className="">
      <div className="relative container mt-20 grid items-center justify-center">
        <Link href="/">
          <Image
            src="/ai-logo.png"
            alt="logo"
            height={80}
            width={80}
            className="h-40 z-10 w-full object-contain"
          />
        </Link>
        <p className="text-center text-muted-foreground text-xs px-6">
          I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end.
        </p>
      </div>
      <Separator className="my-10" />
      <div>
        {navigation.categories.map((category) => (
          <div key={category.name} className="grid text-center grid-cols-3 gap-6">
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
