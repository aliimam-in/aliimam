"use client";

import { Github, Lock, Mail } from "@aliimam/icons";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

const Login3 = () => {
  return (
    <section>
      <div className="flex h-screen w-full flex-col items-center justify-between">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-100 absolute inset-y-0 left-1/2 w-[1200px] -translate-x-1/2">
            <svg
              className="pointer-events-none absolute inset-0 text-black/20 [mask-composite:intersect] [mask-image:linear-gradient(black,transparent),radial-gradient(black,transparent)] dark:text-white/20"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  x="-1"
                  y="-1"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></path>
                </pattern>
              </defs>
              <rect fill="url(#grid-pattern)" width="100%" height="100%"></rect>
            </svg>
          </div>
        </div>
        <div className="mt-20 text-xl font-bold">Ali Imam</div>

        <div
          className="relative mt-40 flex w-full flex-col items-center justify-center px-4"
          style={{ opacity: 1 }}
        >
          <div className="w-full max-w-sm">
            <h3 className="text-center text-xl font-semibold">
              Log in to your design studio
            </h3>

            <div className="mt-8">
              <div className="flex flex-col gap-3">
                <div
                  className="overflow-hidden"
                  style={{ width: "auto", height: "336px" }}
                >
                  <div className="h-max">
                    <div className="flex flex-col gap-3 p-1">
                      <div className="flex flex-col gap-3">
                        <form className="flex flex-col gap-y-6">
                          <div>
                            <Label>Email</Label>
                            <Input
                              placeholder="email@designstudio.com"
                              className="mt-2"
                            />
                          </div>
                          <Button>Log in with email</Button>
                        </form>
                        <div className="my-3 flex flex-shrink items-center justify-center gap-2">
                          <div className="grow basis-0 border-b"></div>
                          <span className="text-content-muted text-xs font-medium uppercase leading-none">
                            or
                          </span>
                          <div className="grow basis-0 border-b"></div>
                        </div>
                      </div>

                      <div>
                        <Button className="w-full" variant="outline">
                          <Mail className="size-4" />
                          Continue with Google
                        </Button>
                      </div>

                      <div>
                        <Button className="w-full" variant="outline">
                          <Github className="size-4" />
                          Continue with Github
                        </Button>
                      </div>

                      <div>
                        <form className="flex flex-col space-y-3">
                          <Button className="w-full" variant="outline">
                            <Lock className="size-4" />
                            Continue with SAML SSO
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mt-6 text-center text-sm font-medium">
              New to Ali Imam?&nbsp;
              <a className="hover:text-primary text-sm font-medium font-semibold">
                Create a studio account
              </a>
            </p>

            <div className="mt-12 w-full">
              <a
                className="hover:bg-secondary relative block overflow-hidden rounded-lg border px-2 py-4 transition-colors"
                href="https://partners.Ali Imam.com/login"
              >
                <div
                  className="text-muted absolute inset-y-0 left-1/2 w-[640px] -translate-x-1/2"
                  role="presentation"
                >
                  <svg
                    className="pointer-events-none absolute inset-0"
                    width="100%"
                    height="100%"
                  >
                    <defs>
                      <pattern
                        id="dots-login"
                        x="0"
                        y="4"
                        width="12"
                        height="12"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="2"
                          height="2"
                          fill="currentColor"
                        ></rect>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dots-login)"
                      width="100%"
                      height="100%"
                    ></rect>
                  </svg>
                </div>
                <div className="text-muted-foreground relative text-center text-sm">
                  <p>Looking for your design partner account?</p>
                  <span className="text-muted-foreground block font-semibold">
                    Log in at partners.aliimam.in
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-10 flex grow basis-0 flex-col justify-end">
          <p className="text-muted-foreground px-20 py-8 text-center text-xs font-medium md:px-0">
            By continuing, you agree to Ali Imam's{" "}
            <a className="text-muted-foreground font-semibold">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-muted-foreground font-semibold">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login3;
