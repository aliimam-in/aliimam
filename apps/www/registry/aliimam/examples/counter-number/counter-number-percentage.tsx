import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CounterNumber
        value={23.8}
        decimalPlaces={1}
        prefix="+"
        suffix="%"
        size="2xl"
        className="text-purple-600 dark:text-purple-400"
      />
    </div>
  )
}
