"use client"

import { useEffect, useRef, useState } from "react"

export function FeatureCards() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div>
      <div className="pointer-events-none absolute top-80 left-1/2 -z-10 -translate-x-1/2 transform">
        <img
          src="/ai-logo.png"
          alt="AI Logo"
          className="h-auto w-140 opacity-30"
        />
      </div>
      <div className="relative z-5 my-8 flex w-full flex-col items-center justify-center gap-2">
        <div className="flex h-[520px] w-full max-w-5xl flex-col items-start justify-start overflow-hidden rounded-md border shadow-2xl">
          <div className="flex flex-1 items-start justify-start self-stretch">
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative h-full w-full overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeCard === 0
                      ? "blur-0 scale-100 opacity-100"
                      : "scale-95 opacity-0 blur-sm"
                  }`}
                >
                  <img
                    src="/templates/ai-hero-black.jpg"
                    alt="Bento Grid Dashboard"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeCard === 1
                      ? "blur-0 scale-100 opacity-100"
                      : "scale-95 opacity-0 blur-sm"
                  }`}
                >
                  <img
                    src="/templates/ai-icons.jpg"
                    alt="Bento Grid Dashboard"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeCard === 2
                      ? "blur-0 scale-100 opacity-100"
                      : "scale-95 opacity-0 blur-sm"
                  }`}
                >
                  <img
                    src="/templates/ai-icons-1.jpg"
                    alt="Bento Grid Dashboard"
                    className="aspect-video h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-start justify-center self-stretch border-y">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute -top-30 -left-4 flex w-40 flex-col items-start justify-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px]"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-stretch justify-center gap-0 px-0 md:flex-row">
          <FeatureCard
            title="Plan your schedules"
            description="Streamline customer subscriptions and billing with automated scheduling tools."
            isActive={activeCard === 0}
            progress={activeCard === 0 ? progress : 0}
            onClick={() => handleCardClick(0)}
          />
          <FeatureCard
            title="Analytics & insights"
            description="Transform your business data into actionable insights with real-time analytics."
            isActive={activeCard === 1}
            progress={activeCard === 1 ? progress : 0}
            onClick={() => handleCardClick(1)}
          />
          <FeatureCard
            title="Collaborate seamlessly"
            description="Keep your team aligned with shared dashboards and collaborative workflows."
            isActive={activeCard === 2}
            progress={activeCard === 2 ? progress : 0}
            onClick={() => handleCardClick(2)}
          />
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute -top-30 -left-4 flex w-40 flex-col items-start justify-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`relative flex w-full cursor-pointer flex-col items-start justify-start gap-2 self-stretch overflow-hidden px-6 py-5 md:flex-1 ${
        isActive ? "bg-code border" : "border-r-0 border-l-0 md:border"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 h-1 w-full">
          <div
            className="bg-primary h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex flex-col justify-center self-stretch text-sm font-semibold md:text-lg">
        {title}
      </div>
      <div className="text-muted-foreground self-stretch text-sm">
        {description}
      </div>
    </div>
  )
}
