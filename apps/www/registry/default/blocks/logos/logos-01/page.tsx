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
      <div className="mx-auto max-w-md">
        <div className="flex px-10 flex-wrap items-center justify-center gap-12">
          <OpenAI size={40} />
          <ClaudeAI size={40} />
          <Replicate size={40} />
          <Cursor size={40} />
          <Gemini size={40} />
          <Github size={40} />
          <Grok size={40} />
          <Google size={40} />
        </div>
      </div>
    </div>
  );
}
