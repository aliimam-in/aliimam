import { getAllBlocks } from "./blocks" 
import { gridPatterns } from "../config/patterns"

export const registryCategories = [
  {
    name: "Header",
    slug: "header",
    hidden: false,
  },
  {
    name: "Footer",
    slug: "footer",
    hidden: false,
  },
  {
    name: "Hero",
    slug: "hero",
    hidden: false,
  },
  {
    name: "Logos",
    slug: "logos",
    hidden: false,
  },
  {
    name: "Bento",
    slug: "bento",
    hidden: false,
  },
  {
    name: "Feature",
    slug: "feature",
    hidden: false,
  },
  {
    name: "Book Demo",
    slug: "book-demo",
    hidden: false,
  },
  {
    name: "Download",
    slug: "download",
    hidden: false,
  },
  {
    name: "CTA",
    slug: "cta",
    hidden: false,
  },
  {
    name: "Pricing",
    slug: "pricing",
    hidden: false,
  },
  {
    name: "Stats",
    slug: "stats",
    hidden: false,
  },
  {
    name: "Login",
    slug: "login",
    hidden: false,
  },
  {
    name: "Chat",
    slug: "chat",
    hidden: true,
  },
  {
    name: "Dashboard",
    slug: "dashboard",
    hidden: true,
  },
  {
    name: "Testimonials",
    slug: "testimonials",
    hidden: false,
  },
  {
    name: "FAQ",
    slug: "faq",
    hidden: false,
  },
]

export const pagesCategories = [
  {
    name: "Home",
    slug: "home",
    hidden: false,
  },
  {
    name: "Landing",
    slug: "landing",
    hidden: false,
  },
  {
    name: "Blogs",
    slug: "blogs",
    hidden: false,
  },
  {
    name: "About",
    slug: "about",
    hidden: false,
  },
  {
    name: "Contact Us",
    slug: "contact-us",
    hidden: false,
  },
]

export const iconCategories = [
  {
    name: "Logos",
    slug: "logos",
    hidden: false,
  }, 
  {
    name: "Vectors",
    slug: "vectors",
    hidden: false,
  }, 
]

export const navItems = [
  {
    href: "/docs/components",
    label: "Components",
    new: false,
  },
  {
    href: "/blocks",
    label: "Blocks",
    new: false,
  },
  {
    href: "/pages",
    label: "Pages",
    new: true,
  },
  {
    href: "/patterns",
    label: "Patterns",
    new: false,
  },
  {
    href: "/icons",
    label: "Icons",
    new: true,
  },
]

export const MorenavItems = [
  {
    label: "Resources",
    items: [
      {
        title: "AI",
        href: "/ai",
        description: "Hi, My name is Ali Imam, Know more about me.",
      },
      {
        title: "Pricing",
        href: "/pricing",
        description:
          "Simple and transparent pricing plans for individuals and teams.",
      },
      {
        title: "Blogs",
        href: "/blogs",
        description:
          "Insights, tutorials, and deep dives into modern UI and design systems.",
      },
      {
        title: "Works",
        href: "/works",
        description:
          "Explore our latest projects and real-world design implementations.",
      },
      {
        title: "Logos",
        href: "/logos",
        description:
          "Carefully crafted brand logos ready for modern digital products.",
      },
      {
        title: "Backgrounds",
        href: "/backgrounds",
        description:
          "High-quality background patterns and gradients for stunning interfaces.",
      },
      {
        title: "Docs",
        href: "/docs",
        description:
          "Comprehensive documentation to help you get started quickly.",
      },
      {
        title: "Templates",
        href: "/templates",
        description:
          "Production-ready templates to launch your next project faster.",
      },
    ],
  },
]

export const PATTERN_CATEGORIES = [
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "mesh", label: "Mesh" },
  { id: "layered", label: "Layered" },
  { id: "lines", label: "Lines" },
  { id: "dots", label: "Dots" },
  { id: "abstract", label: "Abstract" },
  { id: "favourites", label: "Favourites" },
] as const

export const categories = PATTERN_CATEGORIES

export type CategoryId = (typeof PATTERN_CATEGORIES)[number]["id"]

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const

export type UnifiedCategory = {
  name: string
  slug: string
  hidden: boolean
  type: "block" | "page" | "icon" | "pattern"
  count: number
}

export async function getRegistryCategoriesWithCount() {
  const blocks = await getAllBlocks()

  const counter: Record<string, number> = {}

  // ✅ Count registry blocks
  for (const block of blocks) {
    if (!block.categories) continue

    for (const category of block.categories) {
      counter[category] = (counter[category] || 0) + 1
    }
  }

  // ✅ Count patterns separately
  for (const pattern of gridPatterns) {
    counter[pattern.category] =
      (counter[pattern.category] || 0) + 1
  }

  const allCategories = [
    ...registryCategories.map((c) => ({
      ...c,
      type: "block" as const,
    })),
    ...pagesCategories.map((c) => ({
      ...c,
      type: "page" as const,
    })),
    ...iconCategories.map((c) => ({
      ...c,
      type: "icon" as const,
    })),
    ...PATTERN_CATEGORIES.map((c) => ({
      name: c.label,
      slug: c.id,
      hidden: false,
      type: "pattern" as const,
    })),
  ]

  return allCategories
    .filter((c) => !c.hidden)
    .map((category) => ({
      ...category,
      count: counter[category.slug] || 0,
    }))
}