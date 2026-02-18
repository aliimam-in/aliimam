import React, { useState } from "react"
import { X } from "lucide-react"

import { IconDownloadPanel, LogoDownloadPanel } from "./download-icon"
import { IconControlsPanel, LogoControlsPanel } from "./icon-control"

interface LogoPreviewPanelProps {
  selectedIcon: {
    name: string
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
    type: string
  } | null
  onClearSelection: () => void
}

export function LogoPreviewPanel({
  selectedIcon,
  onClearSelection,
}: LogoPreviewPanelProps) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")

  return (
    <div className="bg-background flex flex-1 flex-col overflow-auto">
      {selectedIcon ? (
        <>
          <div className="flex flex-col gap-2 px-3">
            <div className="flex w-full items-center justify-between space-y-1 text-center">
              <p className="text-sm font-semibold">{selectedIcon.name}</p>
              <p className="text-muted-foreground pr-6 text-xs capitalize">
                {selectedIcon.type}
              </p>
            </div>
            <div className="bg-muted/50 flex aspect-square w-full items-center justify-center">
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
              className="text-muted-foreground hover:text-foreground absolute top-1 right-3 text-xs transition-colors"
            >
              <X className="h-4 w-4" />
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
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground text-center text-sm">
            Select an icon to preview
          </p>
        </div>
      )}
    </div>
  )
}

interface IconPreviewPanelProps {
  selectedIcon: {
    name: string
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
    type: string
  } | null
  onClearSelection: () => void
}

export function IconPreviewPanel({
  selectedIcon,
  onClearSelection,
}: IconPreviewPanelProps) {
  const [size, setSize] = useState(96)
  const [color, setColor] = useState("currentColor")
  const [strokeWidth, setStrokeWidth] = useState(2)

  const isStrokeIcon = selectedIcon?.type === "stroke"

  return (
    <div className="bg-background flex flex-1 flex-col overflow-auto">
      {selectedIcon ? (
        <>
          <div className="flex flex-col gap-2 px-3">
            <div className="flex w-full items-center justify-between space-y-1 text-center">
              <p className="text-sm font-semibold">{selectedIcon.name}</p>
              <p className="text-muted-foreground pr-6 text-xs capitalize">
                {selectedIcon.type}
              </p>
            </div>
            <div className="bg-muted/50 flex aspect-square w-full items-center justify-center rounded-2xl">
              <selectedIcon.Component
                id="preview-icon"
                type={selectedIcon.type}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  color: color,
                  ...(isStrokeIcon
                    ? { stroke: color, strokeWidth: strokeWidth }
                    : {}),
                }}
                className="transition-all duration-200"
              />
            </div>
            <button
              onClick={onClearSelection}
              className="text-muted-foreground hover:text-foreground absolute top-1 right-3 text-xs transition-colors"
            >
              <X className="h-4 w-4" />
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
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground text-center text-sm">
            Select an icon to preview
          </p>
        </div>
      )}
    </div>
  )
}
