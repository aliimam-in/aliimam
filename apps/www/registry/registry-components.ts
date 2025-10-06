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
  {
    name: "blur",
    type: "registry:component", 
    files: [
      {
        path: "components/blur.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "marquee",
    type: "registry:component", 
    files: [
      {
        path: "components/marquee.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "device",
    type: "registry:component", 
    files: [
      {
        path: "components/device.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "render-canvas",
    type: "registry:component", 
    files: [
      {
        path: "components/render-canvas.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "shader-ripple",
    type: "registry:component", 
    dependencies: ["three"],
    files: [
      {
        path: "components/shader-ripple.tsx",
        type: "registry:component",
      },
    ],
  },
]