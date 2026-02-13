/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"
import { Button } from "@/registry/aliimam/ui/button"

const items = [
  {
    id: "01",
    title: "Who am I?",
    img: "/r/hero-01-light.png",
    content:
      "I’m Ali Imam — a multidisciplinary designer and creative developer crafting thoughtful digital experiences with purpose and precision.",
  },
  {
    id: "02",
    title: "What do I design?",
    img: "/r/hero-03-light.png",
    content:
      "I design intuitive interfaces, visual identities, and digital products that connect clarity with emotion — always guided by simplicity and usability.",
  },
  {
    id: "03",
    title: "My design approach",
    img: "/r/hero-04-light.png",
    content:
      "Every project begins with understanding. I combine logic, emotion, and craft to create experiences that feel effortless and meaningful.",
  },
  {
    id: "04",
    title: "Philosophy & values",
    img: "/r/hero-08-light.png",
    content:
      "Design should be timeless — not trendy. I value honesty in visuals, restraint in detail, and intention in every decision I make.",
  },
  {
    id: "05",
    title: "Beyond design",
    img: "/r/pricing-01-light.png",
    content:
      "Outside of work, I explore photography, motion, and creative coding — all ways to see and shape the world differently.",
  },
]

export default function Accordion03() {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center border">
      <Accordion
        type="single"
        defaultValue="02"
        collapsible
        className="h-full w-full"
      >
        {items.map((item) => (
          <AccordionItem className="relative" value={item.id} key={item.id}>
            <AccordionTrigger className="pl-6 hover:no-underline [&>svg]:hidden">
              <h1 className="text-lg font-semibold md:text-xl">{item.title}</h1>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground grid h-full w-full space-y-6 md:h-full md:grid-cols-2">
              <div className="space-y-6 px-6">
                <p> {item.content}</p>
                <Button>View More</Button>
              </div>
              <img
                className="top-0 right-0 h-full border-t object-cover md:absolute md:w-1/2 md:border-t-0 md:border-l"
                src={item.img}
                alt={item.img}
                aria-hidden="true"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
