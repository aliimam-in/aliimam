import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Backgrounds } from "../ui/background";
import { AliText } from "../logos";
import { Clients } from "./clients";

export function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative pb-10 text-center">
        <Image
          src="/brand/ai-logo.png"
          alt="Logo"
          height={500}
          width={500}
          className="h-48 md:h-80 z-10 w-full object-contain"
        />
        <div className="absolute top-0 w-full h-full z-10">
          <div className="w-full h-full">
            <div className="relative flex items-center justify-center md:w-80 md:h-80 w-50 h-50 animate-[spin_20s_linear_infinite]">
              <Image
                src="/ali.jpg"
                alt="Logo"
                height={100}
                width={100}
                className="h-10 w-10 md:h-14 md:w-14 border p-1 spin-slow-reverse rounded-full absolute -top-10 md:-top-10 right-21 md:right-34 z-10 object-cover"
              />
              <AliText className="w-full opacity-50 scale-200 md:scale-150 h-40 md:h-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 md:my-20 text-center px-6">
        <h2 className="font-extrabold tracking-tighter text-7xl md:text-9xl">
          Design That Gives.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-xl">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link target="_blank" href="https://cal.com/aliimam-in/30min">
            <Button className="h-14 cursor-pointer px-10">
              Book an Intro Call
            </Button>
          </Link>
          <Button variant={"outline"} className="h-14 cursor-pointer px-10">
            Get Started Explore
          </Button>
        </div>
      </div> 
      <Clients className="hidden md:block absolute bottom-6"/>
      <Backgrounds
        className="absolute -z-20 [mask-composite:intersect] [mask-image:linear-gradient(black,transparent),radial-gradient(black,transparent)]"
        squareSize={1.5}
        gridGap={4}
        color="#6B7280"
        maxOpacity={1}
        flickerChance={0.5}
      />
    </div>
  );
}
