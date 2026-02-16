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
    question: "What’s included in each pricing plan?",
    answer:
      "Each plan includes access to core features, regular updates, and dedicated support. Higher tiers unlock advanced automation, analytics, and priority assistance.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes. You can switch plans at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely. We offer a free trial so you can explore all essential features before committing to a paid plan.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes. Annual plans come with a discounted rate compared to monthly billing, helping you save more as you scale.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a top priority. We use industry-standard encryption and best practices to ensure your data remains protected at all times.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply choose a plan that fits your needs, create your account, and you’ll be up and running in minutes.",
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
            Everything you need to know about our pricing,
            <br className="hidden md:block" />
            plans, and billing.
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
