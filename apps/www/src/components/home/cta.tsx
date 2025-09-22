import { Button } from "@/registry/default/ui/button";
import { Mail, SendHorizonal } from "lucide-react";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="container relative">
      <div className="border-x border-b px-6 py-20 rounded-b-3xl">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Start Your Project Today
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
            Bring your brand and ideas to life with professional design
            services. Whether it’s branding, UI/UX, or marketing materials, our
            team is ready to help.
          </p>

          <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Enter your email"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button aria-label="submit" className="rounded-md cursor-pointer">
                  <span className="hidden md:block">Get Started</span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>

        <Image
          src="/brand/bg-dot.jpg"
          alt="Background pattern"
          height={1000}
          width={1000}
          className="h-[500px] rotate-180 bottom-0 left-3 rounded-t-3xl w-full absolute object-cover -z-50 invert dark:invert-0"
        />
      </div>
    </section>
  );
}
