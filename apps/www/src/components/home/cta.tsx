import { Button } from "@/registry/default/ui/button";
import { WhatsApp } from "@aliimam/logos"; 
import Image from "next/image";
import Link from "next/link";
import { WhatsAppJoin } from "../icons";

export function CallToAction() {
  return (
    <section className="container relative overflow-hidden">
      <div className="border-x border-b px-6 py-20 rounded-b-3xl relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Start Your Project Today
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
            Bring your brand and ideas to life with professional design
            services. Whether it’s branding, UI/UX, or marketing materials, our
            team is ready to help.
          </p>

          <div className="h-full">
            <div className="flex flex-col items-center justify-center gap-3 pt-6">
              <WhatsAppJoin className="h-40 w-full" />
            </div>
          </div>

          <div className="flex pt-6 gap-3 flex-wrap justify-center">
            <Link target="_blank" href="https://cal.com/aliimam-in/30min">
              <Button className="h-12 rounded-full cursor-pointer w-40">
                Book a Call
              </Button>
            </Link>
            <Link href="/blocks">
              <Button
                variant={"outline"}
                className="h-12 w-40 cursor-pointer rounded-full"
              >
                <WhatsApp /> Start Chat
              </Button>
            </Link>
          </div>
        </div>

        {/* Background image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] overflow-hidden rounded-b-3xl">
          <Image
            src="/brand/bg-dot.jpg"
            alt="Background pattern"
            fill
            className="object-cover rotate-180 invert dark:invert-0"
          />
        </div>
      </div>
    </section>
  );
}
