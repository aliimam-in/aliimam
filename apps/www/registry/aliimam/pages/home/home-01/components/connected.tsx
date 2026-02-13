"use client"

import { CircleArrowUp, Lock, MessageSquare, Terminal } from "@aliimam/icons"

export function Connected() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:px-0">
      <div className="w-full border-x border-b">
        <div className="grid md:grid-cols-2">
          <div className="p-10">
            <h1 className="text-muted-foreground lg:text-md flex w-full gap-1 text-sm">
              <Terminal size={18} />
              Git-connected Deploys
            </h1>
            <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-2xl">
              From localhost to https, in seconds.
            </h1>
            <h1 className="text-muted-foreground w-full text-sm font-medium tracking-tight lg:text-2xl">
              Deploy from Git or your CLI.
            </h1>
            <div className="mt-10 w-60 rounded-xl border p-4 shadow-sm lg:w-80">
              <div className="mb-3 flex gap-1">
                <div className="bg-primary/30 h-2 w-2 rounded-full" />
                <div className="bg-primary/30 h-2 w-2 rounded-full" />
                <div className="bg-primary/30 h-2 w-2 rounded-full" />
              </div>
              <p className="font-mono text-[10px]">
                ▲ ~ vercel-site/ git push Enumerating objects: 1, done. Counting
                objects: 100% (1/1), done. Writing objects: 100% (1/1), 72
                bytes, done. Total 1 (delta 0), reused 0 (delta 0). To
                github.com:vercel/ vercel-site.git 21326a9..81663c3 main - main
              </p>
            </div>
            <div className="bg-background relative z-10 -mt-10 ml-30 w-fit rounded-xl border p-4 shadow-sm lg:w-90">
              <div className="mb-3 grid grid-cols-3 items-center gap-1">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={12} />
                  <p className="font-mono text-[10px]">vercel.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border p-6 pb-0">
                <span className="text-muted-foreground text-center text-3xl font-bold">
                  What will you ship?
                </span>
                <div className="h-0 w-0 border-r-28 border-b-48 border-l-28 border-r-transparent border-l-transparent pt-6"></div>
              </div>
            </div>
          </div>
          <div className="border-t p-10 md:border-t-0 md:border-l">
            <h1 className="text-muted-foreground lg:text-md flex w-full gap-1 text-sm">
              <MessageSquare size={18} />
              Collaborative Pre-production
            </h1>
            <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-2xl">
              Every deploy is remarkable.
            </h1>
            <h1 className="text-muted-foreground w-full text-sm font-medium tracking-tight lg:text-2xl">
              Chat with your team on real, production-grade UI, not just
              designs.
            </h1>
            <div className="mt-10 flex flex-col space-y-4">
              <div className="bg-background w-60 self-start rounded-xl border p-4 shadow-sm">
                <p className="text-sm">
                  Swapped out the{" "}
                  <span className="bg-secondary rounded-md p-1 px-2">
                    button
                  </span>{" "}
                  for some variant we need
                </p>
              </div>
              <div className="self-end">
                <div className="bg-background flex items-center gap-4">
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-blue-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="scale(-1,1) translate(-12,0)"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>

                    <span className="text-primary-foreground relative -top-1 right-3 rounded-3xl bg-blue-500 px-2 py-1 text-xs">
                      AI
                    </span>
                  </div>
                  <p className="w-fit rounded-xl border p-4 text-sm shadow-sm">
                    How about this instead?
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-background flex items-center gap-4">
                  <p className="w-60 rounded-xl border p-4 text-sm shadow-sm">
                    I like it. Does this work with the brand tweaks{" "}
                    <strong>@aliimam-in</strong>
                  </p>
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-rose-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>

                    <span className="text-primary-foreground relative -top-1 left-3 rounded-3xl bg-rose-500 px-2 py-1 text-xs">
                      Ali Imam
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-end">
                <div className="bg-background flex items-end gap-4">
                  <p className="flex w-fit items-center gap-3 rounded-xl border p-4 text-sm shadow-sm">
                    This Looks Graet!
                    <CircleArrowUp />
                  </p>
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-green-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
