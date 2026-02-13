import { Moon } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button
        size={"icon"}
        className="from-primary to-primary/85 text-primary-foreground border-foreground/10 shadow-primary/70 ring-offset ring-background/30 h-16 w-16 border-2 bg-gradient-to-t text-xl shadow-xl ring-4 transition-[filter] duration-200 hover:brightness-120 active:brightness-100"
      >
        <Moon strokeWidth={1.5} className="size-6" />
      </Button>
      <Button className="from-primary to-primary/85 text-primary-foreground border-foreground/10 shadow-primary/70 ring-offset ring-background/30 h-16 border-2 bg-gradient-to-t px-12 text-xl shadow-xl ring-4 transition-[filter] duration-200 hover:brightness-120 active:brightness-100">
        Soft Glow
      </Button>
    </div>
  )
}
