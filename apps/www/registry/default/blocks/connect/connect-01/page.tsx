import { LinkedIn, X, Instagram, YouTube, Figma, Github, Threads, Pinterest } from "@aliimam/logos";
import Link from "next/link";

export default function Connect01() {
  return (
    <section className="py-20 flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-6">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">Connect</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl font-light text-sm md:text-md">
            You can find me on everywhere with handle @aliimam.in Also see all
            social links in here
          </p>
        </div>
        <div className="mx-auto max-w-4xl [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="bg-background gap-x-6 grid md:grid-cols-2 dark:bg-muted/50 rounded-xl border px-6 pb-10 pt-3 shadow-xl">
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
              icon={<Github/>}
              name="Github"
              links="https://github.com/aliimam-in"
              description="Explore my open-source projects and code repositories."
            />
            <Integration
              icon={<YouTube/>}
              name="Youtube"
              links="https://www.youtube.com/@aliimam_in"
              description="Watch tutorials, design processes, and creative content."
            />
            <Integration
              icon={<Figma/>}
              name="Figma"
              links="https://www.figma.com/@aliimam_in"
              description="Check out my design files, UI kits, and design resources."
            /> 
            <Integration
              icon={<Threads/>}
              name="Threads"
              links="https://www.threads.com/@aliimam.in"
              description="Join conversations about design, tech, and creativity."
            />
            <Integration
              icon={<Pinterest/>}
              name="Pinterest"
              links="https://in.pinterest.com/aliimam_in/"
              description="Discover curated design inspiration and creative ideas."
            /> 
          </div>
        </div> 
          <p className="text-muted-foreground max-w-lg mx-auto text-center font-light text-sm md:text-md">
            For partnerships, collaborations, sponsorships, commissions, events,
            you can reach out to me at{" "}
            <Link className="hover:underline text-primary font-semibold" href={""}>contact@aliimam.in</Link>
          </p> 
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  links,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  links: string;
  description: string;
}) => {
  return (
    <Link
      target="_blank"
      href={links}
      className="grid hover:bg-secondary hover:rounded-xl grid-cols-[auto_1fr_auto] items-center rounded-b-none gap-3 border-b border-dashed p-3 last:border-b-0"
    >
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};