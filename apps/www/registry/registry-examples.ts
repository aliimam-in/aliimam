import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "button-demo",
    type: "registry:example",
    title: "Button Demo",
    description:
      "Example showing a spotlight effect that follows your mouse cursor and highlights borders on hover.",
    registryDependencies: ["@aliimam/button"],
    files: [
      {
        path: "example/button-demo.tsx",
        type: "registry:example",
      },
    ],
  }
];