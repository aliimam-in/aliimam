"use client";

import {
  Globe,
  Link,
  Monitor,
  Receipt,
  UserCheck,
  Users,
} from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";

const Feature1 = () => {
  return (
    <section className="py-10">
      <div className="mx-6">
        <div className="flex w-full flex-col items-center px-4 text-center">
          <span className="flex items-center gap-2 text-base font-medium">
            <Users className="size-5" />
            Design Insights
          </span>
          <h2 className="font-display mt-3 text-pretty text-3xl font-medium sm:text-4xl md:text-5xl">
            Understand Your Design Impact
          </h2>
          <p className="mt-3 text-pretty text-base sm:text-lg">
            Track your design journey from initial concept to final delivery,
            with detailed metrics and creative insights.
          </p>
          <div className="mt-6 flex items-center gap-2 sm:gap-4">
            <Button>Learn more</Button>
          </div>
        </div>

        <div className="-mx-px mb-8 mt-12">
          <div className="xs:[mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent),linear-gradient(black_65%,transparent)] relative h-[520px] w-full overflow-clip [mask-composite:intersect] [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent),linear-gradient(black_75%,transparent)]">
            <div
              className="absolute left-1/2 top-0 grid -translate-x-1/2 gap-4"
              style={{
                gridTemplateColumns:
                  "repeat(2, 256px) min(256px, calc(100vw - 96px)) repeat(2, 256px)",
              }}
            >
              <div
                className="animate-slide-up-fade relative flex flex-col gap-4 [--offset:20px] [animation-fill-mode:both]"
                style={{ paddingTop: "64px", animationDelay: "200ms" }}
                aria-hidden="true"
              >
                {[
                  "Apr 2, 2025 3:34PM",
                  "Mar 2, 2025 3:34PM",
                  "Feb 2, 2025 3:34PM",
                  "Jan 2, 2025 3:34PM",
                ].map((date, index) => (
                  <div key={index}>
                    <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                      <Receipt className="size-5" />
                      <div className="mt-2 font-medium">
                        Delivered design - $20K
                      </div>
                      <span className="mt-1">{date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="animate-slide-up-fade relative flex flex-col gap-4 [--offset:20px] [animation-fill-mode:both]"
                style={{ paddingTop: "32px", animationDelay: "100ms" }}
                aria-hidden="false"
              >
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <span className="font-semibold">Details</span>
                    <div className="mt-2">
                      <div className="grid grid-cols-[max-content,minmax(0,1fr)] items-center gap-x-1.5 gap-y-2">
                        <span>Los Angeles, USA</span>
                        <span>Mac OS</span>
                        <div className="flex items-center gap-1">
                          <Monitor className="size-4" />
                          <span>Desktop</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="size-4" />
                          <span>Figma</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Link className="size-5" />
                    <div className="mt-2 space-y-1 font-medium">
                      <div className="flex items-center gap-2">
                        Discovered
                        <div className="bg-secondary flex min-w-0 items-center gap-2 rounded-lg px-1.5 py-1 font-mono text-xs">
                          <span className="min-w-0 truncate">
                            refer.Ali Imam.co/emily
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        via
                        <div className="bg-secondary flex min-w-0 items-center gap-2 rounded-lg px-1.5 py-1 font-mono text-xs">
                          <Globe className="size-3.5 shrink-0" />
                          <span className="min-w-0 truncate">
                            yourportfolio.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-2">Sep 2, 2024 3:02PM</span>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <UserCheck className="size-5" />
                    <div className="mt-2 font-medium">Signed up</div>
                    <span className="mt-1">Sep 2, 2024, 12:08 PM</span>
                  </div>
                </div>
              </div>

              <div
                className="animate-slide-up-fade relative flex flex-col gap-4 [--offset:20px] [animation-fill-mode:both]"
                style={{ paddingTop: "0", animationDelay: "0ms" }}
                aria-hidden="false"
              >
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-2 text-sm shadow-xl">
                    <div className="relative h-[260px] overflow-hidden rounded-lg border">
                      <img
                        alt="Designer profile image"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="100vw"
                        src="/ai.jpg"
                      />
                    </div>
                    <div className="mt-1 flex flex-col items-center py-2 text-center">
                      <span className="text-base font-semibold">Ali Imam</span>
                      <span className="font-medium">contact@aliimam.in</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Link className="size-5" />
                    <div className="mt-2 space-y-1 font-medium">
                      <div className="flex items-center gap-2">
                        Discovered
                        <div className="bg-secondary flex min-w-0 items-center gap-2 rounded-lg px-1.5 py-1 font-mono text-xs">
                          <span className="min-w-0 truncate">
                            refer.Ali Imam.co/emily
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        via
                        <div className="bg-secondary flex min-w-0 items-center gap-2 rounded-lg px-1.5 py-1 font-mono text-xs">
                          <Globe className="size-3.5 shrink-0" />
                          <span className="min-w-0 truncate">
                            yourportfolio.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-2">Oct 1, 2024 1:34PM</span>
                  </div>
                </div>
              </div>

              <div
                className="animate-slide-up-fade relative flex flex-col gap-4 [--offset:20px] [animation-fill-mode:both]"
                style={{ paddingTop: "32px", animationDelay: "100ms" }}
                aria-hidden="false"
              >
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <span className="font-semibold">Project Tags</span>
                    <div className="mt-2">
                      <div className="grid grid-cols-[max-content,minmax(0,1fr)] items-center gap-x-6 gap-y-2">
                        <span>Category</span>
                        <span className="">UI/UX</span>
                        <span>Style</span>
                        <span className="">Minimalist</span>
                        <span>Tool</span>
                        <span className="">Figma</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <span className="font-semibold">Member since</span>
                    <div className="mt-2">October 2, 2024</div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <span className="font-semibold">Project value</span>
                    <div className="mt-2">$14,000</div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Receipt className="size-5" />
                    <div className="mt-2 font-medium">
                      Delivered design - $2,000
                    </div>
                    <span className="mt-1">Apr 2, 2025 3:34PM</span>
                  </div>
                </div>
              </div>

              <div
                className="animate-slide-up-fade relative flex flex-col gap-4 [--offset:20px] [animation-fill-mode:both]"
                style={{ paddingTop: "64px", animationDelay: "200ms" }}
                aria-hidden="true"
              >
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <span className="font-semibold">Portfolio link</span>
                    <div className="mt-2">portfolio.Ali Imam.co/emily</div>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Receipt className="size-5" />
                    <div className="mt-2 font-medium">Project kickoff</div>
                    <span className="mt-1">Mar 16, 2025 3:34PM</span>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Receipt className="size-5" />
                    <div className="mt-2 font-medium">
                      Delivered design - $4,000
                    </div>
                    <span className="mt-1">Feb 16, 2025 3:34PM</span>
                  </div>
                </div>
                <div>
                  <div className="bg-card flex flex-col rounded-2xl border p-4 text-sm">
                    <Receipt className="size-5" />
                    <div className="mt-2 font-medium">
                      Delivered design - $4,000
                    </div>
                    <span className="mt-1">Jan 16, 2025 3:34PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1
