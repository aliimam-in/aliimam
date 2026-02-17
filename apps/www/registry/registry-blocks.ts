import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "header-01",
    description: "A simple header section.",
    type: "registry:block",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "navigation-menu", "toggle"],
    files: [
      {
        path: "blocks/header/header-01/page.tsx",
        target: "components/header-01.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-01/components/menus.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-02",
    description: "A simple header section.",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: [
      "button",
      "command",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-02/page.tsx",
        target: "components/header-02.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-02/components/search.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-03",
    description: "A simple header section.",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: [
      "button",
      "navigation-menu",
      "toggle",
      "accordion",
      "sheet",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-03/page.tsx",
        target: "components/header-03.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-03/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-03/components/theme-switch.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-04",
    description: "A simple header section.",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "command", "toggle", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-04/page.tsx",
        target: "components/header-04.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/theme-switch.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-04/components/search.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-05",
    description: "A simple header section.",
    dependencies: ["lucide-react"],
    registryDependencies: ["command", "sheet"],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-05/page.tsx",
        target: "components/header-05.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/menus.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/phone-menus.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/navigation.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-05/components/search.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-06",
    description: "A simple header section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons", "next-themes"],
    registryDependencies: [
      "navigation-menu",
      "avatar",
      "dropdown-menu",
      "button",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/header/header-06/page.tsx",
        target: "components/header-06.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-06/components/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header/header-06/components/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "hero-01",
    description: "A simple hero section.",
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-01/hero.tsx",
        target: "components/hero-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "hero-02",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos"],
    registryDependencies: ["button", "marquee"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-02/hero.tsx",
        target: "components/hero-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "770px",
    },
  },
  {
    name: "hero-03",
    description: "A simple hero section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["separator"],
    files: [
      {
        path: "blocks/hero/hero-03/hero.tsx",
        target: "components/hero-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "850px",
    },
  },
  {
    name: "hero-04",
    description: "A simple hero section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-04/hero.tsx",
        target: "components/hero-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "950px",
    },
  },
  {
    name: "hero-05",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["marquee", "button", "badge", "card", "marquee"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-05/hero.tsx",
        target: "components/hero-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "hero-06",
    description: "A simple hero section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "dot-pattern"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-06/hero.tsx",
        target: "components/hero-06.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "850px",
    },
  },
  {
    name: "hero-07",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "grid-pattern"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-07/hero.tsx",
        target: "components/hero-07.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-07/gallery.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "hero-08",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "gradient-bars"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-08/hero.tsx",
        target: "components/hero-08.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-08/button-rotate.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "hero-09",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "attraction"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-09/hero.tsx",
        target: "components/hero-09.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-09/skills.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "hero-10",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "border-glow"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-10/hero.tsx",
        target: "components/hero-10.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "hero-11",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-11/hero.tsx",
        target: "components/hero-11.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "900px",
    },
  },
  {
    name: "hero-12",
    description: "A simple hero section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-12/hero.tsx",
        target: "components/hero-12.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "900px",
    },
  },
  {
    name: "book-demo-01",
    description: "A simple book-demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "label"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-01/book-demo.tsx",
        target: "components/book-demo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["book-demo"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "book-demo-02",
    description: "A simple book-demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "label", "select", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-02/book-demo.tsx",
        target: "components/book-demo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["book-demo"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "book-demo-03",
    description: "A simple book-demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "input", "label", "select", "textarea"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-03/book-demo.tsx",
        target: "components/book-demo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["book-demo"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "book-demo-04",
    description: "A simple book-demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: [
      "button",
      "input",
      "label",
      "checkbox",
      "textarea",
      "separator",
    ],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-04/book-demo.tsx",
        target: "components/book-demo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["book-demo"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "cta-01",
    description: "A simple cta section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/cta/cta-01/cta.tsx",
        target: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "cta-02",
    description: "A simple cta section.",
    dependencies: ["@aliimam/logos"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/cta/cta-02/cta.tsx",
        target: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      iframeHeight: "820px",
    },
  },
  {
    name: "download-01",
    description: "A simple download section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/download/download-01/download.tsx",
        target: "components/download.tsx",
        type: "registry:component",
      },
    ],
    categories: ["download"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "download-02",
    description: "A simple download section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "input"],
    type: "registry:block",
    files: [
      {
        path: "blocks/download/download-02/download.tsx",
        target: "components/download.tsx",
        type: "registry:component",
      },
    ],
    categories: ["download"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "feature-01",
    description: "A simple feature demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/feature/feature-01/page.tsx",
        target: "components/feature-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "feature-02",
    description: "A simple feature demo section.",
    registryDependencies: ["dot-pattern"],
    type: "registry:block",
    files: [
      {
        path: "blocks/feature/feature-02/page.tsx",
        target: "components/feature-02.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/feature/feature-02/timeline.tsx",
        target: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "feature-03",
    description: "A simple feature demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["shine-border", "button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/feature/feature-03/page.tsx",
        target: "components/feature-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "footer-01",
    description: "A simple footer.",
    dependencies: ["@aliimam/icons", "@aliimam/logos", "next-themes"],
    type: "registry:block",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "blocks/footer/footer-01/page.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/footer.tsx",
        target: "layout/footer/footer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-02",
    description: "A simple footer.",
    dependencies: ["@aliimam/icons", "@aliimam/logos", "next-themes"],
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-02/demo.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-02/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-03",
    description: "A simple footer.",
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-03/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "400px",
    },
  },
  {
    name: "footer-04",
    description: "A simple footer.",
    dependencies: ["@aliimam/icons", "@aliimam/logos", "next-themes"],
    registryDependencies: ["button", "switch", "select", "input"],
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-04/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-04/theme.tsx",
        target: "layout/footer/theme.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-05",
    description: "A simple footer.",
    dependencies: ["@aliimam/logos"],
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-05/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "footer-06",
    description: "A simple footer.",
    dependencies: ["@aliimam/logos"],
    type: "registry:block",
    files: [
      {
        path: "blocks/footer/footer-06/footer.tsx",
        target: "layout/footer/index.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "logos-01",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/logos/logos-01/page.tsx",
        target: "components/logos-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-02",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/logos/logos-02/page.tsx",
        target: "components/logos-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-03",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/logos/logos-03/page.tsx",
        target: "components/logos-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-04",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/logos/logos-04/page.tsx",
        target: "components/logos-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "logos-05",
    description: "A simple logos section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/logos/logos-05/page.tsx",
        target: "components/logos-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logos"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "bento-grid-01",
    description: "A simple bento section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos", "recharts"],
    registryDependencies: [
      "chart",
      "checkbox",
      "field",
      "calendar",
      "button",
      "bento",
      "dot-pattern",
      "marquee",
    ],
    files: [
      {
        path: "blocks/bento/bento-01/bento.tsx",
        target: "components/bento.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-01/empty-avatar.tsx",
        target: "components/empty-avatar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-01/hear.tsx",
        target: "components/hear.tsx",
        type: "registry:component",
      },
    ],
    categories: ["bento"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "bento-grid-02",
    description: "A simple bento section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos", "@aliimam/icon", "recharts"],
    registryDependencies: [
      "chart",
      "checkbox",
      "table",
      "badge",
      "card",
      "button",
      "bento",
      "device",
      "gradient-bars",
    ],
    files: [
      {
        path: "blocks/bento/bento-02/bento.tsx",
        target: "components/bento.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-02/chart-area.tsx",
        target: "components/chart-area.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-02/checkbox-table.tsx",
        target: "components/checkbox-table.tsx",
        type: "registry:component",
      },
    ],
    categories: ["bento"],
    meta: {
      iframeHeight: "950px",
    },
  },
  {
    name: "bento-grid-03",
    description: "A simple bento section.",
    type: "registry:block",
    registryDependencies: ["grid-pattern", "button", "bento"],
    files: [
      {
        path: "blocks/bento/bento-03/bento.tsx",
        target: "components/bento.tsx",
        type: "registry:component",
      },
    ],
    categories: ["bento"],
    meta: {
      iframeHeight: "850px",
    },
  },
  {
    name: "bento-grid-04",
    description: "A simple bento section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["button", "bento"],
    files: [
      {
        path: "blocks/bento/bento-04/bento.tsx",
        target: "components/bento.tsx",
        type: "registry:component",
      },
    ],
    categories: ["bento"],
    meta: {
      iframeHeight: "1150px",
    },
  },
  {
    name: "bento-grid-05",
    description: "A simple bento section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos", "@aliimam/icons", "recharts"],
    registryDependencies: [
      "button",
      "bento",
      "orb",
      "card",
      "chart",
      "bar-visualizer",
      "avatar",
      "field",
      "toggle-group",
      "message",
      "response",
    ],
    files: [
      {
        path: "blocks/bento/bento-05/bento.tsx",
        target: "components/bento.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-05/analytics.tsx",
        target: "components/analytics.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-05/bar-visual.tsx",
        target: "components/bar-visual.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-05/contributers.tsx",
        target: "components/contributers.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-05/font-weight.tsx",
        target: "components/font-weight.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/bento/bento-05/message.tsx",
        target: "components/message.tsx",
        type: "registry:component",
      },
    ],
    categories: ["bento"],
    meta: {
      iframeHeight: "750px",
    },
  },
  {
    name: "stats-01",
    description: "A simple stats section.",
    type: "registry:block",
    registryDependencies: ["counter-number"],
    files: [
      {
        path: "blocks/stats/stats-01/stats.tsx",
        target: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "stats-02",
    description: "A simple stats section.",
    type: "registry:block",
    registryDependencies: ["gauge"],
    files: [
      {
        path: "blocks/stats/stats-02/stats.tsx",
        target: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "stats-03",
    description: "A simple stats section.",
    type: "registry:block",
    registryDependencies: ["counter-number"],
    files: [
      {
        path: "blocks/stats/stats-03/stats.tsx",
        target: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "stats-04",
    description: "A simple stats section.",
    type: "registry:block",
    registryDependencies: ["counter-number"],
    files: [
      {
        path: "blocks/stats/stats-04/stats.tsx",
        target: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "stats-05",
    description: "A simple stats section.",
    type: "registry:block",
    registryDependencies: ["gauge"],
    files: [
      {
        path: "blocks/stats/stats-05/stats.tsx",
        target: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "pricing-01",
    description: "A simple pricing section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "separator"],
    files: [
      {
        path: "blocks/pricing/pricing-01/pricing.tsx",
        target: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "pricing-02",
    description: "A simple pricing section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    files: [
      {
        path: "blocks/pricing/pricing-02/page.tsx",
        target: "components/pricing-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "pricing-03",
    description: "A simple pricing section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "tabs", "badge"],
    files: [
      {
        path: "blocks/pricing/pricing-03/pricing.tsx",
        target: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "pricing-04",
    description: "A simple pricing section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/pricing/pricing-04/pricing.tsx",
        target: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "login-01",
    description: "A simple login page.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/login/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "login-02",
    description: "A simple login page.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "field"],
    files: [
      {
        path: "blocks/login/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/login/login-02/components/login-form.tsx",
        target: "components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "testimonials-01",
    description: "A simple testimonials section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/testimonials/testimonials-01/testimonial.tsx",
        target: "components/testimonial.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "testimonials-02",
    description: "A simple testimonials section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    files: [
      {
        path: "blocks/testimonials/testimonials-02/testimonial.tsx",
        target: "components/testimonial.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "testimonials-03",
    description: "A simple testimonials section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/testimonials/testimonials-03/testimonial.tsx",
        target: "components/testimonial.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    meta: {
      iframeHeight: "700px",
    },
  },
  {
    name: "testimonials-04",
    description: "A simple testimonials section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    registryDependencies: ["separator", "marquee"],
    files: [
      {
        path: "blocks/testimonials/testimonials-04/testimonial.tsx",
        target: "components/testimonial.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "testimonials-05",
    description: "A simple testimonials section.",
    type: "registry:block",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "blocks/testimonials/testimonials-05/testimonial.tsx",
        target: "components/testimonial.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "faq-01",
    description: "A simple faq section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faq/faq-01/faq.tsx",
        target: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "faq-02",
    description: "A simple faq section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faq/faq-02/faq.tsx",
        target: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    meta: {
      iframeHeight: "600px",
    },
  },
]
