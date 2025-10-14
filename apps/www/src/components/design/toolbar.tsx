"use client";

import React from "react";

import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";
import {
  MousePointer2,
  Square,
  Circle,
  Type,
  Minus,
  Hand,
  ZoomIn,
  ZoomOut,
  Undo2,
  Redo2,
  Download,
  Upload,
  Grid3x3,
  Images,
} from "lucide-react";
import { useEditorStore } from "@/src/lib/store";
import type { ToolType } from "@/src/types/canvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog";
import { Textarea } from "@/registry/default/ui/textarea";
import {
  exportAsPNG,
  exportAsJPG,
  generateSVGString,
  generateReactComponent,
} from "./export";
import { IconPicker } from "./icon-picker";
import { toast } from "sonner";
import { LogoPicker } from "./logo-picker";
import { Files } from "@aliimam/icons";  

export function Toolbar() {
  const {
    tool,
    setTool,
    zoom,
    setZoom,
    undo,
    redo,
    canUndo,
    canRedo,
    gridVisible,
    toggleGrid,
    snapToGrid,
    toggleSnap,
  } = useEditorStore();

  const [svgDialogOpen, setSvgDialogOpen] = React.useState(false);
  const [svgCode, setSvgCode] = React.useState("");

  const tools: { type: ToolType; icon: React.ReactNode; label: string }[] = [
    {
      type: "select",
      icon: <MousePointer2 className="h-4 w-4" />,
      label: "Select (V)",
    },
    { type: "hand", icon: <Hand className="h-4 w-4" />, label: "Hand (H)" },
    {
      type: "rectangle",
      icon: <Square className="h-4 w-4" />,
      label: "Rectangle (R)",
    },
    {
      type: "ellipse",
      icon: <Circle className="h-4 w-4" />,
      label: "Ellipse (O)",
    },
    { type: "line", icon: <Minus className="h-4 w-4" />, label: "Line (L)" },
    { type: "text", icon: <Type className="h-4 w-4" />, label: "Text (T)" },
  ];

  const handleExportJSON = () => {
    const state = useEditorStore.getState();
    const json = JSON.stringify({ shapes: state.shapes }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          if (data.shapes) {
            useEditorStore.setState({ shapes: data.shapes, selectedIds: [] });
          }
        } catch (error) {
          console.error("Failed to import:", error);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleExportPNG = async () => {
    const { shapes } = useEditorStore.getState();
    const blob = await exportAsPNG(shapes);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design.png";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportJPG = async () => {
    const { shapes } = useEditorStore.getState();
    const blob = await exportAsJPG(shapes, 0.92);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design.jpg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShowSVG = () => {
    const { shapes } = useEditorStore.getState();
    const svg = generateSVGString(shapes);
    setSvgCode(svg);
    setSvgDialogOpen(true);
  };

  const handleShowSVGCode = () => {
    const { shapes } = useEditorStore.getState();
    const svg = generateReactComponent(shapes);
    setSvgCode(svg);
    setSvgDialogOpen(true);
  };

  const handleClick = () => {
    document.getElementById("svg-upload")?.click();
  };

  return ( 
      <div className="flex items-center gap-2 border-y border-border bg-background px-4 py-2">
        <div className="flex items-center gap-1">
          {tools.map((t) => (
            <Button
              key={t.type}
              variant={tool === t.type ? "default" : "ghost"}
              size="sm"
              onClick={() => setTool(t.type)}
              title={t.label}
            >
              {t.icon}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleClick}
            title="Import JSON"
          >
            <Upload className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => undo()}
            disabled={!canUndo}
            title="Undo (Cmd+Z)"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => redo()}
            disabled={!canRedo}
            title="Redo (Cmd+Shift+Z)"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setZoom(zoom - 0.1)}
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="min-w-16 text-center text-sm text-muted-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setZoom(zoom + 0.1)}
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setZoom(1)}
            title="Reset Zoom"
          >
            <span className="text-xs">100%</span>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          <Button
            variant={gridVisible ? "default" : "ghost"}
            size="sm"
            onClick={() => toggleGrid()}
            title="Toggle Grid"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={snapToGrid ? "default" : "ghost"}
            size="sm"
            onClick={() => toggleSnap()}
            title="Snap to Grid"
          >
            <span className="text-xs">Snap</span>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <IconPicker>
          <Button variant="ghost" size="sm" title="Insert Icon">
            <Images className="mr-1 h-4 w-4" />
            Icons
          </Button>
        </IconPicker>

        <Separator orientation="vertical" className="h-6" />

        <LogoPicker>
          <Button variant="ghost" size="sm" title="Insert Logo">
            <Files />
            Logos
          </Button>
        </LogoPicker>

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleImport}
            title="Import JSON"
          >
            <Upload className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" title="Export">
                <Download className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportJSON}>
                Export JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportPNG}>
                Export PNG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportJPG}>
                Export JPG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleShowSVG}>
                Show SVG Code
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" onClick={handleShowSVG} title="Copy SVG">
            Copy SVG
          </Button>

          <Button size="sm" onClick={handleShowSVGCode} title="Copy SVG">
            Copy SVG Code
          </Button>
        </div>

        <Dialog open={svgDialogOpen} onOpenChange={setSvgDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>SVG Code</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Textarea
                className="h-72 font-mono text-xs"
                readOnly
                value={svgCode}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const blob = new Blob([svgCode], { type: "image/svg+xml" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "design.svg";
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  Download .svg
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(svgCode);
                    toast("Copied to clipboard!");
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div> 
  );
}
