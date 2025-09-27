import { Blogs } from "@/src/components/home/blogs";
import { Clients } from "@/src/components/home/clients";
import { CallToAction } from "@/src/components/home/cta";
import { FAQs } from "@/src/components/home/faq";
import { Hero } from "@/src/components/home/hero";
import { Pricing } from "@/src/components/home/pricing";
import { Services } from "@/src/components/home/services";
import { Stats } from "@/src/components/home/stats";
import { Tools } from "@/src/components/home/tools";
import { Works } from "@/src/components/home/works";
import { ArrowDown } from "@aliimam/icons";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ArrowDown strokeWidth={6} stroke="4" className="m-20 p-2 text-green-500 w-16 h-16 bg-blue-500"/>
      <Clients className="md:hidden" />
      <Works />
      <Stats />
      <Services />
      <Pricing />
      <Tools />
      <Blogs />
      <FAQs />
      <CallToAction />
    </div>
  );
}
