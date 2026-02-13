"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "How fast will I receive my designs?",
      answer:
        "Most design requests are completed within 24–48 hours. Larger or more complex requests may take longer, but I provide daily progress updates so you always know what’s happening.",
    },
    {
      id: "item-2",
      question: "Who will be working on my designs?",
      answer:
        "You’ll work directly with me, Ali — the founder and sole designer. I don’t outsource or use a team, so every design is personally crafted with full attention.",
    },
    {
      id: "item-3",
      question: "What type of design work do you offer?",
      answer:
        "I work across all kinds of design, including branding, UI/UX, social media creatives, marketing designs, and website visuals.",
    },
    {
      id: "item-4",
      question: "Is there a limit to how many requests I can make?",
      answer:
        "There’s no limit on total requests. Depending on your plan, I work on a fixed number of active requests at a time. Once one is done, the next begins.",
    },
    {
      id: "item-5",
      question: "Do you offer unlimited revisions?",
      answer:
        "Yes. Unlimited revisions are included. I’ll keep refining the design until you’re fully satisfied.",
    },
    {
      id: "item-6",
      question: "How do you handle large or complex projects?",
      answer:
        "Large projects are broken into smaller tasks or phases to ensure quality, clarity, and timely delivery.",
    },
    {
      id: "item-7",
      question: "How will I receive updates on my work?",
      answer:
        "I share daily updates on what was completed that day, so you’re always aware of progress.",
    },
    {
      id: "item-8",
      question: "How do we communicate?",
      answer:
        "For smooth and fast communication, I’m available on WhatsApp. Other tools can also be used if preferred.",
    },
    {
      id: "item-9",
      question: "How do I submit design requests?",
      answer:
        "You can submit requests through WhatsApp, Figma, Google Docs, Notion, Trello, or Loom — whatever is easiest for you.",
    },
    {
      id: "item-10",
      question: "What if I don’t like the design?",
      answer:
        "That’s completely fine. We’ll revise it until it matches your vision. Feedback is a core part of the process.",
    },
  ]

  return (
    <section className="relative container flex flex-col h-screen w-full items-center justify-center">
      <div className="border">
        <div className="mx-auto w-full max-w-5xl">
          <Accordion
            type="single"
            collapsible
            className="-mb-1 w-full"
            defaultValue="item-1"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="space-y-1 border-none"
              >
                <AccordionTrigger className="group flex w-full justify-end py-0 hover:no-underline [&_svg]:hidden">
                  <div className="bg-primary text-primary-foreground max-w-[80%] cursor-pointer px-4 py-3 text-left text-base transition">
                    {item.question}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="flex justify-start">
                  <div className="bg-muted text-muted-foreground max-w-[80%] px-4 py-3 text-base">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
