"use client";

import { useEditorStore } from "@/src/lib/store";
import { Button } from "@/registry/default/ui/button";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import { Eye, EyeOff, Lock, Unlock, Trash2, ArrowDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { ArrowUp } from "@aliimam/icons"; 

import {
  Editable,
  EditableArea, 
  EditableInput, 
  EditablePreview, 
} from "@/registry/default/ui/editable";

export function LayersPanel() {
  const {
    shapes,
    selectedIds,
    selectShapes,
    updateShape,
    deleteShape,
    bringToFront,
    sendToBack,
  } = useEditorStore();

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border p-3">
        <h1 className="font-semibold text-xs">Layers</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {[...shapes].reverse().map((shape) => (
            <div
              key={shape.id}
              className={cn(
                "group flex items-center gap-1 rounded-md px-1 h-8 py-1 text-xs hover:bg-accent",
                selectedIds.includes(shape.id) && "bg-accent"
              )}
              onClick={() => selectShapes([shape.id])}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  updateShape(shape.id, { visible: !shape.visible });
                }}
              >
                {shape.visible ? (
                  <Eye className="h-3 w-3" />
                ) : (
                  <EyeOff className="h-3 w-3" />
                )}
              </Button>

              <Editable triggerMode="dblclick" autosize defaultValue={shape.name}>
                <EditableArea >
                  <EditablePreview/>
                  <EditableInput className="h-6 text-xs"/>
                </EditableArea>
              </Editable>

              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  updateShape(shape.id, { locked: !shape.locked });
                }}
              >
                {shape.locked ? (
                  <Lock className="h-3 w-3" />
                ) : (
                  <Unlock className="h-3 w-3" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  bringToFront(shape.id);
                }}
                title="Bring to front"
              >
                <ArrowUp className="h-3 w-3" />
              </Button>

              {/* Send to back */}
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  sendToBack(shape.id);
                }}
                title="Send to back"
              >
                <ArrowDown className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteShape(shape.id);
                }}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
          {shapes.length === 0 && (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No layers yet. Start design!
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
