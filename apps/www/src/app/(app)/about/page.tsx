import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Backgrounds } from "@/src/components/ui/background";
import { AboutMe } from "@/src/components/pages/about/me";
import { Welcome } from "@/src/components/pages/about/welcome";
import { Workstation } from "@/src/components/pages/about/workstation";
import { Journey } from "@/src/components/pages/about/journey";
import { Connect } from "@/src/components/pages/about/connect";
import { Timeline } from "@/src/components/pages/about/timeline";
import { Craete } from "@/src/components/pages/about/create";

export default function About() {
  return (
    <div className="h-full relative flex flex-col justify-center items-center">
      <div className="space-y-6 pt-40 text-center px-6">
        <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
          About AI
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl font-light text-sm md:text-md px-12">
          Little about me. Also, It’s not that hard to find my contact just
          search Ali Imam designer.
        </p>
      </div>
      <AboutMe />
      <Welcome />
      <Workstation/>
      <Journey/>
      <Timeline/>
      <Craete/>
      <Connect/>
      <Image
        src="/brand/bg-dot.jpg"
        alt="Logo"
        height={1000}
        width={1000}
        className="h-[800px] w-full inset-0 absolute mask-b-from-0% object-cover -z-50 invert dark:invert-0"
      />
      <Backgrounds
        className="absolute h-screen top-0 -z-20 mask-b-from-0% mask-l-from-30% mask-r-from-30%"
        squareSize={1.5}
        gridGap={3}
        color="#6B7280"
        maxOpacity={1}
        flickerChance={0.5}
      />
    </div>
  );
}
