import * as React from "react";
import { highlightCode } from "@/src/lib/highlight-code";
import { registryItemSchema } from "shadcn/registry";
import { z } from "zod";

import { getRegistryItem } from "@/src/lib/registry";
import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  CopyRegistry,
  ParticlePreview, 
} from "../../ui/copy-button"; 
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";
import { ComponentSource } from "./component-source";
import { CodeBlockCommand } from "./code-block-command";
import { OpenInV0Button } from "../../ui/open-in-v0-button";
import Link from "next/link";

export type Particle = z.infer<typeof registryItemSchema> & {
  highlightedCode: string;
};

export async function ParticleDisplay({
  name,
  children,
  className,
}: { name: string } & React.ComponentProps<"div">) {
  const aliUrl = process.env.NEXT_PUBLIC_APP_URL || "https://aliimam.in";
  const particle = await getCachedRegistryItem(name);
  const highlightedCode = await getParticleHighlightedCode(
    particle?.files?.[0]?.content ?? ""
  );

  if (!particle || !highlightedCode) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex min-w-0 flex-col rounded-xl border bg-muted/50 bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-xl)+4px)] after:border after:border-border/50 after:bg-clip-padding dark:after:bg-background/72",
        className
      )}
    >
      <Tabs defaultValue="preview" className="w-full p-0">
        <div className="flex mt-2 ml-2 justify-between items-center">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="registry">Registry</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <CopyRegistry
              className="right-14"
              value={`${aliUrl}/r/${name}.json`}
              variant="outline"
            />
            <OpenInV0Button className="mr-3" name={name} />
          </div>
        </div>
        <TabsContent value="preview">
          <div className="-m-px flex min-w-0 flex-1 flex-col flex-wrap items-center justify-center overflow-x-auto border bg-background p-6 before:pointer-events-none before:absolute before:inset-0   lg:px-8 lg:py-12 dark:before:shadow-[0_-1px_--theme(--color-white/8%)]">
            <ParticlePreview>{children}</ParticlePreview>
          </div>
        </TabsContent>
        <TabsContent value="code" className="max-h-[600px]">
          <ComponentSource
            name={name}
            collapsible={false}
            className="h-full border-y overflow-hidden *:data-rehype-pretty-code-figure:mt-0 *:data-rehype-pretty-code-figure:no-scrollbar *:data-rehype-pretty-code-figure:max-h-full *:data-rehype-pretty-code-figure:overflow-y-auto"
          />
        </TabsContent>
        <TabsContent value="registry" className="mx-1 py-0">
          <figure
            className="rounded-none border-y"
            data-rehype-pretty-code-figure
          >
            <CodeBlockCommand
              __npm__={`npx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __yarn__={`npx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __pnpm__={`pnpm dlx shadcn@latest add "https://aliimam.in/r/${name}.json"`}
              __bun__={`bunx --bun shadcn@latest add "https://aliimam.in/r/${name}.json"`}
            />
          </figure>
          <div className="flex pt-4 pl-4 items-center gap-1.5">
            <Link href="/docs/ui">
              <Button
                size="sm"   
                className="capitalize"
              >
               See {particle.registryDependencies} Component Doc
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex items-center gap-3 p-2">
        <p className="flex flex-1 gap-1 truncate text-xs text-muted-foreground">
          <span className="truncate">{particle.description}</span>
        </p>
        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            variant="outline"
            className="text-xs"
            disabled
            title="Component name"
          >
            {particle.name}
          </Button>
        </div>
      </div>
    </div>
  );
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

const getParticleHighlightedCode = React.cache(async (content: string) => {
  return await highlightCode(content);
});
