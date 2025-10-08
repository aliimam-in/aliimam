import { Particles } from "@/registry/default/components/particle-highlight"

export default function Component() {
  return (
    <div className="relative h-[400px] w-[500px] overflow-hidden rounded-xl border">
      <Particles
        className="absolute h-full w-full"
        quantity={200}
        color={"#d946ef"}
        vy={-0.2}
      />
    </div>
  )
}
