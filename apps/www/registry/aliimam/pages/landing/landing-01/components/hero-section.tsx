import { Button } from "@/registry/aliimam/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-4xl text-center text-5xl leading-tight font-medium md:text-8xl">
                Effortless custom contract billing by Brillance
              </h1>
              <p className="text-muted-foreground max-w-xl text-center text-lg leading-7 font-medium">
                Streamline your billing process with seamless automation for
                every custom contract, tailored by Brillance.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size={"lg"}>Start for free</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
