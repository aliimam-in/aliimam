import { Gauge } from "@/registry/aliimam/components/gauge"

export default function StatsSection() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold tracking-tight md:text-3xl">
        Performance That Speaks in Numbers
      </h2>
      <p className="text-muted-foreground mt-6 text-sm">
        Our infrastructure is optimized for{" "}
        <span className="text-primary font-medium">
          speed, reliability, and scalability
        </span>{" "}
        — delivering measurable impact across every platform.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
        <Gauge width={80} height={80} value={9} showPercentage />
        <Gauge width={80} height={80} value={20} showPercentage />
        <Gauge width={80} height={80} value={45} showPercentage />
        <Gauge width={80} height={80} value={66} showPercentage />
        <Gauge width={80} height={80} value={78} showPercentage />
        <Gauge width={80} height={80} value={99} showPercentage />
      </div>
    </div>
  )
}
