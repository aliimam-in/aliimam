/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip";
import { TabsContent } from "@/registry/aliimam/ui/tabs";
import { useLogos } from "@/src/components/icons/logo-context";
import { LogoPreviewPanel } from "@/src/components/icons/icon-preview";
import Link from "next/link";
import { Button } from "@/registry/aliimam/ui/button";
import { Figma } from "@aliimam/logos";
import { ContentCopyButton } from "@/src/components/copy-button";

export default function About() {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  };

  const getFilteredIconsByCategory = (
    type: "icon" | "wordmark" | "symbols" | "vectors"
  ) => {
    let filteredComponents = iconComponents;

    if (type !== "icon") {
      filteredComponents = iconComponents.filter(({ name, Component }) =>
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

  const getSizeClasses = (type: "vectors") => {
    switch (type) { 
      case "vectors":
        return "h-12 w-16"; 
      default:
        return "h-10 w-10";
    }
  };

  const renderIcons = (type: "vectors") => {
    const iconsByCategory = getFilteredIconsByCategory(type);
    const sizeClasses = getSizeClasses(type);

    return (
      <div className="flex relative -mt-2 items-stretch xl:w-full">
        <div className="flex min-w-0 flex-1 border-x p-2 flex-col">
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
                            className={`flex flex-col cursor-pointer hover:ring-2 ring-ring/20 bg-muted/50 dark:bg-muted/30 p-8 items-center transition-all ${
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
        <div className="sticky w-60 pb-3 top-38 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)-2rem)] flex-col gap-3 overflow-hidden overscroll-none xl:flex">
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
        {renderIcons("vectors")}
      </TabsContent> 
    </div>
  );
}
