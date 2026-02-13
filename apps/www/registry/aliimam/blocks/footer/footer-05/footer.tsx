import Link from "next/link"
import {
  Apple,
  Facebook,
  Instagram,
  LinkedIn,
  Threads,
  X,
} from "@aliimam/logos"

const links = [
  {
    group: "Studio",
    items: [
      { title: "Our Work", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Services", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Process", href: "#" },
      { title: "Why Choose Us", href: "#" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Brand Identity", href: "#" },
      { title: "UI/UX Design", href: "#" },
      { title: "Web Design", href: "#" },
      { title: "Logo Design", href: "#" },
      { title: "Social Media Design", href: "#" },
      { title: "Motion Graphics", href: "#" },
      { title: "Design Systems", href: "#" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "Design Blog", href: "#" },
      { title: "Free Assets", href: "#" },
      { title: "Templates", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Help Center", href: "#" },
    ],
  },
  {
    group: "Legal",
    items: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Licensing", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Apple />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {2026} Ali Imam, All rights reserved
          </span>
          <div className="order-first flex flex-wrap items-center justify-center gap-8 text-sm md:order-last">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <X className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <LinkedIn className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block"
            >
              <Facebook className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="text-muted-foreground hover:text-primary block"
            >
              <Threads className="h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <Instagram className="h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
