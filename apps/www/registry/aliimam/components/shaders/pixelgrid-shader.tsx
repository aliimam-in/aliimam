"use client"

import { useCallback, useEffect, useRef } from "react"

// ── Types ──────────────────────────────────────────────────────────────────
export type Shape = "wave" | "noise" | "ripple" | "swirl" | "plasma" | "scan"
export type Matrix = "random" | "bayer2" | "bayer4" | "bayer8"
export type CursorMode = "ripple" | "erase" | "burn"

interface CursorState {
  x: number
  y: number
  active: boolean
  mode: CursorMode
}

interface AppState {
  shape: Shape
  matrix: Matrix
  pxSize: number
  amplitude: number
  frequency: number
  speed: number
  rings: number
  colorFg: string
  cursorSize: number
  cursorScale: number
  cursor: CursorState
}

export interface PixelGridShaderProps {
  shape?: Shape
  matrix?: Matrix
  pxSize?: number
  amplitude?: number
  frequency?: number
  speed?: number
  rings?: number
  colorFg?: string // HEX color
  cursorMode?: CursorMode
  cursorSize?: number
  cursorScale?: number
  className?: string
}

// ── HEX → RGB ──────────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
  let cleaned = hex.replace("#", "")

  if (cleaned.length === 3) {
    cleaned =
      cleaned[0] +
      cleaned[0] +
      cleaned[1] +
      cleaned[1] +
      cleaned[2] +
      cleaned[2]
  }

  const bigint = parseInt(cleaned, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

// ── Bayer matrices ─────────────────────────────────────────────────────────
const B2 = [0, 2, 3, 1]
const B4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
const B8 = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36,
  14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33, 9, 41,
  51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23,
  61, 29, 53, 21,
]

function getBayer(ix: number, iy: number, matrix: Matrix): number {
  if (matrix === "random") return Math.random()
  if (matrix === "bayer2") return B2[(iy % 2) * 2 + (ix % 2)] / 4
  if (matrix === "bayer4") return B4[(iy % 4) * 4 + (ix % 4)] / 16
  return B8[(iy % 8) * 8 + (ix % 8)] / 64
}

// ── Noise helpers ──────────────────────────────────────────────────────────
function hash(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
  return n - Math.floor(n)
}

function smoothNoise(x: number, y: number): number {
  const ix = Math.floor(x),
    iy = Math.floor(y)
  const fx = x - ix,
    fy = y - iy
  const ux = fx * fx * (3 - 2 * fx)
  const uy = fy * fy * (3 - 2 * fy)

  return (
    hash(ix, iy) * (1 - ux) * (1 - uy) +
    hash(ix + 1, iy) * ux * (1 - uy) +
    hash(ix, iy + 1) * (1 - ux) * uy +
    hash(ix + 1, iy + 1) * ux * uy
  )
}

function fbm(x: number, y: number): number {
  return (
    0.5 * smoothNoise(x, y) +
    0.35 * smoothNoise(2 * x, 2 * y) +
    0.15 * smoothNoise(4 * x, 4 * y)
  )
}

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

const fract = (x: number) => x - Math.floor(x)

// ── Pattern evaluator ──────────────────────────────────────────────────────
function evalShape(nx: number, ny: number, t: number, s: AppState): number {
  const { shape, amplitude, frequency, rings, cursor } = s
  const PI = Math.PI
  const TWO_PI = 2 * PI
  let v = 0

  if (shape === "wave") {
    const wave =
      Math.cos(frequency * 2.5 * nx * 4 - 2 * t) *
      Math.sin(frequency * 1.5 * nx * 4 + t) *
      amplitude
    const boundary = ny * 2 + wave
    v = 1 - (Math.tanh(boundary * 4) * 0.5 + 0.5)
  } else if (shape === "noise") {
    const nuv_x = nx * 0.1 * frequency * 80
    const nuv_y = ny * 0.1 * frequency * 80
    v = fbm(nuv_x - 1 * t, nuv_y + 1 * t)
    v = 0.5 + amplitude * (v - 0.5) * 10
    v = smoothstep(0.5, 2, v)
  } else if (shape === "ripple") {
    const dist = Math.sqrt(nx * nx + ny * ny)
    const r =
      Math.sin(
        Math.pow(dist * 2, 2 + amplitude * 0.7) * rings * PI - frequency * t
      ) *
        0.5 +
      0.2
    v = r * smoothstep(0.5, 2, dist)
  } else if (shape === "swirl") {
    const l = Math.sqrt(nx * nx + ny * ny)
    const angle = rings * Math.atan2(ny, nx) + frequency * 1 * t
    const twist = Math.max(amplitude * 1, 0.5)
    const offset = Math.pow(Math.max(l, 1e-6), -twist) + angle / TWO_PI
    v = fract(offset) * smoothstep(1.5, 0.1, l)
  } else if (shape === "plasma") {
    const x = nx * frequency * 50
    const y = ny * frequency * 50
    v =
      (Math.sin(x + t) +
        Math.sin(y + t * 0.07) +
        Math.sin((x + y) * 0.5 + t * 0.5) +
        Math.sin(Math.sqrt(x * x + y * y + 1) * 1.5 + t * 0.9)) *
        1 +
      0.05
    v = 0.5 + (v - 6) * amplitude
  } else if (shape === "scan") {
    const scanline = Math.sin(ny * rings * PI * 3 - frequency * t) * 0.5 + 0.5
    const fade = 1 - Math.abs(nx) * 0.5
    v = scanline * Math.max(0, fade) * amplitude
  }

  if (cursor.active) {
    const dx = nx - cursor.x
    const dy = ny - cursor.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const scaledDist = dist / s.cursorSize

    const ripple =
      Math.sin(scaledDist * 30 * s.cursorScale - t * 6 * s.cursorScale) * 0.5 +
      0.5

    const falloff = smoothstep(1.0, 0.0, scaledDist)

    if (cursor.mode === "ripple") v = Math.min(1, v + ripple * falloff * 0.8)
    else if (cursor.mode === "erase") v *= 1 - falloff * 0.95
    else if (cursor.mode === "burn") v = Math.min(1, v + falloff * 0.9)
  }

  return Math.max(0, Math.min(1, v))
}

// ── Component ──────────────────────────────────────────────────────────────
export function PixelGridShader({
  shape = "wave",
  matrix = "bayer8",
  pxSize = 2,
  amplitude = 0.15,
  frequency = 0.7,
  speed = 0.3,
  rings = 3,
  colorFg = "#0000ff",
  cursorMode = "burn",
  cursorSize = 0.3,
  cursorScale = 0.2,
  className,
}: PixelGridShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const stateRef = useRef<AppState>({
    shape,
    matrix,
    pxSize,
    amplitude,
    frequency,
    speed,
    rings,
    colorFg,
    cursorSize,
    cursorScale,
    cursor: { x: -1, y: -1, active: false, mode: cursorMode },
  })

  const rafRef = useRef<number>(0)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    stateRef.current = {
      ...stateRef.current,
      shape,
      matrix,
      pxSize,
      amplitude,
      frequency,
      speed,
      rings,
      colorFg,
      cursorSize,
      cursorScale,
      cursor: { ...stateRef.current.cursor, mode: cursorMode },
    }
  }, [
    shape,
    matrix,
    pxSize,
    amplitude,
    frequency,
    speed,
    rings,
    colorFg,
    cursorMode,
    cursorSize,
    cursorScale,
  ])

  useEffect(() => {
    const canvas = canvasRef.current!
    const container = containerRef.current!
    const ctx = canvas.getContext("2d")!

    let dpr = 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const W = container.clientWidth
      const H = container.clientHeight
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      canvas.style.width = W + "px"
      canvas.style.height = H + "px"
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const render = () => {
      const s = stateRef.current
      const elapsed = (Date.now() - startTimeRef.current) * 0.001 * s.speed

      const ps = Math.max(1, Math.floor(s.pxSize * dpr))
      const cols = Math.ceil(canvas.width / ps)
      const rows = Math.ceil(canvas.height / ps)

      const [r, g, b] = hexToRgb(s.colorFg)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`

      const aspect = canvas.width / canvas.height

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let nx = col / cols - 0.5
          let ny = row / rows - 0.5

          if (aspect > 1) nx *= aspect
          else ny /= aspect

          const signal = evalShape(nx, ny, elapsed, s)
          const threshold = getBayer(col, row, s.matrix)

          if (signal > threshold) {
            ctx.fillRect(col * ps, row * ps, ps, ps)
          }
        }
      }

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  const updateCursor = (x: number, y: number) => {
    const canvas = canvasRef.current!
    const aspect = canvas.width / canvas.height

    let cx = x
    let cy = y

    if (aspect > 1) cx *= aspect
    else cy /= aspect

    stateRef.current.cursor.x = cx
    stateRef.current.cursor.y = cy
    stateRef.current.cursor.active = true
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const r = e.currentTarget.getBoundingClientRect()
      updateCursor(
        (e.clientX - r.left) / r.width - 0.5,
        (e.clientY - r.top) / r.height - 0.5
      )
    },
    []
  )

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          background: "transparent",
          width: "100%",
          height: "100%",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => (stateRef.current.cursor.active = false)}
      />
    </div>
  )
}
