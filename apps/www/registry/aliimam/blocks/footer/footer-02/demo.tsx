"use client"

import Link from "next/link"
import { Behance } from "@/src/components/logos"
import { Facebook, Heart, Mail } from "@aliimam/icons"
import {
  Apple,
  Instagram,
  LinkedIn,
  Threads,
  WhatsApp,
  X,
  YouTube,
} from "@aliimam/logos"

import { Theme } from "@/registry/aliimam/blocks/footer/footer-02/theme"

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Works", href: "/agency/works" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Products", href: "/products" },
            { name: "Agency", href: "/agency" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "DIcons", href: "/products/dicons" },
            { name: "DShapes", href: "/products/dshapes" },
            { name: "Graaadients", href: "/products/graaadients" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Design", href: "/designs" },
            { name: "Components", href: "/components" },
            { name: "Blogs", href: "/blogs" },
          ],
        },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Graphic", href: "/graphic" },
            { name: "3D Icons", href: "/products/3dicons" },
            { name: "Colors", href: "/products/colors/generate" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
}

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 flex h-full w-full flex-col items-center justify-center">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full">
            <Apple className="w-8" />
          </p>
        </Link>
        <p className="text-center text-xs leading-4 md:text-left">
          Welcome to Designali, where creativity meets strategy to bring your
          vision to life. I am passionate about transforming ideas into
          compelling visual experiences. I specialize in crafting unique brand
          identities, immersive digital experiences, and engaging content that
          resonates with your audience. My mission is to empower businesses and
          brands to stand out in a crowded market. I believe in the power of
          design to tell stories, evoke emotions, and drive meaningful
          connections. I believe in quality, not quantity. Designali is actually
          an agency of one. This means you&apos;ll work directly with me,
          founder of Designali.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
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
                          className="text-sm text-slate-600 hover:text-black md:text-xs dark:text-slate-400 hover:dark:text-white"
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
        <div className="border-b border-dotted"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Logo"
            href="mailto:contact@designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://x.com/designali_in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.instagram.com/designali.in/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.threads.net/designali.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Threads className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <WhatsApp className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.behance.net/designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Behance className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.facebook.com/designali.agency"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.linkedin.com/company/designali"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <LinkedIn className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.youtube.com/@designali-in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <YouTube className="h-5 w-5" />
          </Link>
        </div>
        <Theme />
      </div>

      <div className="mx-auto mt-10 mb-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="mx-1 h-4 w-4 animate-pulse text-red-600" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              Ali Imam {""}
            </Link>
          </span>
          -
          <span className="hover:text-ali cursor-pointer text-slate-600 dark:text-slate-400 dark:hover:text-red-600">
            <Link aria-label="Logo" className="" href="/">
              Designali
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
