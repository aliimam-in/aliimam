import { Suspense } from "react"
import Link from "next/link"
import { Icons } from "@/src/components/icons"
import { siteConfig } from "@/src/lib/config"

import { Button } from "@/registry/aliimam/ui/button"
import { Skeleton } from "@/registry/aliimam/ui/skeleton"

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <Suspense fallback={<Skeleton className="h-4 w-6" />}>
          <StarsCount />
        </Suspense>
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  try {
    const data = await fetch(
      "https://api.github.com/repos/aliimam-in/aliimam",
      {
        next: { revalidate: 86400 },
      }
    )

    if (!data.ok) {
      return null
    }

    const json = await data.json()
    const stars = Number(json?.stargazers_count ?? 0)

    return (
      <span className="text-muted-foreground w-8 text-xs tabular-nums">
        {stars >= 1000
          ? `${(stars / 1000).toFixed(1)}k`
          : stars.toLocaleString()}
      </span>
    )
  } catch {
    return null
  }
}