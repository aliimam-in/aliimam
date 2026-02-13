/* eslint-disable @next/next/no-img-element */
import { cn } from "@/src/lib/utils";
import { Marquee } from "@/registry/aliimam/components/marquee";

const technologies = [
  { name: "JKtype", image: "/logos/c3-2.png" },
  { name: "LG", image: "/logos/c10-2.png" },
  { name: "TeaValley", image: "/logos/c5-2.png" },
  { name: "Apollo", image: "/logos/c4-2.png" },
  { name: "DB", image: "/logos/c18-2.png" },
  { name: "SC", image: "/logos/c8-2.png" },
  { name: "PB", image: "/logos/c1-2.png" },
  { name: "TV", image: "/logos/c2-2.png" },
];

export function Clients({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "group overflow-hidden duration-200 hover:bg-foreground border-y",
        className
      )}
    >
      <div className="relative">
        <h1 className="absolute inset-0 uppercase z-10 text-background flex items-center justify-center
                       opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Work for Brands Like
        </h1>

        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full py-2">
            <Marquee>
              {technologies.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="px-8 py-2">
                  <img
                    className="mx-auto h-12 w-auto dark:invert"
                    src={tech.image}
                    alt={tech.name}
                  />
                </div>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-background" />
          </div>
        </div>
      </div>
    </section>

  );
}
