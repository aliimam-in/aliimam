"use client"

import type { ReactNode } from "react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/registry/aliimam/lib/utils"

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2">
      {children}
    </div>
  )
}

export function TimelineEvent({
  label,
  message,
  icon,
  isLast = false,
}: Event & { isLast?: boolean }) {
  const Icon = LucideIcons[
    icon.name as keyof typeof LucideIcons
  ] as LucideIcons.LucideIcon // ✅ cast to LucideIcon

  return (
    <div className="group relative -m-2 flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "bg-background rounded-full border p-2",
            icon.borderColor
          )}
        >
          <Icon className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="bg-muted absolute inset-x-0 mx-auto h-full w-[2px]" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{label}</p>
        </div>
        <p className="text-muted-foreground text-xs">{message}</p>
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <div className="">
      <TimelineContainer>
        {timeline.map((event, i) => (
          <TimelineEvent
            key={event.message}
            isLast={i === timeline.length - 1}
            {...event}
          />
        ))}
      </TimelineContainer>
    </div>
  )
}

interface Event {
  label: string
  message: string
  icon: {
    name: keyof typeof LucideIcons // ✅ type-safe icon names
    textColor: string
    borderColor: string
  }
}

const timeline: Event[] = [
  {
    label: "Choose Your Design",
    message:
      "Browse and select a design that fits your needs, then access your personalized dashboard.",
    icon: {
      name: "Shapes",
      textColor: "text-orange-500",
      borderColor: "border-orange-500/40",
    },
  },
  {
    label: "Provide Your Brief",
    message: "Share your design preferences and requirements with us.",
    icon: {
      name: "Send",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  },
  {
    label: "Receive Your Designs",
    message: "Get your initial designs within 48 hours.",
    icon: {
      name: "Check",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "Request Revisions",
    message:
      "We’re committed to perfection—request as many revisions as needed until you’re satisfied.",
    icon: {
      name: "Repeat",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
  {
    label: "Get Final Files",
    message: "Once approved, we’ll deliver the final files to you.",
    icon: {
      name: "Download",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
]
