//@ts-nocheck
"use client"

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { debounce } from "lodash"
import {
  Bodies,
  Body,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js"

import { cn } from "@/registry/aliimam/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export type AttractionRef = {
  /** Resume the runner. */
  start: () => void
  /** Pause the runner. */
  stop: () => void
  /** Tear down and re-initialise everything from scratch. */
  reset: () => void
  /** Apply an impulse (force) to every non-static body. */
  shake: (force?: number) => void
}

export type CollisionEvent = {
  /** The two DOM elements whose physics bodies collided. */
  elements: [HTMLElement, HTMLElement]
  /** Raw Matter.js collision pair. */
  pair: Matter.ICollisionPair
}

type AttractionProps = {
  children: React.ReactNode

  // ── Gravity ──────────────────────────────────────────────────────────────
  /** Gravity vector applied to all bodies. Default: `{ x: 0, y: 1 }` */
  gravity?: { x: number; y: number }
  /**
   * Multiplier applied on top of `gravity`.
   * Useful for a quick "moon mode" (`0.1`) or "heavy" feel (`2`).
   * Default: `1`
   */
  gravityScale?: number

  // ── Engine ────────────────────────────────────────────────────────────────
  /**
   * Speed multiplier for the physics simulation.
   * `1` = real-time, `0.5` = half speed, `2` = double speed.
   * Default: `1`
   */
  timeScale?: number
  /**
   * Allow bodies to enter a sleep state when they stop moving.
   * Reduces CPU usage for complex scenes.
   * Default: `false`
   */
  enableSleep?: boolean
  /**
   * Whether to start the simulation immediately on mount.
   * Set to `false` if you want to call `ref.start()` manually.
   * Default: `true`
   */
  autoStart?: boolean

  // ── Default body properties (overridable per-item via data-* attributes) ──
  /**
   * Sliding friction applied to all bodies (0 = ice, 1 = no slide).
   * Can be overridden per item with `data-friction`.
   * Default: `0.2`
   */
  friction?: number
  /**
   * Air resistance / drag applied to all bodies (0 = none, 1 = heavy).
   * Can be overridden per item with `data-friction-air`.
   * Default: `0.01`
   */
  frictionAir?: number
  /**
   * Bounciness of all bodies (0 = no bounce, 1 = perfectly elastic).
   * Can be overridden per item with `data-restitution`.
   * Default: `0.5`
   */
  restitution?: number

  // ── Interaction ───────────────────────────────────────────────────────────
  /**
   * Allow the user to drag bodies with the mouse / touch.
   * On mobile this is always disabled to avoid fighting with scroll.
   * Default: `true`
   */
  draggable?: boolean
  /**
   * Stiffness of the mouse spring when dragging (0–1).
   * Lower values feel floatier; higher values feel snappier.
   * Default: `0.2`
   */
  dragStiffness?: number

  // ── Callbacks ─────────────────────────────────────────────────────────────
  /** Called once the engine and all bodies are ready. */
  onReady?: () => void
  /** Called on every collision between two tracked elements. */
  onCollision?: (event: CollisionEvent) => void

  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

const Attraction = forwardRef<PhysicsRef, PhysicsProps>(
  (
    {
      children,
      gravity = { x: 0, y: 1 },
      gravityScale = 1,
      timeScale = 1,
      enableSleep = false,
      autoStart = true,
      friction = 1,
      frictionAir = 0.01,
      restitution = 0.5,
      draggable = true,
      dragStiffness = 0.5,
      onReady,
      onCollision,
      className,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const engine = useRef(Engine.create())
    const runner = useRef<Runner | null>(null)
    const render = useRef<Render | null>(null)
    const bodies = useRef<{ el: HTMLElement; body: Matter.Body }[]>([])
    const animationFrame = useRef<number | null>(null)

    // Keep a ref to latest callbacks so the stable `init` closure can read them
    const onReadyRef = useRef(onReady)
    const onCollisionRef = useRef(onCollision)
    useEffect(() => {
      onReadyRef.current = onReady
    }, [onReady])
    useEffect(() => {
      onCollisionRef.current = onCollision
    }, [onCollision])

    // ── Helpers ──────────────────────────────────────────────────────────────

    /** Read a data-* attribute and fall back to a default value. */
    const dataNum = (
      el: HTMLElement,
      key: string,
      fallback: number
    ): number => {
      const v = (el as HTMLElement).dataset[key]
      return v !== undefined ? parseFloat(v) : fallback
    }

    /** Parse a position string like "50%" or "120" relative to a container size. */
    const parsePos = (value: string | undefined, size: number): number => {
      if (!value) return Math.random() * size
      if (value.includes("%")) return (parseFloat(value) / 100) * size
      return parseFloat(value)
    }

    // ── Init / Clear ─────────────────────────────────────────────────────────

    const init = () => {
      if (!containerRef.current) return

      const width = containerRef.current.offsetWidth
      const height = containerRef.current.offsetHeight

      // ── Engine settings ───────────────────────────────────────────────────
      engine.current.gravity.x = gravity.x * gravityScale
      engine.current.gravity.y = gravity.y * gravityScale
      engine.current.timing.timeScale = timeScale
      engine.current.enableSleeping = enableSleep

      // ── Renderer (invisible – only used for the mouse constraint hook) ─────
      render.current = Render.create({
        element: containerRef.current,
        engine: engine.current,
        options: {
          width,
          height,
          wireframes: false,
          background: "transparent",
        },
      })
      // Canvas should never block scroll / pointer events on child elements
      render.current.canvas.style.pointerEvents = "none"
      render.current.canvas.style.display = "none"

      // ── Mouse constraint ──────────────────────────────────────────────────
      const isMobile = window.innerWidth < 768
      const mouse = Mouse.create(containerRef.current)
      const mouseConstraint = MouseConstraint.create(engine.current, {
        mouse,
        constraint: {
          // Disable drag on mobile (or when `draggable` is false)
          stiffness: !draggable || isMobile ? 0 : dragStiffness,
          render: { visible: false },
        },
      })
      World.add(engine.current.world, mouseConstraint)

      // ── Walls ─────────────────────────────────────────────────────────────
      const walls = [
        Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true }),
        Bodies.rectangle(width + 20, height / 2, 40, height, {
          isStatic: true,
        }),
        Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true }),
        Bodies.rectangle(width / 2, -20, width, 40, { isStatic: true }),
      ]
      World.add(engine.current.world, walls)

      // ── Bodies ────────────────────────────────────────────────────────────
      const items = containerRef.current.querySelectorAll<HTMLElement>(
        "[data-physics-item]"
      )
      const containerRect = containerRef.current.getBoundingClientRect()

      items.forEach((el) => {
        const rect = el.getBoundingClientRect()

        const x = parsePos(el.dataset.x, containerRect.width)
        const y = parsePos(el.dataset.y, containerRect.height)
        const angle = el.dataset.angle
          ? (parseFloat(el.dataset.angle) * Math.PI) / 180
          : 0

        // Per-item property overrides via data-* attributes
        const bodyFriction = dataNum(el, "friction", friction)
        const bodyFrictionAir = dataNum(el, "frictionAir", frictionAir)
        const bodyRestitution = dataNum(el, "restitution", restitution)
        const bodyMass = el.dataset.mass
          ? parseFloat(el.dataset.mass)
          : undefined
        const isStatic = el.dataset.static === "true"

        // Shape: "circle" uses radius from the smaller dimension; default is rectangle
        const shape = el.dataset.shape ?? "rectangle"

        let body: Matter.Body

        if (shape === "circle") {
          const radius = Math.min(rect.width, rect.height) / 2
          body = Bodies.circle(x, y, radius, {
            friction: bodyFriction,
            frictionAir: bodyFrictionAir,
            restitution: bodyRestitution,
            isStatic,
            angle,
          })
        } else {
          body = Bodies.rectangle(x, y, rect.width, rect.height, {
            friction: bodyFriction,
            frictionAir: bodyFrictionAir,
            restitution: bodyRestitution,
            isStatic,
            angle,
          })
        }

        if (bodyMass !== undefined) Body.setMass(body, bodyMass)

        World.add(engine.current.world, body)
        bodies.current.push({ el, body })
      })

      // ── Collision events ──────────────────────────────────────────────────
      if (onCollisionRef.current) {
        Events.on(engine.current, "collisionStart", (event) => {
          if (!onCollisionRef.current) return
          event.pairs.forEach((pair) => {
            const a = bodies.current.find((b) => b.body === pair.bodyA)
            const b = bodies.current.find((b) => b.body === pair.bodyB)
            if (a && b) {
              onCollisionRef.current({
                elements: [a.el, b.el],
                pair,
              })
            }
          })
        })
      }

      // ── Runner + render loop ──────────────────────────────────────────────
      runner.current = Runner.create()
      if (autoStart) {
        Runner.run(runner.current, engine.current)
        Render.run(render.current)
      }

      const update = () => {
        bodies.current.forEach(({ el, body }) => {
          const { x, y } = body.position
          const rotation = body.angle * (180 / Math.PI)
          el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${
            y - el.offsetHeight / 2
          }px) rotate(${rotation}deg)`
        })
        animationFrame.current = requestAnimationFrame(update)
      }
      update()

      onReadyRef.current?.()
    }

    const clear = () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
      if (runner.current) Runner.stop(runner.current)
      if (render.current) {
        Render.stop(render.current)
        render.current.canvas.remove()
      }
      Events.off(engine.current, "collisionStart")
      World.clear(engine.current.world, false)
      Engine.clear(engine.current)
      bodies.current = []
    }

    // ── Imperative handle ────────────────────────────────────────────────────

    useImperativeHandle(ref, () => ({
      start: () => {
        if (runner.current) Runner.run(runner.current, engine.current)
        if (render.current) Render.run(render.current)
      },
      stop: () => {
        if (runner.current) Runner.stop(runner.current)
      },
      reset: () => {
        clear()
        init()
      },
      shake: (force = 0.05) => {
        bodies.current.forEach(({ body }) => {
          if (body.isStatic) return
          Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * force,
            y: (Math.random() - 0.5) * force,
          })
        })
      },
    }))

    // ── Lifecycle ────────────────────────────────────────────────────────────

    useEffect(() => {
      init()

      const handleResize = debounce(() => {
        clear()
        init()
      }, 400)

      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
        clear()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ── Live prop sync (no full re-init needed) ───────────────────────────────

    useEffect(() => {
      engine.current.gravity.x = gravity.x * gravityScale
      engine.current.gravity.y = gravity.y * gravityScale
    }, [gravity.x, gravity.y, gravityScale])

    useEffect(() => {
      engine.current.timing.timeScale = timeScale
    }, [timeScale])

    useEffect(() => {
      engine.current.enableSleeping = enableSleep
    }, [enableSleep])

    // ── Render ───────────────────────────────────────────────────────────────

    return (
      <div
        ref={containerRef}
        className={cn(
          "pointer-events-none absolute inset-0 select-none",
          className
        )}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            <div
              data-physics-item
              className="pointer-events-auto absolute cursor-grab"
            >
              {child}
            </div>
          ) : (
            child
          )
        )}
      </div>
    )
  }
)

Attraction.displayName = "Attraction"
export { Attraction }
export type { AttractionProps }
