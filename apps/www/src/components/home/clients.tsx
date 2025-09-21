/* eslint-disable @next/next/no-img-element */
import { cn } from "@/src/lib/utils";
import { ProgressiveBlur } from "../ui/blur";
import { Marquee } from "../ui/marquee";

const technologies = [
  { name: "21st.dev", image: "https://html.tailus.io/blocks/customers/nvidia.svg" },
  { name: "React", image: "https://html.tailus.io/blocks/customers/nvidia.svg" },
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
                  key={index}
                  className={`${tech.image} rounded-md px-4 py-2 text-sm font-medium text-white`}
                >
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src={tech.image}
                    alt={tech.name}
                    height="20"
                    width="auto"
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
