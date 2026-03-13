import { BookOpen } from "@aliimam/icons"

import { Book } from "@/registry/aliimam/components/book"

export default function BookDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book
        variant="hardcover"
        color="#1e293b"
        textColor="#ffffff"
        title="Design Systems"
        author="Ali Imam"
        illustration={<BookOpen size={48} className="text-white" />}
        bookmark
        bookmarkColor="#ff4d4f"
        pages={320}
      >
        <p className="pl-3 text-xs text-white/80">
          A complete guide to scalable UI architecture.
        </p>
      </Book>
    </div>
  )
}
