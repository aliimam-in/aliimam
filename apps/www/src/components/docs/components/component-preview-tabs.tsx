"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";
import { Code, Eye, Loader, RotateCcw, Settings } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

import { CodeBlockCommand } from "./code-block-command";
import { useConfig } from "@/src/hooks/use-config";

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  component,
  name,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  name?: React.ReactNode;
  source: React.ReactNode;
}) {
  const [tab, setTab] = React.useState("preview");
  const [key, setKey] = React.useState(0);
  const [config] = useConfig();

  const divRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => { 
    if (divRef.current) {
      divRef.current.style.setProperty("--radius", `${config.radius}rem`);
    }
  }, [config.radius]);

  // Don't render preview until mounted to avoid SSR/client mismatch
  if (!mounted) return null;

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <Tabs
        className="relative mr-auto w-full"
        value={tab}
        defaultValue="preview"
        onValueChange={setTab}
      >
        <div className="flex items-center justify-between">
          {!hideCode && (
            <TabsList className="justify-start gap-2 rounded-none bg-transparent px-2 md:px-0">
              <TabsTrigger value="preview">
                <Eye />
              </TabsTrigger>
              <TabsTrigger value="code">
                <Code />
              </TabsTrigger>
              <TabsTrigger value="install">
                <Settings />
              </TabsTrigger>
            </TabsList>
          )}
          <p className="font-light text-muted-foreground text-sm">{name}</p>
        </div>
      </Tabs>

      <div data-tab={tab} className="relative">
        <div
          data-slot="preview"
          key={key}
          data-active={tab === "preview"}
          className="invisible rounded-lg border data-[active=true]:visible"
        >
          <div
            ref={divRef}
            data-align={align}
            className={cn(
              "preview flex h-[500px] theme-container w-full justify-center p-10",
              align === "center" ? "items-center" : align === "end" ? "items-end" : "items-start"
            )}
          >
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                onClick={() => setKey((prev) => prev + 1)}
                className="flex hover:rotate-45 hover:bg-transparent dark:hover:bg-black items-center rounded-lg px-3 py-1"
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
          className="absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:!m-0 **:[pre]:h-[500px]"
        >
          {source}
        </div>

        <div
          data-slot="install"
          data-active={tab === "install"}
          className="absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:!m-0 **:[pre]:h-auto"
        >
          <figure className="[&>pre]:max-h-24">
            <CodeBlockCommand
              __npm__={`npx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __yarn__={`npx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __pnpm__={`pnpm dlx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __bun__={`bunx --bun shadcn@latest add "https://aliimam.in/r/${name}.json"`}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
