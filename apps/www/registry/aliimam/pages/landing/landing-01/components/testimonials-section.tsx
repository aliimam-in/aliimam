"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "@aliimam/icons"

import { Badge } from "@/registry/aliimam/ui/badge"
import { Button } from "@/registry/aliimam/ui/button"

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!",
      name: "Jamie Marshall",
      company: "Co-founder, Exponent",
      image: "/ali.jpg",
    },
    {
      quote:
        "Brillance has revolutionized how we handle custom contracts. The automation saves us hours every week and eliminates errors completely.",
      name: "Sarah Chen",
      company: "VP Operations, TechFlow",
      image: "/ali.jpg",
    },
    {
      quote:
        "The billing automation is a game-changer. What used to take our team days now happens automatically with perfect accuracy.",
      name: "Marcus Rodriguez",
      company: "Finance Director, InnovateCorp",
      image: "/ali.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000) // increased from 6000ms to 12000ms for longer testimonial display

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8 sm:px-6 md:px-24 md:py-16">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Work with Brands Like</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            Confidence backed by results
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
          </div>
        </div>
      </div>
      <div className="bg-background flex items-center justify-start self-stretch overflow-hidden border border-t-0 border-r-0 border-b border-l-0 px-2">
        <div className="flex flex-1 flex-col items-end justify-center gap-6 py-16 md:flex-row md:py-17">
          <div className="flex flex-col items-start justify-center gap-4 self-stretch px-3 md:flex-row md:px-12">
            <img
              className="h-50 w-48 rounded-lg object-cover transition-all duration-700 ease-in-out md:h-50 md:w-48"
              style={{
                opacity: isTransitioning ? 0.6 : 1,
                transform: isTransitioning ? "scale(0.95)" : "scale(1)",
                transition:
                  "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
              }}
              src={testimonials[activeTestimonial].image || "/placeholder.svg"}
              alt={testimonials[activeTestimonial].name}
            />
            <div className="flex flex-1 flex-col items-start justify-start gap-6 overflow-hidden px-6">
              <div
                className="line-clamp-5 flex h-40 flex-col justify-start self-stretch overflow-hidden text-4xl font-medium tracking-tight transition-all duration-700 ease-in-out"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                {testimonials[activeTestimonial].quote}
              </div>
              <div
                className="flex items-start justify-start gap-1 self-stretch transition-all duration-700 ease-in-out"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                <div className="flex flex-col justify-center self-stretch text-lg font-medium">
                  {testimonials[activeTestimonial].name} -
                </div>
                <div className="text-muted-foreground flex flex-col justify-center self-stretch text-lg font-medium">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start gap-3 pr-6">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                handleNavigationClick(
                  (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length
                )
              }
            >
              <ChevronLeft />
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                handleNavigationClick(
                  (activeTestimonial + 1) % testimonials.length
                )
              }
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
