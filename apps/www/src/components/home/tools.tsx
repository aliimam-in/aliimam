import { GradientMesh } from "@/registry/default/components/gradient-mesh";
import { GradientWave } from "@/registry/default/components/gradient-wave";
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card";
import { Palette } from "@aliimam/icons";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Tools() {
  return (
    <section className="container">
      <div className="border-x bg-foreground border-t p-6 md:p-3">
        <div className="mx-auto grid gap-6 md:gap-3 sm:grid-cols-6">
          <Card className="group overflow-hidden border-none shadow-none sm:col-span-3 rounded-none">
            <CardHeader>
              <div className="md:p-6">
                <div className="relative z-10 space-y-3">
                  <h2 className="text-3xl font-medium lg:text-5xl">Blocks</h2>
                  <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
                    Clean, modern building blocks. Copy and paste into your
                    apps. Works with all React frameworks. Open Source. Free
                    forever.
                  </p>
                </div>
              </div>
            </CardHeader>

            <div className="mask-b-from-75% mask-b-to-95% relative h-fit pl-6 md:pl-12">
              <Link href={"/blocks"}>
                <div className="overflow-hidden rounded-tl-lg border-l border-t pl-3 pt-3 bg-foreground">
                  <img
                    src="/works/blocks.jpg"
                    className="w-full rounded-tl-sm h-[415px] object-bottom object-cover"
                    alt="aliimam blocks"
                    width={400}
                    height={400}
                  />
                </div>
              </Link>
            </div>
          </Card>

          <Card className="group border-none overflow-hidden shadow-none sm:col-span-3 rounded-none">
            <CardHeader>
              <div className="md:p-6">
                <div className="relative z-10 space-y-3">
                  <h2 className="text-3xl font-medium lg:text-5xl">
                    Backgrounds
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
                    Clean, modern backgrounds. Download and use for any
                    projects. Work with photoshop and illustrator. Open Source.
                    Free forever.
                  </p>
                </div>
              </div>
            </CardHeader>

            <div className="mask-b-from-75% mask-b-to-95% relative h-fit pr-6 md:pr-12">
              <Link href={"/backgrounds"}>
                <div className="overflow-hidden rounded-tr-lg border-r border-t pr-3 pt-3 bg-foreground">
                  <img
                    src="/works/backgrounds.jpg"
                    className="w-full rounded-tr-sm h-[415px] object-right object-bottom object-cover"
                    alt="aliimam blocks"
                    width={400}
                    height={400}
                  />
                </div>
              </Link>
            </div>
          </Card>
          <Card className="group p-6 shadow-none sm:col-span-2 rounded-none md:p-12">
            <div className="h-full w-full flex items-center justify-center relative">
              <GradientWave
                colors={["#ffffff", "#fb7185", "#e879f9", "#a3e635", "#ffffff"]}
                shadowPower={4}
                darkenTop={false}
                noiseFrequency={[0.0001, 0.0002]}
                deform={{ incline: 0.2, noiseAmp: 100, noiseFlow: 2 }}
              />
              <h1 className="text-black tracking-tighter text-center text-lg font-semibold sm:text-2xl  z-10">
                Components
              </h1>
            </div>
          </Card>
          <Card className="group py-6 shadow-none sm:col-span-2 rounded-none md:py-12">
            <p className="mx-auto mb-6 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              Colors
            </p>

            <div className="flex justify-center overflow-hidden py-1 gap-2">
              <div className=" bg-blue-200 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-blue-400 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-blue-500 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-blue-600 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-blue-700 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-blue-900 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
            </div>
            <div className="flex justify-center overflow-hidden py-1 gap-2">
              <div className=" bg-green-200 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-green-400 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-green-500 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-green-600 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-green-700 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
              <div className=" bg-green-900 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-sm ring" />
            </div>
          </Card>

          <Card className="group p-6 shadow-none sm:col-span-2 rounded-none md:p-12">
            <div className="h-full w-full flex items-center justify-center relative">
              <GradientMesh
                colors={["#bcecf6", "#00aaff", "#ffd447"]}
                distortion={8}
                swirl={0.5}
                speed={1}
                rotation={90}
                waveAmp={0.3}
                waveFreq={20}
                waveSpeed={0.2}
                grain={0.06}
              />
              <h1 className="text-black tracking-tighter text-center text-lg font-semibold sm:text-2xl  z-10">
                Gradients
              </h1>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
