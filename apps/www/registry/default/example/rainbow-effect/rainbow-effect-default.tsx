import { RainbowEffect } from "@/registry/default/components/rainbow-effect"

export default function Component() {
  return (
    <div className="flex h-[600px] w-5xl items-center justify-center">
      <div className="-mt-16 -ml-8 md:-space-y-3 xl:-space-y-8">
        <RainbowEffect
          className="font-bold tracking-tighter"
          fontSize={6}
          text="Cool"
        />
        <RainbowEffect
          className="-pl-6 font-bold tracking-tighter"
          fontSize={7}
          text="Designs"
        />
      </div>
    </div>
  )
}
