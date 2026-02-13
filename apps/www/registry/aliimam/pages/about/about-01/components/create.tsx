import Link from "next/link"

import {
  SectionActions,
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/registry/aliimam/pages/about/about-01/components/page-header"
import { Button } from "@/registry/aliimam/ui/button"

export function Craete() {
  return (
    <section className="container">
      <div className="border-x border-b px-4 py-10">
        <SectionHeader>
          <SectionHeaderHeading>Let’s Create Something</SectionHeaderHeading>
          <SectionHeaderDescription>
            Ready to elevate your brand with bold, innovative design? Whether
            you need a stunning website, a cohesive brand identity, or engaging
            digital content, I’m here to make it happen. Let’s collaborate to
            turn your ideas into reality.
          </SectionHeaderDescription>
          <SectionActions>
            <Button asChild size={"xl"} variant={"outline"}>
              <Link target="_blank" download={true} href="/cv.pdf">
                Download CV
              </Link>
            </Button>
            <Button asChild size={"xl"}>
              <Link target="_blank" href="https://cal.com/aliimam-in/30min">
                Book a Call
              </Link>
            </Button>
          </SectionActions>
        </SectionHeader>
      </div>
    </section>
  )
}
