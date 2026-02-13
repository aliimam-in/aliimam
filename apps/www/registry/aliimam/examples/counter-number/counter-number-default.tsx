import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CounterNumber value={1234} size="xl" />
    </div>
  )
}
