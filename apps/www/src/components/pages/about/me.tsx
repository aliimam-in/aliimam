import Image from "next/image";
import React from "react";
import { ImageZoom } from "@/src/components/ui/image-zoom";
import { Plus } from "lucide-react";

export function AboutMe() {
  return (
    <div className="relative">
      <div className="pt-10">
        <p className="text-brand text-center tracking-widest">FOUNDER</p>
        <div className="grid items-center lg:grid-cols-3">
          <h1 className="mt-6 text-center">
            I&apos;m Ali, Creative Design Engineer.
          </h1>

          <div className="border-brand/10 relative mx-auto my-6 flex h-[336px] max-w-[250px] flex-col items-start border p-4 md:h-[28rem] md:max-w-sm">
            <Plus className="text-brand absolute -left-2 -top-2" />
            <Plus className="text-brand absolute -bottom-2 -left-2" />
            <Plus className="text-brand absolute -right-2 -top-2" />
            <Plus className="text-brand absolute -bottom-2 -right-2" />
            <ImageZoom>
              <Image
                src="/ai.jpg"
                alt="Your Image"
                height={700}
                width={700}
                className="h-[300px] object-cover md:h-[404px]"
              />
              <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
                <h1 className="z-20 items-center text-center text-[40px] font-black tracking-tighter md:text-[70px]">
                  Ali Imam
                </h1>{" "}
              </div>
            </ImageZoom>
          </div>
          <h1 className="mt-6 text-center">Design That Gives.</h1>
        </div>
      </div>
      <div className="relative space-y-10 md:space-y-16"></div>
    </div>
  );
}
