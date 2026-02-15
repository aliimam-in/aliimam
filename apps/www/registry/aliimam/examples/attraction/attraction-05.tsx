"use client"

import {
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  Google,
  Grok,
  OpenAI,
  PerplexityAI,
  Replicate,
  Resend,
  Suno,
  YouTube,
} from "@aliimam/logos"

import { Attraction } from "@/registry/aliimam/components/attraction"

export function LogosAttraction() {
  const logos = [
    OpenAI,
    ClaudeAI,
    Replicate,
    Cursor,
    Gemini,
    Github,
    Grok,
    Google,
    Suno,
    Resend,
    YouTube,
    PerplexityAI,
  ]

  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center">
      <Attraction gravity={{ x: 0, y: 0 }} gravityScale={0.1}>
        {logos.map((Logo, i) => (
          <div
            key={i}
            data-x={`${10 + (i % 4) * 22}%`}
            data-y={`${10 + Math.floor(i / 4) * 28}%`}
            data-shape="circle"
            data-friction="0"
            data-restitution="0.9"
            data-friction-air="0.01"
            className="flex h-20 w-20 items-center justify-center border bg-white select-none"
          >
            <Logo size={28} />
          </div>
        ))}
      </Attraction>
    </div>
  )
}
