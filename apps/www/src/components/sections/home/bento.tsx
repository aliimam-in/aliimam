"use client"

import Link from "next/link"

import { Marquee } from "@/registry/aliimam/components/marquee"

type BentoBlock = {
  name: string
  category: string
  href: string
  light: string
  dark: string
}

function ThemeImage({
  light,
  dark,
  alt,
}: {
  light: string
  dark: string
  alt: string
}) {
  return (
    <>
      <img
        src={light}
        alt={alt}
        className={`border-muted/10 hidden h-full w-full border object-contain dark:block`}
      />
      <img
        src={dark}
        alt={alt}
        className={`border-muted/20 block h-full w-full border object-contain dark:hidden`}
      />
    </>
  )
}

export function BentoLanding({ blocks = [] }: { blocks?: BentoBlock[] }) {
  if (!blocks.length) {
    return (
      <section className="text-muted-foreground container py-24 text-center">
        No blocks found
      </section>
    )
  }

  return (
    <section className="border-y">
      <div className="container">
        <div className="bg-foreground">
          <Marquee
            pauseOnHover
            speed="slow"
            className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-1"
          >
            <div className="flex gap-1">
              {blocks.map((block) => (
                <Link
                  key={block.name}
                  href={block.href}
                  className="relative h-40 shrink-0 overflow-hidden md:h-60"
                >
                  <ThemeImage
                    light={block.light}
                    dark={block.dark}
                    alt={block.name}
                  />
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
