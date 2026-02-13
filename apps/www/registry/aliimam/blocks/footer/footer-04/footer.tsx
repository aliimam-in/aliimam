"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Apple } from "@aliimam/logos"
import { Send } from "lucide-react"

import { ThemeSwitch } from "@/registry/aliimam/blocks/footer/footer-04/theme"
import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/aliimam/ui/select"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
  { label: "Docs", href: "/docs" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="flex min-h-svh w-full items-center justify-center">
      <div className="p-10 text-white">
        <div className="bg-primary -my-6 grid gap-12 rounded-md border p-10 md:-my-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Apple />
            <h2 className="mt-6 mb-2 text-2xl font-semibold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-4">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary absolute top-0.5 right-0.5 h-8 w-8 rounded-md transition-transform hover:scale-105 hover:text-white/60 dark:hover:text-white"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="bg-primary/10 absolute top-0 -right-4 h-24 w-24 rounded-full blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="">
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <div className="grid space-y-2 text-white/60 transition-colors hover:text-white">
                <a
                  href="https://www.google.com/maps/place/Dalim/@23.6407561,86.1020664,19z/data=!3m1!4b1!4m6!3m5!1s0x39f42309f0f5d0b5:0xb7e835eb8fe26ca3!8m2!3d23.6407549!4d86.1027101!16s%2Fg%2F11xftydckp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Bokaro, India
                </a>
                <a href="tel:+11234567890" className="hover:underline">
                  Phone
                </a>
                <a href="mailto:contact@dalim.in" className="hover:underline">
                  Email
                </a>
              </div>
            </div>

            <div className="mt-1 -ml-3">
              <Select
                onValueChange={(value) => router.push(`/docs/legal/${value}`)}
              >
                <SelectTrigger className="text-md w-40 border-0 text-white/60 shadow-none transition-colors hover:text-white">
                  <SelectValue
                    className="text-white/60 hover:text-white"
                    placeholder="Legal"
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  <SelectGroup>
                    <SelectItem value="contact">Contact</SelectItem>
                    <SelectItem value="terms">Terms</SelectItem>
                    <SelectItem value="privacy">Privacy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex gap-6">
              <Link
                href={"https://www.linkedin.com/company/dalim-in"}
                target="_blank"
                className="text-white/60 transition-colors hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href={"https://x.com/dalim_in"}
                target="_blank"
                className="text-white/60 transition-colors hover:text-white"
              >
                Twitter X
              </Link>
              <Link
                href={"https://www.instagram.com/dalim.design/"}
                target="_blank"
                className="text-white/60 transition-colors hover:text-white"
              >
                Instagram
              </Link>
            </div>
            <ThemeSwitch />
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between gap-3 py-4 text-center md:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2026 Dalim. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/docs/legal/privacy"
              className="text-foreground/60 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/docs/legal/terms"
              className="text-foreground/60 hover:text-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
