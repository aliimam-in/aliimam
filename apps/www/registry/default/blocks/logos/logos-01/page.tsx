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

export default function Logos01() {
  return (
    <div className="py-20 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 px-20 text-muted-foreground text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-12">
          <OpenAI type="wordmark" size={200} height={25} />
          <ClaudeAI type="wordmark" size={200} height={24} />
          <Replicate type="wordmark" size={200} height={25} />
          <Cursor type="wordmark" size={200} height={16} />
          <Gemini type="wordmark" size={200} height={30} />
          <Github type="wordmark" size={200} height={20} />
          <Grok type="wordmark" size={200} height={30} />
          <Google type="wordmark" size={200} height={30} />
        </div>
      </div>
    </div>
  );
}
