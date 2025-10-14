//@ts-nocheck
import { create } from "zustand"
import type { Shape, CanvasState, ToolType, Point } from "@/src/types/canvas"

interface EditorStore extends CanvasState {
  // Actions
  addShape: (shape: Shape) => void
  updateShape: (id: string, updates: Partial<Shape>) => void
  deleteShape: (id: string) => void
  selectShapes: (ids: string[]) => void
  clearSelection: () => void
  setTool: (tool: ToolType) => void
  setZoom: (zoom: number) => void
  setPan: (pan: Point) => void
  toggleGrid: () => void
  toggleSnap: () => void
  duplicateSelected: () => void
  deleteSelected: () => void
  bringToFront: (id: string) => void
  sendToBack: (id: string) => void

  // History
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean

  // Internal
  history: {
    past: CanvasState[]
    future: CanvasState[]
  }
  pushHistory: () => void
}

const initialState: CanvasState = {
  shapes: [],
  selectedIds: [],
  zoom: 1,
  pan: { x: 0, y: 0 },
  tool: "select",
  gridVisible: true,
  snapToGrid: false,
  gridSize: 20,
}

export const useEditorStore = create<EditorStore>((set, get) => ({
  ...initialState,
  history: {
    past: [],
    future: [],
  },
  canUndo: false,
  canRedo: false,

  pushHistory: () => {
    const { shapes, selectedIds, zoom, pan, gridVisible, snapToGrid, gridSize, history } = get()
    const currentState: CanvasState = {
      shapes,
      selectedIds,
      zoom,
      pan,
      tool: get().tool,
      gridVisible,
      snapToGrid,
      gridSize,
    }

    set({
      history: {
        past: [...history.past, currentState],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    })
  },

  undo: () => {
    const { history } = get()
    if (history.past.length === 0) return

    const previous = history.past[history.past.length - 1]
    const newPast = history.past.slice(0, -1)
    const current: CanvasState = {
      shapes: get().shapes,
      selectedIds: get().selectedIds,
      zoom: get().zoom,
      pan: get().pan,
      tool: get().tool,
      gridVisible: get().gridVisible,
      snapToGrid: get().snapToGrid,
      gridSize: get().gridSize,
    }

    set({
      ...previous,
      history: {
        past: newPast,
        future: [current, ...history.future],
      },
      canUndo: newPast.length > 0,
      canRedo: true,
    })
  },

  redo: () => {
    const { history } = get()
    if (history.future.length === 0) return

    const next = history.future[0]
    const newFuture = history.future.slice(1)
    const current: CanvasState = {
      shapes: get().shapes,
      selectedIds: get().selectedIds,
      zoom: get().zoom,
      pan: get().pan,
      tool: get().tool,
      gridVisible: get().gridVisible,
      snapToGrid: get().snapToGrid,
      gridSize: get().gridSize,
    }

    set({
      ...next,
      history: {
        past: [...history.past, current],
        future: newFuture,
      },
      canUndo: true,
      canRedo: newFuture.length > 0,
    })
  },

  addShape: (shape) => {
    get().pushHistory()
    set((state) => ({
      shapes: [...state.shapes, shape],
    }))
  },

  updateShape: (id, updates) => {
    set((state) => ({
      shapes: state.shapes.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    }))
  },

  deleteShape: (id) => {
    get().pushHistory()
    set((state) => ({
      shapes: state.shapes.filter((s) => s.id !== id),
      selectedIds: state.selectedIds.filter((sid) => sid !== id),
    }))
  },

  selectShapes: (ids) => {
    set({ selectedIds: ids })
  },

  clearSelection: () => {
    set({ selectedIds: [] })
  },

  setTool: (tool) => {
    set({ tool })
  },

  setZoom: (zoom) => {
    set({ zoom: Math.max(0.1, Math.min(5, zoom)) })
  },

  setPan: (pan) => {
    set({ pan })
  },

  toggleGrid: () => {
    set((state) => ({ gridVisible: !state.gridVisible }))
  },

  toggleSnap: () => {
    set((state) => ({ snapToGrid: !state.snapToGrid }))
  },

  duplicateSelected: () => {
    const { shapes, selectedIds } = get()
    if (selectedIds.length === 0) return

    get().pushHistory()
    const newShapes = selectedIds
      .map((id) => {
        const shape = shapes.find((s) => s.id === id)
        if (!shape) return null
        return {
          ...shape,
          id: `shape-${Date.now()}-${Math.random()}`,
          x: shape.x + 20,
          y: shape.y + 20,
        }
      })
      .filter(Boolean) as Shape[]

    set((state) => ({
      shapes: [...state.shapes, ...newShapes],
      selectedIds: newShapes.map((s) => s.id),
    }))
  },

  deleteSelected: () => {
    const { selectedIds } = get()
    if (selectedIds.length === 0) return

    get().pushHistory()
    set((state) => ({
      shapes: state.shapes.filter((s) => !selectedIds.includes(s.id)),
      selectedIds: [],
    }))
  },

  bringToFront: (id) => {
    get().pushHistory()
    set((state) => {
      const shape = state.shapes.find((s) => s.id === id)
      if (!shape) return state
      return {
        shapes: [...state.shapes.filter((s) => s.id !== id), shape],
      }
    })
  },

  sendToBack: (id) => {
    get().pushHistory()
    set((state) => {
      const shape = state.shapes.find((s) => s.id === id)
      if (!shape) return state
      return {
        shapes: [shape, ...state.shapes.filter((s) => s.id !== id)],
      }
    })
  },
}))
