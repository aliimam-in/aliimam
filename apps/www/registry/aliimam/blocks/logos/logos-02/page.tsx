import {
  ClaudeAIWordmark,
  CursorWordmark,
  GoogleGeminiWordmark,
  GithubWordmark,
  GoogleWordmark,
  GrokWordmark,
  OpenAIWordmark,
  ReplicateWordmark,
} from "@aliimam/logos"

export default function Logos02() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-20">
      <h1 className="text-muted-foreground mb-10 px-20 text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12">
          <OpenAIWordmark size={100} />
          <ClaudeAIWordmark size={100} />
          <ReplicateWordmark size={100} />
          <CursorWordmark size={100} />
          <GoogleGeminiWordmark size={90} />
          <GithubWordmark size={90} />
          <GrokWordmark size={100} />
          <GoogleWordmark size={100} />
        </div>
      </div>
    </div>
  )
}
