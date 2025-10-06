"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ShaderRippleProps {
  speed?: number // Animation speed multiplier (default: 0.05)
  lineWidth?: number // Width of ripple lines (default: 0.002)
  rippleCount?: number // Number of ripples (default: 5)
  colorLayers?: number // Number of color layers (default: 3)
  backgroundColor?: string // Background color (default: transparent)
  rotation?: number // Rotation speed (default: 0)
  timeScale?: number // Time scale multiplier (default: 1.0)
  opacity?: number // Opacity (default: 1.0)
  className?: string
}

export function ShaderRipple({
  speed = 0.02,
  lineWidth = 0.002,
  rippleCount = 4,
  colorLayers = 3,
  backgroundColor = "transparent",
  rotation = 0.78,
  timeScale = 0.5,
  opacity = 1.0,
  className = "",
}: ShaderRippleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float lineWidth;
      uniform int rippleCount;
      uniform int colorLayers;
      uniform float rotation;
      uniform float timeScale;
      uniform float opacity;

      vec2 rotate(vec2 v, float a) {
        float s = sin(a);
        float c = cos(a);
        mat2 m = mat2(c, -s, s, c);
        return m * v;
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        
        // Apply rotation
        uv = rotate(uv, rotation);
        
        float t = time * timeScale * 0.05;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 10; j++){
          if(j >= colorLayers) break;
          for(int i = 0; i < 20; i++){
            if(i >= rippleCount) break;
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        gl_FragColor = vec4(color, opacity);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      lineWidth: { type: "f", value: lineWidth },
      rippleCount: { type: "i", value: rippleCount },
      colorLayers: { type: "i", value: colorLayers },
      rotation: { type: "f", value: rotation },
      timeScale: { type: "f", value: timeScale },
      opacity: { type: "f", value: opacity },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Renderer with transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0) // transparent background

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += speed
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [speed, lineWidth, rippleCount, colorLayers, rotation, timeScale, opacity])

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`}
      style={{
        background: backgroundColor,
        overflow: "hidden",
      }}
    />
  )
}
 