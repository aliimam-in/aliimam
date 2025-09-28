"use client";

import {
  ClaudeAi,
  Cursor,
  DeepSeek,
  Gemini,
  GitHub,
  Google,
  Grok,
  Replicate,
} from "@aliimam/logos";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 md:p-10">
      <h1 className="mb-10 px-6 text-center text-lg font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap h-full w-full items-center justify-center gap-x-20 gap-y-12">
          <ClaudeAi type="wordmark" size={200} height={30} />
          <Replicate type="wordmark" size={200} height={30} />
          <Cursor type="wordmark" size={200} height={25} />
          <GitHub type="wordmark" size={200} height={30} />
          <Grok type="wordmark" size={200} height={40} />
          <Google type="wordmark" size={200} height={40} />
        </div>
      </div>
    </div>
  );
}
