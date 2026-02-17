"use client"

import { useRef } from "react"

import {
  Attraction,
  AttractionRef,
} from "@/registry/aliimam/components/attraction"
import { Button } from "@/registry/aliimam/ui/button"

export default function AttractionDemo() {
  const skills = [
    { label: "REACT", color: "from-cyan-400 to-blue-500" },
    { label: "NEXT.JS", color: "from-neutral-700 to-black" },
    { label: "NODE", color: "from-green-400 to-emerald-600" },
    { label: "TYPESCRIPT", color: "from-blue-500 to-indigo-600" },
    { label: "JAVASCRIPT", color: "from-yellow-400 to-amber-500" },
    { label: "THREE.JS", color: "from-purple-500 to-violet-600" },
    { label: "RUST", color: "from-orange-500 to-red-500" },
    { label: "CSS", color: "from-sky-400 to-blue-600" },
    { label: "TAILWIND", color: "from-teal-400 to-cyan-500" },
    { label: "FRAMER", color: "from-pink-500 to-rose-500" },
    { label: "MOTION", color: "from-fuchsia-500 to-purple-600" },
    { label: "UX", color: "from-indigo-400 to-blue-500" },
    { label: "UI", color: "from-violet-400 to-purple-500" },
    { label: "API", color: "from-lime-400 to-green-500" },
    { label: "GRAPHQL", color: "from-pink-400 to-red-500" },
    { label: "DESIGN", color: "from-rose-400 to-pink-600" },
    { label: "GIT", color: "from-orange-400 to-red-600" },
    { label: "DOCKER", color: "from-blue-400 to-sky-600" },
  ]

  const physicsRef = useRef<AttractionRef>(null)

  return (
    <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-center overflow-hidden border">
      <Button
        size="lg"
        className="absolute top-6 z-20"
        onClick={() => physicsRef.current?.shake(0.9)}
      >
        Shake Skills 🚀
      </Button>

      <Attraction
        ref={physicsRef}
        gravity={{ x: 0, y: 0.05 }}
        restitution={0.1}
        friction={0.8}
      >
        {skills.map(({ label, color }) => (
          <div
            key={label}
            className={`bg-linear-to-r ${color} px-6 py-2 text-sm font-semibold tracking-wide text-white`}
          >
            {label}
          </div>
        ))}
      </Attraction>
    </div>
  )
}
