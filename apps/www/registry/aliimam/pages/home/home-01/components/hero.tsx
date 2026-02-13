"use client"

import Link from "next/link"
import { Plus } from "@aliimam/icons"
import { Vercel } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

export function Hero() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-10 text-center lg:px-0">
      <div className="relative grid w-full grid-cols-10 border-0 border-b md:border">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(80% 100% at 0% 100%, #f97316 50%, #3b82f6 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 60%)",
            maskImage: "linear-gradient(to top, black 0%, transparent 60%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -right-4 -bottom-4"
        />
        <div className="col-span-1 hidden w-full md:grid">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square flex-1 border-b last:border-0"
            />
          ))}
        </div>
        <div className="col-span-10 md:col-span-8">
          <div className="hidden md:flex">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-square flex-1 border-l last:border-r"
              />
            ))}
          </div>
          <div className="relative -mt-0.5 flex w-full flex-col items-center justify-center border p-6 md:h-89 md:p-20 lg:h-116">
            <h1 className="flex flex-col text-center text-3xl leading-none font-semibold tracking-tight lg:text-5xl">
              Build and deploy on the AI Cloud.
            </h1>
            <p className="md:text-md text-muted-foreground py-6 lg:text-lg">
              Vercel provides the developer tools and cloud infrastructure{" "}
              <br /> to build, scale, and secure a faster, more personalized
              web.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href={"/"}>
                <Button
                  className="h-12 w-46 cursor-pointer rounded-full"
                  variant="default"
                >
                  <Vercel />
                  Start Deploying
                </Button>
              </Link>
              <Link href={"https://cal.com/aliimam/30min"} target="_blank">
                <Button
                  className="h-12 w-46 cursor-pointer rounded-full"
                  variant="outline"
                >
                  Get a Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute top-15 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:top-22 lg:top-29">
              <img
                className="size-34 md:size-50 lg:size-66 dark:hidden"
                alt={`Ali's avatar`}
                src={"/pages/vercel-logo-white.svg"}
                fetchPriority="high"
              />
              <img
                className="hidden size-34 md:size-50 lg:size-66 dark:block"
                alt={`Ali's avatar`}
                src={"/pages/vercel-logo-black.svg"}
                fetchPriority="high"
              />
            </div>

            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square flex-1 border-b border-l last:border-r"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square flex-1 border-b border-l last:border-r"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square flex-1 border-l last:border-r"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden md:grid">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square flex-1 border-b last:border-b-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
