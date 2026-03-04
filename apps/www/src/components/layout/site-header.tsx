import Link from "next/link"
import { CommandMenu } from "@/src/components/layout/command-menu"
import { GitHubLink } from "@/src/components/layout/github-link"
import { MainNav, MoreMainNav } from "@/src/components/layout/main-nav"
import { MobileNav } from "@/src/components/layout/mobile-nav"
import { ModeSwitcher } from "@/src/components/layout/mode-switcher"
import { MorenavItems, navItems } from "@/src/lib/categories"
import { source } from "@/src/lib/source"

import blocks from "@/registry/__blocks__.json"
import { Button } from "@/registry/aliimam/ui/button"
import { Separator } from "@/registry/aliimam/ui/separator"

export function SiteHeader() {
  const pageTree = source.pageTree

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          <Button asChild variant="ghost" size="icon" className="flex size-8">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center gap-2"
            >
              <img
                src="/ai-logo-white.png"
                alt="Your Image"
                height={50}
                width={50}
                className="z-10 hidden h-10 w-full object-contain dark:block"
              />
              <img
                src="/ai-logo-black.png"
                alt="Your Image"
                height={50}
                width={50}
                className="z-10 block h-10 w-full object-contain dark:hidden"
              />
            </Link>
          </Button>
          <MainNav items={navItems} className="hidden lg:flex" />
          <MoreMainNav  items={MorenavItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu
                tree={pageTree}
                navItems={navItems}
                blocks={blocks}
              />
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink />
            <ModeSwitcher />
            <Button asChild className="hidden md:block">
              <Link target="_blank" href="https://cal.com/aliimam/30min">
                Book a Call
              </Link>
            </Button>
            <MobileNav
              tree={pageTree}
              items={navItems}
              className="flex lg:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
