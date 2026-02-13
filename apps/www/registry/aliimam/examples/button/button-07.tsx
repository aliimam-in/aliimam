import { Moon } from "@aliimam/icons"

import { cn } from "@/registry/aliimam/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button size={"icon-lg"} className="relative overflow-hidden p-0.5">
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "text-primary-foreground inline-flex size-full items-center justify-center rounded-sm backdrop-blur-3xl"
          )}
        >
          <Moon />
        </span>
      </Button>

      <Button
        size={"lg"}
        className="relative inline-flex overflow-hidden p-0.5"
      >
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "text-primary-foreground justify-centerrounded-sm inline-flex size-full items-center px-6 backdrop-blur-3xl"
          )}
        >
          Rotate Background
        </span>
      </Button>

      <Button size={"icon-lg"} className="relative overflow-hidden p-0.5">
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "text-foreground bg-background inline-flex size-full items-center justify-center rounded-sm backdrop-blur-3xl"
          )}
        >
          <Moon />
        </span>
      </Button>

      <Button
        size={"lg"}
        className="relative inline-flex overflow-hidden p-0.5"
      >
        <span
          className={cn(
            "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
            "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
          )}
        />
        <span
          className={cn(
            "text-foreground bg-background inline-flex size-full items-center justify-center rounded-sm px-6 backdrop-blur-3xl"
          )}
        >
          Rotate Border
        </span>
      </Button>
    </div>
  )
}
