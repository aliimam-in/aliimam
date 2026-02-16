"use client"

import { Button } from "@/registry/aliimam/ui/button"

export default function CTASection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
      <div className="relative z-10 flex items-center justify-center gap-6 self-stretch border-t border-b px-6 py-12 md:px-24 md:py-12">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div
            className="relative h-full w-full overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            }}
          >
            <div
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%)",
                backgroundImage:
                  "repeating-conic-gradient(from 0deg at 50% 100%, var(--code) 0deg, var(--code) 2deg, transparent 2deg, transparent 10deg)",
                bottom: "-20%",
                height: "100%",
                left: "50%",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                pointerEvents: "none",
                position: "absolute",
                transform: "translateX(-50%)",
                width: "200%",
              }}
            />
          </div>
        </div>

        <div className="relative z-20 flex w-full max-w-3xl flex-col items-center justify-start gap-6 overflow-hidden px-6 py-5 md:py-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex flex-col justify-center self-stretch text-center text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              Ready to elevate your digital presence?
            </div>
            <div className="text-muted-foreground self-stretch text-center text-base leading-7 font-medium">
              Let’s design experiences that captivate users,
              <br />
              strengthen your brand, and drive meaningful growth.
            </div>
          </div>
          <Button size={"lg"}>Start Your Project</Button>
        </div>
      </div>
    </div>
  )
}
