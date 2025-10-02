import { type Registry } from "shadcn/registry"

export const components: Registry["items"] = [ 
  {
    name: "gradient-mesh",
    type: "registry:component",
    dependencies: ["ogl"],
    files: [
      {
        path: "components/gradient-mesh.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "gradient-wave",
    type: "registry:component", 
    files: [
      {
        path: "components/gradient-wave.tsx",
        type: "registry:component",
      },
    ],
  },
]