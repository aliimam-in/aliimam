import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="container relative">
      <div className="border-x border-t px-6 py-20">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Pricing that Power your Design.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
            Whether you’re building your brand, launching a product, or crafting
            visuals, our plans give you the tools and support to create stunning
            designs at any scale.
          </p>
        </div>

        <div className="mt-8 md:px-12 items-center grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-md flex h-min flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-thin text-md">Free Forever</h2>
                <span className="my-3 block text-3xl md:text-7xl font-semibold">
                  $0
                </span>
                <p className="text-muted-foreground text-sm">
                  Perfect for individual beginners and hobbyists getting started
                  with design.
                </p>
              </div>

              <Link href="/login">
                <Button variant={'outline'} className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
                  Get Started
                </Button>
              </Link>

              <Separator className="my-6" />

              <div>
                <h3 className="text-xs text-muted-foreground mb-2">Included</h3>
                <ul className="list-outside space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    Access to free design templates
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
                <Link href="/signup">
                  <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
                    Join Today
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant={'outline'} className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
                    Book a Call
                  </Button>
                </Link>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="font-light text-muted-foreground text-xs mb-2">What’s included:</h3>
                <ul className="list-outside space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    Everything in Free Forever
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    One request at a time
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    Avg. 48 hour delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    Unlimited design changes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3 text-green-500" />
                    Pause or cancel anytime
                  </li>
                </ul>

                <p className="text-muted-foreground text-xs mt-3">
                  *Pro plan is ideal for professionals who need full access to
                  all design creatives and advanced features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
