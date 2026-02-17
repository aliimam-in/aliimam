import { Vercel } from "@aliimam/logos"

import { Marquee } from "@/registry/aliimam/components/marquee"
import { Separator } from "@/registry/aliimam/ui/separator"

const testimonials = [
  {
    name: "Alena Zhukova",
    profession: "Software Engineer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
  {
    name: "Aiko",
    profession: "Design Engineer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
  {
    name: "Alena Zhukova",
    profession: "Software Engineer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
  {
    name: "Lisa Kemp",
    profession: "Frontend Developer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
  {
    name: "Saud",
    profession: "Game Developer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
  {
    name: "Paula Smith",
    profession: "UX Designer",
    description:
      "This design system helped us build modern, scalable, and consistent user interfaces with ease.",
  },
]

const FUITestimonialWithSlide = () => {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden py-10">
      <div className="mx-auto w-full">
        <div className="mb-10">
          <p className="mx-auto mt-8 max-w-2xl text-center text-5xl tracking-tight">
            What Our Clients Say
          </p>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center text-lg tracking-tight">
            Trusted by designers and developers to build modern, scalable, and
            beautifully crafted user experiences.
          </p>
        </div>

        <div className="relative flex shrink-0 justify-around gap-5 overflow-hidden">
          <Marquee pauseOnHover fade={true} gap={6} className="w-full">
            {testimonials.map((testimonial, indx) => {
              return (
                <div
                  key={indx}
                  className="bg-background flex h-full w-120 flex-col space-x-4 rounded-md border last:mr-2"
                >
                  <p className="text-text-primary dark:text-dark-text-primary px-5 py-5 text-xl font-extralight tracking-tighter text-pretty sm:text-xl md:text-2xl">
                    &quot;{testimonial.description}.&quot;
                  </p>
                  <div className="flex w-full gap-1 overflow-hidden border-t-[1.2px]">
                    <div className="flex w-3/4 items-center gap-3 px-4 py-3">
                      <img
                        className="h-16 w-16 rounded-md"
                        src="/ali.jpg"
                        alt="ali"
                      />
                      <div className="flex flex-1 flex-col items-start justify-start gap-0">
                        <h5 className="text-base font-medium md:text-lg">
                          {testimonial.name}
                        </h5>
                        <p className="text-text-tertiary dark:text-dark-text-tertiary -mt-1 text-sm">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="self-center pl-10">
                      <Vercel />
                    </div>
                  </div>
                </div>
              )
            })}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
export default FUITestimonialWithSlide
