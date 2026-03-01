import { Book } from "@/registry/aliimam/components/book"

export default function BookDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book
        variant="notebook"
        color="#0000ff"
        textColor="#ffffff"
        spineText="Notes 2026"
        pages={180}
      >
        <div className="text-white pl-3 text-end text-2xl">
          Personal sketches & ideas.
        </div>
      </Book>
    </div>
  )
}
