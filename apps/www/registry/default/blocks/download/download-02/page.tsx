"use client";

import { Apple, Google, Vercel } from "@aliimam/logos";

import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";

const Download2 = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 w-full text-center text-5xl tracking-tighter">
          Design Anywhere, Anytime
        </h2>
        <div className="bg-secondary grid h-full w-full gap-6 border p-10 md:grid-cols-3">
          <div className="">
            <div className="space-y-10">
              <Apple size={50} />
              <h2 className="w-full text-5xl tracking-tighter">Apple</h2>
              <div className="space-y-2">
                <Button className="mx-auto h-12 w-full max-w-sm">
                  Download for Apple Silicon
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-12 w-full max-w-sm"
                >
                  Download for Intel
                </Button>
              </div>

              <div className="">
                <p className="text-sm">Minimum Requirements:</p>
                <p className="text-sm">
                  macOS versions with Apple security update support. Typically
                  the latest release and the two previous versions. macOS 10.15
                  is not supported.
                </p>
              </div>
            </div>
          </div>

          <div className="items-start md:flex">
            <Separator
              className="mr-6 hidden md:block"
              orientation="vertical"
            />
            <Separator className="mb-6 block md:hidden" />
            <div className="space-y-10">
              <Google size={50} />
              <h2 className="w-full text-5xl tracking-tighter">Google</h2>
              <div className="space-y-2">
                <Button className="mx-auto h-12 w-full max-w-sm">
                  Download for x64
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-12 w-full max-w-sm"
                >
                  Download for arm64
                </Button>
              </div>

              <div className="">
                <p className="text-sm">Minimum Requirements:</p>
                <p className="text-sm">Windows 10 (64-bit)</p>
              </div>
            </div>
          </div>
          <div className="items-start md:flex">
            <Separator
              className="mr-6 hidden md:block"
              orientation="vertical"
            />
            <Separator className="mb-6 block md:hidden" />
            <div className="space-y-10">
              <Vercel size={50} />
              <h2 className="w-full text-5xl tracking-tighter">Vercel</h2>
              <div className="space-y-2">
                <Button className="mx-auto h-12 w-full max-w-sm">
                  Download
                </Button>
              </div>

              <div className="mt-20">
                <p className="text-sm">Minimum Requirements:</p>
                <p className="text-sm">
                  {
                    "glibc >= 2.28, glibcxx >= 3.4.25 (e.g., Ubuntu 20, Debian 10, Fedora 36, RHEL 8)"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-md my-6 w-full text-center">
          Need a previous version of our design tool?
          <span className="cursor-pointer font-semibold hover:underline">
            {" "}
            View all releases
          </span>
        </p>
        <h2 className="mt-10 w-full text-3xl">
          Want to explore cutting-edge design features?
        </h2>
        <p className="text-md mt-3 w-full">
          Download Ali Imam Next for early access to innovative design tools.
        </p>
      </div>
    </section>
  );
};

export default Download2
