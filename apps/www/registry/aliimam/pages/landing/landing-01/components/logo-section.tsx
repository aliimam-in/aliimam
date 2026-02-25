import {
  ClaudeAIWordmark,
  CursorWordmark,
  GoogleGeminiWordmark,
  GithubWordmark,
  GoogleWordmark,
  GrokWordmark,
  OpenAIWordmark,
  PerplexityAIWordmark,
  ReplicateWordmark,
  ResendWordmark,
  SunoWordmark,
  YouTubeWordmark,
} from "@aliimam/logos"

import { Badge } from "@/registry/aliimam/ui/badge"

export function LogoSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-6 self-stretch px-4 py-8 sm:px-6 md:px-24 md:py-16">
        <div className="flex w-full max-w-4xl flex-col items-center justify-start gap-3 overflow-hidden">
          <Badge variant={"secondary"}>Trusted by Creative Teams</Badge>
          <div className="flex w-full max-w-xl flex-col justify-center text-center text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            Powering world-class design
          </div>
          <div className="text-muted-foreground self-stretch text-center text-sm leading-6">
            Designers and product teams rely on our tools
            <br className="hidden sm:block" />
            to craft consistent, scalable, and beautiful experiences.
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
              <OpenAIWordmark key="openai" size={80} />,
              <ClaudeAIWordmark key="claude" size={80} />,
              <ReplicateWordmark key="replicate" size={80} />,
              <CursorWordmark key="cursor" size={80} />,
              <GoogleGeminiWordmark key="gemini" size={80} />,
              <GithubWordmark key="github" size={80} />,
              <GrokWordmark key="grok" size={80} />,
              <GoogleWordmark key="google" size={80} />,
              <SunoWordmark key="suno" size={80} />,
              <ResendWordmark key="resend" size={80} />,
              <YouTubeWordmark key="youtube" size={80} />,
              <PerplexityAIWordmark key="perp" size={80} />,
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
