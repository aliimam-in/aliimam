"use client"

import { useEffect, useRef } from "react"

interface DitheredSwirlProps {
  width?: number
  height?: number
  fg?: string
  bg?: string
  ac?: string
  pixelSize?: number
  threshold?: number
  spread?: number
  acMix?: number
  acMode?: "blend" | "hard" | "pattern"
  speed?: number
  twist?: number
  scale?: number
  className?: string
  style?: React.CSSProperties
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "")
  const num = parseInt(clean, 16)

  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

export function DitheredSwirl({
  width = 1000,
  height = 1000,
  fg = "#ff0000",
  bg = "transparent",
  ac = "#00ff00",
  pixelSize = 2,
  threshold = 130 / 255,
  spread = 0.5,
  acMix = 0,
  acMode = "blend",
  speed = 1,
  twist = 0,
  scale = 10,
  className,
  style,
}: DitheredSwirlProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const W = width
    const H = height

    const fgRGB = hexToRgb(fg)
    const acRGB = hexToRgb(ac)

    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

    const makePattern = () => {
      const m: number[][] = Array.from({ length: 8 }, () => new Array(8))

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          let v = 0
          let xc = x ^ y
          let yc = y

          for (let bit = 0; bit < 6; bit++) {
            v |= (yc & 1) << (5 - bit)
            bit++
            if (bit < 6) v |= (xc & 1) << (5 - bit)

            yc >>= 1
            xc >>= 1
          }

          m[y][x] = v / 64
        }
      }

      return (x: number, y: number) => m[y & 7][x & 7]
    }

    const pattern = makePattern()

    const effectFn = (
      buf: Float32Array,
      w: number,
      h: number,
      t: number,
      sc: number
    ) => {
      const cx = w / 2
      const cy = h / 2
      const maxR = Math.sqrt(cx * cx + cy * cy)

      const twistAmt = (twist / 50) * 4

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const dx = x - cx
          const dy = y - cy

          const dist = Math.sqrt(dx * dx + dy * dy) / maxR

          const angle = Math.atan2(dy, dx) + dist * twistAmt * Math.sin(t * 2)

          const v =
            (Math.sin(angle * sc + t * 3) * 0.5 + 0.5) * (1 - dist * 0.3)

          buf[y * w + x] = clamp01(v)
        }
      }
    }

    const buf = new Float32Array(W * H)

    let t = 0

    const draw = () => {
      t += 0.016 * speed

      effectFn(buf, W, H, t, scale)

      const img = ctx.createImageData(W, H)
      const d = img.data

      const halfZone = acMix * 0.45
      const acLo = 0.5 - halfZone
      const acHi = 0.5 + halfZone

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const idx = y * W + x
          const gray = buf[idx]

          const qx = Math.floor(x / pixelSize)
          const qy = Math.floor(y / pixelSize)

          const pv = pattern(qx, qy)

          const dithered = gray + (pv - 0.5) * spread > threshold ? 1 : 0

          let r = 0
          let g = 0
          let b = 0
          let a = 0

          if (acMix > 0.01 && gray >= acLo && gray <= acHi) {
            if (acMode === "hard") {
              if (dithered) {
                ;[r, g, b] = acRGB
                a = 255
              }
            } else if (acMode === "pattern") {
              if (dithered) {
                ;[r, g, b] = acRGB
                a = 255
              }
            } else {
              const dist2 = Math.abs(gray - 0.5)
              const ef = halfZone > 0.01 ? 1 - dist2 / halfZone : 1
              const bl = ef * ef

              if (dithered) {
                r = fgRGB[0] + (acRGB[0] - fgRGB[0]) * bl
                g = fgRGB[1] + (acRGB[1] - fgRGB[1]) * bl
                b = fgRGB[2] + (acRGB[2] - fgRGB[2]) * bl
                a = 255
              }
            }
          } else if (dithered) {
            ;[r, g, b] = fgRGB
            a = 255
          }

          const p = idx * 4

          d[p] = r
          d[p + 1] = g
          d[p + 2] = b
          d[p + 3] = a
        }
      }

      ctx.clearRect(0, 0, W, H)
      ctx.putImageData(img, 0, 0)

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(rafRef.current)
  }, [
    width,
    height,
    fg,
    bg,
    ac,
    pixelSize,
    threshold,
    spread,
    acMix,
    acMode,
    speed,
    twist,
    scale,
  ])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`${className ?? ""} absolute inset-0 h-full w-full`}
      style={{
        display: "block",
        background: "transparent",
        imageRendering: "pixelated",
        ...style,
      }}
    />
  )
}
