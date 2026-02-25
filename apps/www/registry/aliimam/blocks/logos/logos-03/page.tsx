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

import { Marquee } from "@/registry/aliimam/components/marquee"

export default function Logos03() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-20">
      <h1 className="text-muted-foreground mb-10 px-20 text-center text-sm font-medium">
        Trusted by the world’s most creative companies.
      </h1>
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat] px-6">
        <div>
          <Marquee gap={"70px"}>
            <OpenAIWordmark size={100} />
            <ClaudeAIWordmark size={100} />
            <ReplicateWordmark size={100} />
            <CursorWordmark size={100} />
            <GoogleGeminiWordmark size={90} />
            <GithubWordmark size={90} />
            <GrokWordmark size={100} />
            <GoogleWordmark className="mr-16" size={100} />
          </Marquee>
        </div>
      </div>
    </div>
  )
}
