"use client"

import Link from "next/link"
import { Check } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/aliimam/ui/card"

export function PricingCard() {
  return (
    <section className="border-x">
      <div className="grid md:grid-cols-2">
        <Card className="flex flex-col rounded-none border-x-0 shadow-none md:border-r">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Free</CardTitle>
            <span className="text-primary my-3 block text-2xl font-semibold">
              $0 / mo
            </span>
            <CardDescription className="text-sm">Individual</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <hr className="border-dashed" />

            <ul className="list-outside space-y-3 text-sm">
              {[
                "Access to free UI components",
                "Free graphics (unlimited collection)",
                "Free fonts (unlimited selection)",
                "Use of dashboard",
                "Unlimited uploads",
                "Use free icons",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-3" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Link className="w-full" href={"/"}>
              <Button size={"lg"} variant="outline" className="w-full">
                Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col rounded-none border-x-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Startup</CardTitle>
            <span className="text-primary my-3 block text-2xl font-semibold">
              $999 / mo
            </span>
            <CardDescription className="text-sm">Retainer</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <hr className="border-dashed" />

            <ul className="list-outside space-y-3 text-sm">
              {[
                "Everything in Free Plan",
                "Branding",
                "Website Design & Develop",
                "Next.js 15, Typesctipt, Tailwind 4 CSS",
                "Shadcn/ui",
                "Google & Vercel Analytics",
                "Responsive across desktop, tablet and mobile",
                "Fast-loading, SEO-friendly, and performance optimized.",
                "Theming – Adding light and dark mode.",
                "Unlimited design changes",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-3" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Link
              className="w-full"
              href={"https://cal.com/dalim/15min"}
              target="_blank"
            >
              <Button size={"lg"} variant="outline" className="w-full">
                Book a call
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
