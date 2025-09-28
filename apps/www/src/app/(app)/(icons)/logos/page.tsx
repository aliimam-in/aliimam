"use client";
import { TabsNav } from "@/src/components/icons/tabs-nav";
import * as Icons from "@aliimam/logos";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function About() {
  const [activeTab, setActiveTab] = useState<"icon" | "wordmark">("icon");

  // Get all named exports from the icons module
  const iconComponents = Object.keys(Icons)
    .filter((key) => {
      const value = Icons[key as keyof typeof Icons];
      return typeof value === "function" || typeof value === "object";
    })
    .map((key) => ({
      name: key,
      Component: Icons[key as keyof typeof Icons] as React.ComponentType<
        React.SVGProps<SVGSVGElement>
      >,
    }));

  // Test if a component supports wordmark type
  const supportsWordmark = (
    Component: React.ComponentType<any>,
    name: string
  ): boolean => {
    try {
      // Try to create the component with wordmark type
      const TestComponent = Component as any;

      // Check if the component has wordmark in its source code or metadata
      const componentString = TestComponent.toString();
      const hasWordmarkInCode =
        componentString.includes("wordmark") ||
        componentString.includes('type === "wordmark"');

      // Also check metadata for wordmark support
      const metadata = TestComponent.metadata;
      const hasWordmarkInMetadata =
        metadata &&
        (metadata.name?.toLowerCase().includes("wordmark") ||
          metadata.category?.toLowerCase().includes("wordmark") ||
          (metadata.type &&
            (Array.isArray(metadata.type)
              ? metadata.type.includes("wordmark")
              : metadata.type === "wordmark")));

      return hasWordmarkInCode || hasWordmarkInMetadata;
    } catch (error) {
      return false;
    }
  };

  // Filter icons based on the active tab
  const getFilteredIconsByCategory = (type: "icon" | "wordmark") => {
    let filteredComponents = iconComponents;

    if (type === "wordmark") {
      // Only show icons that support wordmark
      filteredComponents = iconComponents.filter(({ name, Component }) =>
        supportsWordmark(Component, name)
      );
    }

    return filteredComponents.reduce(
      (acc, { name, Component }) => {
        const category =
          (Component as any).metadata?.category || "Uncategorized";
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

  const iconsByCategory = getFilteredIconsByCategory(activeTab);

  return (
    <div className="h-full px-6 flex flex-col justify-center items-center pt-40">
      <TabsNav />

      {/* Tab Navigation */}
      <div className="mb-8 flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("icon")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            activeTab === "icon"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Icons
        </button>
        <button
          onClick={() => setActiveTab("wordmark")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            activeTab === "wordmark"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Wordmark
        </button>
      </div>

      {/* Tab Content */}
      <div key={activeTab} className="w-full max-w-5xl">
        {Object.keys(iconsByCategory).length > 0 ? (
          Object.entries(iconsByCategory)
            .sort() // Sort categories alphabetically
            .map(([category, icons]) => (
              <div
                key={`${category}-${activeTab}`}
                className="mb-6 rounded-xl p-6 border"
              >
                <h2 className="text-sm text-muted-foreground mb-6">
                  {category}
                </h2>
                <div
                  className={`flex flex-wrap justify-center ${activeTab === "wordmark" ? "gap-20" : "gap-10"}`}
                >
                  {icons.map(({ name, Component }) => (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            key={`${name}-${activeTab}`}
                            className="flex flex-col items-center"
                          >
                            <Component
                              type={
                                activeTab === "wordmark" ? "wordmark" : "icon"
                              }
                              className={
                                activeTab === "icon" ? "h-12 w-12" : "h-10 w-30"
                              }
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </>
                  ))}
                </div>
              </div>
            ))
        ) : (
          <p>No {activeTab}s found in @aliimam/logos</p>
        )}
      </div>
    </div>
  );
}
