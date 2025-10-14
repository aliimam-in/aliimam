"use client"

import type React from "react"
import { useRef, useEffect, useState, useCallback } from "react"
import { useEditorStore } from "@/src/lib/store"
import type { Shape, Point } from "@/src/types/canvas"
import { colorizeSvg } from "./export"

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const textInputRef = useRef<HTMLTextAreaElement>(null)
  const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map())

  const pendingUpdatesRef = useRef<Map<string, Partial<Shape>>>(new Map())
  const rafIdRef = useRef<number | null>(null)

  const [rerenderTick, setRerenderTick] = useState(0)

  const {
    shapes,
    selectedIds,
    zoom,
    pan,
    tool,
    gridVisible,
    snapToGrid,
    gridSize,
    addShape,
    updateShape,
    selectShapes,
    clearSelection,
    setPan,
    setTool,
    pushHistory,
    deleteSelected,
    duplicateSelected,
    undo,
    redo,
  } = useEditorStore()

  const [isDrawing, setIsDrawing] = useState(false)
  const [isPanning, setIsPanning] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<Point | null>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeHandle, setResizeHandle] = useState<number | null>(null)
  const [currentShape, setCurrentShape] = useState<Shape | null>(null)
  const [draggedShapeId, setDraggedShapeId] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState<Point>({ x: 0, y: 0 })
  const [isEditingText, setIsEditingText] = useState(false)
  const [editingShapeId, setEditingShapeId] = useState<string | null>(null)

  const snap = useCallback(
    (value: number) => {
      if (!snapToGrid) return value
      return Math.round(value / gridSize) * gridSize
    },
    [snapToGrid, gridSize],
  )

  const screenToCanvas = useCallback(
    (screenX: number, screenY: number): Point => {
      const canvas = canvasRef.current
      if (!canvas) return { x: 0, y: 0 }
      const rect = canvas.getBoundingClientRect()
      return {
        x: (screenX - rect.left - pan.x) / zoom,
        y: (screenY - rect.top - pan.y) / zoom,
      }
    },
    [zoom, pan],
  )

  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      if (!gridVisible) return

      ctx.save()
      ctx.strokeStyle = "rgba(128, 128, 128, 0.2)"
      ctx.lineWidth = 0.5 / zoom

      const startX = Math.floor(-pan.x / zoom / gridSize) * gridSize
      const startY = Math.floor(-pan.y / zoom / gridSize) * gridSize
      const endX = startX + width / zoom + gridSize
      const endY = startY + height / zoom + gridSize

      for (let x = startX; x < endX; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, startY)
        ctx.lineTo(x, endY)
        ctx.stroke()
      }

      for (let y = startY; y < endY; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(startX, y)
        ctx.lineTo(endX, y)
        ctx.stroke()
      }

      ctx.restore()
    },
    [gridVisible, gridSize, zoom, pan],
  )

  const drawShape = useCallback(
    (ctx: CanvasRenderingContext2D, shape: Shape) => {
      if (!shape.visible) return

      ctx.save()
      ctx.globalAlpha = shape.opacity
      ctx.fillStyle = shape.fill
      ctx.strokeStyle = shape.stroke
      ctx.lineWidth = shape.strokeWidth

      ctx.translate(shape.x + shape.width / 2, shape.y + shape.height / 2)
      ctx.rotate((shape.rotation * Math.PI) / 180)
      ctx.translate(-(shape.x + shape.width / 2), -(shape.y + shape.height / 2))

      switch (shape.type) {
        case "rectangle": {
          const rect = shape as import("@/src/types/canvas").Rectangle
          if (rect.cornerRadius > 0) {
            const r = Math.min(rect.cornerRadius, shape.width / 2, shape.height / 2)
            ctx.beginPath()
            ctx.moveTo(shape.x + r, shape.y)
            ctx.lineTo(shape.x + shape.width - r, shape.y)
            ctx.arcTo(shape.x + shape.width, shape.y, shape.x + shape.width, shape.y + r, r)
            ctx.lineTo(shape.x + shape.width, shape.y + shape.height - r)
            ctx.arcTo(
              shape.x + shape.width,
              shape.y + shape.height,
              shape.x + shape.width - r,
              shape.y + shape.height,
              r,
            )
            ctx.lineTo(shape.x + r, shape.y + shape.height)
            ctx.arcTo(shape.x, shape.y + shape.height, shape.x, shape.y + shape.height - r, r)
            ctx.lineTo(shape.x, shape.y + r)
            ctx.arcTo(shape.x, shape.y, shape.x + r, shape.y, r)
            ctx.closePath()
          } else {
            ctx.beginPath()
            ctx.rect(shape.x, shape.y, shape.width, shape.height)
          }
          // Only fill if not transparent/none
          if (shape.fill !== "transparent" && shape.fill !== "none") {
            ctx.fill()
          }
          if (shape.strokeWidth > 0) ctx.stroke()
          break
        }
        case "ellipse":
          ctx.beginPath()
          ctx.ellipse(
            shape.x + shape.width / 2,
            shape.y + shape.height / 2,
            shape.width / 2,
            shape.height / 2,
            0,
            0,
            Math.PI * 2,
          )
          // Only fill if not transparent/none
          if (shape.fill !== "transparent" && shape.fill !== "none") {
            ctx.fill()
          }
          if (shape.strokeWidth > 0) ctx.stroke()
          break
        case "line": {
          const line = shape as import("@/src/types/canvas").Line
          ctx.beginPath()
          ctx.moveTo(shape.x, shape.y)
          ctx.lineTo(line.endX, line.endY)
          ctx.stroke()
          break
        }
        case "text": {
          const text = shape as import("@/src/types/canvas").TextShape
          ctx.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`
          ctx.textAlign = text.textAlign
          ctx.textBaseline = "top"
          ctx.fillText(text.content, shape.x, shape.y)
          break
        }
        case "svg": {
          const svgShape = shape as import("@/src/types/canvas").SvgShape
          // Style the SVG according to current shape fill/stroke settings
          const styled = colorizeSvg(
            svgShape.svg,
            shape.fill || "currentColor",
            shape.stroke || undefined,
            shape.strokeWidth || 0,
          )
          // Cache key depends on SVG content + styling so we re-use images
          const key =
            svgShape.id +
            "|" +
            (shape.fill || "") +
            "|" +
            (shape.stroke || "") +
            "|" +
            (shape.strokeWidth ?? 0) +
            "|" +
            styled.length

          let img = imageCacheRef.current.get(key)
          if (!img) {
            img = new Image()
            img.crossOrigin = "anonymous"
            const svgEncoded = encodeURIComponent(styled)
            img.src = `data:image/svg+xml;charset=utf-8,${svgEncoded}`

            img.onload = () => {
              // force a repaint once the image is ready
              setRerenderTick((t) => t + 1)
            }
            img.onerror = () => {
              // On error, remove broken cache entry to avoid repeated broken draws
              imageCacheRef.current.delete(key)
            }

            imageCacheRef.current.set(key, img)
          }

          // Only draw if the image is truly ready (avoid InvalidStateError)
          if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
            ctx.drawImage(img, shape.x, shape.y, Math.max(1, shape.width || 100), Math.max(1, shape.height || 100))
          }
          break
        }
      }

      ctx.restore()
    },
    [pan.x, pan.y, zoom],
  )

  const drawSelection = useCallback(
    (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 1 / zoom

      ctx.translate(shape.x + shape.width / 2, shape.y + shape.height / 2)
      ctx.rotate((shape.rotation * Math.PI) / 180)
      ctx.translate(-(shape.x + shape.width / 2), -(shape.y + shape.height / 2))

      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)

      // Draw resize handles (only corners)
      const handleSize = 8 / zoom
      const handles = [
        { x: shape.x, y: shape.y }, // top-left
        { x: shape.x + shape.width, y: shape.y }, // top-right
        { x: shape.x + shape.width, y: shape.y + shape.height }, // bottom-right
        { x: shape.x, y: shape.y + shape.height }, // bottom-left
      ]

      ctx.fillStyle = "#ffffff"
      ctx.setLineDash([])
      handles.forEach((handle) => {
        ctx.fillRect(handle.x - handleSize / 2, handle.y - handleSize / 2, handleSize, handleSize)
        ctx.strokeRect(handle.x - handleSize / 2, handle.y - handleSize / 2, handleSize, handleSize)
      })

      ctx.restore()
    },
    [zoom],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    // Set actual size in memory (scaled to DPR)
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    // Set display size (css pixels)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Scale all drawing operations by the DPR
    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    ctx.translate(pan.x, pan.y)
    ctx.scale(zoom, zoom)

    drawGrid(ctx, rect.width, rect.height)

    shapes.forEach((shape) => drawShape(ctx, shape))
    if (currentShape) drawShape(ctx, currentShape)

    shapes.forEach((shape) => {
      if (selectedIds.includes(shape.id)) {
        drawSelection(ctx, shape)
      }
    })

    ctx.restore()
  }, [shapes, selectedIds, zoom, pan, currentShape, drawGrid, drawShape, drawSelection, rerenderTick])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const point = screenToCanvas(e.clientX, e.clientY)

    if (tool === "hand" || e.button === 1 || (e.button === 0 && e.metaKey)) {
      setIsPanning(true)
      setDragStart(point)
      return
    }

    if (tool === "select") {
      const clickedShape = [...shapes].reverse().find((shape) => {
        return (
          point.x >= shape.x &&
          point.x <= shape.x + shape.width &&
          point.y >= shape.y &&
          point.y <= shape.y + shape.height
        )
      })

      if (clickedShape) {
        if (!selectedIds.includes(clickedShape.id)) {
          selectShapes([clickedShape.id])
        }

        // Double-click to edit text
        if (clickedShape.type === "text" && e.detail === 2) {
          setIsEditingText(true)
          setEditingShapeId(clickedShape.id)
          setTimeout(() => textInputRef.current?.focus(), 0)
          return
        }

        const handleSize = 8 / zoom
        const handles = [
          { x: clickedShape.x, y: clickedShape.y, index: 0 }, // top-left
          {
            x: clickedShape.x + clickedShape.width,
            y: clickedShape.y,
            index: 2,
          }, // top-right
          {
            x: clickedShape.x + clickedShape.width,
            y: clickedShape.y + clickedShape.height,
            index: 4,
          }, // bottom-right
          {
            x: clickedShape.x,
            y: clickedShape.y + clickedShape.height,
            index: 6,
          }, // bottom-left
        ]

        const clickedHandle = handles.find(
          (h) =>
            point.x >= h.x - handleSize / 2 &&
            point.x <= h.x + handleSize / 2 &&
            point.y >= h.y - handleSize / 2 &&
            point.y <= h.y + handleSize / 2,
        )

        if (clickedHandle) {
          setIsResizing(true)
          setResizeHandle(clickedHandle.index)
          setDraggedShapeId(clickedShape.id)
          setDragStart(point)
          return
        }

        // If not clicking a handle → normal dragging
        setIsDragging(true)
        setDraggedShapeId(clickedShape.id)
        setDragOffset({
          x: point.x - clickedShape.x,
          y: point.y - clickedShape.y,
        })
      } else {
        clearSelection()
      }
      return
    }

    // Drawing tools
    setIsDrawing(true)
    setDragStart(point)

    const id = `shape-${Date.now()}`
    const baseShape = {
      id,
      x: snap(point.x),
      y: snap(point.y),
      width: 0,
      height: 0,
      rotation: 0,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 2,
      opacity: 1,
      locked: false,
      visible: true,
      name: `${tool} ${shapes.length + 1}`,
    }

    switch (tool) {
      case "rectangle":
        setCurrentShape({
          ...baseShape,
          fill: "transparent",
          type: "rectangle",
          cornerRadius: 0,
        })
        break
      case "ellipse":
        setCurrentShape({
          ...baseShape,
          fill: "transparent",
          type: "ellipse",
        })
        break
      case "text":
        setCurrentShape({
          ...baseShape,
          type: "text",
          content: "Design",
          fontSize: 24,
          fontFamily: "Geist",
          fontWeight: "normal",
          textAlign: "left",
          width: 100,
          height: 30,
          fill: "currentColor",
          stroke: "transparent",
          strokeWidth: 0,
        })
        break
      case "line":
        setCurrentShape({
          ...baseShape,
          type: "line",
          endX: snap(point.x),
          endY: snap(point.y),
          fill: "transparent",
        })
        break
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const point = screenToCanvas(e.clientX, e.clientY)

    if (isPanning && dragStart) {
      const prevPoint = screenToCanvas(e.clientX - e.movementX, e.clientY - e.movementY)
      setPan({
        x: pan.x + (point.x - prevPoint.x) * zoom,
        y: pan.y + (point.y - prevPoint.y) * zoom,
      })
      return
    }

    if (isResizing && draggedShapeId && resizeHandle !== null && dragStart) {
      const shape = shapes.find((s) => s.id === draggedShapeId)
      if (!shape) return

      const newShape: Partial<Shape> = {}
      const dx = snap(point.x) - snap(dragStart.x)
      const dy = snap(point.y) - snap(dragStart.y)

      switch (resizeHandle) {
        case 0: // top-left
          newShape.x = shape.x + dx
          newShape.y = shape.y + dy
          newShape.width = Math.max(5, shape.width - dx)
          newShape.height = Math.max(5, shape.height - dy)
          break
        case 2: // top-right
          newShape.y = shape.y + dy
          newShape.width = Math.max(5, shape.width + dx)
          newShape.height = Math.max(5, shape.height - dy)
          break
        case 4: // bottom-right
          newShape.width = Math.max(5, shape.width + dx)
          newShape.height = Math.max(5, shape.height + dy)
          break
        case 6: // bottom-left
          newShape.x = shape.x + dx
          newShape.width = Math.max(5, shape.width - dx)
          newShape.height = Math.max(5, shape.height + dy)
          break
      }

      scheduleUpdate(shape.id, newShape)
      return
    }

    if (isDragging && draggedShapeId) {
      const newX = snap(point.x - dragOffset.x)
      const newY = snap(point.y - dragOffset.y)
      scheduleUpdate(draggedShapeId, { x: newX, y: newY })
      return
    }

    if (isDrawing && currentShape && dragStart) {
      const width = Math.abs(snap(point.x) - snap(dragStart.x))
      const height = Math.abs(snap(point.y) - snap(dragStart.y))
      const x = Math.min(snap(point.x), snap(dragStart.x))
      const y = Math.min(snap(point.y), snap(dragStart.y))

      if (currentShape.type === "line") {
        setCurrentShape({
          ...currentShape,
          endX: snap(point.x),
          endY: snap(point.y),
        } as import("@/src/types/canvas").Line)
      } else {
        setCurrentShape({
          ...currentShape,
          x,
          y,
          width,
          height,
        })
      }
    }
  }

  const handleMouseUp = () => {
    if (isPanning) {
      setIsPanning(false)
      setDragStart(null)
      return
    }

    if (isResizing) {
      setIsResizing(false)
      setResizeHandle(null)
      setDraggedShapeId(null)
      setDragStart(null)
      pushHistory()
      return
    }

    if (isDragging) {
      pushHistory()
      setIsDragging(false)
      setDraggedShapeId(null)
      return
    }

    if (isDrawing && currentShape) {
      if (currentShape.width > 5 || currentShape.height > 5 || currentShape.type === "line") {
        addShape(currentShape)
        selectShapes([currentShape.id])
      }
      setIsDrawing(false)
      setCurrentShape(null)
      setDragStart(null)
      if (tool !== "select") {
        setTool("select")
      }
    }
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(0.1, Math.min(5, zoom * delta))

    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const worldX = (mouseX - pan.x) / zoom
    const worldY = (mouseY - pan.y) / zoom

    const newPan = {
      x: mouseX - worldX * newZoom,
      y: mouseY - worldY * newZoom,
    }

    useEditorStore.getState().setZoom(newZoom)
    setPan(newPan)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        duplicateSelected()
      }
      if (e.key === "z" && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
        e.preventDefault()
        undo()
      }
      if (e.key === "z" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault()
        redo()
      }
      // Tool shortcuts
      if (e.key === "v") setTool("select")
      if (e.key === "h") setTool("hand")
      if (e.key === "r") setTool("rectangle")
      if (e.key === "o") setTool("ellipse")
      if (e.key === "l") setTool("line")
      if (e.key === "t") setTool("text")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setTool, deleteSelected, duplicateSelected, undo, redo])

  const getCursor = () => {
    if (tool === "hand" || isPanning) return isPanning ? "cursor-grabbing" : "cursor-grab"
    if (tool === "select") return "cursor-default"
    return "cursor-crosshair"
  }

  const handleSvgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const raw = (event.target?.result as string) || ""

      // Keep the original colors. Previously we replaced all fills/strokes with currentColor.
      const normalized = raw // preserve as-is

      const id = `shape-${Date.now()}`
      const svgShape: import("@/src/types/canvas").SvgShape = {
        id,
        type: "svg",
        x: 100,
        y: 100,
        width: 200,
        height: 200,
        rotation: 0,
        // These are used if the inner SVG uses currentColor, but won't override explicit fills/strokes
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 0,
        opacity: 1,
        locked: false,
        visible: true,
        name: file.name,
        svg: normalized,
      }
      addShape(svgShape)
      selectShapes([id])
    }
    reader.readAsText(file)
    e.target.value = ""
  }

  const getTextPosition = () => {
    if (!isEditingText || !editingShapeId) return null
    const shape = shapes.find((s) => s.id === editingShapeId)
    if (!shape || shape.type !== "text") return null

    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()

    return {
      left: rect.left + shape.x * zoom + pan.x,
      top: rect.top + shape.y * zoom + pan.y,
      width: shape.width * zoom,
      height: shape.height * zoom,
    }
  }

  const textPosition = getTextPosition()

  const flushScheduledUpdates = useCallback(() => {
    const entries = Array.from(pendingUpdatesRef.current.entries())
    pendingUpdatesRef.current.clear()
    entries.forEach(([id, updates]) => updateShape(id, updates))
    rafIdRef.current = null
  }, [updateShape])

  const scheduleUpdate = useCallback(
    (id: string, updates: Partial<Shape>) => {
      const existing = pendingUpdatesRef.current.get(id) || {}
      pendingUpdatesRef.current.set(id, { ...existing, ...updates })
      if (rafIdRef.current == null) {
        rafIdRef.current = requestAnimationFrame(flushScheduledUpdates)
      }
    },
    [flushScheduledUpdates],
  )

  return (
    <div ref={containerRef} className="h-full w-full overflow-hidden bg-muted/20 relative">
      <input type="file" accept=".svg" onChange={handleSvgUpload} className="hidden" id="svg-upload" />
      <canvas
        ref={canvasRef}
        className={`h-full w-full ${getCursor()}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
      {isEditingText && editingShapeId && textPosition && (
        <textarea
          ref={textInputRef}
          className="absolute border-2 border-blue-500 bg-background p-1 resize-none overflow-hidden"
          style={{
            left: `${textPosition.left}px`,
            top: `${textPosition.top}px`,
            width: `${textPosition.width}px`,
            height: `${textPosition.height}px`,
            fontSize: `${(shapes.find((s) => s.id === editingShapeId) as any)?.fontSize * zoom}px`,
            fontFamily: (shapes.find((s) => s.id === editingShapeId) as any)?.fontFamily,
          }}
          value={(shapes.find((s) => s.id === editingShapeId) as any)?.content || ""}
          onChange={(e) => {
            updateShape(editingShapeId, { content: e.target.value })
          }}
          onBlur={() => {
            setIsEditingText(false)
            setEditingShapeId(null)
            pushHistory()
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsEditingText(false)
              setEditingShapeId(null)
              pushHistory()
            }
          }}
        />
      )}
    </div>
  )
}
