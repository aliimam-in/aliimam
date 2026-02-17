import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/aliimam/ui/avatar"

export default function TestimonialDemo() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote>
            <p className="text-lg font-medium sm:text-xl md:text-3xl">
              Adopting this design system transformed the way we build products.
              It brings clarity, consistency, and a premium feel to every
              interface we ship.
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <Avatar className="size-12">
                <AvatarImage
                  src="/ali.jpg"
                  alt="Ali Imam"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>

              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">Ali Imam</cite>
                <span className="text-muted-foreground block text-sm">
                  Creative Design Engineer
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
