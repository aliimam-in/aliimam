import { Button } from "@/registry/default/ui/button";
import { Carousel } from "../ui/carousel";
import Link from "next/link"; 

export function Works() {
  return (
    <div className="">
      <Carousel
        slides={[
          <div
            key={"1"}
            className="border h-[350px] relative overflow-hidden md:h-[600px] rounded-md p-6 bg-card text-card-foreground"
          >
            <div className="text-center flex justify-center items-center h-full w-full">
              <h1 className="text-5xl md:text-9xl font-bold tracking-tighter">
                Work Samples.
              </h1>
            </div> 
          </div>,
          <div
            key={"2"}
            className="border h-[350px] relative overflow-hidden md:h-[600px] rounded-md p-6 bg-card text-card-foreground"
          >
            <div className="text-center flex justify-center items-center h-full w-full">
              <h1 className="text-5xl md:text-9xl  font-bold tracking-tighter">
                Are You Ready?
              </h1>
            </div> 
          </div>,
          <div
            key={"3"}
            className="border h-[350px] relative overflow-hidden md:h-[600px] rounded-md p-6 bg-card text-card-foreground"
          >
            <div className="text-center flex justify-center items-center h-full w-full">
              <h1 className="text-5xl md:text-9xl  font-bold tracking-tighter">
                Get Start!
              </h1>
            </div> 
          </div>, 
        ]}
      />
      <Link className="flex justify-center mt-10" href="#">
        <Button className="h-14 cursor-pointer rounded-full px-10">See All Works</Button>
      </Link>
    </div>
  );
}
