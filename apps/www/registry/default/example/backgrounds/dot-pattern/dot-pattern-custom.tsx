import { DotPattern } from "@/registry/default/components/dot-pattern"

export default function Component() {
  return (
    <div className="h-[600px] w-5xl relative">
      <DotPattern
        dotSize={0.5}
        width={5}
        height={5}
        className="text-red-500 dark:text-lime-500"
      />
    </div>
  )
}
