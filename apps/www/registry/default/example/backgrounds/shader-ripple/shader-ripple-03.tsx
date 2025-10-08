import { ShaderRipple } from "@/registry/default/components/shader-ripple";

export default function Component() {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border">
      <ShaderRipple
        color1="#f59e0b"
        color3="#c2410c"
        color2="#4f46e5"
        rotation={90}
        mod={0.5}
        colorLayers={9} 
        lineWidth={0.0005}
      />
    </main>
  );
}
