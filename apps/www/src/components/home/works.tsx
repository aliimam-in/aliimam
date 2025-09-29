/* eslint-disable @next/next/no-img-element */
import { Button } from "@/registry/default/ui/button";
import { Carousel } from "../ui/carousel";
import Link from "next/link";
import { ImageZoom } from "../ui/image-zoom";

export function Works() {
  return (
    <div className="">
      <Carousel
        slides={[
          <div
            key={"1"}
            className="border h-full w-full relative overflow-hidden rounded-md bg-card text-card-foreground"
          >
            <div className="w-full h-full overflow-hidden">
              <ImageZoom>
              <img
                src="/works/social-media-posts.jpg" 
                className="object-cover h-full w-full"
              />
              </ImageZoom>
            </div>
          </div>,
          <div
            key={"2"}
            className="border h-full w-full relative overflow-hidden rounded-md bg-card text-card-foreground"
          >
            <div className="w-full h-full overflow-hidden">
               <ImageZoom>
              <img
                src="/works/dalim.jpg" 
                className="object-cover h-full w-full"
              />
              </ImageZoom>
            </div>
          </div>,
          <div
            key={"3"}
            className="border h-full w-full relative overflow-hidden rounded-md bg-card text-card-foreground"
          >
            <div className="w-full h-full overflow-hidden">
               <ImageZoom>
              <img
                src="/works/website-designs.jpg" 
                className="object-cover h-full w-full"
              />
              </ImageZoom>
            </div>
          </div>, 
        ]}
      />
      <Link className="flex justify-center mt-10" href="#">
        <Button className="h-14 cursor-pointer rounded-full px-10">
          See All Works
        </Button>
      </Link>
    </div>
  );
}
