import { Typewriter } from "@/registry/aliimam/components/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-full items-center justify-center">
      <Typewriter
        words={["Custom Cursor", "Looks cool!"]}
        cursorChar="_"
        className="text-4xl"
      />
    </main>
  )
}
