"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  FilePlus2Icon,
  LayoutTemplateIcon,
  PaletteIcon,
  PenToolIcon,
  SearchIcon,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/aliimam/ui/command"

export function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button className="" onClick={() => setOpen(true)}>
        <span className="flex grow items-center">
          <SearchIcon
            className="text-background hover:text-background/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search components, assets, or docs..." />
        <CommandList>
          <CommandEmpty>No matches found.</CommandEmpty>

          <CommandGroup heading="Create">
            <CommandItem>
              <FilePlus2Icon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>New project</span>
              <CommandShortcut className="justify-center">⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LayoutTemplateIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>New template</span>
              <CommandShortcut className="justify-center">⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <PenToolIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Start design</span>
              <CommandShortcut className="justify-center">⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Navigate">
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to workspace</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to assets</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to documentation</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Themes">
            <CommandItem>
              <PaletteIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Switch theme</span>
              <CommandShortcut>⌘⇧T</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
