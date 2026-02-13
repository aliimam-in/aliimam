"use client"

import { GitMerge, Globe, Terminal } from "@aliimam/icons"

export function Deploy() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:px-0">
      <div className="w-full space-y-3 border-x border-b py-20">
        <h1 className="flex w-full items-center justify-center gap-2 text-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Develop with your favorite tools
          <Terminal className="mt-2" strokeWidth={2.5} size={34} />
        </h1>
        <h1 className="flex w-full items-center justify-center gap-2 text-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Launch globally, instantly
          <Globe strokeWidth={2.5} size={30} />
          Keep pushing
          <GitMerge strokeWidth={2.5} size={30} />
        </h1>
      </div>
      <div className="w-full space-y-3 border-x border-b py-2" />
    </div>
  )
}
