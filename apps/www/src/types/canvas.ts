export type ToolType = "select" | "rectangle" | "ellipse" | "text" | "line" | "hand"

export interface Point {
  x: number
  y: number
}

export interface Size {
  width: number
  height: number
}

export interface Transform {
  x: number
  y: number
  rotation: number
  scaleX: number
  scaleY: number
}

export interface BaseShape {
  id: string
  type: "rectangle" | "ellipse" | "text" | "line" | "svg"
  x: number
  y: number
  width: number
  height: number
  rotation: number
  fill: string
  stroke: string
  strokeWidth: number
  opacity: number
  locked: boolean
  visible: boolean
  name: string
}

export interface Rectangle extends BaseShape {
  type: "rectangle"
  cornerRadius: number
}

export interface Ellipse extends BaseShape {
  type: "ellipse"
}

export interface TextShape extends BaseShape {
  type: "text"
  content: string
  fontSize: number
  fontFamily: string
  fontWeight: string
  textAlign: "left" | "center" | "right"
}

export interface Line extends BaseShape {
  type: "line"
  endX: number
  endY: number
}

export interface SvgShape extends BaseShape {
  type: "svg"
  // Serialized SVG markup of the icon or vector
  svg: string
  // Optional viewBox from the original icon for scaling fidelity
  viewBox?: string
}

export type Shape = Rectangle | Ellipse | TextShape | Line | SvgShape

export interface CanvasState {
  shapes: Shape[]
  selectedIds: string[]
  zoom: number
  pan: Point
  tool: ToolType
  gridVisible: boolean
  snapToGrid: boolean
  gridSize: number
}

export interface HistoryState {
  past: CanvasState[]
  present: CanvasState
  future: CanvasState[]
}
