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

export default function Logos04() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-20">
      <div className="z-10 mx-auto flex max-w-6xl flex-col justify-center px-6">
        <h1 className="text-muted-foreground mb-10 px-20 text-center text-sm font-medium">
          Trusted by the world’s most creative companies.
        </h1>
        <div className="mx-auto grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
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
