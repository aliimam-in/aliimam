"use client";

import { ArrowRight } from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";

const Stats1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="grid gap-4 md:col-span-3 lg:grid-cols-3">
            <div className="bg-secondary flex h-60 flex-col justify-between rounded-lg p-6">
              <div className="mb-4">
                <p className="text-muted-foreground text-sm">
                  Streamlined design workflows
                </p>
              </div>
              <div>
                <h3 className="text-6xl font-semibold">82%</h3>
                <p className="text-foreground/80 text-base">
                  of manual design tasks eliminated
                </p>
              </div>
            </div>

            <div className="bg-secondary flex h-60 flex-col justify-between rounded-lg p-6">
              <div className="mb-4">
                <p className="text-muted-foreground text-sm">
                  Design precision
                </p>
              </div>
              <div>
                <h3 className="text-6xl font-semibold">99.9%</h3>
                <p className="text-foreground/80 text-base">
                  design consistency achieved
                </p>
              </div>
            </div>

            <div className="bg-secondary flex h-60 flex-col justify-between rounded-lg p-6">
              <div className="mb-4">
                <p className="text-muted-foreground text-sm">
                  Scalable design projects
                </p>
              </div>
              <div>
                <h3 className="text-6xl font-semibold">520K+</h3>
                <p className="text-foreground/80 text-base">
                  total design assets created
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 py-20 text-center">
          <div>
            <h2 className="mb-4 text-3xl font-medium md:text-5xl">
              Built for creativity, loved for efficiency
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              The design platform modern creative teams rely on
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button className="mt-4 h-14 px-10">Start designing free</Button>
            <p className="text-muted-foreground text-xs">
              10-project trial, no credit card required
            </p>
            <a className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600">
              <span>★ ★ ★ ★ ★</span>
              <span className="text-primary text-md">Google reviews</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats1
