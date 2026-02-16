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
    hidden: false,
  },
  {
    name: "Dashboard",
    slug: "dashboard",
    hidden: false,
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
    name: "Blog",
    slug: "blog",
    hidden: false,
  },
  {
    name: "About",
    slug: "about",
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
    name: "Symbols",
    slug: "symbols",
    hidden: false,
  },
  {
    name: "Vectors",
    slug: "vectors",
    hidden: false,
  },
  {
    name: "Shapes",
    slug: "shapes",
    hidden: false,
  },
]

export const navItems = [
  {
    href: "/ai",
    label: "AI",
    new: false,
  },
  {
    href: "/docs/components",
    label: "Components",
    new: false,
  },
  {
    href: "/blocks",
    label: "Blocks",
    new: true,
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
    new: false,
  },
]

export const MorenavItems = [
  {
    label: "Resources",
    items: [
      {
        title: "Pricing",
        href: "/pricing",
        description: "Reusable components built with Tailwind CSS.",
      },
      {
        title: "Blogs",
        href: "/blogs",
        description: "How to install and structure your app.",
      },
      {
        title: "Works",
        href: "/works",
        description: "How to install and structure your app.",
      },
      {
        title: "Logos",
        href: "/logos",
        description: "How to install and structure your app.",
      },
      {
        title: "Backgrounds",
        href: "/backgrounds",
        description: "How to install and structure your app.",
      },
      {
        title: "Docs",
        href: "/docs",
        description: "How to install and structure your app.",
      },
      {
        title: "Templates",
        href: "/templates",
        description: "How to install and structure your app.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "How to install and structure your app.",
      },
    ],
  },
]

export const PATTERN_CATEGORIES = [ 
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "mesh", label: "Mesh" },
  { id: "layered", label: "Layered" },
  { id: "geometric", label: "Geometric" },
  { id: "decorative", label: "Decorative" },
  { id: "effects", label: "Effects" },
  { id: "abstract", label: "Abstract" },
  { id: "colors", label: "Colors" },
  { id: "favourites", label: "Favourites" },
] as const

export const categories = PATTERN_CATEGORIES

export type CategoryId = (typeof PATTERN_CATEGORIES)[number]["id"]

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const
