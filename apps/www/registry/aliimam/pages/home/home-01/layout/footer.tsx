import Link from "next/link"
import { ChevronDown, SquareArrowOutUpRight } from "@aliimam/icons"
import { Github, LinkedIn, Vercel, X, YouTube } from "@aliimam/logos"

import { ThemeSwitcher } from "@/registry/aliimam/pages/home/home-01/layout/theme"
import { Button } from "@/registry/aliimam/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/aliimam/ui/dropdown-menu"

const linksPro = [
  {
    group: "Product",
    items: [
      {
        title: "AI",
        href: "#",
      },
      {
        title: "Enterprise",
        href: "#",
      },
      {
        title: "Fluid Compute",
        href: "#",
      },
      {
        title: "Next.js",
        href: "#",
      },
      {
        title: "Observability",
        href: "#",
      },
      {
        title: "Previews",
        href: "#",
      },
      {
        title: "Rendering",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
      {
        title: "Turbo",
        href: "#",
      },
      {
        title: "Domains",
        href: "#",
      },
    ],
  },
]

const linksRes = [
  {
    group: "Resources",
    items: [
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Guides",
        href: "#",
      },
      {
        title: "Academy",
        href: "#",
      },
      {
        title: "Help",
        href: "#",
      },
      {
        title: "Integrations",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Resources",
        href: "#",
      },
      {
        title: "Solution Partners",
        href: "#",
      },
      {
        title: "Startups",
        href: "#",
      },
      {
        title: "Templates",
        href: "#",
      },
    ],
  },
]

const linksCom = [
  {
    group: "Company",
    items: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Events",
        href: "#",
      },
      {
        title: "Partners",
        href: "#",
      },
      {
        title: "Shipped",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-5">
            <div className="grid gap-3">
              {linksPro.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
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
                  <Link
                    href={"#"}
                    className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm duration-150"
                  >
                    v0
                    <SquareArrowOutUpRight strokeWidth={2} size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksRes.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  <Link
                    href={"#"}
                    className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm duration-150"
                  >
                    Community
                    <SquareArrowOutUpRight strokeWidth={2} size={16} />
                  </Link>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm">
                      SDKs by Vercel <ChevronDown strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        AI SDK{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Flags SDK{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Chat SDK{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Streamdown AI{" "}
                        <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksCom.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
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
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm">
                      Legal <ChevronDown strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        Cookie Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Cookie Preferences
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DMCA Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DORA Addendum
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DPA
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-16 px-4">
                        Domain Name Registration and Services Terms
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Event Code of Conduct
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Event Terms and Conditions
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Inactivity Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Job Applicant Privacy Notice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Privacy Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        SLA
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Sub-processors
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Support Terms
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Terms of Service
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Trademark Policy
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              <div className="space-y-3 text-sm">
                <span className="block font-medium">Social</span>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary block duration-150"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} />
                    Github
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary block duration-150"
                >
                  <span className="flex items-center gap-2">
                    <LinkedIn className="grayscale" size={14} />
                    LinkedIn
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary block duration-150"
                >
                  <span className="flex items-center gap-2">
                    <X size={14} />
                    Twitter
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary block duration-150"
                >
                  <span className="flex items-center gap-2">
                    <YouTube className="grayscale" size={14} />
                    YouTube
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-end">
              <Vercel size={18} />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <Button
            className="cursor-pointer text-blue-500 hover:text-blue-500"
            variant={"ghost"}
          >
            <span className="border-background block size-3 rounded-full border bg-blue-500" />
            All systems normal.
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
