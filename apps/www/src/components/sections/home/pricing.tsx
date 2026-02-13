import { Button } from "@/registry/aliimam/ui/button";
import { Separator } from "@/registry/aliimam/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/src/components/layout/page-header"

export function Pricing() {
  return (
    <div className="border-t">
    <section className="container relative">
      <div className="lg:border-x pb-20">

        <SectionHeader>
          <SectionHeaderHeading>
            Pricing that Power your Design.
          </SectionHeaderHeading>
          <SectionHeaderDescription>
            Whether you’re building your brand, launching a product, or crafting
            visuals, our plans give you the tools and support to create stunning
            designs at any scale.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="flex justify-center">
          <div className="md:px-12 max-w-5xl items-center grid gap-6 md:grid-cols-5 md:gap-0">
            <div className="flex h-min flex-col justify-between space-y-8 border-y md:border p-6 md:col-span-2 md:my-2  md:border-r-0 lg:p-10">
              <div className="space-y-4">
                <div>
                  <h2 className="font-thin text-md">Free Forever</h2>
                  <span className="my-3 block text-3xl md:text-7xl font-semibold">
                    $0
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Perfect for individual designers and engineers getting started
                    with design.
                  </p>
                </div>


                <Button asChild size={"xl"} variant={'outline'}>
                  <Link href="/blocks">
                    Get Started
                  </Link>
                </Button>


                <Separator className="my-6" />

                <div>
                  <h3 className="text-xs text-muted-foreground mb-2">Included</h3>
                  <ul className="list-outside space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      Access to free all designs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      Community forum access
                    </li>
                  </ul>

                  <p className="text-muted-foreground text-xs mt-3">
                    *Free plan features are limited but enough to get you started
                    with your first designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-md border p-6 shadow-2xl md:col-span-3 lg:p-10">
              <div className="space-y-4">
                <div>
                  <h2 className="font-thin text-xl">Business Plan</h2>
                  <div className="flex gap-1 items-end">
                    <span className="my-3 block tracking-tighter text-7xl font-semibold">
                      $1995
                    </span>
                    <span className="mb-4 block text-xl font-thin">/ Month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Designed for brands and teams managing multiple clients and
                    high-volume projects.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button asChild size={"xl"}>
                    <Link href="https://cal.com/aliimam-in/30min" target="_blank">
                      Join Today
                    </Link>
                  </Button>
                  <Button asChild variant={'outline'} size={"xl"}>
                    <Link href="https://cal.com/aliimam-in/30min" target="_blank">
                      Book a Call
                    </Link>
                  </Button>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="font-light text-muted-foreground text-xs mb-2">What’s included:</h3>
                  <ul className="list-outside space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      I personally handle all design work
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      Unlimited design revisions
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      Daily updates on your requests
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      One active request at a time for better quality
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-green-500" />
                      Pause or cancel anytime
                    </li>
                  </ul>

                  <p className="text-muted-foreground text-xs mt-3">
                    *Pro plan is ideal for professionals and brands who need full access to
                    all design creatives of my work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
