import { ShaderRipple } from "@/registry/default/components/shader-ripple";

export default function Component() {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border">
      <ShaderRipple
        loopDuration={0.9}
        waveIntensity={0.2}
        timeScale={1}
        backgroundColor="#db2777"
        color1="#c2410c"
        color3="#db2777"
        color2="#dc2626"
        rotation={45}
        mod={0.4}
      />
    </main>
  );
}
