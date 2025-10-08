"use client"

import { useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion"

import { cn } from "@/registry/default/lib/utils"

const scrollProgressVariants = cva("fixed z-30 origin-left", {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
      rainbow:
        "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
      ocean: "bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600",
      sunset: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500",
      forest: "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500",
      monochrome: "bg-gradient-to-r from-gray-600 via-gray-800 to-black",
      neon: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
      fire: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600",
      ice: "bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400",
      gold: "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600",
      solid: "bg-blue-500",
      custom: "", // For custom gradients
    },
    size: {
      xs: "h-0.5",
      sm: "h-1",
      default: "h-1.5",
      lg: "h-2",
      xl: "h-3",
      "2xl": "h-4",
    },
    position: {
      top: "inset-x-0 top-0",
      bottom: "inset-x-0 bottom-0",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      default: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    glow: {
      none: "",
      sm: "shadow-sm",
      default: "shadow-md",
      lg: "shadow-lg drop-shadow-lg",
      xl: "shadow-xl drop-shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    position: "top",
    rounded: "none",
    glow: "none",
  },
})

interface ScrollProgressProps
  extends VariantProps<typeof scrollProgressVariants> {
  className?: string
  customGradient?: string
  springConfig?: {
    stiffness?: number
    damping?: number
    restDelta?: number
  }
  showPercentage?: boolean
  percentagePosition?: "left" | "right" | "center"
  container?: React.RefObject<HTMLElement>
}

export function ScrollProgress({
  className,
  variant,
  size,
  position,
  rounded,
  glow,
  customGradient,
  springConfig = {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  },
  showPercentage = false,
  percentagePosition = "right",
  container,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll(container ? { container } : undefined)
  const scaleX = useSpring(scrollYProgress, springConfig)

  const [percentage, setPercentage] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercentage(Math.round(latest * 100))
  })

  const progressBarClasses = cn(
    scrollProgressVariants({ variant, size, position, rounded, glow }),
    variant === "custom" && customGradient,
    className
  )

  const percentageClasses = cn(
    "fixed z-40 text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded",
    position === "top" ? "top-2" : "bottom-2",
    percentagePosition === "left" && "left-4",
    percentagePosition === "right" && "right-4",
    percentagePosition === "center" && "left-1/2 -translate-x-1/2"
  )

  return (
    <>
      <motion.div
        className={progressBarClasses}
        style={{
          scaleX,
        }}
      />
      {showPercentage && (
        <motion.div
          className={percentageClasses}
          style={{
            opacity: scrollYProgress,
          }}
        >
          <motion.span>{percentage}%</motion.span>
        </motion.div>
      )}
    </>
  )
}
