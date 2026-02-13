"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

import { cn } from "@/registry/aliimam/lib/utils"
import { Avatar, AvatarFallback } from "@/registry/aliimam/ui/avatar"
import { Badge } from "@/registry/aliimam/ui/badge"
import { Card, CardContent } from "@/registry/aliimam/ui/card"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team completely redefined what I thought was possible. Every deadline hit, every detail considered. Genuinely the best decision we made this year.",
    author: "Maren Holloway",
    role: "Chief Product Officer",
    company: "Veldt Studio",
    initials: "MH",
    accent: "text-amber-400",
    avatarBg: "bg-amber-400/10",
    avatarBorder: "border-amber-400/30",
    badgeColor: "border-amber-400/20 text-amber-400 bg-amber-400/5",
    progressColor: "bg-amber-400",
  },
  {
    id: 2,
    quote:
      "The results spoke before we had a chance to. Revenue up 340% in Q2. I'm not sure what they put in the code, but I'm not asking questions.",
    author: "Jonas Reinhardt",
    role: "Founder & CEO",
    company: "Norde Labs",
    initials: "JR",
    accent: "text-teal-400",
    avatarBg: "bg-teal-400/10",
    avatarBorder: "border-teal-400/30",
    badgeColor: "border-teal-400/20 text-teal-400 bg-teal-400/5",
    progressColor: "bg-teal-400",
  },
  {
    id: 3,
    quote:
      "I've worked with dozens of vendors. This was the first time I felt like they cared more about the outcome than the invoice. Rare. Essential. Design Without Limits.",
    author: "Priya Sethi",
    role: "VP of Engineering",
    company: "Orbis Systems",
    initials: "PS",
    accent: "text-rose-400",
    avatarBg: "bg-rose-400/10",
    avatarBorder: "border-rose-400/30",
    badgeColor: "border-rose-400/20 text-rose-400 bg-rose-400/5",
    progressColor: "bg-rose-400",
  },
  {
    id: 4,
    quote:
      "Six months in, and the platform still surprises me. The architecture they built is something our internal team would have taken three years to achieve.",
    author: "Caleb Osei",
    role: "Director of Technology",
    company: "Halo Ventures",
    initials: "CO",
    accent: "text-violet-400",
    avatarBg: "bg-violet-400/10",
    avatarBorder: "border-violet-400/30",
    badgeColor: "border-violet-400/20 text-violet-400 bg-violet-400/5",
    progressColor: "bg-violet-400",
  },
]

const ROTATION_MS = 6500

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const current = testimonials[active]

  const advance = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setProgressKey((k) => k + 1)
      setIsTransitioning(false)
    }, 280)
  }

  const goTo = (index: number) => {
    if (index === active || isTransitioning) return
    clearInterval(timerRef.current!)
    advance(index)
    // Restart timer
    timerRef.current = setInterval(() => {
      advance((index + 1) % testimonials.length)
    }, ROTATION_MS)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length
        setIsTransitioning(true)
        setTimeout(() => {
          setActive(next)
          setProgressKey((k) => k + 1)
          setIsTransitioning(false)
        }, 280)
        return prev // hold until setTimeout fires
      })
    }, ROTATION_MS)
    return () => clearInterval(timerRef.current!)
  }, [])

  return (
    <section className="container flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary h-px w-8" />
            <span className="text-[10px] tracking-[0.25em] uppercase">
              What clients say
            </span>
          </div>
          <span className="text-muted-foreground text-[10px] tracking-widest">
            <span className="text-primary">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="relative">
            <Quote
              strokeWidth={1}
              className={cn(
                "absolute -top-2 -left-2 h-16 w-16 opacity-[0.06] transition-colors duration-500",
                current.accent
              )}
            />

            <div
              className={cn(
                "pt-10 transition-all duration-[280ms] ease-in-out",
                isTransitioning
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100"
              )}
            >
              <blockquote className="text-2xl leading-relaxed font-light tracking-tight italic lg:text-[28px]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className={cn(
                    "h-px w-8 transition-colors duration-500",
                    current.progressColor
                  )}
                />
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase">
                    {current.author}
                  </p>
                  <p className="text-muted-foreground mt-1 text-[11px] tracking-wide">
                    {current.role} &middot; {current.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted relative mt-12 h-px overflow-hidden rounded-full">
              <div
                key={progressKey}
                className={cn(
                  "absolute top-0 left-0 h-full rounded-full",
                  current.progressColor
                )}
                style={{
                  animation: `testimonialProgress ${ROTATION_MS}ms linear forwards`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {testimonials.map((t, i) => (
              <Card
                key={t.id}
                onClick={() => goTo(i)}
                className={cn(
                  "cursor-pointer border bg-transparent shadow-none transition-all duration-300",
                  i === active
                    ? "bg-primary/20 border"
                    : "hover:border-muted/80 hover:bg-primary/20 border-transparent"
                )}
              >
                <CardContent className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-0.5 flex-shrink-0 self-stretch rounded-full transition-all duration-300",
                      i === active ? t.progressColor : "bg-transparent"
                    )}
                  />

                  <Avatar
                    className={cn(
                      "h-8 w-8 border transition-all duration-300",
                      i === active
                        ? cn(t.avatarBg, t.avatarBorder)
                        : "bg-muted border"
                    )}
                  >
                    <AvatarFallback
                      className={cn(
                        "bg-transparent text-[10px] font-medium tracking-wider transition-colors duration-300",
                        i === active ? t.accent : ""
                      )}
                    >
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "truncate text-[11px] font-medium tracking-wide transition-colors duration-300",
                        i === active ? "" : "text-muted-foreground"
                      )}
                    >
                      {t.author}
                    </p>
                    <p className="text-muted-foreground mt-0.5 truncate text-[10px] tracking-widest uppercase">
                      {t.company}
                    </p>
                  </div>

                  {i === active && (
                    <Badge
                      variant="outline"
                      className={cn(
                        "h-4 border px-1.5 py-0 text-[9px] tracking-widest",
                        t.badgeColor
                      )}
                    >
                      NOW
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonialProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
