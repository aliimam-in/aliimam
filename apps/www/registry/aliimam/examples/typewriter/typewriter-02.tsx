import { Typewriter } from "@/registry/aliimam/components/typewriter"

export default function DemoOne() {
  const words = ["Design", "Without", "Limits"]

  return (
    <main className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8">
          <Typewriter
            className="text-5xl font-bold tracking-tighter uppercase"
            words={words}
            speed={80}
            delayBetweenWords={2000}
            cursor={false}
          />
        </h1>
      </div>
    </main>
  )
}
