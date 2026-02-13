
import React from "react";
import { ImageZoom } from "@/src/components/ui/image-zoom";
import { Plus } from "lucide-react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/src/components/layout/page-header"
import Link from "next/link";
import { Shadcn, TwentyFirst } from "../../logos";

export function Hero() {
  return (
    <div className="relative pb-20">
      <PageHeader>
        <PageHeaderHeading>
          About AI
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’m a passionate in Design and Code based in Bokaro Steel City, India.
          Also, It’s not that hard to find my contact just
          search Ali Imam designer.
        </PageHeaderDescription>
      </PageHeader>
      <div >
        <h1 className="text-center">Founder</h1>
        <div className="grid items-center justify-center container lg:grid-cols-3">
          <h1 className="mt-6 text-center">
            I&apos;m Ali, Creative Design Engineer.
          </h1>

          <div className="border-primary/10 relative mx-auto my-6 flex h-[336px] max-w-[250px] flex-col items-start border p-4 md:h-[28rem] md:max-w-sm">
            <Plus className="text-primary absolute -left-4 -top-4" />
            <Plus className="text-primary absolute -bottom-4 -left-4" />
            <Plus className="text-primary absolute -right-4 -top-4" />
            <Plus className="text-primary absolute -bottom-4 -right-4" />
            <ImageZoom>
              <img
                src="/ai.jpg"
                alt="Your Image"
                height={700}
                width={700}
                className="h-[304px] object-cover md:h-[354px]"
              />
              <div className="relative -mt-17 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
                <h1 className="z-20 items-center text-center uppercase text-[40px] font-black tracking-tighter md:text-[60px]">
                  Ali Imam
                </h1>{" "}
              </div>
            </ImageZoom>
          </div>
          <h1 className="mt-6 text-center">Design That Gives.</h1>
        </div>
      </div>
      <div className="relative">
        <div className="flex pt-10 flex-wrap gap-3 w-full p-3 justify-center">
          <Link
            href={"https://21st.dev/community/aliimam"}
            target="_blank"
            className="p-1 hover:bg-muted cursor-pointer border w-fit"
          >
            <div className="flex items-center pl-3 justify-center">
              <h1 className="text-xl font-semibold md:text-2xl">
                I&apos;m an Ambassador in
              </h1>
              <TwentyFirst className="size-12 md:size-14 p-2" />
            </div>
          </Link>
          <Link
            href={"https://ui.shadcn.com/docs/directory"}
            target="_blank"
            className="p-1 hover:bg-muted cursor-pointer border w-fit"
          >
            <div className="flex items-center pl-3 justify-center">
              <h1 className="text-xl font-semibold md:text-2xl">
                Registry Directory in
              </h1>
              <Shadcn className="size-12 md:size-14 p-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
