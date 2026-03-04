"use client"

import Link from "next/link"
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
  { label: "About", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Contact", href: "#" },
]

export default function Footer() {
  return (
    <footer className="flex min-h-svh w-full items-center justify-center">
      <div className="p-10">
        <div className="bg-background -my-6 grid gap-12 rounded-md border p-10 md:-my-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Apple className="text-primary" />
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
                className="bg-primary hover:text-muted-foreground absolute top-0.5 right-0.5 h-8 w-8 rounded-md transition-transform hover:scale-105 dark:hover:text-white"
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
                  className="text-muted-foreground hover:text-foreground block transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="">
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <div className="text-muted-foreground hover:text-foreground grid space-y-2 transition-colors">
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
              <Select>
                <SelectTrigger className="text-md w-40 border-0 shadow-none">
                  <SelectValue placeholder="Legal" />
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
                href={"https://www.linkedin.com/aliimam"}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href={"https://x.com/aliimam_in"}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter X
              </Link>
              <Link
                href={"https://www.instagram.com/aliimam.in/"}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </Link>
            </div>
            <ThemeSwitch />
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between gap-3 py-4 text-center md:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2026 AI. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className="text-foreground/60 hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
