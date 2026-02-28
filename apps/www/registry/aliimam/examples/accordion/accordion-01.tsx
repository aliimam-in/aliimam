import { Plus } from "@aliimam/icons"

import { cn } from "@/registry/aliimam/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"

const items = [
  {
    id: "01",
    title: "Who am I?",
    content:
      "I’m Ali Imam — a designer and creative developer focused on building digital experiences that are minimal, meaningful, and timeless.",
  },
  {
    id: "02",
    title: "What do I design?",
    content:
      "I create clean, functional interfaces, brand systems, and digital products. My work blends simplicity with clarity and usability.",
  },
  {
    id: "03",
    title: "My design approach",
    content:
      "For me, design isn’t just visuals — it’s how something feels and works. I focus on clarity, detail, and storytelling in every project.",
  },
  {
    id: "04",
    title: "Beyond design",
    content:
      "I bridge design and development, turning ideas into interactive experiences with modern tools and technology.",
  },
  {
    id: "05",
    title: "What inspires me",
    content:
      "Minimalism, architecture, and everyday details. I believe great design is found in the small things we often overlook.",
  },
  {
    id: "06",
    title: "Who I work with",
    content:
      "I collaborate with startups, brands, and individuals who value thoughtful design and want to create lasting impact.",
  },
  {
    id: "07",
    title: "My toolkit",
    content:
      "Figma, Next.js, and modern frameworks are part of my process — but for me, tools always serve the idea, not the other way around.",
  },
  {
    id: "08",
    title: "Let’s connect",
    content:
      "You can reach me through contact@aliimam.in or on social platforms. I’m always open to new projects, collaborations, and conversations.",
  },
]

export default function Accordion01() {
  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center">
      <Accordion type="single" defaultValue="04" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="hover:[&_div.bg-primary]:bg-secondary [data-slot=accordion-trigger] hover:[&_svg]:text-primary cursor-pointer text-left duration-1000 hover:pl-3 hover:no-underline hover:[&_svg]:rotate-90 [&>svg]:hidden">
              <div className="flex flex-1 items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h1>{item.id}</h1>
                  <h3 className="text-lg font-semibold md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="bg-primary flex items-center rounded-sm p-2 duration-500">
                  <Plus
                    className={cn(
                      "text-primary-foreground size-4 shrink-0 transition-transform duration-1000",
                      "[data-state=open]:rotate-90"
                    )}
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pr-20 pb-6">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
