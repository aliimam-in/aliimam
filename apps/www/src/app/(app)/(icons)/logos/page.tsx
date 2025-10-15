"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { TabsContent } from "@/registry/default/ui/tabs";
import { useLogos } from "@/src/components/icons/logo-context";
import { LogoPreviewPanel } from "@/src/components/icons/icon-preview";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Figma } from "@aliimam/logos";
import { ContentCopyButton } from "@/src/components/ui/copy-button";

export default function LogosPage() {
  const { searchQuery, activeCategory, iconComponents } = useLogos();
  const [selectedIcon, setSelectedIcon] = useState<{
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    type: string;
  } | null>(null);

  const supportsType = (
    Component: React.ComponentType<any>,
    name: string,
    type: string
  ): boolean => {
    try {
      const TestComponent = Component as any;
      const componentString = TestComponent.toString();
      const hasTypeInCode =
        componentString.includes(type) ||
        componentString.includes(`type === "${type}"`);

      const metadata = TestComponent.metadata;
      const hasTypeInMetadata =
        metadata &&
        (metadata.name?.toLowerCase().includes(type) ||
          metadata.category?.toLowerCase().includes(type) ||
          (metadata.type &&
            (Array.isArray(metadata.type)
              ? metadata.type.includes(type)
              : metadata.type === type)));

      return hasTypeInCode || hasTypeInMetadata;
    } catch (error) {
      return false;
    }
  };

  const isNotFlagOrSticker = (Component: React.ComponentType<any>, name: string): boolean => {
    const metadata = (Component as any).metadata;
    const category = metadata?.category?.toLowerCase() || ""; 
     
    return !category.includes("symbol") &&
           !category.includes("shape")
  };

  const getFilteredIconsByCategory = (
    type: "icon" | "wordmark"
  ) => {
    let filteredComponents = iconComponents.filter(({ name, Component }) =>
      isNotFlagOrSticker(Component, name)
    );

    if (type !== "icon") {
      filteredComponents = filteredComponents.filter(({ name, Component }) =>
        supportsType(Component, name, type)
      );
    }

    if (searchQuery) {
      filteredComponents = filteredComponents.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredComponents.reduce(
      (acc, { name, Component }) => {
        const category =
          (Component as any).metadata?.category || "Uncategorized";

        if (activeCategory !== "all" && category !== activeCategory) {
          return acc;
        }

        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push({ name, Component });
        return acc;
      },
      {} as Record<
        string,
        {
          name: string;
          Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        }[]
      >
    );
  };

  const getSizeClasses = (type: "icon" | "wordmark") => {
    switch (type) {
      case "wordmark":
        return "h-8 w-32";
      default:
        return "h-10 w-10";
    }
  };

  const renderIcons = (type: "icon" | "wordmark") => {
    const iconsByCategory = getFilteredIconsByCategory(type);
    const sizeClasses = getSizeClasses(type);

    return (
      <div className="flex relative items-stretch xl:w-full">
        <div className="flex min-w-0 flex-1 border rounded-md p-6 flex-col">
          {Object.keys(iconsByCategory).length > 0 ? (
            Object.entries(iconsByCategory)
              .sort()
              .map(([category, icons]) => (
                <div key={`${category}-${type}`} className="mb-2">
                  <div className="flex flex-wrap gap-2">
                    {icons.map(({ name, Component }) => (
                      <Tooltip key={`${name}-${type}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`flex flex-col cursor-pointer hover:ring-2 ring-ring/20 bg-muted/50 dark:bg-muted/30 p-8 rounded-3xl items-center transition-all ${
                              selectedIcon?.name === name &&
                              selectedIcon?.type === type
                                ? "ring-2 ring-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setSelectedIcon({ name, Component, type })
                            }
                          >
                            <Component type={type} className={sizeClasses} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-xs">{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <p className="text-muted-foreground">
              No {type} found {searchQuery && `matching "${searchQuery}"`}
            </p>
          )}
        </div>
        <div className="sticky w-60 -mr-2 top-38 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)-2rem)] flex-col gap-3 overflow-hidden overscroll-none pb-8 xl:flex">
          <LogoPreviewPanel
            selectedIcon={selectedIcon}
            onClearSelection={() => setSelectedIcon(null)}
          />
          <div className="px-3 grid gap-2">
            <Link
              target="_blank"
              href={
                "https://www.figma.com/community/file/1553761057642972203/ai-logos"
              }
            >
              <Button variant={"outline"} className="w-full">
                <Figma /> Open in Figma
              </Button>
            </Link>
            <ContentCopyButton
              className="w-full font-mono text-xs"
              value={"npm i @aliimam/logos"}
            />
            <Link href={"/docs/icons/introduction"}>
              <Button className="w-full">See Docs</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col items-center">
      <TabsContent value="icon" className="mt-0 w-full flex justify-center">
        {renderIcons("icon")}
      </TabsContent>

      <TabsContent value="wordmark" className="mt-0 w-full flex justify-center">
        {renderIcons("wordmark")}
      </TabsContent>
    </div>
  );
}