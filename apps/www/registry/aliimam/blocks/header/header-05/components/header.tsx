/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import { Equal, ShoppingBag } from "lucide-react"

import { Menus } from "@/registry/aliimam/blocks/header/header-05/components/menus"
import { PhoneMenu } from "@/registry/aliimam/blocks/header/header-05/components/phone-menus"
import { Search } from "@/registry/aliimam/blocks/header/header-05/components/search"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/aliimam/ui/sheet"

const Header = () => {
  return (
    <header className="bg-foreground sticky top-0 flex h-12 w-full justify-center">
      <div className="flex w-full max-w-4xl justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <a
            href="#"
            aria-label="home"
            className="flex items-center gap-2 px-6 whitespace-nowrap"
          >
            <img
              src="/ai-logo-white.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="block h-7 w-7 object-contain dark:hidden"
            />
            <img
              src="/ai-logo-black.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="hidden h-7 w-7 object-contain dark:block"
            />
          </a>

          <Menus />
          <Sheet>
            <div className="flex items-center gap-2 px-2">
              <Search />
              <button className="text-background hover:text-background/80 relative h-9 w-9">
                <ShoppingBag className="h-4 w-4" />
              </button>
              <SheetTrigger asChild>
                <button className="text-background hover:text-background/80 h-9 w-9 lg:hidden">
                  <Equal className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="bg-foreground/90 border-muted-foreground w-[300px] p-0 backdrop-blur-lg"
            >
              <PhoneMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { Header }
