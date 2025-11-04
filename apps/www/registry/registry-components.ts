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
    name: "book",
    type: "registry:component", 
    files: [
      {
        path: "components/book.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "browser",
    type: "registry:component", 
    files: [
      {
        path: "components/browser.tsx",
        type: "registry:component",
      },
    ],
  }, 
  {
    name: "counter-number",
    type: "registry:component", 
    files: [
      {
        path: "components/counter-number.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "rainbow-effect",
    type: "registry:component", 
    files: [
      {
        path: "components/rainbow-effect.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "award",
    type: "registry:component",
    files: [
      {
        path: "components/award.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "gauge",
    type: "registry:ui",
    files: [
      {
        path: "components/gauge.tsx",
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
  {
    name: "dot-pattern",
    type: "registry:component",  
    files: [
      {
        path: "components/dot-pattern.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "gradient-bars",
    type: "registry:component",  
    files: [
      {
        path: "components/gradient-bars.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "particle-circle",
    type: "registry:component",  
    files: [
      {
        path: "components/particle-circle.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "grid-pattern",
    type: "registry:component",  
    files: [
      {
        path: "components/grid-pattern.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "particle-circle",
    type: "registry:component",  
    files: [
      {
        path: "components/particle-circle.tsx",
        type: "registry:component",
      },
    ],
  }, 
  {
    name: "scroll-progress",
    type: "registry:component",  
    files: [
      {
        path: "components/scroll-progress.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "shader-lines",
    type: "registry:component",  
    files: [
      {
        path: "components/shader-lines.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "shader-rgb",
    type: "registry:component",  
    files: [
      {
        path: "components/shader-rgb.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "shine-border",
    type: "registry:component",  
    files: [
      {
        path: "components/shine-border.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "shader-void",
    type: "registry:component",  
    files: [
      {
        path: "components/shader-void.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "pixelated-grid",
    type: "registry:component",  
    files: [
      {
        path: "components/pixelated-grid.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "fireball",
    type: "registry:component",  
    files: [
      {
        path: "components/fireball.tsx",
        type: "registry:component",
      },
    ],
  }, 
]