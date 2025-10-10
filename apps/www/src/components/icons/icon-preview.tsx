import { X } from "lucide-react";
import React, { useState } from "react";
import { IconControlsPanel, LogoControlsPanel } from "./icon-control";
import { IconDownloadPanel, LogoDownloadPanel } from "./download-icon";

interface LogoPreviewPanelProps {
  selectedIcon: {
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    type: string;
  } | null;
  onClearSelection: () => void;
}

export function LogoPreviewPanel({
  selectedIcon,
  onClearSelection,
}: LogoPreviewPanelProps) {
  const [size, setSize] = useState(96);
  const [color, setColor] = useState("currentColor");

  return (
    <div className="flex flex-1 flex-col bg-background overflow-auto">
      {selectedIcon ? (
        <>
          <div className="flex flex-col px-3 gap-2">
            <div className="text-center w-full items-center flex justify-between space-y-1">
              <p className="font-semibold text-sm">{selectedIcon.name}</p>
              <p className="text-xs pr-6 text-muted-foreground capitalize">
                {selectedIcon.type}
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl flex items-center justify-center w-full aspect-square">
              <selectedIcon.Component
                id="preview-icon"
                type={selectedIcon.type}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  color: color,
                }}
                className="transition-all duration-200"
              />
            </div>
            <button
              onClick={onClearSelection}
              className="text-xs top-1 right-3 absolute text-muted-foreground hover:text-foreground transition-colors"
            >
              <X />
            </button>
          </div>

          <LogoControlsPanel
            size={size}
            color={color}
            onSizeChange={setSize}
            onColorChange={setColor}
          />

          <LogoDownloadPanel
            selectedIcon={selectedIcon}
            size={size}
            color={color}
          />
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-muted-foreground text-center">
            Select an icon to preview
          </p>
        </div>
      )}
    </div>
  );
}

interface IconPreviewPanelProps {
  selectedIcon: {
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    type: string;
  } | null;
  onClearSelection: () => void;
}

export function IconPreviewPanel({
  selectedIcon,
  onClearSelection,
}: IconPreviewPanelProps) {
  const [size, setSize] = useState(96);
  const [color, setColor] = useState("currentColor");
  const [strokeWidth, setStrokeWidth] = useState(2);

  const isStrokeIcon = selectedIcon?.type === "stroke";

  return (
    <div className="flex flex-1 flex-col bg-background overflow-auto">
      {selectedIcon ? (
        <>
          <div className="flex flex-col px-3 gap-2">
            <div className="text-center w-full items-center flex justify-between space-y-1">
              <p className="font-semibold text-sm">{selectedIcon.name}</p>
              <p className="text-xs pr-6 text-muted-foreground capitalize">
                {selectedIcon.type}
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl flex items-center justify-center w-full aspect-square">
              <selectedIcon.Component
                id="preview-icon"
                type={selectedIcon.type}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  color: color,
                  ...(isStrokeIcon ? { stroke: color, strokeWidth: strokeWidth } : {}),
                }}
                className="transition-all duration-200"
              />
            </div>
            <button
              onClick={onClearSelection}
              className="text-xs top-1 right-3 absolute text-muted-foreground hover:text-foreground transition-colors"
            >
              <X />
            </button>
          </div>

          <IconControlsPanel
            size={size}
            color={color}
            {...(isStrokeIcon && {
              strokeWidth,
              onStrokeWidthChange: setStrokeWidth,
            })}
            onSizeChange={setSize}
            onColorChange={setColor}
          />

          <IconDownloadPanel
            selectedIcon={selectedIcon}
            size={size}
            color={color}
            {...(isStrokeIcon && { strokeWidth })}
          />
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-muted-foreground text-center">
            Select an icon to preview
          </p>
        </div>
      )}
    </div>
  );
}
