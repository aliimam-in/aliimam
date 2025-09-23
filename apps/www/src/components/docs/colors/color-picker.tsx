"use client"

import { useEffect, useRef, useState } from "react"

export function ColorPicker() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hex, setHex] = useState("#000000")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showCopied, setShowCopied] = useState(false)
  const [copiedHex, setCopiedHex] = useState("#000000")

  const rgbToHex = (r: number, g: number, b: number): string => {
    if (r > 255 || g > 255 || b > 255) {
      throw new Error("Invalid color component")
    }
    return ((r << 16) | (g << 8) | b).toString(16)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // First gradient with colors (horizontal rainbow)
    let gradient = ctx.createLinearGradient(0, 0, window.innerWidth, 0)
    gradient.addColorStop(0, "rgb(255, 0, 0)")
    gradient.addColorStop(0.15, "rgb(255, 0, 255)")
    gradient.addColorStop(0.33, "rgb(0, 0, 255)")
    gradient.addColorStop(0.49, "rgb(0, 255, 255)")
    gradient.addColorStop(0.67, "rgb(0, 255, 0)")
    gradient.addColorStop(0.84, "rgb(255, 255, 0)")
    gradient.addColorStop(1, "rgb(255, 0, 0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    // Then white/black overlay (vertical)
    gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)")
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)")
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.pageX
      const y = event.pageY
      const imageData = ctx.getImageData(x, y, 1, 1).data
      const hexColor =
        "#" +
        ("000000" + rgbToHex(imageData[0], imageData[1], imageData[2])).slice(
          -6
        )

      setHex(hexColor)
      setMousePos({ x, y })
    }

    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(hex)
        setCopiedHex(hex)
        setShowCopied(true)

        setTimeout(() => {
          setShowCopied(false)
        }, 3000)
      } catch (err) {
        console.error("Failed to copy to clipboard:", err)
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
    }
  }, [hex])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Copied notification */}
      <div
        className={`bottom-0 left-0 z-50 flex h-1 w-full flex-col items-center justify-center font-mono text-xs text-white transition-all duration-300 ${
          showCopied ? "h-24" : "h-1"
        }`}
        style={{ backgroundColor: showCopied ? copiedHex : "white" }}
      >
        {showCopied && (
          <>
            <h1 className="text-lg font-thin">{copiedHex}</h1>
            <h2 className="text-sm font-thin">Copied to clipboard</h2>
          </>
        )}
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="h-[500px] w-full cursor-crosshair" />

      {/* Hex display that follows mouse */}
      <h1 className="pointer-events-none text-3xl absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-white">
        {hex}
      </h1>
    </div>
  )
}
