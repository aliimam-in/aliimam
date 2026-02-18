import Link from "next/link"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/src/components/layout/page-header"

import { Button } from "@/registry/aliimam/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
      <img
        src="/ai-logo.png"
        alt="Logo"
        height={500}
        width={500}
        className="z-10 h-36 w-full object-contain md:h-60"
      />
      <p className="text-muted-foreground text-sm font-medium">
        404 — Page not found
      </p>

      <PageHeader className="relative z-10">
        <PageHeaderHeading>This page doesn’t exist</PageHeaderHeading>
        <PageHeaderDescription>
          The page you’re looking for might have been moved, deleted, or never
          existed in the first place.{" "}
        </PageHeaderDescription>
        <PageActions className="pt-20">
          <Button size={"xl"} asChild>
            <Link href="/">Go home</Link>
          </Button>

          <Button size={"xl"} variant="outline" asChild>
            <Link href="/docs">View docs</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  )
}
