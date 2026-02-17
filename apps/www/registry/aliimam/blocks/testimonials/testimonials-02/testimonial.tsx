import { Quote } from "@aliimam/icons"

export default function TestimonialDemo() {
  const testimonials = [
    {
      avatar: "https://github.com/claude.png",
      name: "Aarav Mehta",
      title: "Creative Director",
      quote:
        "The design system completely transformed our workflow. Our team now ships consistent, polished interfaces and many...",
    },
    {
      avatar: "https://github.com/vercel.png",
      name: "Sofia Khan",
      title: "UI/UX Designer",
      quote:
        "From typography to spacing, every component feels thoughtfully crafted. It helped us build a seamless user experience...",
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Daniel Lee",
      title: "Product Designer",
      quote:
        "The attention to visual hierarchy and interaction design is outstanding. It gave our product a modern, premium feel...",
    },
  ]

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden py-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
          opacity: 0.7,
        }}
      >
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "50px 30px",
            bottom: "-10%",
            height: "70%",
            left: "50%",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
            pointerEvents: "none",
            position: "absolute",
            transform: "translateX(-50%) perspective(300px) rotateX(45deg)",
            width: "200%",
          }}
        />
      </div>
      <div className="relative z-10 container">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            Loved by designers worldwide
          </h3>
          <p className="text-muted-foreground mt-3">
            Built for creators who care about details. Craft beautiful,
            scalable, and consistent user experiences with confidence.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-background rounded-md border shadow-xl"
              >
                <div className="p-4">
                  <Quote className="fill-primary text-primary h-8 w-8" />
                </div>
                <figure>
                  <blockquote>
                    <p className="px-4 py-1 text-lg font-normal tracking-tighter">
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className="bg-page-gradient mt-6 flex items-center gap-x-4 p-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-16 w-16 rounded-md border-2"
                    />
                    <div>
                      <span className="block font-semibold">{item.name}</span>
                      <span className="text-muted-foreground mt-0.5 block text-sm">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
