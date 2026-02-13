import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Stats() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center">
      <h1 className="mb-10 max-w-sm text-center text-sm md:max-w-md">
        Trusted by fast-growing teams worldwide — our platform powers
        high-performance applications at scale.
      </h1>

      <div className="grid w-full max-w-5xl flex-wrap justify-center gap-3 md:grid-cols-3">
        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={120}
            size="xl"
          />
          <p>Enterprise Clients</p>
        </div>

        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            value={1.5}
            suffix="B"
            size="xl"
          />
          <p>API Calls Processed</p>
        </div>

        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            value={43}
            suffix="%"
            size="xl"
          />
          <p>Average Growth Increase</p>
        </div>

        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            value={7}
            suffix="yrs"
            size="xl"
          />
          <p>Industry Experience</p>
        </div>

        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={320}
            size="xl"
          />
          <p>Projects Delivered</p>
        </div>

        <div className="h-40 space-y-3 rounded-md border p-10">
          <CounterNumber
            className="text-primary"
            value={99.8}
            suffix="%"
            size="xl"
          />
          <p>Platform Uptime</p>
        </div>
      </div>
    </div>
  )
}
