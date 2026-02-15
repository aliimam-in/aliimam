"use client"

import { Button } from "@/registry/aliimam/ui/button"

export default function CTASection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      <div className="relative z-10 flex items-center justify-center gap-6 self-stretch border-t border-b px-6 py-12 md:px-24 md:py-12">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-20 flex w-full max-w-3xl flex-col items-center justify-start gap-6 overflow-hidden px-6 py-5 md:py-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex flex-col justify-center self-stretch text-center text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              Ready to transform your business?
            </div>
            <div className="text-muted-foreground self-stretch text-center text-base leading-7 font-medium">
              Join thousands of businesses streamlining their operations,
              <br />
              managing schedules, and growing with data-driven insights.
            </div>
          </div>
          <Button size={"lg"}>Start Free Trial</Button>
        </div>
      </div>
    </div>
  )
}
