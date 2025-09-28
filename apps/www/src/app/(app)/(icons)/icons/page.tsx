"use client";
import { TabsNav } from "@/src/components/icons/tabs-nav";
import * as Icons from "@aliimam/icons";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function About() {
  const [activeTab, setActiveTab] = useState<"stroke" | "solid">("stroke");

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

  // Test if a component supports solid type
  const supportssolid = (
    Component: React.ComponentType<any>,
    name: string
  ): boolean => {
    try {
      // Try to create the component with solid type
      const TestComponent = Component as any;

      // Check if the component has solid in its source code or metadata
      const componentString = TestComponent.toString();
      const hassolidInCode =
        componentString.includes("solid") ||
        componentString.includes('type === "solid"');

      // Also check metadata for solid support
      const metadata = TestComponent.metadata;
      const hassolidInMetadata =
        metadata &&
        (metadata.name?.toLowerCase().includes("solid") ||
          metadata.category?.toLowerCase().includes("solid") ||
          (metadata.type &&
            (Array.isArray(metadata.type)
              ? metadata.type.includes("solid")
              : metadata.type === "solid")));

      return hassolidInCode || hassolidInMetadata;
    } catch (error) {
      return false;
    }
  };

  // Filter icons based on the active tab
  const getFilteredIconsByCategory = (type: "stroke" | "solid") => {
    let filteredComponents = iconComponents;

    if (type === "solid") {
      // Only show icons that support solid
      filteredComponents = iconComponents.filter(({ name, Component }) =>
        supportssolid(Component, name)
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
          onClick={() => setActiveTab("stroke")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            activeTab === "stroke"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Icons
        </button>
        <button
          onClick={() => setActiveTab("solid")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            activeTab === "solid"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          solids
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

                <div className="flex flex-wrap justify-center gap-12">
                  {icons.map(({ name, Component }) => (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            key={`${name}-${activeTab}`}
                            className="flex flex-col items-center"
                          >
                            <Component
                              type={activeTab === "solid" ? "solid" : "stroke"}
                              className="h-10 w-10"
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
