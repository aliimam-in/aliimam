/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowRight, Clock, User } from "lucide-react"

import { cn } from "@/registry/aliimam/lib/utils"
import { Badge } from "@/registry/aliimam/ui/badge"

import { LazyImage } from "./lazy-image"

type BlogType = {
  title: string
  href: string
  description: string
  author: string
  createdAt: string
  readTime: string
  image: string
  category: string
}

const blogs: BlogType[] = [
  {
    title: "Design Systems That Scale",
    href: "#",
    description:
      "Learn how to build and maintain scalable design systems that empower teams to move faster while staying consistent.",
    image: "/r/hero-01-light.png",
    createdAt: "2025-08-25",
    author: "Ava Mitchell",
    readTime: "7 min",
    category: "Design",
  },
  {
    title: "The Psychology of Color in UI",
    href: "#",
    description:
      "Explore how different colors influence user perception, emotion, and conversion in digital product design.",
    image: "/r/hero-02-light.png",
    createdAt: "2025-07-14",
    author: "Liam Carter",
    readTime: "5 min",
    category: "Design",
  },
  {
    title: "Microinteractions That Delight",
    href: "#",
    description:
      "Discover how subtle animations and interactions can enhance usability and bring joy to your users.",
    image: "/r/hero-03-light.png",
    createdAt: "2025-06-30",
    author: "Sophia Kim",
    readTime: "6 min",
    category: "Animation",
  },
  {
    title: "Accessibility Beyond Compliance",
    href: "#",
    description:
      "Practical steps to make your UI accessible, not just legally compliant, but genuinely inclusive for everyone.",
    image: "/r/hero-04-light.png",
    createdAt: "2025-06-18",
    author: "Ethan Rodriguez",
    readTime: "8 min",
    category: "Accessibility",
  },
  {
    title: "Dark Mode Done Right",
    href: "#",
    description:
      "Tips and tricks to design beautiful and functional dark mode experiences that users will love.",
    image: "/r/hero-05-light.png",
    createdAt: "2025-05-20",
    author: "Maya Chen",
    readTime: "4 min",
    category: "Design",
  },
  {
    title: "Typography That Speaks",
    href: "#",
    description:
      "How to select and pair typefaces that enhance readability, hierarchy, and brand personality.",
    image: "/r/hero-06-light.png",
    createdAt: "2025-05-02",
    author: "Noah Patel",
    readTime: "9 min",
    category: "Typography",
  },
  {
    title: "The Future of UI Animation",
    href: "#",
    description:
      "From motion guidelines to advanced prototyping—discover where UI animation is headed in 2025.",
    image: "/r/hero-07-light.png",
    createdAt: "2025-04-15",
    author: "Chloe Ramirez",
    readTime: "10 min",
    category: "Animation",
  },
  {
    title: "Minimalism vs Maximalism",
    href: "#",
    description:
      "A deep dive into two opposing design philosophies and how to decide which fits your product.",
    image: "/r/hero-08-light.png",
    createdAt: "2025-04-01",
    author: "Benjamin Scott",
    readTime: "6 min",
    category: "Design",
  },
  {
    title: "Designing for Mobile-First",
    href: "#",
    description:
      "Best practices for mobile-first design, from layout decisions to performance optimization.",
    image: "/r/hero-10-light.png",
    createdAt: "2025-03-22",
    author: "Isabella White",
    readTime: "7 min",
    category: "Responsive",
  },
  {
    title: "Figma Hacks for Power Users",
    href: "#",
    description:
      "Hidden features, shortcuts, and workflows in Figma that can dramatically speed up your design process.",
    image: "/r/hero-11-light.png",
    createdAt: "2025-03-09",
    author: "James Walker",
    readTime: "5 min",
    category: "Tools",
  },
  {
    title: "Designing With AI Tools",
    href: "#",
    description:
      "A practical look at how AI tools are shaping UI/UX workflows—from ideation to final delivery.",
    image: "/r/hero-12-light.png",
    createdAt: "2025-02-28",
    author: "Olivia Brooks",
    readTime: "8 min",
    category: "Tools",
  },
  {
    title: "The Art of Prototyping",
    href: "#",
    description:
      "How to create prototypes that effectively communicate your ideas and speed up stakeholder feedback.",
    image: "/r/feature-01-light.png",
    createdAt: "2025-02-14",
    author: "Daniel Green",
    readTime: "6 min",
    category: "Design",
  },
]

const categories = [
  "All",
  "Design",
  "Animation",
  "Accessibility",
  "Typography",
  "Responsive",
  "Tools",
]

export function BlogPage() {
  const featuredBlog = blogs[0]
  const recentBlogs = blogs.slice(1, 7)
  const allBlogs = blogs.slice(1)

  return (
    <div className="min-h-screen">
      <section className="border-border/40 relative overflow-hidden border-b">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Latest Articles
            </Badge>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Design & Development <br className="hidden sm:block" />
              Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Explore thought-provoking articles on design systems, UI/UX
              principles, and modern development practices. Learn from industry
              experts and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      <section className="border-border/40 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <a
            href={featuredBlog.href}
            className="group grid items-stretch gap-8 md:grid-cols-2 md:gap-12"
          >
            <div className="bg-muted overflow-hidden rounded-md">
              <LazyImage
                alt={featuredBlog.title}
                className="transition-transform duration-500 group-hover:scale-110"
                containerClassName="rounded-md"
                fallback="/placeholder.svg"
                inView={true}
                ratio={16 / 9}
                src={featuredBlog.image}
              />
            </div>

            <div className="flex flex-col justify-center space-y-6 py-4">
              <div className="space-y-3">
                <Badge variant="outline">{featuredBlog.category}</Badge>
                <h2 className="text-foreground group-hover:text-primary text-3xl font-bold transition-colors sm:text-4xl">
                  {featuredBlog.title}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {featuredBlog.description}
                </p>
              </div>

              <div className="border-border/40 flex flex-wrap gap-6 border-t pt-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <User className="h-4 w-4" />
                  <span>{featuredBlog.author}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{featuredBlog.readTime} read</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <span>{featuredBlog.createdAt}</span>
                </div>
              </div>

              <button className="group/btn text-primary mt-2 flex w-fit items-center gap-2 font-semibold transition-all hover:gap-3">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </a>
        </div>
      </section>

      <section className="border-border/40 bg-muted/50 border-b">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border-border/60 text-foreground hover:border-primary/40 hover:bg-muted border"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="border-border/40 border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-foreground text-3xl font-bold">
              Recent Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentBlogs.map((blog) => (
                <BlogCard key={blog.title} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-border/40 border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-foreground text-3xl font-bold">All Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allBlogs.map((blog) => (
                <BlogCardCompact key={blog.title} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-border/40 relative overflow-hidden border-b">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 30%, var(--primary) 65%, var(--background) 100%)",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 45px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-background/80 relative z-10 space-y-4 rounded-md border p-8 text-center shadow-2xl md:p-12">
            <h2 className="text-foreground text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Subscribe to our newsletter to receive the latest articles, design
              trends, and development insights delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-sm flex-col gap-2 pt-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border/40 text-foreground placeholder:text-muted-foreground focus:ring-primary/50 flex-1 rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-8 text-sm md:flex-row">
            <p>© 2025 Design Blog. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlogCard({
  title,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createdAt,
  readTime,
  image,
  author,
  category,
  className,
  ...props
}: React.ComponentProps<"a"> & BlogType) {
  return (
    <a
      className={cn(
        "group border-border/60 hover:border-primary/40 flex flex-col gap-4 overflow-hidden rounded-xl border transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div className="bg-muted h-48 overflow-hidden">
        <LazyImage
          alt={title}
          className="transition-transform duration-500 group-hover:scale-110"
          containerClassName="w-full h-full"
          fallback="https://placehold.co/640x360?text=fallback-image"
          inView={false}
          ratio={16 / 9}
          src={image}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4">
        <Badge variant="secondary" className="w-fit">
          {category}
        </Badge>
        <h3 className="text-foreground group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3 flex-1 text-sm">
          {description}
        </p>

        <div className="text-muted-foreground border-border/40 flex items-center gap-2 border-t pt-2 text-xs">
          <span className="truncate">{author}</span>
          <span>•</span>
          <span className="whitespace-nowrap">{readTime} read</span>
        </div>
      </div>
    </a>
  )
}

function BlogCardCompact({
  title,
  description,
  createdAt,
  readTime,
  image,
  author,
  category,
  className,
  ...props
}: React.ComponentProps<"a"> & BlogType) {
  return (
    <a
      className={cn(
        "group hover:border-border/60 hover:bg-muted/40 flex flex-col gap-3 rounded-lg border border-transparent p-3 transition-all",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div className="bg-muted flex h-20 w-20 shrink-0 overflow-hidden rounded-lg">
          <LazyImage
            alt={title}
            className="transition-transform duration-500 group-hover:scale-110"
            containerClassName="w-full h-full"
            fallback="/placeholder.svg"
            inView={false}
            ratio={1}
            src={image}
          />
        </div>

        <div className="min-w-0 flex-1">
          <Badge variant="outline" className="mb-2 text-xs">
            {category}
          </Badge>
          <h4 className="text-foreground group-hover:text-primary line-clamp-2 text-sm font-semibold transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground mt-1 text-xs">{readTime} read</p>
        </div>
      </div>
    </a>
  )
}
