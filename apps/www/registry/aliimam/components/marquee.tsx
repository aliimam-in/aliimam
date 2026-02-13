import { ComponentPropsWithoutRef } from "react"

import { cn } from "@/registry/aliimam/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 5
   */
  repeat?: number
  /**
   * Animation speed variant or custom duration in seconds
   * @default "normal"
   */
  speed?: "slow" | "normal" | "fast" | number
  /**
   * Gap between repeated items (in pixels or any CSS unit)
   * @default "6px"
   */
  gap?: string | number
  /**
   * Apply fade effect at edges for smoother visual experience
   * @default true
   */
  fade?: boolean
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number
  /**
   * Whether to apply auto-fill to calculate optimal repeat count
   * @default false
   */
  autoFill?: boolean
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 5,
  speed = "normal",
  gap = "6px",
  fade = false,
  delay = 0,
  autoFill = false,
  ...props
}: MarqueeProps) {
  const speedVariants = {
    slow: "[--duration:120s]",
    normal: "[--duration:40s]",
    fast: "[--duration:10s]",
  }

  const gapValue = typeof gap === "number" ? `${gap}px` : gap
  const duration = typeof speed === "number" ? `${speed}s` : undefined
  const repeatCount = autoFill ? 10 : repeat

  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden p-1",
        typeof speed === "string" ? speedVariants[speed] : "",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={
        {
          "--gap": gapValue,
          ...(duration && { "--duration": duration }),
          ...(delay && { "--delay": `${delay}s` }),
        } as React.CSSProperties
      }
    >
      {fade && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute z-10",
              vertical
                ? "from-background inset-x-0 top-0 h-1/6 bg-gradient-to-b"
                : "from-background inset-y-0 left-0 w-1/6 bg-gradient-to-r"
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute z-10",
              vertical
                ? "from-background inset-x-0 bottom-0 h-1/6 bg-gradient-to-t"
                : "from-background inset-y-0 right-0 w-1/6 bg-gradient-to-l"
            )}
          />
        </>
      )}
      {Array(repeatCount)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
              "[animation-delay:var(--delay)]": delay > 0,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
