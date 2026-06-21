"use client"

import Link from "next/link" 
import { Plus } from "lucide-react" 
 
import { TypingAnimation } from "@workspace/ui/components/typing-animation"
import { IndiaFlag, Verified } from "../logos"

export function AboutMe() {
  return (
<div className="border-b">
    <div className="relative max-w-3xl mx-auto flex flex-col h-full items-center justify-center overflow-hidden">
      <div className="relative mx-auto max-w-5xl w-full md:border-x items-center md:items-end flex flex-col md:flex-row">


        <Link target="_blank" href="https://maps.app.goo.gl/Moig1JVFAWpVCbbA7" className="absolute top-2 right-3 md:top-8 z-20 md:right-9">
           <IndiaFlag className="h-10" />
        </Link>

        <div className="flex relative flex-col md:flex-row md:m-6 md:border md:items-end w-full">

          <div className="md:border-r border-r md:border-x-0 hover:cursor-progress w-60 aspect-square h-60">
            <img
              src="/ali.jpg"
              alt="Your Image"
              height={700}
              width={700}
              className="h-60 p-1 border-4 aspect-square rounded-full w-60 object-cover"
            />
          </div>
          <Plus className="text-primary hidden md:block absolute -top-4 -left-4" />
          <Plus className="text-primary hidden md:block absolute -bottom-4 -left-4" />
          <Plus className="text-primary hidden md:block absolute -top-4 -right-4" />
          <Plus className="text-primary hidden md:block absolute -right-4 -bottom-4" /> 
          <div className="w-full flex flex-col items-end h-full">
            <div className="flex items-center gap-2 border-t px-4 pt-3 pb-2 w-full">
              <h1 className="text-4xl font-bold">Ali Imam</h1>
              <Verified className="h-7"/>
            </div>
            <div className="flex items-center justify-between border-t px-4 py-2 w-full">
            <TypingAnimation words={["Design Engineer", "Graphic Designer", "Freelancer"]} loop />
               
              <Link href={"/about"}>
                <p className="text-xs text-muted-foreground duration-200 hover:text-primary">
                  Know More about AI
                </p>
              </Link>
            </div> 
          </div> 
        </div> 
      </div>
      </div>
    </div>
  )
}

