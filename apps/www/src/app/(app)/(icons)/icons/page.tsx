/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ContentCopyButton } from "@/src/components/copy-button"
import { useIcons } from "@/src/components/icons/icon-context"
import { IconPreviewPanel } from "@/src/components/icons/icon-preview"
import { Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"
import { TabsContent } from "@/registry/aliimam/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"

export default function About() {
  const { searchQuery, activeCategory, iconComponents } = useIcons()
  const [selectedIcon, setSelectedIcon] = useState<{
    name: string
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
    type: string
  } | null>(null)

  const supportsType = (
    Component: React.ComponentType<any>,
    name: string,
    type: string
  ): boolean => {
    try {
      const TestComponent = Component as any
      const componentString = TestComponent.toString()
      const hasTypeInCode =
        componentString.includes(type) ||
        componentString.includes(`type === "${type}"`)

      const metadata = TestComponent.metadata
      const hasTypeInMetadata =
        metadata &&
        (metadata.name?.toLowerCase().includes(type) ||
          metadata.category?.toLowerCase().includes(type) ||
          (metadata.type &&
            (Array.isArray(metadata.type)
              ? metadata.type.includes(type)
              : metadata.type === type)))

      return hasTypeInCode || hasTypeInMetadata
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false
    }
  }

  const getFilteredIconsByCategory = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
    let filteredComponents = iconComponents

    if (type !== "stroke") {
      filteredComponents = iconComponents.filter(({ name, Component }) =>
        supportsType(Component, name, type)
      )
    }

    if (searchQuery) {
      filteredComponents = filteredComponents.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filteredComponents.reduce(
      (acc, { name, Component }) => {
        const category =
          (Component as any).metadata?.category || "Uncategorized"

        if (activeCategory !== "all" && category !== activeCategory) {
          return acc
        }

        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push({ name, Component })
        return acc
      },
      {} as Record<
        string,
        {
          name: string
          Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
        }[]
      >
    )
  }

  const getSizeClasses = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
    switch (type) {
      case "solid":
        return "h-10 w-10"
      case "duotone":
        return "h-12 w-16"
      case "twotone":
        return "h-16 w-16"
      default:
        return "h-10 w-10"
    }
  }

  const renderIcons = (
    type: "stroke" | "solid" | "duotone" | "twotone" | "bulk"
  ) => {
    const iconsByCategory = getFilteredIconsByCategory(type)
    const sizeClasses = getSizeClasses(type)

    return (
      <div className="relative flex items-stretch xl:w-full">
        <div className="-mt-2 flex min-w-0 flex-1 flex-col border-x p-2">
          {Object.keys(iconsByCategory).length > 0 ? (
            Object.entries(iconsByCategory)
              .sort()
              .map(([category, icons]) => (
                <div key={`${category}-${type}`} className="mb-1">
                  <div className="flex flex-wrap gap-1">
                    {icons.map(({ name, Component }) => (
                      <Tooltip key={`${name}-${type}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`ring-ring/20 bg-muted/50 dark:bg-muted/30 flex cursor-pointer flex-col items-center rounded-none p-8 transition-all hover:ring-2 ${
                              selectedIcon?.name === name &&
                              selectedIcon?.type === type
                                ? "ring-primary ring-2"
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
        <div className="sticky top-32 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height))] w-60 flex-col gap-3 overflow-hidden overscroll-none pb-3 xl:flex">
          <IconPreviewPanel
            selectedIcon={selectedIcon}
            onClearSelection={() => setSelectedIcon(null)}
          />
          <div className="grid gap-2 px-3">
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
    )
  }

  return (
    <div className="flex h-full flex-col items-center">
      <TabsContent value="stroke" className="mt-0 flex w-full justify-center">
        {renderIcons("stroke")}
      </TabsContent>

      <TabsContent value="solid" className="mt-0 flex w-full justify-center">
        {renderIcons("solid")}
      </TabsContent>

      <TabsContent value="duotone" className="mt-0 flex w-full justify-center">
        {renderIcons("duotone")}
      </TabsContent>

      <TabsContent value="twotone" className="mt-0 flex w-full justify-center">
        {renderIcons("twotone")}
      </TabsContent>

      <TabsContent value="bulk" className="mt-0 flex w-full justify-center">
        {renderIcons("bulk")}
      </TabsContent>
    </div>
  )
}
