import { DotPattern } from "@/registry/aliimam/components/dot-pattern"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <DotPattern height={50} width={50} dotSize={1} />
    </div>
  )
}
