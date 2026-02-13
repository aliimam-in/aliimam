"use client"

import React, { useState } from "react"
import { ChevronRight, Mail, MapPin, Speech } from "@aliimam/icons"
import { Github } from "@aliimam/logos"

import { Marquee } from "@/registry/aliimam/components/marquee"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/aliimam/ui/avatar"
import { Badge } from "@/registry/aliimam/ui/badge"
import { Button } from "@/registry/aliimam/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/aliimam/ui/card"

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "Framer Motion", color: "bg-pink-500" },
  { name: "Radix UI", color: "bg-green-500" },
  { name: "Lucide Icons", color: "bg-orange-500" },
  { name: "shadcn/ui", color: "bg-purple-500" },
]

export default function HeroSection05() {
  const [selectedDuration, setSelectedDuration] = useState("30m")
  const [selectedDay, setSelectedDay] = useState(9)

  const calendarDays = [
    { date: 1, available: true },
    { date: 2, available: true },
    { date: 5, available: false },
    { date: 6, available: true },
    { date: 7, available: false },
    { date: 8, available: true },
    { date: 9, available: true },
    { date: 12, available: true },
    { date: 13, available: false },
    { date: 14, available: false },
    { date: 15, available: true },
    { date: 16, available: false },
    { date: 19, available: false },
    { date: 20, available: true },
    { date: 21, available: false },
    { date: 22, available: true },
    { date: 23, available: false },
    { date: 26, available: false },
    { date: 27, available: true },
    { date: 28, available: false },
    { date: 29, available: true },
    { date: 30, available: false },
  ]

  const durations = ["15m", "30m", "45m", "1h"]

  return (
    <div className="min-h-screen py-12">
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      <div className="relative z-20 mx-auto max-w-7xl border shadow-2xl">
        <div className="rounded-md p-6 md:p-20 md:pb-0">
          <div className="mb-6">
            <Badge variant="secondary" className="rounded-full px-4 py-2">
              aliimam.in launches v5
              <ChevronRight className="size-6" />
            </Badge>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 pt-3 text-6xl font-bold lg:text-7xl">
                The smarter way to manage your design.
              </h1>

              <p className="text-md text-muted-foreground mb-8">
                A fully customizable platform for designers, teams, and
                developers to schedule and collaborate seamlessly.
              </p>

              <div className="mb-6 space-y-3">
                <Button className="h-12 w-full text-base" size="lg">
                  <Github />
                  Sign up with Github
                </Button>

                <Button
                  variant="outline"
                  className="h-12 w-full text-base"
                  size="lg"
                >
                  <Mail />
                  Sign up with email
                </Button>
              </div>
            </div>

            <Card className="grid gap-6 shadow-2xl md:grid-cols-2">
              <div className="flex flex-col space-y-4 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/ai-logo.png" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ali Imam</p>
                  </div>
                </div>
                <CardTitle className="text-2xl">Design Engineer</CardTitle>
                <CardDescription className="text-base">
                  Discuss your legal matters with our experienced attorneys in a
                  private consultation.
                </CardDescription>
                <div className="flex items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    {durations.map((duration) => (
                      <Button
                        key={duration}
                        variant={
                          selectedDuration === duration ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedDuration(duration)}
                        className="min-w-[60px]"
                      >
                        {duration}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Speech className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground text-sm">Zoom</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="text-muted-foreground h-5 w-5" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-1 text-sm hover:bg-transparent"
                  >
                    Europe/London
                    <ChevronRight className="ml-1 h-4 w-4 rotate-90" />
                  </Button>
                </div>
              </div>

              <CardContent className="space-y-6 overflow-hidden md:mt-6">
                <div className="w-[500px] rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">May 2025</h3>
                  </div>

                  <div className="mb-2 grid grid-cols-7 gap-1">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="py-2 text-center text-xs font-medium text-gray-500"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, idx) => (
                      <Button
                        key={idx}
                        variant={
                          selectedDay === day.date
                            ? "default"
                            : day.available
                              ? "secondary"
                              : "ghost"
                        }
                        size="sm"
                        disabled={!day.available}
                        onClick={() =>
                          day.available && setSelectedDay(day.date)
                        }
                        className={`aspect-square h-auto p-0 ${!day.available && "text-muted-foreground hover:bg-transparent"} `}
                      >
                        {day.date}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="relative w-full py-10">
          <Marquee>
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className={`${tech.color} rounded-md px-4 py-2 text-white first:ml-2`}
              >
                {tech.name}
              </Badge>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
