"use client"

import { Moon } from "@aliimam/icons"
import { motion } from "motion/react"

import { cn } from "@/registry/aliimam/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button size={"icon-lg"} variant={"outline"} className="relative">
        <div
          className={cn(
            "border-inset pointer-events-none absolute -inset-px rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box]",
            "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect]"
          )}
        >
          <motion.div
            className={cn(
              "via-primary to-primary absolute aspect-square bg-gradient-to-r from-transparent"
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        <Moon />
      </Button>

      <Button size={"lg"} variant={"outline"} className="relative">
        <div
          className={cn(
            "border-inset pointer-events-none absolute -inset-px rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box]",
            "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect]"
          )}
        >
          <motion.div
            className={cn(
              "via-primary to-primary absolute aspect-square bg-gradient-to-r from-transparent"
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        Animated Border
      </Button>
    </div>
  )
}
