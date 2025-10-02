"use client";

import { GradientMesh } from "@/registry/default/components/gradient-mesh";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* GradientWave behind the text */}
      <GradientMesh />
      <div className="flex flex-col text-center">
        <h2 className="font-extrabold text-black mix-blend-overlay tracking-tighter text-7xl md:text-7xl lg:text-9xl">
            Design <br/> without Limits
          </h2>
        <div className="space-y-6 z-10 pt-20 flex justify-center items-center flex-col text-center px-6">
          
          <p className="text-black w-full  max-w-lg font-light text-sm md:text-xl">
            I create digital experiences that connect and inspire. I build apps,
            websites, brands, and products end-to-end.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <Link target="_blank" href="https://cal.com/aliimam-in/30min">
              <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
                Book an Intro Call
              </Button>
            </Link>
            <Button
              variant={"secondary"}
              className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10"
            >
              Get Started Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
