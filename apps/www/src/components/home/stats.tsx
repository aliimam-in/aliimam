import Link from "next/link";
import { TwentyFirst } from "../logos";

export function Stats() {
  return (
    <section className="py-12 md:py-20">
      <div className="container space-y-8 md:space-y-16">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Design in Numbers
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
            Design isn’t just what I do—it’s the impact I create.
          </p>
        </div>

        <div className="grid gap-12 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+8700</div>
            <p className="text-muted-foreground">Designs delivered</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+43K</div>
            <p className="text-muted-foreground">Happy working hours</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+240</div>
            <p className="text-muted-foreground">Brands shaped</p>
          </div>
        </div>
      </div>
      <div className="flex w-full p-3 justify-center">
        <Link href={"https://21st.dev"} target="_blank" className=" hover:bg-muted cursor-pointer border w-fit rounded-full mt-20">
        <div className="flex items-center  pl-6  justify-center">
          <h1 className="text-xl font-semibold md:text-2xl">I'm an Ambassador in</h1>
          <TwentyFirst className="size-12 md:size-20" />
        </div>
        </Link>
      </div>
    </section>
  );
}
