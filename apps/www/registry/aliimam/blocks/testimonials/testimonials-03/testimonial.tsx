import Image from "next/image"

const testimonials = [
  [
    {
      content:
        "This design system gave our product a completely new identity. The polish and consistency instantly elevated our brand.",
      author: {
        name: "Aarav Mehta",
        role: "Creative Director",
        image: "https://github.com/claude.png",
      },
    },
    {
      content:
        "The components are thoughtfully crafted and incredibly flexible. It feels like it was built by designers who truly care.",
      author: {
        name: "Sofia Khan",
        role: "UI/UX Designer",
        image: "https://github.com/vercel.png",
      },
    },
    {
      content:
        "From spacing to typography, everything just works. We shipped our redesign faster than ever before.",
      author: {
        name: "Daniel Lee",
        role: "Product Designer",
        image: "https://github.com/shadcn.png",
      },
    },
    {
      content:
        "Our dashboard now feels modern and premium. Users immediately noticed the improved experience.",
      author: {
        name: "Maya Patel",
        role: "Head of Design",
        image: "https://github.com/octocat.png",
      },
    },
    {
      content:
        "The visual hierarchy and layout structure made complex data feel simple and approachable.",
      author: {
        name: "Ryan Brooks",
        role: "UX Strategist",
        image: "https://github.com/torvalds.png",
      },
    },
  ],
  [
    {
      content:
        "Collaboration between design and development has never been smoother. Everything feels systemized and scalable.",
      author: {
        name: "Isabella Cruz",
        role: "Design Lead",
        image: "https://github.com/mojombo.png",
      },
    },
    {
      content:
        "The micro-interactions add subtle delight without overwhelming the user experience.",
      author: {
        name: "Noah Kim",
        role: "Interaction Designer",
        image: "https://github.com/defunkt.png",
      },
    },
    {
      content:
        "We were able to maintain brand consistency across multiple products effortlessly.",
      author: {
        name: "Emma Wilson",
        role: "Brand Designer",
        image: "https://github.com/gaearon.png",
      },
    },
    {
      content:
        "It strikes the perfect balance between minimalism and functionality.",
      author: {
        name: "Liam Anderson",
        role: "Frontend Architect",
        image: "https://github.com/sindresorhus.png",
      },
    },
    {
      content:
        "The layout grids and spacing system helped us create clean, structured interfaces every time.",
      author: {
        name: "Olivia Martin",
        role: "Senior UI Designer",
        image: "https://github.com/yyx990803.png",
      },
    },
  ],
  [
    {
      content:
        "We reduced design inconsistencies by over 70% after adopting this system.",
      author: {
        name: "Ethan Wright",
        role: "Product Manager",
        image: "https://github.com/jashkenas.png",
      },
    },
    {
      content:
        "The dark mode implementation is flawless and visually stunning.",
      author: {
        name: "Ava Thompson",
        role: "Visual Designer",
        image: "https://github.com/dhh.png",
      },
    },
    {
      content:
        "It helped us turn complex workflows into intuitive, elegant user journeys.",
      author: {
        name: "James Rodriguez",
        role: "UX Researcher",
        image: "https://github.com/tj.png",
      },
    },
    {
      content: "The reusable components saved us weeks of development time.",
      author: {
        name: "Charlotte Nguyen",
        role: "Design Systems Engineer",
        image: "https://github.com/rauchg.png",
      },
    },
    {
      content:
        "Clean, scalable, and beautifully structured — exactly what modern products need.",
      author: {
        name: "Benjamin Scott",
        role: "Founder & Designer",
        image: "https://github.com/bradtraversy.png",
      },
    },
  ],
]

export default function TestimonialDemo() {
  return (
    <section className="relative py-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)",
          backgroundImage:
            "radial-gradient(circle at 0.5px 0.5px, var(--primary) 0.5px, transparent 0)",
          backgroundSize: "8px 8px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)",
          opacity: 0.2,
        }}
      />
      <div className="relative container">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl tracking-tighter sm:text-6xl">
            Loved by businesses worldwide.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg tracking-tight">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="bg-background relative transform-gpu rounded-md border p-6 shadow-xl [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t pt-6">
                        <div>
                          <div className="font-display text-base">
                            {testimonial.author.name}
                          </div>
                          <div className="text-muted-foreground mt-1 text-sm">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-md">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
