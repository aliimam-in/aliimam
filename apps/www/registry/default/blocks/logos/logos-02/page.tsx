import {
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  Google,
  Grok,
  OpenAI,
  Replicate,
} from "@aliimam/logos";

export default function Logos02() {
  return (
    <div className="py-20 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 px-20 text-muted-foreground text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12">
          <OpenAI type="wordmark" size={100} />
          <ClaudeAI type="wordmark" size={100} />
          <Replicate type="wordmark" size={100} />
          <Cursor type="wordmark" size={100} />
          <Gemini type="wordmark" size={90} />
          <Github type="wordmark" size={90} />
          <Grok type="wordmark" size={100} />
          <Google type="wordmark" size={100} />
        </div>
      </div>
    </div>
  );
}
