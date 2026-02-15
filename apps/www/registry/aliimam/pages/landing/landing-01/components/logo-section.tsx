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

import { Badge } from "@/registry/aliimam/ui/badge"

export function LogoSection() {
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

      <div className="flex items-start justify-center self-stretch border-y">
        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute -top-30 -left-10 flex w-40 flex-col items-start justify-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
            {[
              <OpenAI type="wordmark" key="openai" size={80} />,
              <ClaudeAI type="wordmark" key="claude" size={80} />,
              <Replicate type="wordmark" key="replicate" size={80} />,
              <Cursor type="wordmark" key="cursor" size={80} />,
              <Gemini type="wordmark" key="gemini" size={80} />,
              <Github type="wordmark" key="github" size={80} />,
              <Grok type="wordmark" key="grok" size={80} />,
              <Google type="wordmark" key="google" size={80} />,
              <Suno type="wordmark" key="suno" size={80} />,
              <Resend type="wordmark" key="resend" size={80} />,
              <YouTube type="wordmark" key="youtube" size={80} />,
              <PerplexityAI type="wordmark" key="perp" size={80} />,
            ].map((Logo, i) => (
              <div
                key={i}
                className="flex h-20 w-full items-center justify-center border md:h-24"
              >
                {Logo}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
          <div className="absolute -top-30 -left-10 flex w-40 flex-col items-start justify-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="outline-primary/40 h-4 origin-top-left -rotate-45 self-stretch outline outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
