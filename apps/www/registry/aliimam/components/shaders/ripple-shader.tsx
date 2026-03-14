"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface RippleShaderProps {
  /** Size of each pixel block. Default: 4 */
  pixelSize?: number
  /** Animation speed multiplier. Default: 1 */
  speed?: number
  /** Ripple wave frequency. Default: 5 */
  waveFrequency?: number
  /** Threshold for pixel on/off (0–1). Default: 0.5 */
  threshold?: number
  /** Amount of random sparkle/grain (0–1). Default: 0.3 */
  grainAmount?: number
  /** Opacity of grid lines (0 = none, 1 = full). Default: 0.5 */
  gridOpacity?: number
  /** Radius of cursor influence (normalized). Default: 0.25 */
  cursorRadius?: number
  /** How far pixels get pushed away from cursor. Default: 0.08 */
  cursorPush?: number
  /** CSS color override (any valid CSS color string) */
  color?: string
  /** CSS class for container */
  className?: string
}

export function RippleShader({
  pixelSize = 2,
  speed = 0.5,
  waveFrequency = 5,
  threshold = 0.8,
  grainAmount = 0.04,
  gridOpacity = 0.2,
  cursorRadius = 0.5,
  cursorPush = 0.5,
  color = "#00ff00",
  className = "w-full absolute h-full inset-0",
}: RippleShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const parseCSSColor = (varName: string): [number, number, number] => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim()
      const hslMatch = raw.match(/^(\d+)\s+([\d.]+)%\s+([\d.]+)%$/)
      if (hslMatch) {
        const h = parseFloat(hslMatch[1]) / 360
        const s = parseFloat(hslMatch[2]) / 100
        const l = parseFloat(hslMatch[3]) / 100
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        const hue2rgb = (t: number) => {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1 / 6) return p + (q - p) * 6 * t
          if (t < 1 / 2) return q
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
          return p
        }
        return [hue2rgb(h + 1 / 3), hue2rgb(h), hue2rgb(h - 1 / 3)]
      }
      const hexMatch = raw.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
      if (hexMatch)
        return [
          parseInt(hexMatch[1], 16) / 255,
          parseInt(hexMatch[2], 16) / 255,
          parseInt(hexMatch[3], 16) / 255,
        ]
      const nums = raw.match(/[\d.]+/g)
      if (nums && nums.length >= 3) {
        const scale = parseFloat(nums[0]) > 1 ? 255 : 1
        return [
          parseFloat(nums[0]) / scale,
          parseFloat(nums[1]) / scale,
          parseFloat(nums[2]) / scale,
        ]
      }
      return [0.23, 0.51, 0.96]
    }

    const parseCSSColorFromString = (
      input: string
    ): [number, number, number] => {
      const temp = document.createElement("div")
      temp.style.color = input
      document.body.appendChild(temp)
      const computed = getComputedStyle(temp).color
      document.body.removeChild(temp)
      const nums = computed.match(/[\d.]+/g)
      if (nums && nums.length >= 3)
        return [
          parseFloat(nums[0]) / 255,
          parseFloat(nums[1]) / 255,
          parseFloat(nums[2]) / 255,
        ]
      return [0.23, 0.51, 0.96]
    }

    const primary = color
      ? parseCSSColorFromString(color)
      : parseCSSColor("--primary")

    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`

    const fragmentShader = `
      precision highp float;
      uniform vec2  resolution;
      uniform float time;
      uniform float uPixelSize;
      uniform float uSpeed;
      uniform float uWaveFrequency;
      uniform float uThreshold;
      uniform float uGrainAmount;
      uniform float uGridOpacity;
      uniform vec3  uPrimary;
      uniform vec2  uMouse;       // 0..1, y-flipped
      uniform float uMouseActive;
      uniform float uCursorRadius;
      uniform float uCursorPush;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main(void) {
        // ── pixel cell center ──────────────────────────────────────
        vec2 pixelCoord = floor(gl_FragCoord.xy / uPixelSize);
        vec2 cellCenter = (pixelCoord + 0.5) * uPixelSize;

        // ── mouse in pixel space ───────────────────────────────────
        vec2 mousePixel = uMouse * resolution;

        // ── displacement: push cell center away from cursor ────────
        vec2  delta     = cellCenter - mousePixel;
        float rawDist   = length(delta);
        // use pixel-space radius: cursorRadius is fraction of min(res)
        float radiusPx  = uCursorRadius * min(resolution.x, resolution.y);
        float proximity = 1.0 - smoothstep(0.0, radiusPx, rawDist);
        // push direction + magnitude (cells closest = pushed most)
        vec2  pushDir   = rawDist > 0.001 ? normalize(delta) : vec2(1.0, 0.0);
        float pushAmt   = proximity * uCursorPush * min(resolution.x, resolution.y) * uMouseActive;
        vec2  displaced = cellCenter + pushDir * pushAmt;

        // ── remap displaced position back to UV ────────────────────
        vec2 pixelUV = (displaced / uPixelSize) / floor(resolution / uPixelSize);
        vec2 uv      = pixelUV * 2.0 - 1.0;
        uv.x        *= resolution.x / resolution.y;

        float t = time * 0.3 * uSpeed;

        // ── base waves (same as before) ────────────────────────────
        float dist     = length(uv);
        float wave     = sin(dist * uWaveFrequency - t * 2.5) * 0.5 + 0.5;
        float diagWave = sin((uv.x + uv.y) * 5.0 - t * 1.8) * 0.5 + 0.5;
        float n        = hash(pixelCoord + floor(t * 3.0));

        float brightness = wave * (1.0 - uGrainAmount - 0.3)
                         + diagWave * 0.3
                         + n * uGrainAmount;

        // ── cursor: lower threshold near cursor = more pixels ON ───
        float thr  = uThreshold + 0.1 * sin(t * 0.7 + dist * 2.0)
                   - proximity * 0.3 * uMouseActive;
        float cell = step(thr, brightness);

        // ── color ──────────────────────────────────────────────────
        float colorT    = wave * 0.7 + diagWave * 0.3;
        vec3  baseColor = mix(uPrimary * 0.4, uPrimary, colorT);
        // glow: boosted brightness + slight white mix near cursor
        vec3  glowColor = mix(uPrimary, vec3(1.0), proximity * 0.5);
        vec3  finalColor = mix(baseColor, glowColor, proximity * uMouseActive * 0.8);

        float alpha = cell * (0.5 + colorT * 0.5 + proximity * uMouseActive * 0.3);

        // ── grid lines ─────────────────────────────────────────────
        vec2  f        = fract(gl_FragCoord.xy / uPixelSize);
        float gridLine = 1.0 - step(0.06, min(f.x, f.y));
        alpha = mix(alpha, 0.0, gridLine * uGridOpacity * 0.5);

        gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2() },
      uPixelSize: { value: pixelSize },
      uSpeed: { value: speed },
      uWaveFrequency: { value: waveFrequency },
      uThreshold: { value: threshold },
      uGrainAmount: { value: grainAmount },
      uGridOpacity: { value: gridOpacity },
      uPrimary: { value: new THREE.Vector3(...primary) },
      uMouse: { value: new THREE.Vector2(-999, -999) },
      uMouseActive: { value: 0.0 },
      uCursorRadius: { value: cursorRadius },
      uCursorPush: { value: cursorPush },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.resolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height
      )
    }
    onResize()
    window.addEventListener("resize", onResize)

    // Smooth mouse tracking with lerp target
    const mouseTarget = new THREE.Vector2(-999, -999)
    const mouseCurrent = new THREE.Vector2(-999, -999)

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const dpr = renderer.getPixelRatio()
      mouseTarget.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      )
      uniforms.uMouseActive.value = 1.0
    }
    const onMouseLeave = () => {
      uniforms.uMouseActive.value = 0.0
    }
    container.addEventListener("mousemove", onMouseMove)
    container.addEventListener("mouseleave", onMouseLeave)

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.016
      // Smooth mouse follow
      mouseCurrent.lerp(mouseTarget, 0.12)
      uniforms.uMouse.value.copy(mouseCurrent)
      renderer.render(scene, camera)
      if (sceneRef.current) sceneRef.current.animationId = animationId
    }

    sceneRef.current = { renderer, uniforms, animationId: 0 }
    animate()

    return () => {
      window.removeEventListener("resize", onResize)
      container.removeEventListener("mousemove", onMouseMove)
      container.removeEventListener("mouseleave", onMouseLeave)
      cancelAnimationFrame(sceneRef.current?.animationId ?? 0)
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [
    pixelSize,
    speed,
    waveFrequency,
    threshold,
    grainAmount,
    gridOpacity,
    cursorRadius,
    cursorPush,
  ])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden" }}
    />
  )
}
