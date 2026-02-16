import { Button } from "@/registry/aliimam/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-16">
      
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-4xl text-center text-5xl leading-tight font-medium md:text-7xl">
                Design experiences that people remember
              </h1>
              <p className="text-muted-foreground max-w-xl text-center text-lg leading-7 font-medium">
                From brand identity to polished interfaces, build bold,
                user-focused designs that elevate your product and stand out.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size={"lg"}>Explore our work</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
