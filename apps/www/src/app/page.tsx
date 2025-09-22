import { Clients } from "../components/home/clients";
import { CallToAction } from "../components/home/cta";
import { FAQs } from "../components/home/faq";
import { Hero } from "../components/home/hero";
import { Pricing } from "../components/home/pricing";
import { Services } from "../components/home/services";
import { Stats } from "../components/home/stats";
import { Works } from "../components/home/works";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Clients className="md:hidden" />
      <Works />
      <Stats />
      <Services/>
      <Pricing/>
      <FAQs/>
      <CallToAction/>
    </div>
  );
}
