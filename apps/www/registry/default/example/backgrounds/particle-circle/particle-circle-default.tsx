import { ParticleCircle } from "@/registry/default/components/particle-circle"

export default function Component() {
  return (
    <div className="">
      <ParticleCircle
        colors={["#9c88ff", "#7c3aed", "#a855f7", "#c084fc"]}
        particleSize={[1, 5]}
        particleCount={1500}
        size={400}
      />
    </div>
  )
}
