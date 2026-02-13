import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Stats() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <h1 className="mb-10 max-w-sm text-center text-sm md:max-w-md">
        Ali Imam Studio crafts premium digital experiences.
      </h1>

      <div className="grid flex-wrap justify-center gap-3 space-y-4 text-center md:flex">
        <div className="bg-primary/10 h-40 space-y-3 rounded-md p-10">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={350}
            size="xl"
          />
          <p>Design Systems Built</p>
        </div>

        <div className="bg-primary/10 h-40 space-y-3 rounded-md p-10">
          <CounterNumber
            className="text-primary"
            value={1.8}
            suffix="M$"
            size="xl"
          />
          <p>Monthly Interactions</p>
        </div>

        <div className="bg-primary/10 h-40 space-y-3 rounded-md p-10">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={120}
            size="xl"
          />
          <p>Daily Global Clients</p>
        </div>
      </div>
    </div>
  )
}
