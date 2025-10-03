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
    meta: {
      iframeHeight: "900px",
    },
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
    meta: {
      iframeHeight: "900px",
    },
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
    meta: {
      iframeHeight: "900px",
    },
  },
  {
    name: "hero-04",
    description: "A simple hero section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-04/page.tsx",
        target: "components/hero-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "900px",
    },
  },
  {
    name: "hero-05",
    description: "A simple hero section.",
    type: "registry:block",
    files: [
      {
        path: "blocks/hero/hero-05/page.tsx",
        target: "components/hero-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    meta: {
      iframeHeight: "900px",
    },
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
        path: "blocks/login-01/page.tsx",
        target: "app/login-01/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
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
    categories: ["chat", "connect"],
    meta: {
      iframeHeight: "800px",
    },
  },
];
