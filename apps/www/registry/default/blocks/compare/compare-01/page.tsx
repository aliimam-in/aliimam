"use client";

import { Building, DollarSign, Headphones, List, Zap } from "@aliimam/icons";
import React, { useState } from "react";

import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area";
import { Separator } from "@/registry/default/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

const Compare1 = () => {
  const [activeTab, setActiveTab] = useState("AliImam");

  const solutions = {
    AliImam: {
      name: "Ali Imam",
      color: "#6366f1",
      icon: "🌊",
      description:
        "Ali Imam is building the next-gen design platform to streamline creative workflows, from concept to delivery.",
      features: {
        integration:
          "The only platform offering seamless integration with design tools, real-time collaboration, and advanced prototyping features.",
        features:
          "Comprehensive design tools including UI/UX kits, prototyping, asset libraries, and design system management for creative teams.",
        pricing:
          "Flexible pricing tailored to your studio’s needs, based on project scope and team size.",
        support: "Live chat with 7-minute average response time.",
      },
    },
    figma: {
      name: "Figma",
      color: "#F24E1E",
      icon: "F",
      description:
        "Figma is a cloud-based design and prototyping tool focused on collaborative UI/UX design.",
      features: {
        integration:
          "Requires technical setup for advanced integrations. Limited to specific design workflows.",
        features:
          "Strong collaboration features but lacks advanced design system management and asset libraries.",
        pricing:
          "Expensive for larger teams with paid add-ons for essential features.",
        support:
          "Support response times vary, often taking days for complex issues.",
      },
    },
    sketch: {
      name: "Sketch",
      color: "#FF9900",
      icon: "S",
      description:
        "Sketch is a vector-based design tool tailored for UI/UX and interface design.",
      features: {
        integration: "Requires months of setup for complex integrations.",
        features:
          "Feature-rich but rigid, with a dated interface and limited innovation.",
        pricing:
          "High cost based on user licenses, expensive for scaling teams.",
        support: "Slow support response, often requiring premium plans.",
      },
    },
    adobeXd: {
      name: "Adobe XD",
      color: "#470137",
      icon: "XD",
      description:
        "Adobe XD is a design and prototyping tool for enterprise-grade UI/UX projects.",
      features: {
        integration:
          "Requires paid consulting for integration with Adobe ecosystem, often taking months.",
        features:
          "Built for enterprise but rigid and challenging to maintain for dynamic teams.",
        pricing:
          "Premium pricing with high setup fees and mandatory subscriptions.",
        support:
          "Limited support unless on premium plans or consulting sessions.",
      },
    },
    canva: {
      name: "Canva",
      color: "#00C4B4",
      icon: "C",
      description:
        "Canva is a graphic design platform for creating visual content with templates.",
      features: {
        integration: "Limited integration with professional design workflows.",
        features:
          "Template-heavy but lacks advanced UI/UX or prototyping capabilities.",
        pricing: "Expensive for premium features, based on team size.",
        support:
          "Basic support with slow response times for non-premium users.",
      },
    },
    custom: {
      name: "Custom Design Tools",
      color: "#666666",
      icon: "🛠️",
      description:
        "Your in-house design tools are tailored to your specific creative needs but limited by your resources.",
      features: {
        integration:
          "Requires your design team to build and maintain tools from scratch, including workflows and asset management.",
        features:
          "Highly customizable but time-intensive, diverting focus from actual design work.",
        pricing:
          "Seemingly cost-free but requires significant time investment from your team.",
        support: "Self-supported, relying entirely on your team’s expertise.",
      },
    },
  };

  type CategoryKey =
    | "general"
    | "integration"
    | "features"
    | "pricing"
    | "support";

  const categories: {
    key: CategoryKey;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>;
  }[] = [
    { key: "general", label: "General", icon: Building },
    { key: "integration", label: "Integration", icon: Zap },
    { key: "features", label: "Features", icon: List },
    { key: "pricing", label: "Pricing", icon: DollarSign },
    { key: "support", label: "Support", icon: Headphones },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-medium">
            Compare design platforms
          </h1>
          <p className="text-muted-foreground">
            Find the perfect design platform to elevate your creative workflow
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="">
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="flex w-max space-x-2 bg-transparent">
              {Object.entries(solutions).map(([key, solution]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-secondary flex items-center gap-2"
                >
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold text-white"
                    style={{ backgroundColor: solution.color }}
                  >
                    {solution.icon}
                  </div>
                  <span className="text-sm font-medium">{solution.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>

          <Separator className="my-6" />

          {Object.entries(solutions).map(([key, solution]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="overflow-hidden rounded-lg border">
                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-secondary border-b">
                        <th className="border-r p-6 text-left font-medium">
                          Compare
                        </th>
                        <th className="min-w-[300px] border-r p-6 text-center">
                          <div className="flex items-center justify-center gap-3">
                            <div className="text-3xl font-bold">🌊</div>
                            <div className="text-left">
                              <div className="text-lg font-bold">Ali Imam</div>
                            </div>
                          </div>
                        </th>
                        <th className="min-w-[300px] p-6 text-center">
                          <div className="flex items-center justify-center gap-3">
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded font-bold"
                              style={{ backgroundColor: solution.color }}
                            >
                              {solution.icon}
                            </div>
                            <div className="text-left">
                              <div className="text-lg font-bold">
                                {solution.name}
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => {
                        const Icon = category.icon;
                        const isLast = index === categories.length - 1;

                        return (
                          <tr
                            key={category.key}
                            className={!isLast ? "border-b" : ""}
                          >
                            <td className="bg-secondary min-w-60 border-r p-6">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <span className="font-medium">
                                  {category.label}
                                </span>
                              </div>
                            </td>
                            <td className="border-r p-6 text-center">
                              <div className="text-muted-foreground text-sm">
                                {category.key === "general"
                                  ? solutions.AliImam.description
                                  : solutions.AliImam.features[category.key]}
                              </div>
                            </td>
                            <td className="p-6 text-center">
                              <div className="text-muted-foreground text-sm">
                                {category.key === "general"
                                  ? solution.description
                                  : solution.features[category.key]}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Compare1  
