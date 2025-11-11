import { FireBall } from "@/registry/default/components/fireball";

export default function DemoOne() {
  return (
    <div className="h-[600px] w-5xl overflow-hidden flex items-center justify-center relative">
      <FireBall/> 
      <h1 className="tracking-tighter text-7xl font-bold text-center z-10">
         Fire Ball
      </h1>
    </div>
  );
}
