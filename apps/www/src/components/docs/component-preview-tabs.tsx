"use client"

import * as React from "react"

import { cn } from "@/src/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"
import { Loader, RotateCcw } from "lucide-react"
import { Button } from "@/registry/aliimam/ui/button"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  component,
  source,
  marginOff = false,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  component: React.ReactNode
  source: React.ReactNode
  marginOff?: boolean
}) {
  const [tab, setTab] = React.useState("preview")
  const [key, setKey] = React.useState(0);

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <Tabs
        className="relative mr-auto w-full"
        value={tab}
        onValueChange={setTab}
      >
        <div className="flex items-center justify-between">
          {!hideCode && (
            <TabsList className="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0">
              <TabsTrigger
                value="preview"
                className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
      </Tabs>
      <div
        data-tab={tab}
        className="data-[tab=code]:border-code relative rounded-lg border md:-mx-1"
      >
        <div
          data-slot="preview"
          key={key}
          data-active={tab === "preview"}
          className="invisible data-[active=true]:visible"
        >
          <div
            data-align={align}
            className={cn(
              "preview flex h-[450px] w-full justify-center data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
              marginOff ? "p-0" : "p-10"
            )}
          >
            <div className="absolute z-20 top-2 right-2 flex gap-2">
              <Button
                onClick={() => setKey((prev) => prev + 1)}
                className="flex hover:rotate-45 hover:bg-transparent dark:hover:bg-black/5 items-center rounded-lg px-3 py-1"
                variant="ghost"
                size="icon"
              >
                <RotateCcw size={16} />
              </Button>
            </div>

            <React.Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  <Loader className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {component}
            </React.Suspense>
          </div>
        </div>
        <div
          data-slot="code"
          data-active={tab === "code"}
          className="absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:!m-0 **:[pre]:h-[450px]"
        >
          {source}
        </div>
      </div>
    </div>
  )
}
