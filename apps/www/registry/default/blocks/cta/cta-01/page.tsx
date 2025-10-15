"use client";

import { Award, Cat, ShieldCheck, Star, StarHalf } from "@aliimam/icons";
import {
  ClaudeAI,
  Cursor,
  Google,
  Grok,
  OpenAI,
  Replicate,
} from "@aliimam/logos";

import { Button } from "@/registry/default/ui/button";

const Cta1 = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 border-x [mask-image:linear-gradient(black,transparent)]"></div>
          <div className="absolute inset-y-0 left-1/2 w-[1200px] -translate-x-1/2">
            <svg
              className="pointer-events-none absolute inset-0 text-black/20 [mask-composite:intersect] [mask-image:linear-gradient(black,transparent),radial-gradient(black,transparent)] dark:text-white/20"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  x="-1"
                  y="-1"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></path>
                </pattern>
              </defs>
              <rect fill="url(#grid-pattern)" width="100%" height="100%"></rect>
            </svg>
          </div>
        </div>
        <div className="relative flex flex-col items-center px-4 pb-32 pt-24 text-center">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
            <a className="group flex items-center gap-2.5">
              <div className="bg-secondary flex size-8 shrink-0 items-center justify-center rounded-full">
                <Award className="h-3 w-auto" />
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 shrink-0"
                    fill="currentColor"
                  />
                ))}
              </div>
            </a>

            <a className="group flex items-center gap-2.5">
              <div className="bg-secondary flex size-8 shrink-0 items-center justify-center rounded-full">
                <Cat className="h-3 w-auto" />
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 shrink-0"
                    fill="currentColor"
                  />
                ))}
              </div>
            </a>

            <a className="group flex items-center gap-2.5">
              <div className="bg-secondary flex size-8 shrink-0 items-center justify-center rounded-full">
                <ShieldCheck className="h-3 w-auto" />
              </div>
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 shrink-0"
                    fill="currentColor"
                  />
                ))}
                <StarHalf className="size-4 shrink-0" fill="currentColor" />
              </div>
            </a>
          </div>

          {/* Headline and Description */}
          <h2 className="font-display max-w-lg text-balance text-4xl font-medium sm:text-5xl">
            Transform your creative workflow
          </h2>
          <p className="text-muted-foreground mt-6 max-w-[560px] text-lg font-medium sm:text-xl">
            Start designing with ease and see how Ali Imam's tools streamline
            your creative process for stunning results.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button>Start designing free</Button>
            <Button variant="secondary">Book a Demo</Button>
          </div>
          <div className="mt-10 grid grid-cols-3 items-center justify-center gap-x-16">
            <OpenAI type="wordmark" size={100} />
            <ClaudeAI type="wordmark" size={100} />
            <Replicate type="wordmark" size={100} />
            <Cursor type="wordmark" size={100} />
            <Grok type="wordmark" size={90} />
            <Google type="wordmark" size={90} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1
