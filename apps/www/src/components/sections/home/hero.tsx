"use client"

import Link from "next/link"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/src/components/layout/page-header"
import { Button } from "@/registry/aliimam/ui/button"
import { PixelGridShader } from "@/registry/aliimam/components/pixelgrid-shader"
 
export function Hero() {
  return (
    <div className="relative flex h-[calc(100vh-var(--header-height)-var(--footer-height)+5rem)] items-center justify-center overflow-hidden">


    

      <PixelGridShader 
        amplitude={0.15}   
        shape="plasma" 
        pxSize={2}   
        colorFg="#ff0000" 
        className="" />

      <PageHeader className="relative z-10">
        <PageHeaderHeading className="max-w-100 md:max-w-full">Design without limits</PageHeaderHeading>
        <PageHeaderDescription className="max-w-100 md:max-w-full">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </PageHeaderDescription>
        <PageActions>
          <Button size={"xl"} variant={"outline"} asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size={"xl"}>
            <Link target="_blank" href="https://cal.com/aliimam/30min">
              Book a Call
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  )
}