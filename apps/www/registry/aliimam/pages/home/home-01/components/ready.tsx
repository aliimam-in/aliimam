"use client"

import { Plus } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

export function Ready() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:px-0">
      <div className="relative grid w-full border-x border-b md:grid-cols-3">
        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -right-4 -bottom-4"
        />
        <div className="col-span-2 flex max-w-2xl flex-col p-10">
          <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-2xl">
            Ready to deploy?{" "}
            <span className="text-muted-foreground">
              Start building with a free account. Speak to an expert for your
            </span>{" "}
            <span className="text-blue-500">Pro</span>{" "}
            <span className="text-muted-foreground">or</span>{" "}
            <span className="text-violet-500">Enterprise</span>{" "}
            <span className="text-muted-foreground">needs.</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="h-10 w-fit rounded-full px-6">
              Start Deploying
            </Button>

            <Button
              variant={"outline"}
              className="h-10 w-fit rounded-full px-6"
            >
              Talk to an expert
            </Button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col border-t p-10 md:max-w-xl md:border-t-0 md:border-l">
          <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-lg">
            Explore Vercel Enterprise{" "}
            <span className="text-muted-foreground">
              with an interactive product tour, trial, or a personalized demo.
            </span>
          </h1>
          <div className="mt-6 flex gap-3">
            <Button
              variant={"outline"}
              className="h-10 w-fit rounded-full px-6"
            >
              Explore Enterprise
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
