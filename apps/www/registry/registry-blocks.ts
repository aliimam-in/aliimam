import { type Registry } from "shadcn/registry";

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
    categories: ["header", "navbar"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-02",
    description: "A simple header section.",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "command", "navigation-menu", "toggle", "accordion", "sheet"],
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
    categories: ["header", "navbar"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-03",
    description: "A simple header section.",
    dependencies: ["next-themes", "@aliimam/icons"],
    registryDependencies: ["button", "navigation-menu", "toggle", "accordion", "sheet"],
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
    categories: ["header", "navbar"],
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
    categories: ["header", "navbar"],
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
    categories: ["header", "navbar"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "header-06",
    description: "A simple header section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons", "next-themes"],
    registryDependencies: ["navigation-menu", "avatar", "dropdown-menu", "button"],
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
      } 
    ],
    categories: ["header", "navbar"],
    meta: {
      iframeHeight: "500px",
    },
  },
  {
    name: "hero-01",
    description: "A simple hero section.",
    registryDependencies: ["button", "gradient-mesh"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-01/page.tsx",
        target: "components/hero-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
     
  },
  {
    name: "hero-02",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos"],
    registryDependencies: ["button", "gradient-wave", "marquee"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-02/page.tsx",
        target: "components/hero-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    
  },
  {
    name: "hero-03",
    description: "A simple hero section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-03/page.tsx",
        target: "components/hero-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    
  },
  {
    name: "hero-04",
    description: "A simple hero section.",
    dependencies: ["@aliimam/icons"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-04/page.tsx",
        target: "components/hero-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    
  },
  {
    name: "hero-05",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["button", "badge", "card", "marquee", "blur"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-05/page.tsx",
        target: "components/hero-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    
  },
  {
    name: "hero-06",
    description: "A simple hero section.",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "dot-pattern", "render-canvas"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-06/page.tsx",
        target: "components/hero-06.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-06/components/hero.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"], 
  },
  {
    name: "hero-07",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "grid-pattern"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-07/page.tsx",
        target: "components/hero-07.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-07/components/gallery.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"], 
  },
  {
    name: "hero-08",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "gradient-bars"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-08/page.tsx",
        target: "components/hero-08.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-08/components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-08/components/button-rotate.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"], 
  },
  {
    name: "hero-09",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "shader-rgb"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-09/page.tsx",
        target: "components/hero-09.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-09/components/hero.tsx",
        type: "registry:component",
      }
    ],
    categories: ["hero"], 
  },
  {
    name: "hero-10",
    description: "A simple hero section.",
    dependencies: ["framer-motion"],
    registryDependencies: ["button", "shader-void"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-10/page.tsx",
        target: "components/hero-10.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-10/components/hero.tsx",
        type: "registry:component",
      }
    ],
    categories: ["hero"], 
  },
  {
    name: "hero-11",
    description: "A simple hero section.",
    dependencies: ["@aliimam/logos", "@aliimam/icons"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-11/page.tsx",
        target: "components/hero-11.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/hero/hero-11/components/hero.tsx",
        type: "registry:component",
      }
    ],
    categories: ["hero"], 
  },
  {
    name: "book-demo-01",
    description: "A simple book demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "label"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-01/page.tsx",
        target: "components/book-demo-01.tsx",
        type: "registry:component",
      }
    ],
    categories: ["book-demo"], 
  },
  {
    name: "book-demo-02",
    description: "A simple book demo section.",
    dependencies: ["@aliimam/icons"],
    registryDependencies: ["button", "input", "label", "select", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-02/page.tsx",
        target: "components/book-demo-02.tsx",
        type: "registry:component",
      }
    ],
    categories: ["book-demo"], 
  },
  {
    name: "book-demo-03",
    description: "A simple book demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "input", "label", "select", "textarea"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-03/page.tsx",
        target: "components/book-demo-03.tsx",
        type: "registry:component",
      }
    ],
    categories: ["book-demo"], 
  },
  {
    name: "book-demo-04",
    description: "A simple book demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "input", "label", "select", "textarea", "checkbox", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/book-demo/book-demo-04/page.tsx",
        target: "components/book-demo-04.tsx",
        type: "registry:component",
      }
    ],
    categories: ["book-demo"], 
  },
  {
    name: "download-01",
    description: "A simple download demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "blocks/download/download-01/page.tsx",
        target: "components/download-01.tsx",
        type: "registry:component",
      }
    ],
    categories: ["download"], 
  },
  {
    name: "download-02",
    description: "A simple download demo section.",
    dependencies: ["@aliimam/logos"],
    registryDependencies: ["button", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/download/download-02/page.tsx",
        target: "components/download-02.tsx",
        type: "registry:component",
      }
    ],
    categories: ["download"], 
  },
  {
    name: "cta-01",
    description: "A simple cta demo section.",
    dependencies: ["@aliimam/icons", "@aliimam/logos"],
    registryDependencies: ["button", "separator"],
    type: "registry:block",
    files: [
      {
        path: "blocks/cta/cta-01/page.tsx",
        target: "components/cta-01.tsx",
        type: "registry:component",
      }
    ],
    categories: ["cta"], 
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
      }
    ],
    categories: ["feature"], 
  },
  {
    name: "dashboard-01",
    type: "registry:block",
    description: "A dashboard with sidebar, charts and data table.",
    dependencies: [
      "@dnd-kit/core",
      "@dnd-kit/modifiers",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@tanstack/react-table",
      "zod",
    ],
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "chart",
      "card",
      "select",
      "tabs",
      "table",
      "toggle-group",
      "badge",
      "button",
      "checkbox",
      "dropdown-menu",
      "drawer",
      "input",
      "avatar",
      "sheet",
      "sonner",
    ],
    files: [
      {
        path: "blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard-01/page.tsx",
      },
      {
        path: "blocks/dashboard-01/components/app-header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/data.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/home-content.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/types.ts",
        type: "registry:component",
      },
    ],
    categories: ["dashboard"],
    meta: {
      iframeHeight: "1000px",
    },
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login/login-01/page.tsx",
        target: "app/login-01/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-02",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login/login-02/page.tsx",
        target: "app/login-02/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login/login-02/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-03",
    description: "A simple login form.",
     dependencies: ["@aliimam/icons"],
    type: "registry:block",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/login/login-03/page.tsx",
        target: "app/login-03/page.tsx",
        type: "registry:page",
      }
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "stats-01",
    description: "A simple stats.",
     dependencies: ["@aliimam/icons"],
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/stats/stats-01/page.tsx",
        target: "app/stats-01/page.tsx",
        type: "registry:component",
      }
    ],
    categories: ["numbers", "stats"],
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
        target: "app/footer-01/index.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/footer.tsx", 
        type: "registry:component",
      },
      {
        path: "blocks/footer/footer-01/components/theme.tsx", 
        type: "registry:component",
      }
    ],
    categories: ["footer"],
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
    categories: ["client", "logos"],
    meta: {
      iframeHeight: "600px",
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
    categories: ["client", "logos"],
    meta: {
      iframeHeight: "600px",
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
    categories: ["client", "logos"],
    meta: {
      iframeHeight: "600px",
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
    categories: ["client", "logos"],
    meta: {
      iframeHeight: "600px",
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
    categories: ["client", "logos"],
    meta: {
      iframeHeight: "600px",
    },
  },
  {
    name: "pricing-01",
    description: "A simple pricing section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons"],
     registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/pricing/pricing-01/page.tsx",
        target: "components/pricing-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      iframeHeight: "800px",
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
      iframeHeight: "900px",
    },
  },
  {
    name: "connect-01",
    description: "A simple connect section.",
    type: "registry:block",
    dependencies: ["@aliimam/logos"],
    files: [
      {
        path: "blocks/connect/connect-01/page.tsx",
        target: "components/connect-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["connect", "about"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "connect-02",
    description: "A simple connect section.",
    type: "registry:block",
    dependencies: ["@aliimam/icons", "framer-motion", "@aliimam/logos"],
    registryDependencies: ["button", "particle-highlight"],
    files: [
      {
        path: "blocks/connect/connect-02/page.tsx",
        target: "components/connect-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["connect", "about"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "404-01",
    description: "A simple chat section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/404/404-01/page.tsx",
        target: "components/404-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["not-found", "404"],
    meta: {
      iframeHeight: "800px",
    },
  },
  {
    name: "chat-01",
    description: "A simple chat section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/chat/chat-01/page.tsx",
        target: "components/chat-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["chat", "ai"],
    meta: {
      iframeHeight: "800px",
    },
  },
];
