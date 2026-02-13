import { Typewriter } from "@/registry/aliimam/components/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-4xl font-semibold">
        I am a{" "}
        <Typewriter words={["Developer", "Designer", "Creator"]} speed={80} />
      </h1>
    </main>
  )
}
