"use client";

import {
  Apple,
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  OpenAI,
  Replicate,
} from "@aliimam/logos";
import { ArrowRight } from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Separator } from "@/registry/default/ui/separator";
import { Textarea } from "@/registry/default/ui/textarea";

const Bookademo4 = () => {
  return (
    <section className="py-6">
      <div className="mx-6">
        <div className="w-full">
          <div className="space-y-6">
            <h1 className="text-xl font-light text-green-500">
              Connect with a Design Expert
            </h1>
            <h2 className="w-full text-5xl font-semibold tracking-tighter md:text-7xl">
              Let’s craft your <br className="hidden md:block" /> vision into
              reality
            </h2>
          </div>
          <div className="mt-6 grid w-full border lg:grid-cols-2">
            <form className="space-y-8 p-10 lg:border-r">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Full Name</Label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Design Studio</Label>
                  <Input
                    type="text"
                    placeholder="Your Studio"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="position">Role</Label>
                  <Input
                    type="text"
                    placeholder="Creative Director"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessEmail">Work Email</Label>
                  <Input
                    type="email"
                    placeholder="name@designstudio.com"
                    className="mt-2"
                    required
                  />
                </div>
              </div>
              <div>
                <Label>Project Budget (select one)</Label>
                <div className="mt-2 flex justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>{"<$50k"}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>$50k – $250k</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>$250k – $1M</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>$1M – $5M</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>$5M – $10M</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox className="h-6 w-6 rounded-full" />
                      <Label>{">$10M"}</Label>
                    </div>
                  </div>
                </div>
                <Separator className="my-6 w-full" />
                <div>
                  <Label>
                    Which design field do you represent? (select all that apply)
                  </Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox className="mt-2 h-6 w-6" />
                      <Label>Graphic Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox className="mt-2 h-6 w-6" />
                      <Label>UI/UX Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox className="mt-2 h-6 w-6" />
                      <Label>Product Design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox className="mt-2 h-6 w-6" />
                      <Label>Other</Label>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="my-6 w-full" />
              <div>
                <Label>Tell us about your design needs</Label>
                <Textarea
                  placeholder="Describe your project vision..."
                  className="h-30 mt-4"
                />
              </div>
              <Separator className="my-6 w-full" />
              <div className="flex space-x-2">
                <Checkbox />
                <p className="text-muted-foreground text-xs">
                  By checking this box, you agree to receive design insights,
                  updates, and inspiration from our team. See our Privacy Policy
                  and Terms & Conditions. You can unsubscribe anytime.
                </p>
              </div>
              <Button>
                <ArrowRight />
                Start Your Design Journey
              </Button>
            </form>
            <div className="mt-6 flex h-full w-full flex-col space-y-6 border-t p-10 lg:border-t-0">
              <div className="">
                <Apple size={80} />
                <p className="mt-10 italic">
                  “Collaborating with our design partners elevates Apple’s
                  vision for innovative and sustainable design, creating lasting
                  impact for our brand and community.”
                </p>
                <p className="mt-10 font-semibold">Ali Imam // Apple</p>
                <p>Chief Design Officer</p>
              </div>
              <Separator className="my-10 w-full" />
              <p>Trusted by global leaders in design and innovation</p>
              <div className="flex justify-start">
                <div className="grid grid-cols-2 border p-2 md:grid-cols-3">
                  {[
                    <OpenAI key="openai" size={40} />,
                    <ClaudeAI key="claude" size={40} />,
                    <Replicate key="replicate" size={40} />,
                    <Cursor key="cursor" size={40} />,
                    <Gemini key="gemini" size={40} />,
                    <Github key="github" size={40} />,
                  ].map((Logo, i) => (
                    <div
                      key={i}
                      className="h-30 w-30 flex items-center justify-center border md:h-40 md:w-40"
                    >
                      {Logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-t-0 p-20 text-center">
            <h3 className="text-3xl font-semibold md:text-5xl">
              Ready to elevate <br /> your design impact?
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="outline">Get in Touch</Button>
              <Button>
                <ArrowRight />
                Explore Our Design Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookademo4
