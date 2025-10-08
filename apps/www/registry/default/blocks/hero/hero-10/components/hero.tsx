"use client";

import * as React from "react";

import { Button } from "@/registry/default/ui/button";

export function HeroSection() {
  return (
    <div className="h-full w-full p-6 md:p-20">
      <div className="relative h-full w-full">
        <div className="h-[760px] bg-background/5 backdrop-blur-3xl shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]">
          <header className="relative z-20 flex items-center justify-between p-6">
            <a href="#" aria-label="home" className="flex gap-2 items-center">
              <img
                src="/ai-logo-white.png"
                alt="Your Image"
                height={50}
                width={50}
                className="h-10 z-10 w-full hidden dark:block object-contain"
              />
              <img
                src="/ai-logo-black.png"
                alt="Your Image"
                height={50}
                width={50}
                className="h-10 z-10 w-full dark:hidden block object-contain"
              />
            </a>
            {/* Navigation */}
            <nav className="hidden items-center space-x-2 md:flex">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-xs font-light transition-all duration-200"
              >
                Products
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-xs font-light transition-all duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-xs font-light transition-all duration-200"
              >
                Docs
              </a>
            </nav>

            <Button className="z-10 flex h-8 cursor-pointer items-center rounded-full">
              Login
            </Button>
          </header>
          <main className="absolute bottom-8 left-8 z-20 max-w-lg">
            <div className="text-left">
              <div className="relative mb-4 inline-flex items-center rounded-md bg-white/5 px-3 py-1 backdrop-blur-sm">
                <div className="absolute top-0 right-1 left-1 h-px rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 text-xs font-light">
                  ✨ New Design Ideas
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mb-4 text-5xl leading-14 tracking-tight md:text-6xl">
                <span className="instrument italic">Beautiful</span> Design
                <br />
                <span className="font-bold tracking-tight">Experiences</span>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-xs leading-relaxed font-light">
                Discover the essence of creativity in our exquisite collection
                of top-tier abstract design assets. Each piece is a blend of
                beauty and utility, perfect for elevating any project.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="cursor-pointer"
                >
                  Pricing
                </Button>
                <Button size={"lg"} className="cursor-pointer">
                  Get Started
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
