import { GridPattern } from "@/registry/default/components/grid-pattern"

export default function Component() {
  return (
    <div className="flex h-[600px] w-5xl relative justify-center p-6">
      <GridPattern width={100} height={10} />
    </div>
  )
}
