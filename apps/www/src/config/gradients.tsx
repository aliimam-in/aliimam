import type { Pattern } from "@/src/types/pattern"

export const gradientPatterns: Pattern[] = [
  {
    id: "gradient-01",
    name: "Top Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 20%, transparent 50%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-02",
    name: "Bottom Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 80%, transparent 50%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-03",
    name: "Center Burst",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 600px at 50% 300px, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-04",
    name: "Top Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-05",
    name: "Left Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 0% 50%, transparent 50%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-06",
    name: "Right Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 100% 50%, transparent 50%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-07",
    name: "Top Left Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-08",
    name: "Top Right Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 100% 0%, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-09",
    name: "Bottom Left Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 100%, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-10",
    name: "Bottom Right Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 100% 100%, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-11",
    name: "Bottom Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-12",
    name: "Left Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-13",
    name: "Right Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 50%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-14",
    name: "Center Radial",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-15",
    name: "Diagonal TL",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-16",
    name: "Diagonal TR",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(225deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-17",
    name: "Diagonal BL",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(45deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-18",
    name: "Diagonal BR",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(315deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-19",
    name: "Top Fade",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-20",
    name: "Bottom Fade",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, var(--primary) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-21",
    name: "Dual Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 0% 0%, var(--primary), transparent 75%),
              radial-gradient(ellipse 60% 60% at 100% 100%, var(--primary), transparent 75%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-22",
    name: "Dual Sides",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at 0% 50%, var(--primary), transparent 75%),
              radial-gradient(ellipse 50% 80% at 100% 50%, var(--primary), transparent 75%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-23",
    name: "Dual Top Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary), transparent 75%),
              radial-gradient(ellipse 80% 50% at 50% 100%, var(--primary), transparent 75%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-24",
    name: "Cross Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 0% 100%, var(--primary), transparent 75%),
              radial-gradient(ellipse 60% 60% at 100% 0%, var(--primary), transparent 75%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-25",
    name: "Four Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 0% 0%, var(--primary), transparent 75%),
              radial-gradient(ellipse 50% 50% at 100% 0%, var(--primary), transparent 75%),
              radial-gradient(ellipse 50% 50% at 0% 100%, var(--primary), transparent 75%),
              radial-gradient(ellipse 50% 50% at 100% 100%, var(--primary), transparent 75%)
            `,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-26",
    name: "Top Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% 0%, var(--primary), transparent 75%),
              linear-gradient(180deg, var(--primary) 0%, transparent 40%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-27",
    name: "Wide Arc",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 80% at 50% -20%, var(--primary), transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-28",
    name: "Deep Arc",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 80% at 50% 120%, var(--primary), transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-29",
    name: "Spotlight Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 0px, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-30",
    name: "Spotlight Center",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 450px at 50% 50%, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-31",
    name: "Spotlight Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 100%, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-32",
    name: "Spotlight Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 0% 50%, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-33",
    name: "Spotlight Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 100% 50%, var(--primary), transparent)`,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-34",
    name: "Horizon",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 30% 50% at 50% 50%, var(--primary), transparent 200%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-35",
    name: "Soft Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 80% at 50% 0%, var(--primary) 0%, transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-36",
    name: "Halo",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 30% at 50% 50%, var(--primary) 10%, transparent 100%)
            `,
            opacity: 0.5,
          }}
        />
      )
    },
  },
  {
    id: "gradient-37",
    name: "Top Left Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 0% 10%, var(--primary), transparent 75%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-38",
    name: "Top Right Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 100% 10%, var(--primary), transparent 75%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-39",
    name: "Bottom Left Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 0% 90%, var(--primary), transparent 75%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-40",
    name: "Bottom Right Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 100% 90%, var(--primary), transparent 75%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-41",
    name: "Inward Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 0%, transparent 40%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-42",
    name: "Inward Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, transparent 40%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-43",
    name: "Inward Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 0% 50%, transparent 40%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-44",
    name: "Inward Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 100% 50%, transparent 40%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-45",
    name: "Outer Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-46",
    name: "Top Strip",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, var(--primary) 0%, transparent 35%),
              radial-gradient(ellipse 100% 40% at 50% 0%, var(--primary), transparent 80%)
            `,
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-47",
    name: "Center Column",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 100% at 50% 50%, var(--primary), transparent 80%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-48",
    name: "Wide Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 70% at 50% 0%, var(--primary), transparent 75%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-49",
    name: "Offset Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 20% 30%, transparent 45%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-50",
    name: "Offset Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 80% 30%, transparent 45%, var(--primary) 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },
  {
    id: "gradient-51",
    name: "Conic Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, var(--primary) 60deg, transparent 120deg, var(--primary) 180deg, transparent 240deg, var(--primary) 300deg, transparent 360deg)",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
            opacity: 0.5,
          }}
        />
      )
    },
  },
]
