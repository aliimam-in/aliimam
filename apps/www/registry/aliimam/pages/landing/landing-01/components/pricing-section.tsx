"use client"

import { useState } from "react"
import { Check } from "@aliimam/icons"

import { Badge } from "@/registry/aliimam/ui/badge"
import { Button } from "@/registry/aliimam/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/registry/aliimam/ui/tabs"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "annually"
  )

  const pricing = {
    starter: {
      monthly: 0,
      annually: 0,
    },
    professional: {
      monthly: 50,
      annually: 25, // 20% discount for annual
    },
    enterprise: {
      monthly: 500,
      annually: 250, // 20% discount for annual
    },
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Work with Brands Like</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            Confidence backed by results
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center self-stretch px-6 py-9 md:px-16">
        <Tabs
          value={billingPeriod}
          onValueChange={(value) =>
            setBillingPeriod(value as "monthly" | "annually")
          }
          className="w-auto"
        >
          <TabsList className="grid w-65 grid-cols-2 rounded-full">
            <TabsTrigger
              value="annually"
              className="data-[state=active]:bg-background rounded-full"
            >
              Annually
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-background rounded-full"
            >
              Monthly
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center justify-center self-stretch border-y">
        <div className="flex w-full items-start justify-center">
          <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
            <div className="absolute -top-30 -left-10 flex w-40 flex-col items-start justify-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:gap-6">
            <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-12 self-stretch overflow-hidden border-x px-6 py-5 md:max-w-none">
              <div className="flex flex-col items-center justify-start gap-9 self-stretch">
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="text-lg leading-7 font-medium">Creator</div>
                  <div className="text-muted-foreground w-full max-w-80 text-sm leading-5 font-normal">
                    Ideal for freelance designers and creative beginners.
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative flex h-15 items-center text-5xl font-medium">
                      <span className="invisible">
                        ${pricing.starter[billingPeriod]}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        ${pricing.starter.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        ${pricing.starter.monthly}
                      </span>
                    </div>
                    <div className="text-sm font-medium">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per
                      user.
                    </div>
                  </div>
                </div>

                <Button size={"lg"} className="w-full">
                  Start for free
                </Button>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                {[
                  "Up to 5 design projects",
                  "Basic brand kit tools",
                  "Community feedback access",
                  "Starter UI components",
                  "Export in PNG & JPG",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-3 self-stretch"
                  >
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <Check />
                    </div>
                    <div className="flex-1 text-[12.5px] font-normal">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground flex max-w-full flex-1 flex-col items-start justify-start gap-12 self-stretch overflow-hidden border-x px-6 py-5 md:max-w-none">
              <div className="flex flex-col items-center justify-start gap-9 self-stretch">
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="text-background text-lg leading-7 font-medium">
                    Studio
                  </div>
                  <div className="text-muted w-full max-w-80 text-sm leading-5 font-normal">
                    Advanced toolkit for agencies and growing creative teams.
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="text-background relative flex h-15 items-center text-5xl font-medium">
                      <span className="invisible">
                        ${pricing.professional[billingPeriod]}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        ${pricing.professional.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        ${pricing.professional.monthly}
                      </span>
                    </div>
                    <div className="text-background text-sm font-medium">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per
                      user.
                    </div>
                  </div>
                </div>
                <Button size={"lg"} className="w-full">
                  Start Creating
                </Button>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                {[
                  "Unlimited design projects",
                  "Complete brand management",
                  "Advanced UI component library",
                  "Figma & Adobe integration",
                  "Vector & SVG export",
                  "Team collaboration workspace",
                  "Priority creative support",
                  "Version history & backups",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-3 self-stretch"
                  >
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <Check className="text-background" />
                    </div>
                    <div className="text-background flex-1 text-[12.5px] leading-5 font-normal">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-12 self-stretch overflow-hidden border-x px-6 py-5 md:max-w-none">
              <div className="flex flex-col items-center justify-start gap-9 self-stretch">
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="text-lg leading-7 font-medium">
                    Agency Pro
                  </div>
                  <div className="w-full max-w-80 text-sm leading-5 font-normal">
                    Full-scale creative infrastructure for large design teams.
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative flex h-15 items-center text-5xl font-medium">
                      <span className="invisible">
                        ${pricing.enterprise[billingPeriod]}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "annually"}
                      >
                        ${pricing.enterprise.annually}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                        aria-hidden={billingPeriod !== "monthly"}
                      >
                        ${pricing.enterprise.monthly}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-[#847971]">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per
                      user.
                    </div>
                  </div>
                </div>
                <Button size={"lg"} className="w-full">
                  Upgrade to Studio
                </Button>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                {[
                  "Everything in Studio",
                  "Dedicated creative strategist",
                  "White-label design system",
                  "Custom component development",
                  "Advanced asset management",
                  "SSO & enterprise security",
                  "Custom contracts & billing",
                  "24/7 premium support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-3 self-stretch"
                  >
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <Check />
                    </div>
                    <div className="flex-1 text-[12.5px] font-normal">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
            <div className="absolute -top-30 -left-10 flex w-40 flex-col items-start justify-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
