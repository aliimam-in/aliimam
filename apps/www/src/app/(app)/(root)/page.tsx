import { Blogs } from "@/src/components/home/blogs";
import { Clients } from "@/src/components/home/clients";
import { CallToAction } from "@/src/components/home/cta";
import { FAQs } from "@/src/components/home/faq";
import { Hero } from "@/src/components/home/hero";
import { Pricing } from "@/src/components/home/pricing";
import { Services } from "@/src/components/home/services";
import { Stats } from "@/src/components/home/stats";
import { Tools } from "@/src/components/home/tools";
import { Typewriter } from "@/src/components/home/type";
import { Works } from "@/src/components/home/works";

export default function Home() {
  const words = ["AI", "Me"];
  return (
    <div className="">
      <Hero />
      <Clients className="md:hidden" />
      <Works />
      <Stats />
      <Services />
      <Pricing />
      <Tools />
      <Blogs />
      <FAQs />
      <CallToAction />
      <div className="relative -z-10">
        <div className="flex absolute top-12 md:top-30 lg:top-36 left-1/2 -translate-x-1/2 items-center justify-center gap-1">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <p className="text-xs text-green-500">Available Now</p>
        </div>

        <h1 className="text-center font-bold tracking-[-0.8rem] text-[clamp(4rem,30vw,20rem)] -mt-10 md:-mt-20 -mb-20 md:-mb-40">
          Hire{" "}
          <Typewriter
            words={words}
            speed={200}
            delayBetweenWords={5000}
            cursor={false} 
          />
        </h1>
      </div>
    </div>
  );
}
