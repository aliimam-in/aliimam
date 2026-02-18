import { type Registry } from "shadcn/schema"

export const pages: Registry["items"] = [
  {
    name: "home-01",
    description: "A simple home page.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "pages/home/home-01/page.tsx",
        target: "app/home/page.tsx",
        type: "registry:page",
      },
      {
        path: "pages/home/home-01/layout/header.tsx",
        target: "layout/header.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/layout/footer.tsx",
        target: "layout/footer.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/layout/theme.tsx",
        target: "layout/theme.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/deploy.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/gateway.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/connected.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/ovservality.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/ready.tsx",
        type: "registry:component",
      },
      {
        path: "pages/home/home-01/components/scale.tsx",
        type: "registry:component",
      },
    ],
    categories: ["home"],
    meta: {
      iframeHeight: "3300px",
    },
  },
  {
    name: "about-01",
    description: "A simple about page.",
    dependencies: ["@paper-design/shaders-react"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "pages/about/about-01/page.tsx",
        target: "app/about/page.tsx",
        type: "registry:page",
      },
      {
        path: "pages/about/about-01/components/connect.tsx",
        type: "registry:component",
      },
      {
        path: "pages/about/about-01/components/create.tsx",
        type: "registry:component",
      },
      {
        path: "pages/about/about-01/components/journey.tsx",
        type: "registry:component",
      },
      {
        path: "pages/about/about-01/components/page-header.tsx",
        type: "registry:component",
      },
      {
        path: "pages/about/about-01/components/me.tsx",
        type: "registry:component",
      },
    ],
    categories: ["about"],
    meta: {
      iframeHeight: "2450px",
    },
  },
  {
    name: "landing-01",
    description: "A simple landing page.",
    dependencies: [""],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "pages/landing/landing-01/page.tsx",
        target: "app/landing/page.tsx",
        type: "registry:page",
      },
      {
        path: "pages/landing/landing-01/components/bento-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/cta-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/documentation-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/faq-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/footer-section.tsx",
        target: "layout/footer.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/feature-cards.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/header.tsx",
        target: "layout/header.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/hero-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/logo-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/pricing-section.tsx",
        type: "registry:component",
      },
      {
        path: "pages/landing/landing-01/components/testimonials-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["landing"],
    meta: {
      iframeHeight: "3000px",
    },
  },
  {
    name: "blogs-01",
    description: "A simple blogs page.",
    dependencies: ["motion/react"],
    registryDependencies: ["aspect-ratio", "badge"],
    type: "registry:block",
    files: [
      {
        path: "pages/blogs/blogs-01/page.tsx",
        target: "app/blogs/page.tsx",
        type: "registry:page",
      },
      {
        path: "pages/blogs/blogs-01/components/blog-page.tsx",
        type: "registry:component",
      },
      {
        path: "pages/blogs/blogs-01/components/lazy-image.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blogs"],
    meta: {
      iframeHeight: "2800px",
    },
  },
  {
    name: "contact-us-01",
    description: "A simple contact-us page.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "textarea"],
    type: "registry:block",
    files: [
      {
        path: "pages/contact-us/contact-us-01/page.tsx",
        target: "app/contact-us/page.tsx",
        type: "registry:page",
      },
    ],
    categories: ["contact-us"],
    meta: {
      iframeHeight: "2300px",
    },
  },
]
