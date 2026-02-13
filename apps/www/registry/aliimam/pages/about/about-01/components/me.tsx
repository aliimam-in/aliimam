import Link from "next/link"
import { Apple, Vercel } from "@aliimam/logos"
import { Plus } from "lucide-react"

import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/registry/aliimam/pages/about/about-01/components/page-header"

export function Me() {
  return (
    <div className="relative border-b pb-20">
      <SectionHeader>
        <SectionHeaderHeading>About AI</SectionHeaderHeading>
        <SectionHeaderDescription>
          I’m a passionate in Design and Code based in Bokaro Steel City, India.
          Also, It’s not that hard to find my contact just search Ali Imam
          designer.
        </SectionHeaderDescription>
      </SectionHeader>
      <div>
        <h1 className="text-center">Founder</h1>
        <div className="container grid items-center justify-center lg:grid-cols-3">
          <h1 className="mt-6 text-center">
            I&apos;m Ali, Creative Design Engineer.
          </h1>

          <div className="border-primary/10 relative mx-auto my-6 flex h-[336px] max-w-[250px] flex-col items-start rounded-2xl border p-4 md:h-[28rem] md:max-w-sm">
            <Plus className="text-primary absolute -top-4 -left-4" />
            <Plus className="text-primary absolute -bottom-4 -left-4" />
            <Plus className="text-primary absolute -top-4 -right-4" />
            <Plus className="text-primary absolute -right-4 -bottom-4" />

            <img
              src="/ai.jpg"
              alt="Your Image"
              height={700}
              width={700}
              className="h-[304px] rounded-sm object-cover md:h-[354px]"
            />

            <div className="-mt-17 w-full rounded-b-md bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
              <h1 className="z-20 w-full items-center text-center text-[40px] font-black tracking-tighter uppercase md:text-[60px]">
                Ali Imam
              </h1>
            </div>
          </div>
          <h1 className="mt-6 text-center">Design That Gives.</h1>
        </div>
      </div>
      <div className="relative">
        <div className="flex w-full flex-wrap justify-center gap-3 p-3 pt-10">
          <Link
            href={"https://21st.dev/community/aliimam"}
            target="_blank"
            className="hover:bg-muted w-fit cursor-pointer rounded-sm border p-1"
          >
            <div className="flex items-center justify-center pl-3">
              <h1 className="text-xl font-semibold md:text-2xl">
                Build and deploy on the AI Cloud.
              </h1>
              <Vercel className="size-12 p-4 md:size-14" />
            </div>
          </Link>
          <Link
            href={"https://ui.shadcn.com/docs/directory"}
            target="_blank"
            className="hover:bg-muted w-fit cursor-pointer rounded-sm border p-1"
          >
            <div className="flex items-center justify-center pl-3">
              <h1 className="text-xl font-semibold md:text-2xl">
                Deisgn inspiration in
              </h1>
              <Apple className="size-12 p-4 md:size-14" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
