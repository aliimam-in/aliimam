import { ShaderVoid } from "@/registry/default/components/shader-void";

export default function DemoOne() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border">
      <ShaderVoid
        voidBallsAmount={0}
        voidBallsColor="#fff200"
        plasmaBallsColor="#fff200"
        plasmaBallsStroke="#fff200"
        gooeyCircleSize={30}
        blendMode="overlay"
        className="mx-auto"
      />
    </div>
  );
}
