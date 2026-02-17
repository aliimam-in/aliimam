"use client"

import Link from "next/link"
import { ChevronRight } from "@aliimam/icons"

import { Timeline } from "@/registry/aliimam/blocks/feature/feature-02/timeline"
import { ShineBorder } from "@/registry/aliimam/components/shine-border"
import { cn } from "@/registry/aliimam/lib/utils"
import { buttonVariants } from "@/registry/aliimam/ui/button"

export default function CTASection() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <ShineBorder
        borderRadius={30}
        borderWidth={4}
        className="mx-auto max-w-xl"
      >
        <div className="p-10">
          <h1 className="mb-8 text-center text-2xl md:text-2xl">
            How it Works?
          </h1>
          <Timeline />
          <div className="text-primary z-10 mt-6 flex flex-col items-center text-center">
            <h1 className="text-lg font-semibold md:text-4xl">
              Design anything you need
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              No credit card required.
            </p>
            <div className="mt-4 grid gap-2 md:flex">
              <Link
                href="#"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "default",
                  }),
                  "group"
                )}
              >
                Get Started
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
              <Link
                target="_blank"
                href="https://cal.com/dalim/15min"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group"
                )}
              >
                Book a call
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="bg-background absolute inset-0 -z-10 rounded-full opacity-40 blur-xl" />
        </div>
      </ShineBorder>
    </section>
  )
}
