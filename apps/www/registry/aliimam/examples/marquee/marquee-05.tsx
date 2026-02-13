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
      <main className="w-full space-y-12">
        <Marquee gap={"80px"} fade={true}>
          <OpenAI size={40} />
          <ClaudeAI size={40} />
          <Replicate size={40} />
          <Cursor size={40} />
          <Github size={40} />
          <Grok size={40} />
          <Google className="mr-20" size={40} />
        </Marquee>
        <Marquee reverse gap={"80px"} fade={true}>
          <OpenAI size={40} />
          <ClaudeAI size={40} />
          <Replicate size={40} />
          <Cursor size={40} />
          <Github size={40} />
          <Grok size={40} />
          <Google className="mr-20" size={40} />
        </Marquee>
      </main>
    </div>
  )
}
