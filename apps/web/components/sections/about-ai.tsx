"use client"

import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { Figma } from "../logos"


export function AboutAI() {
  return (
    <div className="border-b">
      <div className="relative flex max-w-3xl mx-auto flex-col h-full items-center justify-center overflow-hidden">
        <div className="relative p-4 md:p-10 md:pb-10 w-full xl:border-x items-center  mx-auto max-w-5xl flex flex-col">
          <div className="flex gap-3 md:border bg-background border-dashed md:p-4 md:shadow-2xl text-muted-foreground flex-col w-full">
            <p>
              I’m a passionate in Design and Code based in
              Bokaro Steel City, India. I’m driven by a mission
              to transform ideas into captivating visual stories
              that inspire and connect. With over +1,000 projects
              and +10,000 design creatives completed.
            </p>
            <p>
              I am an Ambassador at <Link
                href={"https://21st.dev/community/aliimam"}
                target="_blank"
                className="hover:text-primary text-blue-500 underline"
              >
                21st.dev
              </Link>  and contribute to the Registry Directory in <Link
                href={"https://ui.shadcn.com/docs/directory"}
                target="_blank"
                className="hover:text-primary text-blue-500 underline"
              >
                shadcn/ui
              </Link>.
            </p>
          </div>
          <div className="mt-10 flex gap-1 items-center">
            <Button variant={"outline"}>
              <Link href="https://old.aliimam.in/works">
                See All My Works
              </Link>
            </Button>
            <Button>
              <Link target="_blank" className="flex gap-1" href="https://www.figma.com/design/U1DOlVERUhmkEKjQ8LSy68/Portfolio?node-id=73-4369&t=MpNKwRJeJOBN6XIV-1">
                <Figma className=""/>
                <>Open in Figma</>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

