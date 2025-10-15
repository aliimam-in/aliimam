"use client";

import { Check } from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

const Bookademo1 = () => {
  return (
    <section>
      <div className="mx-6 lg:border-x">
        <h2 className="w-full py-10 text-center text-5xl font-semibold lg:text-7xl">
          Book A Demo
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-10 p-6 xl:p-20">
            <p className="w-full text-sm">
              Discover how Ali Imam can help you build faster, design better,
              and launch stunning projects with ease:
            </p>
            <div>
              <div className="mb-10 space-y-10 lg:flex lg:flex-col">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Schedule a consultation with a
                      <span className="font-bold"> design expert</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Map out your creative workflows and{" "}
                      <span className="font-bold"> design opportunities</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Start with a risk-free 60-day design pilot
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Explore advanced prototyping tools
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Collaborate in real-time with your team
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-4" />
                    <p className="text-sm">
                      Access premium design assets and templates
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-semibold">Get a demo today!</h1>
                  <img
                    src="/templates/ai-icons.jpg"
                    alt="Design Dashboard"
                    className="h-full w-full items-center justify-center rounded-xl border object-cover p-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="border-t p-6 lg:border-l lg:border-t-0 xl:p-20">
              <div className="space-y-8 lg:p-10">
                <div className="grid gap-4">
                  <div>
                    <Label>Full name</Label>
                    <Input
                      type="text"
                      placeholder="Ali Imam"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="text"
                      placeholder="contact@aliimam.in"
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
                    <Label>Role</Label>
                    <Input
                      type="text"
                      placeholder="Creative Director"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label>Studio</Label>
                    <Input
                      type="text"
                      placeholder="Your Design Studio"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label>How did you hear about us?</Label>
                    <Input
                      type="text"
                      placeholder="LinkedIn, Friends etc"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">
                    By submitting this form, I confirm that I have read the
                    privacy policy and agree that my name and email address will
                    be collected and used by Ali Imam for the purposes of
                    sending design insights, promotions and updates. You can
                    withdraw your consent at any time by unsubscribing or
                    contacting us via privacy@aliimam.in
                  </p>
                </div>
                <Button className="w-full">Book Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookademo1
