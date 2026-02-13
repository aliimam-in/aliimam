import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Stats() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <h1 className="mb-10 max-w-sm text-center text-sm md:max-w-md">
        Ali Imam is more than just models - it powers APIs and platforms that
        help developers and businesses innovate.
      </h1>
      <div className="grid flex-wrap justify-center gap-6 space-y-4 text-center md:flex">
        <div className="space-y-3 px-6">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={1200}
            size="xl"
          />
          <p>Projects Deliver</p>
        </div>
        <div className="space-y-3 md:border-x md:px-12">
          <CounterNumber
            className="text-primary"
            value={22}
            suffix="Million"
            size="xl"
          />
          <p>Active Requests</p>
        </div>
        <div className="space-y-3 px-6">
          <CounterNumber
            className="text-primary"
            prefix="+"
            value={5000}
            size="xl"
          />
          <p>App Downloads</p>
        </div>
      </div>
    </div>
  )
}
