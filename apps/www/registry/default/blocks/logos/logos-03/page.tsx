import { Marquee } from "@/registry/default/components/marquee";
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

export default function Logos03() {
  return (
    <div className="py-20 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 px-20 text-muted-foreground text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat] px-6">
        <div>
          <Marquee className="[--gap:80px]">
            <OpenAI type="wordmark" size={100} />
            <ClaudeAI type="wordmark" size={100} />
            <Replicate type="wordmark" size={100} />
            <Cursor type="wordmark" size={100} />
            <Gemini type="wordmark" size={90} />
            <Github type="wordmark" size={90} />
            <Grok type="wordmark" size={100} />
            <Google type="wordmark" size={100} />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
