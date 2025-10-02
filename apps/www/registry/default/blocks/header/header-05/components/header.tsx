/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ShoppingBag, Equal } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/registry/default/ui/sheet";
import { Menus } from "@/registry/default/blocks/header/header-05/components/menus";
import { PhoneMenu } from "@/registry/default/blocks/header/header-05/components/phone-menus";
import { Search } from "@/registry/default/blocks/header/header-05/components/search";

const Header = () => {
  return (
    <header className="sticky top-0 h-12 flex justify-center w-full bg-foreground">
      <div className="w-full max-w-4xl flex justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <a
            href="#"
            aria-label="home"
            className="flex gap-2 px-6 whitespace-nowrap items-center"
          >
            <img
              src="/ai-logo-white.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="h-7 w-7 dark:hidden block object-contain"
            />
            <img
              src="/ai-logo-black.png"
              alt="Design Logo"
              height={50}
              width={50}
              className="h-7 w-7 hidden dark:block object-contain"
            />
          </a>

          <Menus />
          <Sheet>
            <div className="flex items-center px-2 gap-2">
              <Search />
              <button className="h-9 w-9 text-background hover:text-background/80 relative">
                <ShoppingBag className="h-4 w-4" />
              </button>
              <SheetTrigger asChild>
                <button className="h-9 w-9 text-background hover:text-background/80 lg:hidden">
                  <Equal className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[300px] bg-foreground/90 backdrop-blur-lg border-muted-foreground p-0"
            >
              <PhoneMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Header };
