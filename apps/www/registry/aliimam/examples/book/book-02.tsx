import { ClaudeAI } from "@aliimam/logos"

import { Book } from "@/registry/aliimam/components/book"

export default function BookDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book depth={3} color="#fff200" variant="notebook" textColor="black">
        <div className="mt-8 space-y-2 text-center text-black">
          <div className="flex justify-center">
            <ClaudeAI />
          </div>
          <h1 className="pt-2 text-2xl leading-6 font-bold tracking-tighter">
            Designs <br /> Without Limits
          </h1>
          <p className="mt-2 px-4 text-xs leading-3 opacity-70">
            A Practical Handbook for Visual Consistency & Creativity
          </p>
        </div>
      </Book>
    </div>
  )
}
