import { Moon, Sun } from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        <Button>Default</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
      </div>
      <div className="flex items-center gap-3">
        <Button>default</Button>
        <Button variant={"outline"} size={"sm"}>
          sm
        </Button>
        <Button className="rounded-full" size={"lg"}>
          lg
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Moon />
        </Button>
        <Button variant={"secondary"} size={"icon-lg"}>
          <Sun className="size-full w-6" />
        </Button>
      </div>
    </div>
  )
}
