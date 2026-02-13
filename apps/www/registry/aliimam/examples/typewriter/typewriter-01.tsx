import { Typewriter } from "@/registry/aliimam/components/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-full items-center justify-center">
      <Typewriter
        className="text-5xl"
        words={["Developer", "Designer", "Freelancer"]}
      />
    </main>
  )
}
