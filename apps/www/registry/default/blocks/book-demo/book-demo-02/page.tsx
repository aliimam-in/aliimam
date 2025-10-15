"use client";

import { ArrowUp, Briefcase, Lightbulb } from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Separator } from "@/registry/default/ui/separator";

const Bookademo2 = () => {
  return (
    <section className="py-6">
      <div className="mx-6">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:border-y">
          <div className="space-y-10 lg:py-20">
            <h2 className="w-full text-3xl lg:text-5xl">
              Elevate your <br /> designs, effortlessly
            </h2>
            <div className="">
              <div className="mb-10 space-y-10 lg:flex lg:flex-col">
                <div className="space-y-4">
                  <Separator />
                  <div className="flex items-center gap-2">
                    <ArrowUp className="w-5 text-red-500" />
                    <p className="text-sm">
                      Schedule a consultation with a design expert
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 text-red-500" />
                    <p className="text-sm">
                      Map out your creative workflows and design opportunities
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 text-red-500" />
                    <p className="text-sm">
                      Start with a risk-free 60-day design pilot
                    </p>
                  </div>
                  <Separator />
                </div>
                <div className="space-y-4 border p-8">
                  <p className="font-semibold">
                    "With Shadcnblocks, my team has created stunning visuals 10x
                    faster. We deliver impactful designs by iterating quickly
                    and with precision."
                  </p>
                  <p className="font-semibold">
                    Creative Director /{" "}
                    <span className="text-muted-foreground text-xs">
                      GLOBAL DESIGN STUDIO
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/device/display.jpg"
              alt="Design Background"
              className="absolute  h-full w-full items-center justify-center object-cover"
            />
            <div className="border-t z-10 relative p-2 lg:border-l lg:border-t-0 xl:p-20">
              <div className="space-y-8 border p-2">
                <div className="bg-card space-y-8 border p-4 lg:p-10">
                  <h1 className="text-xl">Launch your design journey</h1>
                  <p className="text-sm">
                    We’re excited to collaborate! Fill out the form, and our
                    design team will reach out promptly.
                  </p>
                  <div className="grid gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="First Name*"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Last Name*"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Work Email*"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Studio Name*"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label>Phone Number</Label>
                      <Input
                        type="text"
                        placeholder="+1"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Select required>
                        <SelectTrigger className="mt-2 w-full">
                          <SelectValue placeholder="What type of design project?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uiux">UI/UX Design</SelectItem>
                          <SelectItem value="graphic">
                            Graphic Design
                          </SelectItem>
                          <SelectItem value="product">
                            Product Design
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full">Get Started</Button>
                  <div className="flex justify-center space-x-2 text-center">
                    <p className="text-muted-foreground text-xs">
                      By clicking Get Started, you agree with
                      shadcnblocks&apos;s Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookademo2
