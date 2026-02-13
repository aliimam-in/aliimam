import Link from "next/link"
import {
  Figma,
  Github,
  Instagram,
  LinkedIn,
  Pinterest,
  Threads,
  X,
  YouTube,
} from "@aliimam/logos"

import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/registry/aliimam/pages/about/about-01/components/page-header"

export function Connect() {
  return (
    <section className="container border-b">
      <div className="flex justify-center border-x">
        <div className="max-w-5xl pb-20">
          <SectionHeader>
            <SectionHeaderHeading>Connect</SectionHeaderHeading>
            <SectionHeaderDescription>
              You can find me on everywhere with handle @aliimam.in Also see all
              social links in here
            </SectionHeaderDescription>
          </SectionHeader>
          <div className="[mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
            <div className="bg-background dark:bg-muted/50 grid gap-x-6 rounded-md border px-6 pt-6 pb-10 md:grid-cols-2">
              <Integration
                icon={<X />}
                name="X"
                links="https://x.com/aliimam_in"
                description="Follow me for design insights, tech updates, and creative content."
              />
              <Integration
                icon={<LinkedIn />}
                name="LinkedIn"
                links="https://www.linkedin.com/in/aliimam-in/"
                description="Connect with me professionally and explore my career journey."
              />
              <Integration
                icon={<Instagram />}
                name="Instagram"
                links="https://www.instagram.com/aliimam.in/"
                description="Visual stories, behind-the-scenes, and creative inspiration."
              />
              <Integration
                icon={<Github />}
                name="Github"
                links="https://github.com/aliimam-in"
                description="Explore my open-source projects and code repositories."
              />
              <Integration
                icon={<YouTube />}
                name="Youtube"
                links="https://www.youtube.com/@aliimam_in"
                description="Watch tutorials, design processes, and creative content."
              />
              <Integration
                icon={<Figma />}
                name="Figma"
                links="https://www.figma.com/@aliimam_in"
                description="Check out my design files, UI kits, and design resources."
              />
              <Integration
                icon={<Threads />}
                name="Threads"
                links="https://www.threads.com/@aliimam.in"
                description="Join conversations about design, tech, and creativity."
              />
              <Integration
                icon={<Pinterest />}
                name="Pinterest"
                links="https://in.pinterest.com/aliimam_in/"
                description="Discover curated design inspiration and creative ideas."
              />
            </div>
          </div>
          <p className="text-muted-foreground md:text-md mx-auto max-w-lg text-center text-sm font-light">
            For partnerships, collaborations, sponsorships, commissions, events,
            you can reach out to me at{" "}
            <Link
              className="text-primary font-semibold hover:underline"
              href={""}
            >
              contact@aliimam.in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

const Integration = ({
  icon,
  name,
  links,
  description,
}: {
  icon: React.ReactNode
  name: string
  links: string
  description: string
}) => {
  return (
    <Link
      target="_blank"
      href={links}
      className="hover:bg-secondary grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border-b border-dashed p-3 last:border-b-0"
    >
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-md border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
    </Link>
  )
}
