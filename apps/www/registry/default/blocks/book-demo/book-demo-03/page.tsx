"use client";

import {
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  OpenAI,
  Replicate,
} from "@aliimam/logos";
import { Check } from "@aliimam/icons";

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
import { Textarea } from "@/registry/default/ui/textarea";

const Bookademo3 = () => {
  return (
    <section className="py-6">
      <div className="mx-6">
        <div className="mt-6 grid w-full lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-md text-muted-foreground font-light">
              <span className="cursor-pointer hover:underline">Contact</span> /
              Design Consultation
            </h1>
            <h2 className="w-full text-5xl tracking-tighter">
              Let&apos;s Design Together
            </h2>
            <div className="">
              <div className="mb-6 space-y-6 lg:flex lg:flex-col">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="bg-secondary text-primary h-6 w-6 rounded-full p-1.5" />
                    <p className="text-sm">
                      Share your design vision and project goals
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="bg-secondary text-primary h-6 w-6 rounded-full p-1.5" />
                    <p className="text-sm">Experience a tailored design demo</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="bg-secondary text-primary h-6 w-6 rounded-full p-1.5" />
                    <p className="text-sm">Discover premium design solutions</p>
                  </div>
                </div>
                <p className="font-semibold">
                  Trusted by +10,000 designers and creatives
                </p>
                <div className="grid h-full max-w-sm grid-cols-2 gap-x-12 -space-y-6 pr-20 md:max-w-lg md:grid-cols-3">
                  <OpenAI type="wordmark" size={100} />
                  <ClaudeAI type="wordmark" size={100} />
                  <Replicate type="wordmark" size={100} />
                  <Cursor type="wordmark" size={100} />
                  <Gemini type="wordmark" size={90} />
                  <Github type="wordmark" size={90} />
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-8 border p-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label>Work Email</Label>
                <Input
                  type="text"
                  placeholder="contact@aliimam.in"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label>Studio Name</Label>
                <Input
                  type="text"
                  placeholder="Your design studio"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label>Team Size</Label>
                <Select required>
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Number of designers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100">1-10</SelectItem>
                    <SelectItem value="100-500">11-50</SelectItem>
                    <SelectItem value="500-5000">51-200</SelectItem>
                    <SelectItem value="5000+">200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Project Details (Optional)</Label>
              <Textarea
                placeholder="Tell us about your design project..."
                className="mt-4 h-24"
              />
            </div>
            <div>
              <Label>How Did You Hear About Us? (Optional)</Label>
              <Textarea
                placeholder="Share where you found us..."
                className="mt-4 [resize:none]"
              />
            </div>
            <Button>Connect with Our Design Team</Button>
            <div className="flex space-x-2">
              <p className="text-muted-foreground text-xs">
                By submitting this form, you confirm that you have read and
                understood our{" "}
                <span className="underline">Privacy Policy.</span> This site is
                protected by reCAPTCHA and the Google{" "}
                <span className="underline">Privacy Policy</span> and
                <span className="underline">Terms of Service</span> apply.
              </p>
            </div>
          </form>
          <div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h1 className="font-semibold">Design FAQ</h1>
                <p className="text-sm">
                  Explore our{" "}
                  <span className="underline">Frequently Asked Questions</span>{" "}
                  about design services and pricing on our design hub.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold">Creative Support</h1>
                <p className="text-sm">
                  Get inspiration and support from our team and creatives in our{" "}
                  <span className="underline">Design Community.</span>
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold">Account Support</h1>
                <p className="text-sm">
                  <span className="underline">Reach out</span> for help with
                  billing, plans, or account management for existing clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookademo3
