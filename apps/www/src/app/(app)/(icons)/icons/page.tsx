"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { TabsContent } from "@/registry/default/ui/tabs";
import { useIcons } from "@/src/components/icons/icon-context";
import { IconPreviewPanel } from "@/src/components/icons/icon-preview";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Figma } from "@aliimam/logos";
import { ContentCopyButton } from "@/src/components/ui/copy-button";

export default function About() {
  const { searchQuery, activeCategory, iconComponents } = useIcons();
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

  const getFilteredIconsByCategory = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
    let filteredComponents = iconComponents;

    if (type !== "stroke") {
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

  const getSizeClasses = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
    switch (type) {
      case "solid":
        return "h-10 w-10";
      case "duotone":
        return "h-12 w-16";
      case "twotone":
        return "h-16 w-16";
      default:
        return "h-10 w-10";
    }
  };

  const renderIcons = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
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
          <IconPreviewPanel
            selectedIcon={selectedIcon}
            onClearSelection={() => setSelectedIcon(null)}
          />
          <div className="px-3 grid gap-2">
            <Link
              target="_blank"
              href={
                "https://www.figma.com/community/file/1553397064284560809/ai-icons"
              }
            >
              <Button variant={"outline"} className="w-full">
                <Figma /> Open in Figma
              </Button>
            </Link>
            <ContentCopyButton
              className="w-full font-mono text-xs"
              value={"npm i @aliimam/icons"}
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
      <TabsContent value="stroke" className="mt-0 w-full flex justify-center">
        {renderIcons("stroke")}
      </TabsContent>

      <TabsContent value="solid" className="mt-0 w-full flex justify-center">
        {renderIcons("solid")}
      </TabsContent>

      <TabsContent value="duotone" className="mt-0 w-full flex justify-center">
        {renderIcons("duotone")}
      </TabsContent>

      <TabsContent value="twotone" className="mt-0 w-full flex justify-center">
        {renderIcons("twotone")}
      </TabsContent>

      <TabsContent value="bulk" className="mt-0 w-full flex justify-center">
        {renderIcons("bulk")}
      </TabsContent>
    </div>
  );
}
