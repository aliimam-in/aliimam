"use client"

import { useState, useRef } from "react"
import dynamic from "next/dynamic"

import { Button } from "@/registry/aliimam/ui/button"

const Masonry = dynamic(() => import("masonic").then((mod) => mod.Masonry), {
  ssr: false,
})

interface MasonaryProps {
  children: React.ReactNode[]
  initialCount?: number
}

export function Masonary({ children, initialCount = 6 }: MasonaryProps) {
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div ref={containerRef} className=" flex flex-wrap w-full justify-center">
        {expanded ? (
          <Masonry
            key="expanded"
            items={children}
            columnGutter={8}
            columnWidth={300}
            render={({ data }) => <>{data}</>}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
            {children.slice(0, initialCount).map((child, i) => (
              <div key={i} className="w-full">
                {child}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full">
        <Button
          onClick={() => setExpanded(!expanded)}
          className="mx-auto block"
          variant="outline"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  )
}