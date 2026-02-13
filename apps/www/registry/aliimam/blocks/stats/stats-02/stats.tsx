import { Gauge } from "@/registry/aliimam/components/gauge"

export default function Stats() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <h1 className="mb-10 max-w-sm text-center text-sm md:max-w-md">
        Ali Imam is more than just models - it powers APIs and platforms that
        help developers and businesses innovate.
      </h1>
      <div className="grid flex-wrap justify-center gap-6 space-y-4 text-center md:flex">
        <div className="flex flex-wrap justify-center gap-6 space-y-4 text-center">
          <div className="space-y-3 px-6">
            <Gauge value={23} showPercentage />
            <p>Mobile</p>
          </div>
          <div className="space-y-3 md:border-x md:px-12">
            <Gauge value={65} showPercentage />
            <p>Tablet</p>
          </div>
          <div className="space-y-3 px-6">
            <Gauge value={91} showPercentage />
            <p>Desktop</p>
          </div>
        </div>
      </div>
    </div>
  )
}
