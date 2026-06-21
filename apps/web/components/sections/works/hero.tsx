"use client"

import Link from "next/link"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/common/page-header"
import { Button } from "@workspace/ui/components/button"
import { Figma } from "@/components/logos"



export function Hero() {
  return (
    <div className="relative flex flex-col h-[300px] border-b items-center justify-center overflow-hidden">

      <PageHeader className="relative z-10">
        <PageHeaderHeading className="max-w-100 md:max-w-full">Portfolio</PageHeaderHeading>
        <PageHeaderDescription className="max-w-80 md:max-w-3xl">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </PageHeaderDescription>
        <div className="flex gap-1">
          <Button>
            <Link target="_blank" className="flex gap-1" href="https://www.figma.com/design/U1DOlVERUhmkEKjQ8LSy68/Portfolio?node-id=73-4369&t=MpNKwRJeJOBN6XIV-1">
              <Figma className="" />
              <>Open in Figma</>
            </Link>
          </Button>
          <Button   >
            <Link target="_blank" href="https://cal.com/aliimam/30min">
              Book a Call
            </Link>
          </Button>
        </div>
      </PageHeader>
    </div>
  )
}

