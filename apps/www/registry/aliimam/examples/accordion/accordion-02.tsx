/* eslint-disable react/jsx-key */
import { Minus, Plus } from "lucide-react"

import { cn } from "@/registry/aliimam/lib/utils"
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
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="01"
      >
        <div className="">
          <h1 className="text-xs">
            I’m Ali Imam, a designer and creative developer dedicated to
            crafting digital experiences that are minimal, meaningful, and
            timeless. My work blends aesthetic precision with technical
            expertise, creating interfaces and products that feel intuitive and
            resonate deeply with users. Inspired by the harmony of architecture
            and the subtleties of human behavior, I approach every project with
            curiosity and a commitment to storytelling. Whether designing a
            sleek app interface or coding a responsive website, my goal is to
            create experiences that leave a lasting impression while solving
            real problems for users and businesses alike.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Creative Direction, UI/UX Design, Front-End Development, Brand
            Identity Design, Interaction Design, Prototyping, User Research,
            Visual Storytelling, Responsive Web Design, Design Systems
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "02",
    title: "What do I design?",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="02"
      >
        <div className="">
          <h1 className="text-xs">
            I design clean, functional, and visually compelling interfaces,
            brand systems, and digital products that prioritize usability and
            clarity. From pixel-perfect mobile apps to immersive websites, my
            work is rooted in simplicity, ensuring every element serves a
            purpose. I create cohesive brand identities that reflect a company’s
            essence and connect emotionally with audiences. My designs are not
            just about aesthetics—they’re about guiding users effortlessly
            through intuitive layouts, thoughtful typography, and seamless
            interactions. Whether it’s a startup’s landing page or a complex
            SaaS platform, I aim to deliver experiences that are both beautiful
            and highly functional.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            UI/UX Design, Web Design, Mobile App Design, Brand Identity Systems,
            Visual Design, Wireframing, Prototyping, Design Systems,
            Iconography, Animation Design
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "03",
    title: "My design approach",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="03"
      >
        <div className="">
          <h1 className="text-xs">
            My design approach is holistic, blending form, function, and feeling
            to create experiences that resonate. I prioritize clarity, ensuring
            users grasp a design’s purpose instantly, while obsessing over
            details like typography and micro-interactions to elevate the
            experience. Storytelling is at the core—every project tells a
            narrative that connects with its audience emotionally and
            intellectually. I start by understanding user needs and business
            goals, then iterate through sketches, wireframes, and prototypes,
            refining based on feedback. This process ensures designs are not
            only visually striking but also intuitive and purposeful, creating a
            seamless bridge between user expectations and client objectives.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            User-Centered Design, Interaction Design, Prototyping, User Testing,
            Design Thinking, Visual Storytelling, Information Architecture,
            Accessibility Design, Feedback Integration, Iterative Design
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "04",
    title: "Beyond design",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="04"
      >
        <div className="">
          <h1 className="text-xs">
            As a creative developer, I go beyond designing visuals—I build
            interactive, performant experiences that bring ideas to life. Using
            tools like Next.js, React, and TypeScript, I code responsive
            websites and applications that are as robust as they are beautiful.
            My dual expertise in design and development allows me to oversee
            projects from concept to deployment, ensuring a seamless transition
            from prototypes to production. Whether it’s integrating APIs,
            optimizing performance, or crafting smooth animations, I focus on
            creating digital products that users can engage with effortlessly
            across devices, delivering both technical excellence and aesthetic
            finesse.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Front-End Development, Full-Stack Development, API Integration,
            Responsive Web Development, Animation Coding, Performance
            Optimization, CMS Integration, JavaScript Frameworks, Web
            Accessibility, Code Reviews
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "05",
    title: "What inspires me",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="05"
      >
        <div className="">
          <h1 className="text-xs">
            My inspiration stems from the elegance of minimalism, the structural
            beauty of architecture, and the subtle details of everyday life. A
            perfectly balanced building, the texture of a natural material, or
            the rhythm of a bustling street can spark ideas for a user interface
            or brand system. I’m also inspired by human behavior—how people
            interact with technology, what frustrates them, and what brings joy.
            This curiosity drives me to design with intention, creating
            experiences that feel calm, intuitive, and timeless. By focusing on
            the often-overlooked details, I craft designs that resonate deeply
            and endure over time.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Moodboard Creation, Visual Inspiration Curation, Environmental
            Design, User Behavior Analysis, Emotional Design, Minimalist Design,
            Concept Development, Design Research, Trend Analysis, Creative
            Consulting
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "06",
    title: "Who I work with",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="06"
      >
        <div className="">
          <h1 className="text-xs">
            I partner with startups, brands, and individuals who share a passion
            for thoughtful design and meaningful impact. My collaborators range
            from tech entrepreneurs launching innovative products to established
            companies seeking to refresh their digital presence. I thrive in
            partnerships where creativity is valued, and ideas are explored
            collaboratively. By deeply understanding my clients’ goals,
            challenges, and audiences, I create designs that not only meet their
            needs but also inspire their users. Whether it’s a bold new app or a
            refined brand identity, I work with those who want to make a lasting
            difference through design that’s purposeful and memorable.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Client Collaboration, Startup Consulting, Brand Strategy,
            User-Centered Design, Project Management, Stakeholder Workshops,
            Creative Direction, Brand Refresh, Product Launch Design, Community
            Engagement Design
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "07",
    title: "My toolkit",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="07"
      >
        <div className="">
          <h1 className="text-xs">
            My toolkit is a blend of design and development tools that empower
            me to execute ideas with precision and efficiency. For design, I use
            Figma to create wireframes, prototypes, and pixel-perfect
            interfaces, enabling seamless collaboration with clients. On the
            development side, I leverage Next.js, React, and TypeScript to build
            fast, scalable applications. Tools like GSAP bring animations to
            life, while Tailwind CSS ensures consistent, rapid styling. However,
            tools are secondary to the idea—they exist to serve the vision. My
            focus is on crafting solutions that align with the project’s goals,
            ensuring both aesthetic excellence and technical performance in
            every deliverable.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Figma Prototyping, Next.js Development, React Development,
            TypeScript Coding, Animation Design, CSS Styling, Design-to-Code
            Workflow, Tool Integration, Performance Optimization, Collaborative
            Design Systems
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
  {
    id: "08",
    title: "Let’s connect",
    content: [
      <div
        className="relative grid gap-10 pb-30 md:grid-cols-2 lg:gap-30 lg:pt-10"
        key="08"
      >
        <div className="">
          <h1 className="text-xs">
            I’m passionate about connecting with those who share a love for
            design, technology, and creativity. Whether you’re a startup founder
            with a bold vision, a brand seeking a fresh identity, or someone who
            wants to explore the possibilities of design, I’m here to
            collaborate. Reach me at contact@aliimam.in or find me on X,
            LinkedIn, or Dribbble, where I share my latest work and insights.
            I’m open to new projects, creative partnerships, or even a chat
            about the future of digital experiences. Let’s create something
            meaningful together—reach out, and let’s start the conversation.
          </h1>
        </div>
        <div className="space-y-3 pr-6 text-[8px]">
          <h1 className="">RELATED SERVICES</h1>
          <h1 className="">
            Creative Consulting, Project Scoping, Collaboration Workshops,
            Social Media Content Creation, Portfolio Reviews, Design Mentorship,
            Networking Events, Project Proposals, Client Onboarding, Idea
            Brainstorming
          </h1>
        </div>
        <div className="absolute right-0 bottom-0">
          <Button className="h-16 cursor-pointer rounded-r-none rounded-b-none px-10 text-xs">
            Reach out contact@aliimam.in
          </Button>
        </div>
      </div>,
    ],
  },
]

export default function Accordion02() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Accordion
        type="single"
        defaultValue="04"
        collapsible
        className="w-full rounded-md border"
      >
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="[data-slot=accordion-trigger] cursor-pointer text-left duration-500 hover:no-underline data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:[#plus]:opacity-0 [&_svg]:[#plus]:[data-state=open]:opacity-0 [&>svg]:hidden">
              <div className="flex flex-1 items-center gap-4">
                <div className="relative ml-4">
                  <Plus
                    id="plus"
                    className={cn(
                      "h-6 w-6 shrink-0 transition-all duration-500",
                      "data-[state=closed]:opacity-100 data-[state=open]:opacity-0",
                      "data-[state=open]:rotate-180"
                    )}
                  />
                  <Minus
                    id="minus"
                    className={cn(
                      "absolute inset-0 h-6 w-6 opacity-100 transition-all duration-500",
                      "hover:opacity-100 [data-state=close]:opacity-100",
                      "data-[state=open]:rotate-180"
                    )}
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="ml-6 p-0">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
