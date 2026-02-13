import { Typewriter } from "@/registry/aliimam/components/typewriter"

export default function DemoOne() {
  const words = [
    "Welcome to Typewriter",
    "Create beautiful effects",
    "With React & Tailwind",
    "Type away!",
  ]

  return (
    <main className="flex h-full items-center justify-center">
      <Typewriter
        words={words}
        speed={80}
        delayBetweenWords={2000}
        cursor={true}
        cursorChar="|"
      />
    </main>
  )
}
