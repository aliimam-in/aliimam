
import Link from "next/link"

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/src/components/layout/page-header"
import { Button } from "@/registry/aliimam/ui/button"

export function Hero() {
  return (
    <div>
      <div className="relative h-[calc(100vh-var(--header-height)-var(--footer-height)+5rem)] flex justify-center items-center overflow-hidden">
        <PageHeader className="relative z-10">
          <PageHeaderHeading>
            Design without limits
          </PageHeaderHeading>
          <PageHeaderDescription>
            I create digital experiences that connect and inspire. I build apps, websites, brands, and products end-to-end.
          </PageHeaderDescription>
          <PageActions>
            <Button size={"xl"} variant={"outline"} asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild size={"xl"} >
              <Link target="_blank" href="https://cal.com/aliimam-in/30min">
                Book a Call
              </Link>
            </Button>
          </PageActions>
        </PageHeader>
      </div>

    </div>
  )
}
