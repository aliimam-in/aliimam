"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "@aliimam/icons" 
import { Button } from "@/registry/aliimam/ui/button"

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "Working with this team elevated our entire product experience. Every interaction now feels intentional and beautifully crafted.",
      name: "Aarav Mehta",
      company: "Founder, Nova Labs",
      image: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Their design thinking completely reshaped our platform. The clarity, usability, and visual polish exceeded our expectations.",
      name: "Emily Carter",
      company: "Head of Product, Lumina",
      image: "https://github.com/vercel.png",
    },
    {
      quote:
        "From branding to interface design, the attention to detail was exceptional. Our launch received incredible feedback from users.",
      name: "Daniel Kim",
      company: "CEO, Horizon Tech",
      image: "https://github.com/claude.png",
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
    }, 12000)

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
            <div className="flex flex-1 flex-col items-start justify-start gap-3 overflow-hidden px-6">
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


      <div className="relative h-12 self-stretch overflow-hidden border-b">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
