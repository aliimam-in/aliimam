import { DinoGame } from "@/registry/default/components/dino-game";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export default function NotFoundDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="pb-20 text-center">
        <h1 className="font-thin text-[12rem]">404</h1>
        <p className="text-xl pb-6">Page not found</p>
        <Link href={"/"}>
          <Button>Go Home</Button>
        </Link>
      </div>
      <DinoGame initialSpeed={2} dinoColor="blue" />
    </div>
  );
}
