"use client";

import { ArrowUpRight, Search } from "@aliimam/icons";
import {
  Github,
  Google,
  Grok,
  OpenAI,
  Photoshop,
  Vercel,
  X,
} from "@aliimam/logos";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";

const Download1 = () => {
  return (
    <section className="py-20">
      <div className="mx-6">
        <h2 className="mb-10 w-full text-center text-5xl tracking-tighter">
          Elevate Your Design Workflow
        </h2>
        <div className="grid h-full w-full gap-6 md:grid-cols-[6fr_4fr]">
          <div className="bg-secondary p-10">
            <div className="space-y-6">
              <h2 className="w-full text-5xl tracking-tighter">
                Ali Imam Editor
              </h2>
              <p className="text-muted-foreground">
                A design platform crafted to keep you in your creative flow.
                Instant, powerful design assistance tailored to your vision.
              </p>
              <div className="flex flex-wrap gap-2 space-y-2">
                <Button className="h-14 w-60">
                  Download for Apple Silicon
                </Button>
                <Button variant="outline" className="h-14 w-60">
                  Download for Intel
                </Button>
              </div>
              <p className="text-muted-foreground -mt-4 underline">
                More download options
              </p>

              <div className="space-y-4 border-t border-dashed pt-6">
                <p className="text-sm uppercase tracking-wider">
                  Feature overview
                </p>
                <div className="grid grid-cols-[3fr_7fr]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm hover:underline">Canvas</p>
                    <ArrowUpRight className="w-5" />
                  </div>
                  <p className="pl-10 text-sm">
                    AI-powered tool to create full design systems from scratch
                  </p>
                </div>
                <div className="grid grid-cols-[3fr_7fr]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm hover:underline">Smart Layers</p>
                    <ArrowUpRight className="w-5" />
                  </div>
                  <p className="pl-10 text-sm">
                    Intelligent design suggestions based on project context
                  </p>
                </div>
                <div className="grid grid-cols-[3fr_7fr]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm hover:underline">Moodboard</p>
                  </div>
                  <p className="pl-10 text-sm">
                    Real-time inspiration and asset integration from your
                    browser
                  </p>
                </div>
                <div className="grid grid-cols-[3fr_7fr]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm hover:underline">Prototype Mode</p>
                  </div>
                  <p className="pl-10 text-sm">
                    Natural language instructions for interactive prototypes
                  </p>
                </div>
              </div>
              <div className="flex w-fit items-center gap-2 border-b pb-2">
                <p className="text-md">Learn more about AI</p>
                <ArrowUpRight className="w-5" />
              </div>
            </div>
          </div>
          <div className="w-full border p-10">
            <div className="space-y-6">
              <h2 className="w-full text-5xl tracking-tighter">AI Plugins</h2>
              <p className="text-muted-foreground">
                Integrate AI Plugins into your favorite design tools.
              </p>
              <div className="*:not-first:mt-2">
                <div className="relative">
                  <Input
                    className="peer pe-3 ps-9"
                    placeholder="Search plugins..."
                    type="search"
                  />
                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <Search size={16} />
                  </div>
                  <button
                    className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md outline-none transition-[color,box-shadow] focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Submit search"
                    type="submit"
                  ></button>
                </div>
              </div>
              <div className="h-[320px] space-y-2 overflow-auto">
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <OpenAI size={60} />
                  <div className="h-full w-full space-y-2">
                    <div className="flex w-fit items-center gap-2">
                      <h2 className="text-md w-full tracking-tighter">
                        ChatGPT
                      </h2>
                      <p className="bg-secondary rounded-sm px-2 text-xs">
                        Popular
                      </p>
                    </div>
                    <p className="text-xs">Seamless integration for OpenAI.</p>
                  </div>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <Google />
                  <h2 className="text-md w-full tracking-tighter">Google</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <Grok />
                  <h2 className="text-md w-full tracking-tighter">Grok</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <Github />
                  <h2 className="text-md w-full tracking-tighter">Github</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <Vercel />
                  <h2 className="text-md w-full tracking-tighter">Vercel</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <Photoshop />
                  <h2 className="text-md w-full tracking-tighter">Photoshop</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
                <div className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-xl p-3">
                  <X />
                  <h2 className="text-md w-full tracking-tighter">X</h2>
                  <ArrowUpRight className="mr-4 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download1 
