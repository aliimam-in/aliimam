/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    p5: any
    gsap: any
  }
}

// Added props interface for customization
interface ParticleCircleProps {
  /** Number of particles (default: auto-calculated based on screen size) */
  particleCount?: number
  /** Animation duration for shrinking phase in seconds (default: 8) */
  shrinkDuration?: number
  /** Animation duration for growing phase in seconds (default: 8) */
  growDuration?: number
  /** Color theme array (default: blue/teal theme) */
  colors?: string[]
  /** Base radius multiplier (default: 0.35) */
  baseRadius?: number
  /** Particle size range [min, max] (default: [2, 8]) */
  particleSize?: [number, number]
  /** Enable blend mode (default: true, disabled on Firefox) */
  enableBlendMode?: boolean
  /** Custom width and height (default: auto-calculated) */
  size?: number
}

export function ParticleCircle({
  particleCount,
  shrinkDuration = 8,
  growDuration = 8,
  colors = ["#393e46", "#00adb5", "#393e46", "#00adb5", "#e6eeef"],
  baseRadius = 0.35,
  particleSize = [2, 8],
  enableBlendMode = true,
  size,
}: ParticleCircleProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sketchRef = useRef<any>(null)

  useEffect(() => {
    // Load p5.js and GSAP
    const loadScripts = async () => {
      if (typeof window === "undefined") return

      // Load p5.js
      if (!window.p5) {
        const p5Script = document.createElement("script")
        p5Script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"
        document.head.appendChild(p5Script)
        await new Promise((resolve) => (p5Script.onload = resolve))
      }

      // Load GSAP
      if (!(window as any).gsap) {
        const gsapScript = document.createElement("script")
        gsapScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        document.head.appendChild(gsapScript)
        await new Promise((resolve) => (gsapScript.onload = resolve))
      }

      // Initialize the sketch
      initSketch()
    }

    const initSketch = () => {
      if (!containerRef.current || !window.p5 || !(window as any).gsap) return

      const sketch = (p: any) => {
        const particles: any[] = []
        // Use prop-controlled particle count with fallback to responsive default
        const amount =
          particleCount ??
          (p.windowWidth < 600 || p.windowHeight < 600 ? 1000 : 2000)
        // Use prop-controlled durations
        const durationShrink = shrinkDuration
        const durationGrow = growDuration
        const total = durationShrink + durationGrow
        // Use prop-controlled color theme
        const theme = colors

        const proxy = {
          progress: 1,
          val: 0,
        }

        let progress: any
        let interpolator: any

        class Particle {
          i: number
          cos: number
          sin: number
          r: number
          offset: number
          color: string

          constructor(i: number) {
            this.i = i
            this.cos = p.cos(i * p.TWO_PI)
            this.sin = p.sin(i * p.TWO_PI)
            // Use prop-controlled particle size range
            this.r = p.floor(p.random(particleSize[0], particleSize[1]))
            this.offset = p.pow(p.random(1, 2), 2.5) * p.random(-0.015, 0.015)
            this.color = p.random(theme)
          }

          draw() {
            interpolator.progress((proxy.progress + this.i) % 1)
            // Use prop-controlled base radius
            const r = p.width * (baseRadius + proxy.val * this.offset)
            const x = this.cos * r + p.width / 2
            const y = this.sin * r + p.width / 2
            p.fill(this.color)
            p.circle(x, y, this.r)
          }
        }

        p.setup = () => {
          // Use prop-controlled size with fallback to responsive default
          const canvasSize = size ?? p.min(p.windowWidth, p.windowHeight)
          const canvas = p.createCanvas(canvasSize, canvasSize)
          canvas.parent(containerRef.current)
          p.noStroke()

          // Use prop-controlled blend mode setting
          if (enableBlendMode && navigator.userAgent.indexOf("Firefox") < 0) {
            p.blendMode(p.SCREEN)
          }

          // Initialize GSAP animations
          const gsap = (window as any).gsap
          progress = gsap.to(proxy, {
            progress: 0,
            ease: "none",
            duration: total,
            repeat: -1,
          })

          interpolator = gsap
            .timeline({
              paused: true,
              reverse: true,
            })
            .to(proxy, {
              val: 1,
              duration: durationShrink,
              ease: "elastic.in(1.5, 0.15)",
            })
            .to(proxy, {
              val: 0,
              duration: durationGrow,
              ease: "back.in(3)",
            })

          for (let i = 0; i < amount; i++) {
            particles.push(new Particle(i / amount))
          }
        }

        p.windowResized = () => {
          // Use prop-controlled size in resize handler
          const canvasSize = size ?? p.min(p.windowWidth, p.windowHeight)
          p.resizeCanvas(canvasSize, canvasSize)
        }

        p.touchMoved = () => {
          if (p.touches.length === 0) return
          onMove(p.touches[0].x, p.touches[0].y)
        }

        p.mouseMoved = () => {
          onMove(p.mouseX, p.mouseY)
        }

        const onMove = (x: number, y: number) => {
          let mouseAngle = p.atan2(y - p.height / 2, x - p.width / 2)
          mouseAngle = mouseAngle < 0 ? mouseAngle + p.TWO_PI : mouseAngle
          mouseAngle = p.abs(mouseAngle / p.TWO_PI) * total
          progress.time(mouseAngle)
        }

        p.draw = () => {
          p.clear()
          particles.forEach((particle) => {
            particle.draw()
          })
        }
      }

      sketchRef.current = new window.p5(sketch)
    }

    loadScripts()

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove()
      }
    }
  }, [
    particleCount,
    shrinkDuration,
    growDuration,
    colors,
    baseRadius,
    particleSize,
    enableBlendMode,
    size,
  ])

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      ref={containerRef}
    ></div>
  )
}
