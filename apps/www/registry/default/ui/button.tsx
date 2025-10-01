"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/registry/default/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        border:
          "from-primary to-primary/50 text-primary-foreground border border-primary bg-gradient-to-t shadow-lg shadow-primary ring-2 ring-offset-[2px] ring-offset-background/50 ring-background/50 transition-[filter] duration-200 hover:brightness-120 active:brightness-100",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        metal: "",
        shine:
          "bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] text-white px-4 py-2 transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] animate-shine items-center justify-center rounded-xl border border-border bg-[length:400%_100%]",
        "liquid-glass": "",
        "animated-border":
          "relative rounded-xl border border-primary/10 bg-background px-4 py-2 duration-200 hover:bg-primary/10",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9 rounded-md px-6 has-[>svg]:px-4",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-11 rounded-md px-6 has-[>svg]:px-4",
        xxl: "h-14 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        iconxl: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };
  const handleTouchStart = () => setIsPressed(true);
  const handleTouchEnd = () => setIsPressed(false);
  const handleTouchCancel = () => setIsPressed(false);

  if (variant === "liquid-glass") {
    return (
      <div className="relative duration-200 hover:scale-105 inline-flex rounded-md">
        <div className="absolute top-0 left-0 z-0 h-full w-full rounded-md shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
           
        /> 
        <Comp
          data-slot="button"
          className={cn(
            buttonVariants({ variant, size, className }),
            "relative z-10 text-primary"
          )}
          {...props}
        />
      </div>
    );
  }

  if (variant === "animated-border") {
    return (
      <motion.div className="relative inline-flex rounded-md" initial={{}}>
        <div
          className={cn(
            "-inset-px pointer-events-none absolute rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box]",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
          )}
        >
          <motion.div
            className={cn(
              "absolute aspect-square bg-gradient-to-r from-transparent via-primary to-primary",
              "dark:from-transparent dark:via-primary dark:to-primary"
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round 12px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        <Comp
          data-slot="button"
          className={cn(
            buttonVariants({ variant, size, className }),
            "relative z-10 text-primary"
          )}
          {...props}
        />
      </motion.div>
    );
  }

  if (variant === "metal") {
    return (
      <div
        className="relative inline-flex rounded-md duration-200 hover:scale-105"
        style={{
          transform: isPressed ? "translateY(2px) scale(0.98)" : undefined,
          boxShadow: isPressed
            ? "0 1px 2px rgba(0,0,0,0.15)"
            : isHovered
              ? "0 4px 12px rgba(0,0,0,0.12)"
              : "0 3px 8px rgba(0,0,0,0.08)",
          transition: "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)",
        }}
      >
        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-primary via-secondary to-primary" />

        <div
          className="absolute inset-[1px] transform-gpu rounded-lg will-change-transform bg-gradient-to-b from-primary via-secondary to-primary"
          style={{
            filter: isHovered && !isPressed ? "brightness(1.05)" : "none",
            transition: "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)",
          }}
        /> 
        <Comp
          data-slot="button"
          className={cn(
            buttonVariants({ size, className }),
            "relative z-10 m-[1px] inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden ring ring-offset rounded-md px-8 py-2 text-sm leading-none font-semibold will-change-transform outline-none bg-gradient-to-b from-primary via-primary-foreground to-primary text-primary [text-shadow:_0_-1px_0_rgb(var(--primary)_/_100%)]"
          )}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
          {...props}
        />
      </div>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
 