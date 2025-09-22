import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Backgrounds } from "@/src/components/ui/background";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative pb-10 text-center">
        <Image
          src="/brand/ai-logo.png"
          alt="Logo"
          height={500}
          width={500}
          className="h-36 md:h-60 z-10 w-full object-contain"
        />
         
      </div>
      <div className="space-y-6 my-6 md:my-20 text-center px-6">
        <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
          Components
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-xl">
          Coming Soon!
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/">
            <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
              Home
            </Button>
          </Link>
           
        </div>
      </div>

      <Image
        src="/brand/bg-dot.jpg"
        alt="Logo"
        height={1000}
        width={1000}
        className="h-[800px] w-full inset-0 absolute mask-b-from-0% object-cover -z-50 invert dark:invert-0"
      />
      <Backgrounds
        className="absolute -z-20 mask-b-from-0% mask-l-from-10% mask-r-from-10%"
        squareSize={1}
        gridGap={4}
        color="#6B7280"
        maxOpacity={1}
        flickerChance={0.5}
      />
    </div>
  );
}
