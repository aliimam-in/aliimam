import { CounterNumber } from "@/registry/default/components/counter-number"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CounterNumber
        value={85.5}
        decimalPlaces={1}
        suffix="%"
        size="xl"
        color="success"
      />
    </div>
  )
}
