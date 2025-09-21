import { Clients } from "../components/home/clients";
import { Hero } from "../components/home/hero";
import { Stats } from "../components/home/stats";
import { Works } from "../components/home/works";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Clients className="md:hidden" />
      <Works />
      <Stats />
    </div>
  );
}
