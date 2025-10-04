import { Separator } from "@/registry/default/ui/separator";
import { BadgeQuestionMark } from "@aliimam/icons";
import { Instagram, Threads, X } from "@aliimam/logos";
import React from "react";

export default function HeroSection03() {
  return (
    <div className="min-h-screen relative">
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-15 [background-size:20px_20px]"/>
        <header className="flex justify-between items-center px-8 pt-6">
          <div className="text-2xl font-bold italic">aliimam.in</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a
              href="#"
              className="font-semibold hover:opacity-60 transition-opacity"
            >
              Index
            </a>
            <a
              href="#"
              className="text-gray-400 hover:opacity-60 transition-opacity"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:opacity-60 transition-opacity"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-400 hover:opacity-60 transition-opacity"
            >
              Archive
            </a>
            <a
              href="#"
              className="text-gray-400 hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </nav>
        </header>

        <main className="relative pt-20 pb-20">
          <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">
            <div className="md:flex gap-6 items-center">
              <p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-5 max-w-[220px] md:max-w-[180px]">
                I am india digital product designer based in Bokaro Steel City, India.
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-[10rem] font-light leading-none tracking-wider">
                DIGITAL
              </h1>
            </div>

            <div className="md:flex gap-6 items-center">
              <h1 className="text-6xl md:text-7xl xl:text-[10rem] flex font-light leading-none tracking-wider">
                <span>PR</span>
                <BadgeQuestionMark
                  type="solid"
                  className="lg:size-40 size-14 md:size-18 text-primary"
                />
                <span>DUCTS</span>
              </h1>
              <p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5 max-w-[250px] md:max-w-[180px]">
                Open to all forms of design collaboration, regardless of
                location and language.
              </p>
            </div>

            <div className="md:flex gap-6 items-center">
              <h1 className="text-6xl md:text-7xl xl:text-[10rem] md:flex font-light leading-none tracking-wider">
                <span>DESIGN</span>
                <div className="hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="160"
                    viewBox="0 0 24 24"
                    fill="#f43f5e"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </div>
                <div className="block lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="#f43f5e"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </div>
                <span>CODE</span>
              </h1>
            </div>
          </div>
          <div className="mx-auto max-w-7xl w-full px-6 gap-3">
            <div className="md:flex md:mx-8 grid md:justify-end items-center gap-3">
              <Separator className="w-full my-6 mx-auto max-w-3xl" />
              <div className="text-xs whitespace-nowrap md:text-sm">
                BOKARO STEEL CITY, INDIA 827010
              </div>
              <div className="flex w-full items-end gap-3">
                <span className="text-2xl md:text-4xl font-thin">DESIGNER</span>
                <span className="text-3xl md:text-5xl font-bold italic text-orange-600">
                  ali
                </span>
              </div>
            </div>
          </div>

          <div className="md:px-20 px-6 gap-6 items-end md:flex pt-12">
            <div className="w-84 h-48 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="/templates/portfolio.jpg"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5">
              Open to all forms of design collaboration, regardless of location
              and language.
            </p>
          </div>

          <div className="absolute bottom-8 right-8 md:right-12 flex gap-6">
            <Instagram />
            <X />
            <Threads />
          </div>

          <div className="fixed right-0 top-1/2 h-36 items-center flex transform -translate-y-1/2  ">
            <div className="bg-foreground text-background py-6 px-3 text-sm font-bold ">
              <span className="rotate-180 [writing-mode:vertical-rl]">
                Design Award
              </span>
            </div>
          </div>
        </main>
       
    </div>
  );
}
