import { Device } from "@/registry/default/components/device";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export default function HeroDemo() {
  return (
    <div className="flex flex-col px-6 min-h-screen justify-center items-center">
      <h2 className="font-extrabold text-black z-20 text-center pt-40 tracking-tighter text-7xl md:text-7xl lg:text-9xl">
        Design <br /> without Limits
      </h2>
      <div className="w-full ">
        {/* Radial Gradient Background */}
        <div
          className="absolute hidden dark:block inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
          }}
        />
         <div
          className="absolute dark:hidden block inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #fff200 100%)",
          }}
        />
      </div>
      <div className="w-full absolute min-h-screen [mask-image:radial-gradient(circle,transparent_0%,black_70%)] opacity-5 dark:opacity-25 dark:bg-[repeating-radial-gradient(circle,_#fff_0,_#fff_1px,_transparent_1px,_transparent_20px)] bg-[repeating-radial-gradient(circle,_#000_0,_#000_1px,_transparent_1px,_transparent_20px)]"></div>

      <div className="absolute top-10">
        <div className="flex justify-center gap-20">
          <Device
            className="mt-60 -rotate-40"
            variant="imac"
            width={250}
            src="/templates/portfolio.jpg"
          />
          <Device
            className="mr-6 -rotate-20"
            variant="imac"
            width={250}
            src="/templates/portfolio.jpg"
          />
          <Device
            className="-mt-20"
            variant="imac"
            width={250}
            src="/templates/portfolio.jpg"
          />
          <Device
            className="ml-6 rotate-20"
            variant="imac"
            width={250}
            src="/templates/portfolio.jpg"
          />
          <Device
            className="mt-60 rotate-40"
            variant="imac"
            width={250}
            src="/templates/portfolio.jpg"
          />
        </div>
      </div>

      <div className="space-y-6 z-10 pt-10 flex justify-center items-center flex-col text-center px-6">
        <p className="text-muted-foreground w-full  max-w-lg font-light text-sm md:text-xl">
          I create digital experiences that connect and inspire. I build apps,
          websites, brands, and products end-to-end.
        </p>
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
          <Link target="_blank" href="https://cal.com/aliimam-in/30min">
            <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10">
              Book an Intro Call
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10"
          >
            Get Started Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
