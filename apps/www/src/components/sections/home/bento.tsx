"use client";

import Link from "next/link"; 
import { Marquee } from "@/registry/aliimam/components/marquee";

type BentoBlock = {
    name: string;
    category: string;
    href: string;
    light: string;
    dark: string;
};

function ThemeImage({
    light,
    dark,
    alt,
}: {
    light: string;
    dark: string;
    alt: string;
}) {

    return (
        <>
            <img
                src={light}
                alt={alt}
                className={`hidden dark:block border border-muted/10 h-full w-full object-contain`}
            />
            <img
                src={dark}
                alt={alt}
                className={`block dark:hidden border border-muted/20 h-full w-full object-contain`}
            />
        </>
    );
}

export function BentoLanding({
    blocks = [],
}: {
    blocks?: BentoBlock[];
}) {
    if (!blocks.length) {
        return (
            <section className="container py-24 text-center text-muted-foreground">
                No blocks found
            </section>
        );
    }

    return (
        <section className="border-y">
            <div className="container">
                <div className="bg-foreground">
                    <Marquee
                        pauseOnHover 
                        speed="slow"
                        className="py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                    >
                        <div className="flex gap-1">
                            {blocks.map((block) => (
                                <Link
                                    key={block.name}
                                    href={block.href}
                                    className="relative h-40 md:h-60 shrink-0 overflow-hidden"
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
    );
}
