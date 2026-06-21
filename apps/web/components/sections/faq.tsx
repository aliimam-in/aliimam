"use client"

import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/components/common/page-header"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/Components/accordion"

export function FAQs() {
  const faqItems = [
    {
      value: "background",
      question: "Tell me about yourself.",
      answer:
        "I'm Ali Imam, a Graphic Designer, Web Designer, Design Engineer, and Video Editor passionate about creating digital experiences that are both visually appealing and functional.",
    },
    {
      value: "experience",
      question: "What kind of experience do you have?",
      answer:
        "I've worked on branding, social media creatives, website design, frontend development, and video editing projects across different industries.",
    },
    {
      value: "skills",
      question: "What are your core skills?",
      answer:
        "My core skills include Graphic Design, UI/UX Design, Web Design, Design Systems, Frontend Development, Motion Graphics, and Video Editing.",
    },
    {
      value: "tools",
      question: "Which tools do you use?",
      answer:
        "I primarily work with Figma, Adobe Photoshop, Illustrator, Premiere Pro, After Effects, React, Next.js, and modern frontend technologies.",
    },
    {
      value: "design-engineer",
      question: "What does Design Engineer mean?",
      answer:
        "A Design Engineer combines design and development skills, turning designs into responsive and interactive user experiences with clean code.",
    },
    {
      value: "frontend",
      question: "Do you also develop websites?",
      answer:
        "Yes. Besides designing interfaces, I can build responsive websites using React, Next.js, Tailwind CSS, and modern frontend tools.",
    },
    {
      value: "video",
      question: "What type of videos do you edit?",
      answer:
        "I edit social media reels, promotional videos, product showcases, YouTube content, and short-form marketing videos.",
    },
    {
      value: "remote",
      question: "Are you available for remote work?",
      answer:
        "Yes. I'm open to remote opportunities, freelance projects, contract work, and full-time roles.",
    },
    {
      value: "freelance",
      question: "Are you available for freelance projects?",
      answer:
        "Absolutely. I'm always interested in collaborating on exciting freelance and creative projects.",
    },
    {
      value: "contact",
      question: "How can I contact you?",
      answer:
        "You can reach me through email, LinkedIn, WhatsApp, or any contact method listed on this website.",
    },
  ]

  return (
    <section className="relative">
      <div className="border-t">
        <div className="mx-auto max-w-3xl md:border-x">
          <SectionHeader>
            <SectionHeaderHeading>
              Frequently Asked Questions
            </SectionHeaderHeading>
            <SectionHeaderDescription className="max-w-80 md:max-w-lg mx-auto">
              Discover quick and comprehensive answers to common questions about
              our platform, services, and features.
            </SectionHeaderDescription>
          </SectionHeader>
          <Accordion defaultValue={["services"]} className="">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-none"
              >
                <AccordionTrigger className="group **:data-[slot=accordion-trigger-icon]:hidden flex w-full justify-start py-0 hover:no-underline">
                  <div className="bg-primary text-primary-foreground max-w-[80%] p-3 text-left text-base font-medium">
                    {item.question}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="m-0.5 pb-0 flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 text-base leading-relaxed">
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
