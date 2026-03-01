/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useMemo } from "react"
import { Marquee } from "@/registry/aliimam/components/marquee"
import { Logos } from "@/src/components/icons/logos/logos"
import { Icons } from "../../icons/icons/icons"
import { Vectors } from "../../icons/vectors/vectors"

import { allLogos } from "@aliimam/logos"
import { allIcons } from "@aliimam/icons"
import { allVectors } from "@aliimam/vectors"

import {
    SectionHeader,
    SectionHeaderDescription,
    SectionHeaderHeading,
} from "@/src/components/layout/page-header"

import Link from "next/link"

// ─────────────────────────────────────────────
// Utility: Fisher–Yates Shuffle
// ─────────────────────────────────────────────
function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// ─────────────────────────────────────────────
// Generic Unique BaseId Extractor
// firstOccurrence = true  → first entry per baseId (safe for vectors)
// firstOccurrence = false → prefer "default" variant only
// ─────────────────────────────────────────────
function getUniqueBaseIds(
    source: Record<string, any>,
    limit = 40,
    firstOccurrence = false
): string[] {
    const seen = new Set<string>()
    const ids: string[] = []

    for (const group of Object.values(source)) {
        for (const entry of Object.values(group as Record<string, any>)) {
            const metadata = (entry as any)?.metadata
            if (!metadata?.baseId) continue

            const { baseId, variant } = metadata

            if (seen.has(baseId)) continue

            if (firstOccurrence) {
                seen.add(baseId)
                ids.push(baseId)
            } else {
                if (!variant || variant === "default") {
                    seen.add(baseId)
                    ids.push(baseId)
                }
            }
        }
    }

    return shuffleArray(ids).slice(0, limit)
}

// ─────────────────────────────────────────────
// Tiles
// ─────────────────────────────────────────────
function LogoTile({ id }: { id: string }) {
    return (
        <Link href={`/logos/${id}`}>
            <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-30 w-30">
                <Logos name={id} size={40} />
            </div>
        </Link>
    )
}

function IconTile({ id }: { id: string }) {
    return (
        <Link href={`/icons/${id}`}>
            <div className="border-border/40 hover:bg-code flex  shrink-0 items-center justify-center border transition-colors duration-200 h-20 w-20">
                <Icons name={id} size={24} />
            </div>
        </Link>
    )
}

function VectorTile({ id }: { id: string }) {
    return (
        <Link href={`/vectors/${id}`}>
            <div className="border-border/40 hover:bg-code flex shrink-0 items-center justify-center border transition-colors duration-200 h-60 w-60">
                <Vectors name={id} size={100} />
            </div>
        </Link>
    )
}

// ─────────────────────────────────────────────
// Showcase Component
// ─────────────────────────────────────────────
export function IconsShowcase() {
    const idsLogos = useMemo(() => getUniqueBaseIds(allLogos, 40, false), [])
    const idsIcons = useMemo(() => getUniqueBaseIds(allIcons, 40, false), [])

    const idsVectors = useMemo(() => getUniqueBaseIds(allVectors, 40, true), [])

    const rowIcons = idsIcons.slice(0, Math.ceil(idsIcons.length / 2))
    const rowVectors = idsVectors.slice(0, Math.ceil(idsVectors.length / 2))
    const rowLogos = idsLogos.slice(Math.ceil(idsLogos.length / 2))

    return (
        <section className="border-t py-2">
            <div className="container text-center">
                <SectionHeader className="md:-my-10"> 
                    <h1 className="transform text-center text-7xl font-bold tracking-tighter uppercase md:text-9xl">
                        5000+
                    </h1>
                    <SectionHeaderHeading>
                        icons, logos, and vector
                    </SectionHeaderHeading>
                    <SectionHeaderDescription>
                        Ready to use, SVG logos with multiple variants — copy,
                        download, or drop into your project.
                    </SectionHeaderDescription>
                </SectionHeader>
            </div>


            <Marquee pauseOnHover speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowIcons.map((id) => (
                        <IconTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>


            <Marquee pauseOnHover reverse speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowVectors.map((id) => (
                        <VectorTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>


            <Marquee pauseOnHover speed="slow" fade>
                <div className="flex gap-2 last:pr-2">
                    {rowLogos.map((id) => (
                        <LogoTile key={id} id={id} />
                    ))}
                </div>
            </Marquee>
        </section>
    )
}