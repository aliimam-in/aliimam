import { CounterNumber } from "@/registry/default/components/counter-number"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CounterNumber value={123.456} size="xl" decimalPlaces={3} />
    </div>
  )
}
