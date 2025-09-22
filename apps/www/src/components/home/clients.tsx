/* eslint-disable @next/next/no-img-element */
import { cn } from "@/src/lib/utils";
import { ProgressiveBlur } from "../ui/blur";
import { Marquee } from "../ui/marquee";

const technologies = [
  { name: "JKtype", image: "/logos/c3-2.png" },
  { name: "LG", image: "/logos/c10-2.png" },
  { name: "21st", image: "/logos/c5-2.png" },
  { name: "SC", image: "/logos/c8-2.png" },
  { name: "PB", image: "/logos/c1-2.png" },
  { name: "TV", image: "/logos/c2-2.png" },
];

export function Clients({ className }: { className?: string }) {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="group relative container">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-80 md:border-r md:pr-6">
            <p className="text-end text-sm">Trusted by Leading Brands</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-10rem)]">
            <Marquee>
              {technologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 rounded-md px-4 py-2 text-sm font-medium text-white"
                >
                  <img
                    className="mx-auto h-14 w-auto dark:invert"
                    src={tech.image}
                    alt={tech.name}
                  />
                </div>
              ))}
            </Marquee>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
