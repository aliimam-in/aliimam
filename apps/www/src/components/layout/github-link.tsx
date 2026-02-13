import { Suspense } from "react"
import Link from "next/link"

import { siteConfig } from "@/src/lib/config"
import { Icons } from "@/src/components/icons"
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
  const data = await fetch("https://api.github.com/repos/aliimam-in/aliimam", {
    next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
  })
  const json = await data.json()

  return (
    <span className="text-muted-foreground w-8 text-xs tabular-nums">
      {json.stargazers_count >= 1000
        ? `${(json.stargazers_count / 1000).toFixed(1)}k`
        : json.stargazers_count.toLocaleString()}
    </span>
  )
}
