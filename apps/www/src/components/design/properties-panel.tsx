"use client"

import { useEditorStore } from "@/src/lib/store"
import { Label } from "@/registry/default/ui/label"
import { Input } from "@/registry/default/ui/input"
import { Button } from "@/registry/default/ui/button"
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import { Slider } from "@/registry/default/ui/slider"
import { toast } from "sonner"
import { Copy } from "@aliimam/icons"

export function PropertiesPanel() {
  const { shapes, selectedIds, updateShape, duplicateSelected, deleteSelected } = useEditorStore()
  const selectedShape = selectedIds.length === 1 ? shapes.find((s) => s.id === selectedIds[0]) : null

  if (!selectedShape) {
    return (
      <div className="flex h-full w-60 flex-col border-l bg-background">
        <div className="border-b border-border p-3">
          <h1 className="font-semibold text-xs">Properties</h1>
        </div>
        <div className="flex flex-1 w-60 justify-center p-8 text-center text-sm text-muted-foreground">
          Select a shape to edit its properties
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-60 flex-col border-l border-border bg-background">
      <div className="border-b border-border p-3">
        <h1 className="font-semibold text-xs">Properties</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-3 p-4 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative flex items-center">
              <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                X
              </span>
              <Input
                id="x"
                type="number"
                className="text-xs ps-7 h-8"
                value={Math.round(selectedShape.x)}
                onChange={(e) => updateShape(selectedShape.id, { x: Number(e.target.value) })}
              />
            </div>

            <div className="relative flex items-center">
              <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                Y
              </span>
              <Input
                id="y"
                type="number"
                className="text-xs ps-7 h-8"
                value={Math.round(selectedShape.y)}
                onChange={(e) => updateShape(selectedShape.id, { y: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="relative flex items-center">
              <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                W
              </span>
              <Input
                id="width"
                type="number"
                className="text-xs ps-7 h-8"
                value={Math.round(selectedShape.width)}
                onChange={(e) =>
                  updateShape(selectedShape.id, {
                    width: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="relative flex items-center">
              <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                H
              </span>
              <Input
                id="height"
                type="number"
                className="text-xs ps-7 h-8"
                value={Math.round(selectedShape.height)}
                onChange={(e) =>
                  updateShape(selectedShape.id, {
                    height: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="py-1 flex gap-2">
            <Label className="text-xs whitespace-nowrap" htmlFor="rotation">
              Rotation: {selectedShape.rotation}°
            </Label>
            <Slider
              id="rotation"
              min={0}
              max={360}
              step={1}
              value={[selectedShape.rotation]}
              onValueChange={([value]) => updateShape(selectedShape.id, { rotation: value })}
            />
          </div>

          <div className="py-1 flex gap-2">
            <Label className="text-xs whitespace-nowrap" htmlFor="opacity">
              Opacity: {Math.round(selectedShape.opacity * 100)}%
            </Label>
            <Slider
              id="opacity"
              min={0}
              max={100}
              step={1}
              value={[selectedShape.opacity * 100]}
              onValueChange={([value]) =>
                //@ts-expect-error
                updateShape(selectedShape.id, { opacity: value / 100 })
              }
            />
          </div>

          {selectedShape.type !== "line" && (
            <>
              <div className="flex items-center justify-between gap-2">
                <Label className="text-xs" htmlFor="fill">
                  Fill
                </Label>
                <div className="flex gap-2  relative">
                  <Input
                    id="fill"
                    type="color"
                    value={selectedShape.fill}
                    onChange={(e) => updateShape(selectedShape.id, { fill: e.target.value })}
                    className="absolute h-8 opacity-0 w-8 rounded-full border p-0"
                  />
                  <div className="h-8 w-8 rounded-full border" style={{ backgroundColor: selectedShape.fill }} />
                  <Input
                    type="text"
                    value={selectedShape.fill}
                    onChange={(e) => updateShape(selectedShape.id, { fill: e.target.value })}
                    className="w-30 h-8"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between items-center gap-2">
            <Label className="text-xs" htmlFor="stroke">
              Stroke
            </Label>
            <div className="flex gap-2">
              <Input
                id="stroke"
                type="color"
                value={selectedShape.stroke}
                onChange={(e) => updateShape(selectedShape.id, { stroke: e.target.value })}
                className="absolute h-8 opacity-0 w-8 rounded-full border p-0"
              />
              <div className="h-8 w-8 rounded-full border" style={{ backgroundColor: selectedShape.stroke }} />
              <Input
                type="text"
                value={selectedShape.stroke}
                onChange={(e) => updateShape(selectedShape.id, { stroke: e.target.value })}
                className="w-30 h-8"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <Label className="text-xs whitespace-nowrap" htmlFor="strokeWidth">
              Stroke Width
            </Label>
            <Input
              id="strokeWidth"
              type="number"
              className="h-8 w-30"
              value={selectedShape.strokeWidth}
              onChange={(e) =>
                updateShape(selectedShape.id, {
                  strokeWidth: Number(e.target.value),
                })
              }
            />
          </div>

          {selectedShape.type === "rectangle" && (
            <div className="flex items-center justify-between gap-2">
              <Label className="text-xs whitespace-nowrap" htmlFor="cornerRadius">
                Corner Radius
              </Label>
              <Input
                id="cornerRadius"
                type="number"
                className="h-8"
                value={(selectedShape as import("@/src/types/canvas").Rectangle).cornerRadius}
                onChange={(e) =>
                  updateShape(selectedShape.id, {
                    cornerRadius: Number(e.target.value),
                  })
                }
              />
            </div>
          )}

          {selectedShape.type === "text" && (
            <>
              <div className="space-y-2">
                <div className="group relative">
                  <Label
                    htmlFor="content"
                    className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
                  >
                    <span className="inline-flex bg-background px-2">{selectedShape.type}</span>
                  </Label>
                  <Input
                    id="content"
                    value={(selectedShape as import("@/src/types/canvas").TextShape).content}
                    onChange={(e) => updateShape(selectedShape.id, { content: e.target.value })}
                    placeholder=" "
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <Label className="text-xs whitespace-nowrap" htmlFor="fontFamily">
                  Font Family
                </Label>
                <Input
                  id="fontFamily"
                  type="text"
                  className="h-8 w-30"
                  value={(selectedShape as import("@/src/types/canvas").TextShape).fontFamily}
                  onChange={(e) => updateShape(selectedShape.id, { fontFamily: e.target.value })}
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <Label className="text-xs whitespace-nowrap" htmlFor="fontWeight">
                  Font Weight
                </Label>
                <select
                  id="fontWeight"
                  className="h-8 w-30 rounded-md border bg-background px-2 text-xs"
                  value={(selectedShape as import("@/src/types/canvas").TextShape).fontWeight}
                  onChange={(e) => updateShape(selectedShape.id, { fontWeight: e.target.value })}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="normal">normal</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                  <option value="800">800</option>
                  <option value="900">900</option>
                  <option value="bold">bold</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-2">
                <Label className="text-xs whitespace-nowrap" htmlFor="fontSize">
                  Font Size
                </Label>
                <Input
                  id="fontSize"
                  type="number"
                  value={(selectedShape as import("@/src/types/canvas").TextShape).fontSize}
                  className="h-8 w-30"
                  onChange={(e) =>
                    updateShape(selectedShape.id, {
                      fontSize: Number(e.target.value),
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <Label className="text-xs whitespace-nowrap" htmlFor="textAlign">
                  Text Align
                </Label>
                <select
                  id="textAlign"
                  className="h-8 w-30 rounded-md border bg-background px-2 text-xs"
                  value={(selectedShape as import("@/src/types/canvas").TextShape).textAlign}
                  onChange={(e) => updateShape(selectedShape.id, { textAlign: e.target.value as any })}
                >
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                </select>
              </div>
            </>
          )}

          {selectedShape.type === "svg" && (
            <div className="flex justify-between items-center gap-2">
              <Label className="text-xs">SVG</Label>

              <Button
                variant="outline"
                size="sm"
                className="h-8 w-30 bg-transparent"
                onClick={() => {
                  const svgStr = (selectedShape as import("@/src/types/canvas").SvgShape).svg
                  navigator.clipboard.writeText(svgStr)
                  toast("SVG Code copied ✅")
                }}
              >
                Copy SVG
                <Copy />
              </Button>
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={duplicateSelected}>
              Duplicate
            </Button>
            <Button variant="destructive" size="sm" className="flex-1" onClick={deleteSelected}>
              Delete
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
