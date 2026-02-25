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

export default function Logos04() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-20">
      <div className="z-10 mx-auto flex max-w-6xl flex-col justify-center px-6">
        <h1 className="text-muted-foreground mb-10 px-20 text-center text-sm font-medium">
          Trusted by the world’s most creative companies.
        </h1>
        <div className="mx-auto grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
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
              className="bg-code flex h-20 w-30 items-center justify-center md:h-24 md:w-40"
            >
              {Logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
