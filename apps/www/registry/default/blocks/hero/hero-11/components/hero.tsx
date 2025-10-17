"use client";

import Link from "next/link";

import { Button } from "@/registry/default/ui/button";
import { Vercel } from "@aliimam/logos";
import { Plus } from "@aliimam/icons";

export function HeroSection() {
  return (
    <div className="pt-10 px-4 lg:px-0 flex mx-auto max-w-6xl flex-col items-center justify-center text-center">
      <div className="grid w-full border-0 border-b md:border relative grid-cols-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 100% at 0% 100%, #f97316 50%, #3b82f6 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 60%)",
            maskImage:
              "linear-gradient(to top, black 0%, transparent 60%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
         
        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -right-4"
        />
        <div className="md:grid hidden w-full col-span-1">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b last:border-0 flex-1 aspect-square"
            />
          ))}
        </div>
        <div className="md:col-span-8 col-span-10">
          <div className="md:flex hidden">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="border-l last:border-r flex-1 aspect-square"
              />
            ))}
          </div>
          <div className="relative w-full border -mt-0.5 flex items-center flex-col justify-center  md:h-89 lg:h-116 p-6 md:p-20">
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
                  className="cursor-pointer rounded-full w-46 h-12"
                  variant="default"
                >
                  <Vercel />
                  Start Deploying
                </Button>
              </Link>
              <Link href={"https://cal.com/aliimam/30min"} target="_blank">
                <Button
                  className="cursor-pointer rounded-full w-46 h-12"
                  variant="outline"
                >
                  Get a Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute z-10 top-15 md:top-22 lg:top-29 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                className="size-34 md:size-50 lg:size-66 dark:hidden"
                alt={`Ali's avatar`}
                src={"https://raw.githubusercontent.com/aliimam-in/templates/076f7e05b77fc6d31aa3c751406c9b2123c45954/apps/vercel/public/vercel-logo-white.svg"}
                fetchPriority="high"
              />
              <img
                className="size-34 md:size-50 lg:size-66 hidden dark:block"
                alt={`Ali's avatar`}
                src={"https://raw.githubusercontent.com/aliimam-in/templates/076f7e05b77fc6d31aa3c751406c9b2123c45954/apps/vercel/public/vercel-logo-black.svg"}
                fetchPriority="high"
              />
            </div>

            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l last:border-r border-b flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l border-b last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:grid hidden col-span-1">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b last:border-b-0 flex-1 aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
