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
    <div className="flex min-h-screen flex-col items-center justify-center py-20">
      <h1 className="text-muted-foreground mb-10 px-20 text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid grid-cols-2 border p-2 sm:grid-cols-4 lg:grid-cols-6">
          {[
            <OpenAI key="openai" size={40} />,
            <ClaudeAI key="claude" size={40} />,
            <Replicate key="replicate" size={40} />,
            <Cursor key="cursor" size={40} />,
            <Gemini key="gemini" size={40} />,
            <Github key="github" size={40} />,
            <Grok key="grok" size={40} />,
            <Google key="google" size={40} />,
            <Suno key="suno" size={40} />,
            <Resend key="resend" size={40} />,
            <YouTube key="youtube" size={40} />,
            <PerplexityAI key="perp" size={40} />,
          ].map((Logo, i) => (
            <div
              key={i}
              className="flex h-30 w-30 items-center justify-center border md:h-40 md:w-40"
            >
              {Logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
