"use client";
import React, { useState } from "react"; 
import { ChevronRight, MapPin, Speech } from "@aliimam/icons";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/default/ui/card";
import { Badge } from "@/registry/default/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Github } from "@aliimam/logos";

import { Marquee } from "@/registry/default/components/marquee";
import { Blur } from "@/registry/default/components/blur";

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "Framer Motion", color: "bg-pink-500" },
  { name: "Radix UI", color: "bg-green-500" },
  { name: "Lucide Icons", color: "bg-orange-500" },
  { name: "shadcn/ui", color: "bg-purple-500" },
];

export default function HeroSection05() {
  const [selectedDuration, setSelectedDuration] = useState("30m");
  const [selectedDay, setSelectedDay] = useState(9);

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
  ];

  const durations = ["15m", "30m", "45m", "1h"];

  return (
    <div className="min-h-screen py-12">
      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
        }}
      />
      <div
        className="absolute dark:hidden inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto z-20 relative border shadow-2xl">
        <div className="p-6 md:p-20 md:pb-0 rounded-md">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 rounded-full">
              aliimam.in launches v5
              <ChevronRight className="size-6" />
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-6xl pt-3 lg:text-7xl font-bold mb-6">
                The smarter way to manage your design.
              </h1>

              <p className="text-md text-muted-foreground mb-8">
                A fully customizable platform for designers, teams, and
                developers to schedule and collaborate seamlessly.
              </p>

              <div className="space-y-3 mb-6">
                <Button className="w-full h-12 text-base" size="lg">
                  <Github />
                  Sign up with Github
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base"
                  size="lg"
                >
                  Sign up with email
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div> 
            </div>

            <Card className="shadow-2xl grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar>
                    <AvatarImage src="/brand/ai-logo.png" />
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
                  <Speech className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Zoom</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
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

              <CardContent className="space-y-6 md:mt-6 overflow-hidden">
                <div className="border rounded-lg w-[500px] p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold ">May 2025</h3>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-xs text-gray-500 text-center font-medium py-2"
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
                        className={`
                        aspect-square p-0 h-auto
                        ${!day.available && "text-muted-foreground hover:bg-transparent"}
                      `}
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
        <div className="relative py-10 w-full">
          <Marquee>
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className={`${tech.color} rounded-md px-4 py-2 text-sm font-medium text-white`}
              >
                {tech.name}
              </Badge>
            ))}
          </Marquee>
          <div className="bg-linear-to-r from-[oklch(0.141 0.005 285.823)] absolute inset-y-0 left-0 w-40"></div>
          <div className="bg-linear-to-l from-[oklch(0.141 0.005 285.823)] absolute inset-y-0 right-0 w-40"></div>
          <Blur
            className="pointer-events-none absolute left-0 top-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <Blur
            className="pointer-events-none absolute right-0 top-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  );
}
