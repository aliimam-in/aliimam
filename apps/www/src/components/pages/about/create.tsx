import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export function Craete() {
  return (
    <section className="container relative">
      <div className="border-x border-b px-6 py-20">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Let’s Create Something
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl font-light text-sm md:text-md">
            Ready to elevate your brand with bold, innovative design? Whether
            you need a stunning website, a cohesive brand identity, or engaging
            digital content, I’m here to make it happen. Let’s collaborate to
            turn your ideas into reality.
          </p>
        </div>
        <div className="mt-10 flex-wrap flex justify-center gap-3">
          <Link target="_blank" href="https://cal.com/aliimam-in/30min">
            <Button variant={'outline'} className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
              Download CV
            </Button>
          </Link>
          <Link target="_blank" href="https://cal.com/aliimam-in/30min">
            <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
