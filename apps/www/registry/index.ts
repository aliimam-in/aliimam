import {
  registryIndexSchema,
  RegistryItem,
  type Registry,
} from "shadcn/registry";

import { examples } from "@/registry/registry-examples";
import { blocks } from "@/registry/registry-blocks";
import { lib } from "@/registry/registry-lib";
import { ui } from "@/registry/registry-ui";

const DEPRECATED_ITEMS = [""];

const DEFAULT: RegistryItem = {
  name: "index",
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
};

export const registry = {
  name: "aliimam",
  homepage: "https://aliimam.in",
  items: registryIndexSchema.parse(
    [DEFAULT, ...ui, ...examples, ...blocks, ...lib].filter((item) => {
      return !DEPRECATED_ITEMS.includes(item.name);
    }),
  ),
} satisfies Registry;