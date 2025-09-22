"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import Link from "next/link";

export function FAQs() {
  const faqItems = [
  {
    id: "item-1",
    question: "How fast will I receive my designs?",
    answer:
      "On average, most design requests are completed within two days or less. More complex projects may take longer depending on scope and details.",
  },
  {
    id: "item-2",
    question: "How does onboarding work?",
    answer:
      "Once you sign up, we’ll guide you through our onboarding process, including setting up your account, sharing your design preferences, and introducing you to your dedicated design team.",
  },
  {
    id: "item-3",
    question: "Who are the designers?",
    answer:
      "Our team is composed of experienced designers specializing in branding, UI/UX, illustration, and marketing design. Each designer is vetted for quality and expertise.",
  },
  {
    id: "item-4",
    question: "Is there a limit to how many requests I can make?",
    answer:
      "Depending on your plan, there may be a limit to active requests. Our team will work with you to ensure all your design needs are handled efficiently.",
  },
  {
    id: "item-5",
    question: "How does the pause feature work?",
    answer:
      "You can pause your plan at any time. While paused, no new requests are processed, but your previous designs remain accessible.",
  },
  {
    id: "item-6",
    question: "How do you handle larger requests?",
    answer:
      "For large projects, we break the work into phases and milestones to ensure timely delivery and consistent quality.",
  },
  {
    id: "item-7",
    question: "What programs do you design in?",
    answer:
      "We use professional design tools including Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects), and other industry-standard software.",
  },
  {
    id: "item-8",
    question: "How does Webflow development work?",
    answer:
      "If your project requires Webflow development, our designers can create the visual design and hand it off to our Webflow specialists for responsive, production-ready websites.",
  },
  {
    id: "item-9",
    question: "How will I request designs?",
    answer:
      "You can submit requests via Trello, Google Docs, Figma files, or Loom videos. Basically, any format that can be shared or linked is accepted.",
  },
  {
    id: "item-10",
    question: "What if I don’t like the design?",
    answer:
      "We offer revisions until you’re satisfied. Our goal is to deliver designs that match your vision, so feedback is part of the process.",
  },
  {
    id: "item-11",
    question: "Are there any requests you don’t support?",
    answer:
      "We focus on digital and branding design services. Requests outside these areas may not be supported, but we can always discuss your needs.",
  },
  {
    id: "item-12",
    question: "What if I only have a single request?",
    answer:
      "You can submit a single request on any plan, and our team will handle it professionally. Single-request plans are perfect for small projects or one-off needs.",
  },
  {
    id: "item-13",
    question: "Are there any refunds?",
    answer:
      "Refund policies vary by plan. Generally, if a project hasn’t started or is paused, partial or full refunds may be possible. Contact support for details.",
  },
  {
    id: "item-14",
    question: "Can I use the service for just a month?",
    answer:
      "Yes, our plans are flexible. You can subscribe monthly and pause or cancel anytime according to your needs.",
  },
];


  return (
     <section className="container relative">
      <div className="border px-6 py-20"> 
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-medium lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
           Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="bg-muted dark:bg-muted/50 w-full rounded-3xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-sm border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center mt-6 px-8">
            Can't find what you're looking for? Contact me{" "}
            <Link href="" className="text-primary font-medium hover:underline">
              contact@aliimam.in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
