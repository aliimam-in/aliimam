"use client"

import Link from "next/link"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/common/page-header"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { Button } from "@workspace/ui/components/button"

export function Hero() {
  return (
    <div className="relative flex h-[600px] flex-col items-center justify-center overflow-hidden border-b">
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      <PageHeader className="relative z-10 text-white">
        <PageHeaderHeading className="max-w-100 md:max-w-full">Design without limits</PageHeaderHeading>
        <PageHeaderDescription className="max-w-80 md:max-w-3xl">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </PageHeaderDescription>
        <div className="flex gap-1 items-center">
          <Button>
            <Link href="https://aliimam.vercel.app/works">Check Old Site</Link>
          </Button>
          <Button>
            <Link target="_blank" href="https://cal.com/aliimam/30min">
              Book a Call
            </Link>
          </Button>
        </div>
      </PageHeader>
    </div>
  )
}

