import Link from "next/link"
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/src/components/layout/page-header"
import { WhatsApp } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

import { WhatsAppJoin } from "../../icons"

export function CallToAction() {
  return (
    <section className="relative container overflow-hidden">
      <div className="relative overflow-hidden border-x pb-20">
        {/* Content */}
        <div className="relative z-10 space-y-3 text-center">
          <SectionHeader>
            <SectionHeaderHeading>Start Your Design Today</SectionHeaderHeading>
            <SectionHeaderDescription>
              Bring your brand and ideas to life with professional design
              services. Whether it’s branding, UI/UX, or marketing materials,
              our team is ready to help.
            </SectionHeaderDescription>
          </SectionHeader>

          <div className="h-full">
            <div className="flex flex-col items-center justify-center gap-3">
              <WhatsAppJoin className="h-40 w-full" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <Link target="_blank" href="https://cal.com/aliimam/30min">
              <Button className="h-12 w-40 cursor-pointer">Book a Call</Button>
            </Link>
            <Link href="/blocks">
              <Button variant={"outline"} className="h-12 w-40 cursor-pointer">
                <WhatsApp /> Start Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
