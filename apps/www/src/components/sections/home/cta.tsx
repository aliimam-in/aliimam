import { Button } from "@/registry/aliimam/ui/button";
import { WhatsApp } from "@aliimam/logos"; 
import Link from "next/link";
import { WhatsAppJoin } from "../../icons";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/src/components/layout/page-header"

export function CallToAction() {
  return (
    <section className="container relative overflow-hidden">
      <div className="border-x pb-20 relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 space-y-3 text-center">
          <SectionHeader>
            <SectionHeaderHeading>
              Start Your Design Today
            </SectionHeaderHeading>
            <SectionHeaderDescription>
              Bring your brand and ideas to life with professional design
              services. Whether it’s branding, UI/UX, or marketing materials, our
              team is ready to help.
            </SectionHeaderDescription>
          </SectionHeader>


          <div className="h-full">
            <div className="flex flex-col items-center justify-center gap-3">
              <WhatsAppJoin className="h-40 w-full" />
            </div>
          </div>

          <div className="flex pt-6 gap-3 flex-wrap justify-center">
            <Link target="_blank" href="https://cal.com/aliimam-in/30min">
              <Button className="h-12 rounded-full cursor-pointer w-40">
                Book a Call
              </Button>
            </Link>
            <Link href="/blocks">
              <Button
                variant={"outline"}
                className="h-12 w-40 cursor-pointer rounded-full"
              >
                <WhatsApp /> Start Chat
              </Button>
            </Link>
          </div>
        </div>

         
      </div>
    </section>
  );
}
