/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/registry/aliimam/lib/utils"

interface RenderCanvasProps {
  // Animation configuration
  trails?: number
  size?: number
  friction?: number
  dampening?: number
  tension?: number

  // Visual properties
  lineWidth?: number
  colorHue?: number
  colorSaturation?: number
  colorLightness?: number
  opacity?: number

  // Wave animation for color cycling
  enableColorCycle?: boolean
  colorCycleSpeed?: number
  colorCycleAmplitude?: number

  // Canvas dimensions
  width?: number
  height?: number

  // Styling
  className?: string
}

export function RenderCanvas({
  trails = 80,
  size = 50,
  friction = 0.5,
  dampening = 0.025,
  tension = 0.99,
  lineWidth = 10,
  colorHue = 285,
  colorSaturation = 100,
  colorLightness = 50,
  opacity = 0.025,
  enableColorCycle = true,
  colorCycleSpeed = 0.0015,
  colorCycleAmplitude = 85,
  width = 1400,
  height = 900,
  className = "",
}: RenderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<{
    ctx:
      | (CanvasRenderingContext2D & { running?: boolean; frame?: number })
      | null
    cleanup: () => void
  }>({ ctx: null, cleanup: () => {} })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D & {
      running?: boolean
      frame?: number
    }
    if (!ctx) return

    ctx.running = true
    ctx.frame = 1
    animationRef.current.ctx = ctx

    // Wave function for color cycling
    function WaveFunction(config: any) {
      this.phase = config.phase || 0
      this.offset = config.offset || 0
      this.frequency = config.frequency || 0.001
      this.amplitude = config.amplitude || 1
    }

    WaveFunction.prototype.update = function () {
      this.phase += this.frequency
      return this.offset + Math.sin(this.phase) * this.amplitude
    }

    // Node class for trail points
    function Node() {
      this.x = 0
      this.y = 0
      this.vy = 0
      this.vx = 0
    }

    // Line class for trail effects
    function Line(config: any) {
      this.spring = config.spring + 0.1 * Math.random() - 0.05
      this.friction = friction + 0.01 * Math.random() - 0.005
      this.nodes = []
      for (let i = 0; i < size; i++) {
        const node = new Node()
        node.x = pos.x
        node.y = pos.y
        this.nodes.push(node)
      }
    }

    Line.prototype.update = function () {
      let spring = this.spring
      let node = this.nodes[0]
      node.vx += (pos.x - node.x) * spring
      node.vy += (pos.y - node.y) * spring

      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i]
        if (i > 0) {
          const prevNode = this.nodes[i - 1]
          node.vx += (prevNode.x - node.x) * spring
          node.vy += (prevNode.y - node.y) * spring
          node.vx += prevNode.vx * dampening
          node.vy += prevNode.vy * dampening
        }
        node.vx *= this.friction
        node.vy *= this.friction
        node.x += node.vx
        node.y += node.vy
        spring *= tension
      }
    }

    Line.prototype.draw = function () {
      if (this.nodes.length < 2) return

      let x = this.nodes[0].x
      let y = this.nodes[0].y
      ctx.beginPath()
      ctx.moveTo(x, y)

      for (let i = 1; i < this.nodes.length - 2; i++) {
        const node = this.nodes[i]
        const nextNode = this.nodes[i + 1]
        x = 0.5 * (node.x + nextNode.x)
        y = 0.5 * (node.y + nextNode.y)
        ctx.quadraticCurveTo(node.x, node.y, x, y)
      }

      if (this.nodes.length >= 2) {
        const secondLast = this.nodes[this.nodes.length - 2]
        const last = this.nodes[this.nodes.length - 1]
        ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y)
      }

      ctx.stroke()
      ctx.closePath()
    }

    // Initialize variables
    let colorWave: any = null
    const pos = { x: canvas.width / 2, y: canvas.height / 2 } // ✅ start centered
    let lines: any[] = []

    if (enableColorCycle) {
      colorWave = new WaveFunction({
        phase: Math.random() * 2 * Math.PI,
        amplitude: colorCycleAmplitude,
        frequency: colorCycleSpeed,
        offset: colorHue,
      })
    }

    function createLines() {
      lines = []
      for (let i = 0; i < trails; i++) {
        lines.push(new Line({ spring: 0.45 + (i / trails) * 0.025 }))
      }
    }

    // ✅ Fix cursor offset using bounding rect
    function handleMouseMove(e: MouseEvent | TouchEvent) {
      const rect = canvas.getBoundingClientRect()
      if ("touches" in e && e.touches) {
        pos.x = e.touches[0].clientX - rect.left
        pos.y = e.touches[0].clientY - rect.top
      } else {
        const mouseEvent = e as MouseEvent
        pos.x = mouseEvent.clientX - rect.left
        pos.y = mouseEvent.clientY - rect.top
      }
      e.preventDefault()
    }

    function handleTouchStart(e: TouchEvent) {
      if (e.touches.length === 1) {
        const rect = canvas.getBoundingClientRect()
        pos.x = e.touches[0].clientX - rect.left
        pos.y = e.touches[0].clientY - rect.top
      }
    }

    function render() {
      if (!ctx.running) return

      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.globalCompositeOperation = "lighter"

      if (enableColorCycle && colorWave) {
        ctx.strokeStyle = `hsla(${Math.round(colorWave.update())},${colorSaturation}%,${colorLightness}%,${opacity})`
      } else {
        ctx.strokeStyle = `hsla(${colorHue},${colorSaturation}%,${colorLightness}%,${opacity})`
      }

      ctx.lineWidth = lineWidth

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        line.update()
        line.draw()
      }

      ctx.frame++
      requestAnimationFrame(render)
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      canvas.width = width || rect.width
      canvas.height = height || rect.height
    }

    function initializeAnimation(e: MouseEvent | TouchEvent) {
      document.removeEventListener("mousemove", initializeAnimation)
      document.removeEventListener("touchstart", initializeAnimation)

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("touchmove", handleMouseMove)
      document.addEventListener("touchstart", handleTouchStart)

      handleMouseMove(e)
      createLines()
      render()
    }

    // Set up event listeners
    document.addEventListener("mousemove", initializeAnimation)
    document.addEventListener("touchstart", initializeAnimation)
    window.addEventListener("resize", resizeCanvas)

    const handleFocus = () => {
      if (!ctx.running) {
        ctx.running = true
        render()
      }
    }

    const handleBlur = () => {
      ctx.running = false
    }

    window.addEventListener("focus", handleFocus)
    window.addEventListener("blur", handleBlur)

    resizeCanvas()

    // Cleanup function
    animationRef.current.cleanup = () => {
      ctx.running = false
      document.removeEventListener("mousemove", initializeAnimation)
      document.removeEventListener("touchstart", initializeAnimation)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleMouseMove)
      document.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("focus", handleFocus)
      window.removeEventListener("blur", handleBlur)
    }

    return () => {
      animationRef.current.cleanup()
    }
  }, [
    trails,
    size,
    friction,
    dampening,
    tension,
    lineWidth,
    colorHue,
    colorSaturation,
    colorLightness,
    opacity,
    enableColorCycle,
    colorCycleSpeed,
    colorCycleAmplitude,
    width,
    height,
  ])

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        className
      )}
      style={{ height, width }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 h-full w-full cursor-default"
      />
    </div>
  )
}
