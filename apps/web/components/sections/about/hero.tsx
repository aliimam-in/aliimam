import React from "react"
import Link from "next/link"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/common/page-header" 
import { Plus } from "lucide-react"

import { Shadcn, TwentyFirst } from "../../logos"

export function Hero() {
  return (
    <div className="relative border-b pb-20 flex w-full items-center flex-col justify-center">
      <PageHeader>
        <PageHeaderHeading>About AI</PageHeaderHeading>
        <PageHeaderDescription className="md:max-w-xl max-w-80">
          I’m a passionate in Design and Code based in Bokaro Steel City, India.
          Also, It’s not that hard to find my contact just search Ali Imam
          designer.
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex w-full items-center flex-col justify-center">
        <h1 className="text-center">Founder <br/> I&apos;m Ali, Creative Design Engineer.</h1>
        <div className="container grid items-center justify-center">
          

          <div className="border-primary/10 w-[270px] relative mx-auto my-6 flex h-fit flex-col border p-4">
            <Plus className="text-primary absolute -top-4 -left-4" />
            <Plus className="text-primary absolute -bottom-4 -left-4" />
            <Plus className="text-primary absolute -top-4 -right-4" />
            <Plus className="text-primary absolute -right-4 -bottom-4" />
            <div>
              <img
                src="/ai.jpg"
                alt="Your Image"
                height={700}
                width={700}
                className="h-[320px] w-[250px] object-cover"
              />
              <div className="-mt-14 md:-mt-16 relative z-10 bg-gradient-to-b from-black/0 to-black text-white">
                <h1 className="z-20 items-center text-center text-[40px] font-black tracking-tighter font-mono uppercase md:text-[44px]">
                  Ali Imam
                </h1>{" "}
              </div>
            </div>
          </div>
           
        </div>
      </div>
      <div className="relative">
        <div className="flex w-full flex-wrap justify-center gap-3 p-3 pt-10">
          <Link
            href={"https://21st.dev/community/aliimam"}
            target="_blank"
            className="hover:bg-muted w-fit cursor-pointer border p-1"
          >
            <div className="flex items-center justify-center pl-3">
              <h1 className="text-xl font-semibold">
                I&apos;m an Ambassador in
              </h1>
              <TwentyFirst className="size-10 p-2" />
            </div>
          </Link>
          <Link
            href={"https://ui.shadcn.com/docs/directory"}
            target="_blank"
            className="hover:bg-muted w-fit cursor-pointer border p-1"
          >
            <div className="flex items-center justify-center pl-3">
              <h1 className="text-xl font-semibold">
                Registry Directory in
              </h1>
              <Shadcn className="size-10 p-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
