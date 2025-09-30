import React from "react";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { Input } from "@/registry/default/ui/input";
import { RotateCw } from "lucide-react";
import { Button } from "@/registry/default/ui/button";

export interface IconControlsProps {
  size: number;
  color: string;
  strokeWidth?: number; // ✅ optional now
  onSizeChange: (value: number) => void;
  onColorChange: (value: string) => void;
  onStrokeWidthChange?: (strokeWidth: number) => void;
}

export function IconControlsPanel({
  size,
  color,
  strokeWidth,
  onSizeChange,
  onColorChange,
  onStrokeWidthChange,
}: IconControlsProps) {
  return (
    <div className="flex mt-3 flex-col gap-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="size" className="text-xs font-medium">
          Size: {size}px
        </Label>
        <Slider
          id="size"
          min={16}
          max={148}
          step={1}
          value={[size]}
          onValueChange={(value) => {
            if (value[0] !== undefined) {
              onSizeChange(value[0]);
            }
          }}
          className="w-full"
        />
      </div>
      {strokeWidth !== undefined && onStrokeWidthChange && (
        <div className="space-y-2">
          <Label htmlFor="stroke" className="text-xs font-medium">
            Stroke Width: {strokeWidth}
          </Label>
          <Slider
            id="stroke"
            min={0.5}
            max={4}
            step={0.25}
            value={[strokeWidth]}
            onValueChange={(value) => {
              if (value[0] !== undefined) {
                onStrokeWidthChange(value[0]);
              }
            }}
            className="w-full"
          />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="color" className="text-xs font-medium">
          Color
        </Label>
        <div className="flex gap-2 items-center">
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="absolute h-8 w-8 rounded-full border p-3"
          />
          <div
            className="h-8 w-8 rounded-full border"
            style={{ backgroundColor: color }}
          />
          <Input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 text-xs"
            placeholder="#000000"
          />
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={() => {
              onSizeChange(64);
              onColorChange("#000000");
              if (onStrokeWidthChange) {
                onStrokeWidthChange(2);
              }
            }}
          >
            <RotateCw />
          </Button>
        </div>
      </div>
    </div>
  );
}

export interface LogoControlsProps {
  size: number;
  color: string;
  onSizeChange: (value: number) => void;
  onColorChange: (value: string) => void;
}

export function LogoControlsPanel({
  size,
  color, 
  onSizeChange,
  onColorChange,
}: LogoControlsProps) {
  return (
    <div className="flex mt-3 flex-col gap-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="size" className="text-xs font-medium">
          Size: {size}px
        </Label>
        <Slider
          id="size"
          min={16}
          max={148}
          step={1}
          value={[size]}
          onValueChange={(value) => {
            if (value[0] !== undefined) {
              onSizeChange(value[0]);
            }
          }}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="color" className="text-xs font-medium">
          Color
        </Label>
        <div className="flex gap-2 items-center">
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="absolute h-8 w-8 rounded-full border p-3"
          />
          <div
            className="h-8 w-8 rounded-full border"
            style={{ backgroundColor: color }}
          />
          <Input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 text-xs"
            placeholder="#000000"
          />
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={() => {
              onSizeChange(64);
              onColorChange("#000000");
            }}
          >
            <RotateCw />
          </Button>
        </div>
      </div>
    </div>
  );
}
