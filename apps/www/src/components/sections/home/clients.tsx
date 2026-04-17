/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/registry/aliimam/components/marquee"
import { cn } from "@/src/lib/utils"

 

const technologies = [
  { name: "JKtype", image: "/logos/c3-2.png" },
  { name: "LG", image: "/logos/c10-2.png" },
  { name: "TeaValley", image: "/logos/c5-2.png" },
  { name: "Apollo", image: "/logos/c4-2.png" },
  { name: "DB", image: "/logos/c18-2.png" },
  { name: "SC", image: "/logos/c8-2.png" },
  { name: "PB", image: "/logos/c1-2.png" },
  { name: "TV", image: "/logos/c2-2.png" },
]

export function Clients({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "group hover:bg-foreground/5  overflow-hidden border-y duration-300",
        className
      )}
    >
      <div className="relative">
        <h1 className="absolute text-foreground inset-0 z-20 flex items-center justify-center uppercase opacity-0 transition-all duration-300 group-hover:opacity-100">
          Work for Brands Like
        </h1>

        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full py-2">
            <div className="transition duration-300 group-hover:blur-sm group-hover:opacity-60">
              <Marquee>
                {technologies.map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="px-8 py-2">
                    <img
                      className="mx-auto h-10 w-auto dark:invert"
                      src={tech.image}
                      alt={tech.name}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l" />
          </div>
        </div>
      </div>
    </section>
  )
}
