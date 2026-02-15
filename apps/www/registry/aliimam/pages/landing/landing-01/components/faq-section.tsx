"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/aliimam/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Brillance and who is it for?",
    answer:
      "Brillance is a modern design-driven platform built for teams that care about clarity, consistency, and scalable systems. It’s ideal for startups, product teams, and agencies looking to create cohesive digital experiences.",
  },
  {
    question: "How does Brillance improve my design workflow?",
    answer:
      "Brillance helps you build structured layouts, reusable components, and consistent visual patterns. From typography to spacing systems, everything is designed to reduce friction and increase creative velocity.",
  },
  {
    question: "Can Brillance fit into my existing design system?",
    answer:
      "Yes. Brillance is built to be flexible and token-based, allowing you to integrate your brand colors, typography scales, and spacing rules seamlessly into your existing workflow.",
  },
  {
    question: "Is it suitable for large teams?",
    answer:
      "Absolutely. Brillance supports scalable architecture and consistent component patterns, making collaboration between designers and developers smooth and predictable.",
  },
  {
    question: "Does Brillance support responsive design?",
    answer:
      "Yes. Every component is built with responsiveness in mind, ensuring your layouts adapt beautifully across desktop, tablet, and mobile devices.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by integrating the core components into your project, customize your design tokens, and build your first layout. Brillance is structured to help you move from idea to interface quickly and confidently.",
  },
]

export default function FAQSection() {
  return (
    <div className="flex w-full items-start justify-center">
      <div className="flex flex-1 flex-col gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        <div className="flex w-full flex-col gap-4 lg:flex-1 lg:py-5">
          <h2 className="text-4xl leading-tight font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base leading-7">
            Explore your data, build your dashboard,
            <br className="hidden md:block" />
            bring your team together.
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <Accordion type="single" className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b"
              >
                <AccordionTrigger className="p-5 text-left text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="p-5 text-sm leading-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
