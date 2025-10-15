"use client";

import { Check } from "@aliimam/icons";

const Compare2 = () => {
  return (
    <section className="py-32">
      <div>
        <div className="mt-6 grid w-full lg:grid-cols-2">
          <div className="mx-auto max-w-2xl space-y-10 px-6 py-20">
            <h2 className="w-full text-center text-5xl tracking-tighter">
              Choose Ali Imam for
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col space-y-6">
                <h2 className="w-full text-lg font-medium tracking-tighter">
                  Large-Scale Design Projects
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Managing complex design systems with 100+ artboards
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Need advanced prototyping and handoff capabilities
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">Deep design context integration</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="w-full text-lg font-medium tracking-tighter">
                  Enterprise Design Compliance
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Require certifications like GDPR, WCAG, or ISO 27001
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="w-full text-lg font-medium tracking-tighter">
                  Multi-Tool Design Workflows
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Teams use various design tools like Figma, Sketch, or
                      Adobe XD
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Need plugins for seamless tool integration
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Want consistent design experience across platforms
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h2 className="w-full text-lg font-medium tracking-tighter">
                  Collaborative Design Teams
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                    <p className="text-md">
                      Designers need real-time collaboration and feedback tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary">
            <div className="mx-auto max-w-2xl space-y-10 px-6 py-20">
              <h2 className="w-full text-center text-5xl tracking-tighter">
                Choose AI for
              </h2>
              <div className="space-y-12">
                <div className="flex flex-col space-y-6">
                  <h2 className="w-full text-lg font-medium tracking-tighter">
                    Small Design Teams
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">Team of 1-5 designers</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">
                        Working on small to medium design projects
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">
                        No strict compliance requirements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <h2 className="w-full text-lg font-medium tracking-tighter">
                    Basic Design Assistance Needs
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">
                        Basic design suggestions and templates sufficient
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">
                        Don&apos;t need advanced design system integration
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">Single-artboard editing focus</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="bg-primary text-primary-foreground h-5 w-5 rounded-full p-1" />
                      <p className="text-md">
                        No team collaboration requirements
                      </p>
                    </div>
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

export default Compare2
