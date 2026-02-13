import {
  ClaudeAI,
  Cursor,
  Github,
  Google,
  Grok,
  OpenAI,
  Replicate,
} from "@aliimam/logos"

import { Marquee } from "@/registry/aliimam/components/marquee"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden border">
      <main className="w-full">
        <Marquee gap={"80px"} speed={25} fade={true}>
          <OpenAI type="wordmark" size={100} />
          <ClaudeAI type="wordmark" size={100} />
          <Replicate type="wordmark" size={100} />
          <Cursor type="wordmark" size={100} />
          <Github type="wordmark" size={100} />
          <Grok type="wordmark" size={100} />
          <Google className="mr-20" type="wordmark" size={100} />
        </Marquee>
      </main>
    </div>
  )
}
