import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Backgrounds } from "../ui/background";
import { AliText } from "../logos";
import { Clients } from "./clients";

export function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative mt-20 pb-10 text-center">
        <Image
          src="/brand/ai-logo.png"
          alt="Logo"
          height={500}
          width={500}
          className="h-36 md:h-60 z-10 w-full object-contain"
        />
        <div className="absolute top-0 w-full h-full z-10">
          <div className="w-full h-full">
            <div className="relative flex items-center justify-center md:w-60 md:h-60 w-36 h-36 animate-[spin_20s_linear_infinite]">
              <Image
                src="/ali.jpg"
                alt="Logo"
                height={100}
                width={100}
                className="h-10 w-10 md:h-12 md:w-12 border p-1 spin-slow-reverse rounded-full absolute -top-14 md:-top-12 right-13.5 md:right-25 z-10 object-cover"
              />
              <AliText className="w-full opacity-50 scale-200 md:scale-160 h-40 md:h-180" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 my-6 md:my-20 text-center px-6">
        <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
          Design <br className="block md:hidden" /> without Limits
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-xl">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link target="_blank" href="https://cal.com/aliimam-in/30min">
            <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
              Book an Intro Call
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10"
          >
            Get Started Explore
          </Button>
        </div>
      </div>
      <Clients className="hidden md:block absolute bottom-6" />
      <Image
        src="/brand/bg-dot.jpg"
        alt="Logo"
        height={1000}
        width={1000}
        className="h-[800px] w-full inset-0 absolute mask-b-from-0% object-cover -z-50 invert dark:invert-0"
      />
      <Backgrounds
        className="absolute -z-20 mask-b-from-0% mask-l-from-30% mask-r-from-30%"
        squareSize={1.5}
        gridGap={3}
        color="#6B7280"
        maxOpacity={1}
        flickerChance={0.5}
      />
    </div>
  );
}
