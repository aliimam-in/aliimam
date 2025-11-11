/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface VoidBallAnimationProps {
  width?: number
  height?: number
  voidBallsAmount?: number
  voidBallsColor?: string
  plasmaBallsColor?: string
  plasmaBallsStroke?: string
  gooeyCircleSize?: number
  blendMode?: string
  className?: string
}

interface VoidBall {
  r: number
  cx: number
  cy: number
  fill: string
  stroke: string
  strokeWidth: number
  strokeDashArray: number
}

interface PlasmaBall {
  id: string
  x: number
  y: number
  targetX: number
  targetY: number
  scale: number
  opacity: number
}

export function ShaderVoid({
  width = 1400,
  height = 600,
  voidBallsAmount = 0,
  voidBallsColor = "#7700FF",
  plasmaBallsColor = "#FF00FF",
  plasmaBallsStroke = "#0000FF",
  gooeyCircleSize = 30,
  blendMode = "difference",
  className = "",
}: VoidBallAnimationProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [voidBalls, setVoidBalls] = useState<VoidBall[]>([])
  const [plasmaBalls, setPlasmaBalls] = useState<PlasmaBall[]>([])
  const lastUserGesture = useRef(0)
  const animationFrame = useRef<number | null>(null)

  // Initialize void balls
  useEffect(() => {
    const voidBallsMaxRadius = Math.sqrt((width * height) / Math.PI) / 3
    const balls = Array.from({ length: voidBallsAmount }, () => ({
      r: Math.max(
        Math.min(voidBallsMaxRadius * Math.random() * 2, voidBallsMaxRadius),
        voidBallsMaxRadius / 1.5
      ),
      cx: Math.random() * width,
      cy: Math.random() * height,
      fill: "url(#void-ball-inner)",
      stroke: voidBallsColor,
      strokeWidth: 10,
      strokeDashArray: voidBallsMaxRadius / 10,
    }))
    setVoidBalls(balls)
  }, [width, height, voidBallsAmount, voidBallsColor])

  // Add plasma ball
  const addPlasmaBall = (x: number, y: number) => {
    const id = Math.random().toString(36).substr(2, 9)
    const spreadFactor = 12
    const targetX = x + (Math.random() - 0.5) * gooeyCircleSize * spreadFactor
    const targetY = y + (Math.random() - 0.5) * gooeyCircleSize * spreadFactor

    const newBall: PlasmaBall = {
      id,
      x,
      y,
      targetX,
      targetY,
      scale: 1,
      opacity: 1,
    }

    setPlasmaBalls((prev) => [...prev, newBall])

    // Animate the ball
    const startTime = Date.now()
    const duration = 2000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      if (progress >= 1) {
        setPlasmaBalls((prev) => prev.filter((ball) => ball.id !== id))
        return
      }

      setPlasmaBalls((prev) =>
        prev.map((ball) =>
          ball.id === id
            ? {
                ...ball,
                x: x + (targetX - x) * progress,
                y: y + (targetY - y) * progress,
                scale: 1 - progress,
                opacity: 1 - progress,
              }
            : ball
        )
      )

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  // Handle mouse/touch events
  const handleInteraction = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault()

    let clientX: number, clientY: number

    if ("touches" in event) {
      //@ts-ignore
      clientX = event.touches[0].clientX
      //@ts-ignore
      clientY = event.touches[0].clientY
    } else {
      clientX = event.clientX
      clientY = event.clientY
    }

    const rect = svgRef.current?.getBoundingClientRect()
    if (rect) {
      const x = clientX - rect.left
      const y = clientY - rect.top

      addPlasmaBall(x, y)

      // Add plasma balls at void ball positions
      voidBalls.forEach((voidBall) => {
        addPlasmaBall(voidBall.cx, voidBall.cy)
      })
    }

    lastUserGesture.current = Date.now()
  }

  // Auto-render animation
  useEffect(() => {
    const autoRender = () => {
      if (Date.now() - lastUserGesture.current > 500) {
        // Simple noise simulation
        const time = Date.now() * 0.0001
        const noiseX = (Math.sin(time * 2) + 1) / 2
        const noiseY = (Math.cos(time * 3) + 1) / 2
        const x = noiseX * width
        const y = noiseY * height

        addPlasmaBall(x, y)

        voidBalls.forEach((voidBall) => {
          addPlasmaBall(voidBall.cx, voidBall.cy)
        })
      }

      animationFrame.current = requestAnimationFrame(autoRender)
    }

    animationFrame.current = requestAnimationFrame(autoRender)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [width, height, voidBalls])

  return (
    <div className={`overflow-hidden ${className}`} style={{ width, height }}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="cursor-none"
        style={{ filter: "url(#gooey-filter)" }}
        onMouseMove={handleInteraction}
        onClick={handleInteraction}
        onTouchMove={handleInteraction}
      >
        <defs>
          <radialGradient id="void-ball-inner">
            <stop offset="50%" stopColor="#000000" />
            <stop offset="100%" stopColor="#FF0000" />
          </radialGradient>

          <filter id="gooey-filter">
            <feGaussianBlur
              in="SourceGraphic"
              colorInterpolationFilters="sRGB"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
              result="gooey"
            />
            <feTurbulence baseFrequency="0.03" numOctaves="1" />
            <feDisplacementMap
              in="blur"
              scale="30"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feBlend in="gooey" mode={blendMode as any} />
          </filter>
        </defs>

        {/* Void Balls */}
        {voidBalls.map((ball, index) => (
          <circle
            key={index}
            r={ball.r}
            cx={ball.cx}
            cy={ball.cy}
            fill={ball.fill}
            stroke={ball.stroke}
            strokeWidth={ball.strokeWidth}
            strokeDasharray={ball.strokeDashArray}
            strokeLinecap="round"
            style={{
              animation:
                "strokeDashoffset 100s linear infinite, strokeWidth 1s linear infinite alternate",
            }}
          />
        ))}

        {/* Plasma Balls */}
        {plasmaBalls.map((ball) => (
          <circle
            key={ball.id}
            r={gooeyCircleSize}
            cx={ball.x}
            cy={ball.y}
            fill={plasmaBallsColor}
            stroke={plasmaBallsStroke}
            strokeWidth={gooeyCircleSize / 3}
            opacity={ball.opacity}
            transform={`scale(${ball.scale})`}
            style={{ transformOrigin: `${ball.x}px ${ball.y}px` }}
          />
        ))}
      </svg>

      <style jsx>{`
        @keyframes strokeDashoffset {
          from {
            stroke-dashoffset: 0px;
          }
          to {
            stroke-dashoffset: 10000px;
          }
        }

        @keyframes strokeWidth {
          from {
            stroke-width: 20px;
          }
          to {
            stroke-width: 40px;
          }
        }
      `}</style>
    </div>
  )
}
