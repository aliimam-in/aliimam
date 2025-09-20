import { ModeToggle } from "@/components/layout/mode-toggle"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-40 relative text-center">
        <Image
          src="/ai-logo.png"
          alt="Your Image"
          height={700}
          width={700}
          className="h-80 z-10 w-full object-contain"
        />
        <h1 className="absolute bottom-12 whitespace-nowrap left-1/2 transform -translate-x-1/2 -z-10 font-semibold text-7xl">
          Ali Imam
        </h1>
      </div>
      <div className="space-y-6 text-center">
      <h2 className="font-extrabold tracking-tighter text-9xl">Design That Gives</h2>
      <p className="text-muted-foreground font-light text-xl">Giving life to ideas through thoughtful visual storytelling.</p>
      <ModeToggle/>
      </div>
    </div>
  );
}
