"use client"

import { Building, Shield } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

export function Scale() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:px-0">
      <div className="w-full space-y-3 border-x border-b py-20">
        <h1 className="flex w-full flex-wrap items-center justify-center gap-2 text-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Scale your
          <Button variant={"outline"} className="h-10 rounded-full px-6">
            <Building />
            Enterprise
          </Button>
          without compromising
          <Button variant={"outline"} className="h-10 rounded-full px-6">
            <Shield />
            Security
          </Button>
        </h1>
      </div>
      <div className="w-full space-y-3 border-x border-b py-2" />
    </div>
  )
}
