import { FireBall } from "@/registry/default/components/fireball";

export default function DemoOne() {
  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center relative">
      <FireBall blobRadius={4} ballColor="#ff0000" colors={["#ff0000"]}/> 
      <h1 className="tracking-tighter text-7xl font-bold text-center z-10">
         Fire Ball
      </h1>
    </div>
  );
}
