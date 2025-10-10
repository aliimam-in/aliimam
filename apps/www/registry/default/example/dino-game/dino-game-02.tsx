import { DinoGame } from "@/registry/default/components/dino-game";

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <DinoGame initialSpeed={2} dinoColor="blue"/>
    </div>
  );
}
