"use client"

import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/default/ui/dialog"
import { Input } from "@/registry/default/ui/input"
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import { Button } from "@/registry/default/ui/button"
import { useEditorStore } from "@/src/lib/store"
import Link from "next/link"

type IconExport = Record<string, React.ComponentType<any>>

async function renderComponentToSVGString(Comp: React.ComponentType<any>, size = 100): Promise<string> {
  return new Promise<string>((resolve) => {
    const container = document.createElement("div")
    container.style.position = "fixed"
    container.style.left = "-99999px"
    container.style.top = "-99999px"
    document.body.appendChild(container)
    const root = ReactDOM.createRoot(container)
    root.render(React.createElement(Comp, { size, color: "currentColor" }))
    // Allow React to mount
    requestAnimationFrame(() => {
      const svg = container.querySelector("svg")
      const svgStr = svg ? svg.outerHTML : ""
      root.unmount()
      container.remove()
      resolve(svgStr)
    })
  })
}

export function IconPicker({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [exportsMap, setExportsMap] = React.useState<IconExport>({})
  const [query, setQuery] = React.useState("")
  const addShape = useEditorStore((s) => s.addShape)
  const selectShapes = useEditorStore((s) => s.selectShapes) 

  React.useEffect(() => {
    if (!open || Object.keys(exportsMap).length) return
    setLoading(true)
    ;(async () => {
      try {
        // Dynamically import user's icon library
        const mod = (await import("@aliimam/icons")) as unknown as IconExport
        // Filter only registry/default
        const entries = Object.entries(mod).filter(
          ([, val]) => typeof val === "function" || typeof val === "object",
        ) as [string, React.ComponentType<any>][]
        const map: IconExport = {}
        for (const [name, Comp] of entries) {
          map[name] = Comp
        }
        setExportsMap(map)
      } catch (e) {
        console.error("Failed to load @aliimam/icons", e)
      } finally {
        setLoading(false)
      }
    })()
  }, [open, exportsMap])

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return Object.entries(exportsMap)
    return Object.entries(exportsMap).filter(([name]) => name.toLowerCase().includes(q))
  }, [exportsMap, query])

  const handleInsert = async (name: string, Comp: React.ComponentType<any>) => {
    try {
      const svg = await renderComponentToSVGString(Comp, 120)
      if (!svg) return
      const id = `shape-${Date.now()}`
      const shape = {
        id,
        type: "svg" as const,
        name,
        x: 100,
        y: 100,
        width: 120,
        height: 120,
        rotation: 0,
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 2,
        opacity: 1,
        locked: false,
        visible: true,
        svg,
      }
      addShape(shape as any)
      selectShapes([id])
      setOpen(false)
    } catch (e) {
      console.error("Failed to insert icon", e)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Insert Icon</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input placeholder="Search icons…" value={query} onChange={(e) => setQuery(e.target.value)} />
          <ScrollArea className="h-80 rounded-md border">
            <div className="grid grid-cols-4 gap-3 p-3 md:grid-cols-6">
              {loading && <div className="col-span-full text-sm text-muted-foreground">Loading icons…</div>}
              {!loading &&
                filtered.slice(0, 200).map(([name, Comp]) => (
                  <button
                    key={name}
                    className="flex flex-col items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"
                    title={name}
                    onClick={() => handleInsert(name, Comp)}
                  >
                    {/* Render icon component directly for preview */}
                    {React.createElement(Comp, { size: 28 })}
                    <span className="line-clamp-1 w-full text-center text-xs">{name}</span>
                  </button>
                ))}
              {!loading && filtered.length === 0 && (
                <div className="col-span-full py-12 text-center text-sm text-muted-foreground">
                  No icons found for "{query}"
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex justify-between">
            <Link href={"/icons"}>
              <Button>See All Icons</Button>
            </Link>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
