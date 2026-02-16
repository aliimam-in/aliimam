import type { Pattern } from "@/src/types/pattern"

export const gridPatterns: Pattern[] = [
  {
    id: "01",
    name: "Top Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 20%, transparent 40%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "02",
    name: "Bottom Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 80%, transparent 40%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "03",
    name: "Center Burst",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "04",
    name: "Top Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "05",
    name: "Left Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 0% 50%, transparent 40%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "06",
    name: "Right Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 100% 50%, transparent 40%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "07",
    name: "Top Left Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "08",
    name: "Top Right Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 100% 0%, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "09",
    name: "Bottom Left Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 100%, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "10",
    name: "Bottom Right Corner",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 120% at 100% 100%, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "11",
    name: "Bottom Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "12",
    name: "Left Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "13",
    name: "Right Ellipse",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 50%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "14",
    name: "Center Radial",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "15",
    name: "Diagonal TL",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "16",
    name: "Diagonal TR",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(225deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "17",
    name: "Diagonal BL",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(45deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "18",
    name: "Diagonal BR",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(315deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "19",
    name: "Top Fade",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "20",
    name: "Bottom Fade",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(0deg, var(--primary) 0%, transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "21",
    name: "Dual Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 0% 0%, var(--primary), transparent 65%),
              radial-gradient(ellipse 60% 60% at 100% 100%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "22",
    name: "Dual Sides",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at 0% 50%, var(--primary), transparent 65%),
              radial-gradient(ellipse 50% 80% at 100% 50%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "23",
    name: "Dual Top Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary), transparent 65%),
              radial-gradient(ellipse 80% 50% at 50% 100%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "24",
    name: "Cross Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 0% 100%, var(--primary), transparent 65%),
              radial-gradient(ellipse 60% 60% at 100% 0%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "25",
    name: "Four Corners",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 0% 0%, var(--primary), transparent 65%),
              radial-gradient(ellipse 50% 50% at 100% 0%, var(--primary), transparent 65%),
              radial-gradient(ellipse 50% 50% at 0% 100%, var(--primary), transparent 65%),
              radial-gradient(ellipse 50% 50% at 100% 100%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "26",
    name: "Top Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% 0%, var(--primary), transparent 65%),
              linear-gradient(180deg, var(--primary) 0%, transparent 30%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "27",
    name: "Wide Arc",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 80% at 50% -20%, var(--primary), transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "28",
    name: "Deep Arc",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 80% at 50% 120%, var(--primary), transparent 60%)",
          }}
        />
      )
    },
  },
  {
    id: "29",
    name: "Spotlight Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 400px at 50% 0px, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "30",
    name: "Spotlight Center",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 350px at 50% 50%, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "31",
    name: "Spotlight Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 400px at 50% 100%, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "32",
    name: "Spotlight Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 400px at 0% 50%, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "33",
    name: "Spotlight Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 400px at 100% 50%, var(--primary), transparent)`,
          }}
        />
      )
    },
  },
  {
    id: "34",
    name: "Horizon",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 40% at 50% 50%, var(--primary), transparent 65%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "35",
    name: "Soft Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 80% at 50% 0%, var(--primary) 0%, transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "36",
    name: "Halo",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 30% at 50% 50%, transparent 40%, var(--primary) 70%, transparent 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "37",
    name: "Top Left Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 0% 10%, var(--primary), transparent 65%)",
          }}
        />
      )
    },
  },
  {
    id: "38",
    name: "Top Right Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 100% 10%, var(--primary), transparent 65%)",
          }}
        />
      )
    },
  },
  {
    id: "39",
    name: "Bottom Left Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 0% 90%, var(--primary), transparent 65%)",
          }}
        />
      )
    },
  },
  {
    id: "40",
    name: "Bottom Right Sweep",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 100% 90%, var(--primary), transparent 65%)",
          }}
        />
      )
    },
  },
  {
    id: "41",
    name: "Inward Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 0%, transparent 30%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "42",
    name: "Inward Bottom",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, transparent 30%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "43",
    name: "Inward Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 0% 50%, transparent 30%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "44",
    name: "Inward Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 100% 50%, transparent 30%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "45",
    name: "Outer Glow",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "46",
    name: "Top Strip",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(180deg, var(--primary) 0%, transparent 25%),
              radial-gradient(ellipse 100% 40% at 50% 0%, var(--primary), transparent 70%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "47",
    name: "Center Column",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 100% at 50% 50%, var(--primary), transparent 70%)",
          }}
        />
      )
    },
  },
  {
    id: "48",
    name: "Wide Top",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 70% at 50% 0%, var(--primary), transparent 65%)",
          }}
        />
      )
    },
  },
  {
    id: "49",
    name: "Offset Left",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 20% 30%, transparent 35%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "50",
    name: "Offset Right",
    category: "gradients",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 80% 30%, transparent 35%, var(--primary) 100%)",
          }}
        />
      )
    },
  },
  {
    id: "51",
    name: "Lavender Dusk",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
              linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "52",
    name: "Arctic Melt",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 5% 10%, rgba(100, 220, 255, 0.45), transparent 58%),
              radial-gradient(ellipse 75% 65% at 80% 20%, rgba(180, 255, 240, 0.50), transparent 60%),
              radial-gradient(ellipse 70% 65% at 20% 85%, rgba(80, 180, 255, 0.38), transparent 62%),
              radial-gradient(ellipse 72% 60% at 90% 88%, rgba(200, 240, 255, 0.48), transparent 60%),
              linear-gradient(160deg, #e8f9ff 0%, #d6f0ff 50%, #e0faf4 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "53",
    name: "Golden Peach",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 6% 6%, rgba(255, 190, 80, 0.44), transparent 58%),
              radial-gradient(ellipse 72% 62% at 78% 28%, rgba(255, 140, 100, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 58% at 12% 82%, rgba(255, 220, 130, 0.40), transparent 62%),
              radial-gradient(ellipse 68% 65% at 88% 90%, rgba(255, 170, 120, 0.45), transparent 60%),
              linear-gradient(175deg, #fff8ec 0%, #ffe8d5 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "54",
    name: "Emerald Haze",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 70% at 7% 12%, rgba(60, 210, 140, 0.40), transparent 60%),
              radial-gradient(ellipse 78% 60% at 82% 22%, rgba(150, 255, 190, 0.48), transparent 62%),
              radial-gradient(ellipse 72% 65% at 18% 80%, rgba(40, 180, 120, 0.35), transparent 58%),
              radial-gradient(ellipse 70% 62% at 90% 85%, rgba(120, 240, 180, 0.42), transparent 60%),
              linear-gradient(165deg, #edfff5 0%, #d8f7ea 50%, #e8fff3 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "55",
    name: "Rose Quartz",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 82% 66% at 10% 8%, rgba(255, 130, 160, 0.42), transparent 60%),
              radial-gradient(ellipse 74% 62% at 76% 30%, rgba(255, 200, 220, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 60% at 14% 82%, rgba(220, 90, 140, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 65% at 90% 90%, rgba(255, 170, 190, 0.45), transparent 62%),
              linear-gradient(180deg, #fff0f4 0%, #ffe4ee 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "56",
    name: "Midnight Bloom",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 8% 10%, rgba(120, 60, 220, 0.50), transparent 58%),
              radial-gradient(ellipse 72% 65% at 80% 25%, rgba(200, 80, 255, 0.40), transparent 62%),
              radial-gradient(ellipse 75% 60% at 15% 80%, rgba(80, 20, 180, 0.45), transparent 60%),
              radial-gradient(ellipse 68% 68% at 88% 88%, rgba(160, 100, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(100, 40, 200, 0.20), transparent 70%),
              linear-gradient(180deg, #1a0a2e 0%, #2d1254 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "57",
    name: "Deep Ocean",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 68% at 6% 8%, rgba(0, 180, 255, 0.45), transparent 60%),
              radial-gradient(ellipse 74% 62% at 78% 28%, rgba(0, 120, 220, 0.40), transparent 62%),
              radial-gradient(ellipse 72% 65% at 18% 82%, rgba(0, 200, 180, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 60% at 90% 88%, rgba(40, 160, 255, 0.44), transparent 62%),
              radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0, 80, 180, 0.25), transparent 70%),
              linear-gradient(180deg, #061528 0%, #0a2040 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "58",
    name: "Sunset Coral",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 5% 5%, rgba(255, 100, 80, 0.48), transparent 58%),
              radial-gradient(ellipse 75% 65% at 75% 25%, rgba(255, 180, 60, 0.52), transparent 60%),
              radial-gradient(ellipse 70% 62% at 15% 82%, rgba(255, 60, 120, 0.42), transparent 62%),
              radial-gradient(ellipse 72% 65% at 90% 88%, rgba(255, 140, 80, 0.45), transparent 60%),
              linear-gradient(160deg, #fff1ec 0%, #ffeae0 50%, #fff0f5 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "59",
    name: "Nebula Dream",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 10%, rgba(255, 80, 180, 0.40), transparent 58%),
              radial-gradient(ellipse 74% 62% at 80% 22%, rgba(120, 60, 255, 0.45), transparent 60%),
              radial-gradient(ellipse 72% 65% at 18% 80%, rgba(200, 40, 255, 0.35), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 90%, rgba(80, 180, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 60% 50% at 50% 45%, rgba(255, 120, 200, 0.22), transparent 68%),
              linear-gradient(180deg, #150825 0%, #1e0e38 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "60",
    name: "Sage Whisper",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 84% 66% at 8% 8%, rgba(160, 210, 160, 0.40), transparent 60%),
              radial-gradient(ellipse 76% 62% at 78% 32%, rgba(220, 240, 200, 0.52), transparent 62%),
              radial-gradient(ellipse 70% 62% at 16% 82%, rgba(130, 190, 140, 0.36), transparent 60%),
              radial-gradient(ellipse 68% 64% at 90% 88%, rgba(180, 225, 170, 0.44), transparent 62%),
              linear-gradient(170deg, #f0f7ee 0%, #e6f2e2 50%, #f2f8ef 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "61",
    name: "Copper Glow",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 10%, rgba(200, 120, 60, 0.45), transparent 58%),
              radial-gradient(ellipse 74% 64% at 80% 28%, rgba(240, 180, 80, 0.50), transparent 62%),
              radial-gradient(ellipse 72% 62% at 16% 82%, rgba(180, 100, 50, 0.40), transparent 60%),
              radial-gradient(ellipse 70% 65% at 88% 88%, rgba(220, 150, 70, 0.44), transparent 62%),
              linear-gradient(165deg, #fff4ec 0%, #ffeedd 50%, #fff8f0 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "62",
    name: "Frost & Berry",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 7% 8%, rgba(140, 80, 200, 0.38), transparent 60%),
              radial-gradient(ellipse 74% 62% at 78% 30%, rgba(220, 180, 255, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(180, 100, 220, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 90%, rgba(200, 230, 255, 0.48), transparent 62%),
              radial-gradient(ellipse 65% 55% at 50% 50%, rgba(240, 210, 255, 0.28), transparent 70%),
              linear-gradient(175deg, #f5eeff 0%, #ede0ff 50%, #f0eeff 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "63",
    name: "Candy Floss",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 70% at 10% 5%, rgba(255, 160, 210, 0.50), transparent 58%),
              radial-gradient(ellipse 70% 65% at 85% 15%, rgba(255, 220, 100, 0.45), transparent 60%),
              radial-gradient(ellipse 75% 60% at 5% 90%, rgba(200, 120, 255, 0.42), transparent 62%),
              radial-gradient(ellipse 72% 65% at 88% 85%, rgba(255, 180, 180, 0.48), transparent 60%),
              radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255, 200, 230, 0.30), transparent 68%),
              linear-gradient(145deg, #fff0fa 0%, #fef5ff 50%, #fff8f0 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "64",
    name: "Neon Jungle",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 12%, rgba(0, 255, 160, 0.38), transparent 58%),
              radial-gradient(ellipse 72% 68% at 82% 18%, rgba(100, 255, 80, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 60% at 12% 82%, rgba(0, 200, 120, 0.35), transparent 62%),
              radial-gradient(ellipse 68% 65% at 90% 88%, rgba(80, 255, 180, 0.40), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0, 180, 100, 0.18), transparent 70%),
              linear-gradient(180deg, #0d1f18 0%, #0a1a12 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "65",
    name: "Blush Marble",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 0% 0%, rgba(255, 200, 200, 0.55), transparent 55%),
              radial-gradient(ellipse 70% 70% at 100% 0%, rgba(255, 220, 240, 0.50), transparent 58%),
              radial-gradient(ellipse 75% 65% at 0% 100%, rgba(240, 180, 210, 0.45), transparent 60%),
              radial-gradient(ellipse 80% 65% at 100% 100%, rgba(255, 210, 225, 0.52), transparent 58%),
              radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255, 240, 245, 0.35), transparent 65%),
              linear-gradient(135deg, #fff5f7 0%, #ffeef5 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "66",
    name: "Storm Front",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 65% at 5% 8%, rgba(80, 100, 180, 0.48), transparent 58%),
              radial-gradient(ellipse 74% 62% at 80% 22%, rgba(120, 140, 220, 0.42), transparent 60%),
              radial-gradient(ellipse 72% 65% at 18% 82%, rgba(60, 80, 160, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 85%, rgba(100, 120, 200, 0.45), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 45%, rgba(80, 100, 180, 0.22), transparent 68%),
              linear-gradient(180deg, #0e1628 0%, #1a2240 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "67",
    name: "Papaya Sorbet",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 8%, rgba(255, 160, 60, 0.48), transparent 58%),
              radial-gradient(ellipse 75% 62% at 78% 25%, rgba(255, 220, 80, 0.52), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(255, 120, 80, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(255, 200, 100, 0.46), transparent 60%),
              linear-gradient(170deg, #fff9ec 0%, #fff2d8 50%, #fff6e8 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "68",
    name: "Violet Noir",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 10%, rgba(160, 40, 255, 0.45), transparent 56%),
              radial-gradient(ellipse 74% 64% at 82% 20%, rgba(80, 0, 180, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(200, 60, 255, 0.38), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(120, 20, 220, 0.44), transparent 60%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(180, 80, 255, 0.18), transparent 70%),
              linear-gradient(180deg, #120520 0%, #1e0830 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "69",
    name: "Sea Glass",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 10%, rgba(100, 220, 200, 0.42), transparent 60%),
              radial-gradient(ellipse 76% 62% at 80% 28%, rgba(160, 240, 220, 0.50), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(80, 200, 180, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(140, 230, 210, 0.46), transparent 62%),
              linear-gradient(165deg, #edfcf8 0%, #e0f9f4 50%, #ecfbf8 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "70",
    name: "Cinder & Ember",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 66% at 5% 8%, rgba(255, 80, 20, 0.50), transparent 56%),
              radial-gradient(ellipse 74% 64% at 80% 20%, rgba(255, 140, 0, 0.45), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(220, 40, 0, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(255, 100, 30, 0.46), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(200, 60, 0, 0.22), transparent 68%),
              linear-gradient(180deg, #1a0800 0%, #2a1000 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "71",
    name: "Periwinkle Soft",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 84% 68% at 8% 8%, rgba(140, 150, 255, 0.44), transparent 60%),
              radial-gradient(ellipse 76% 62% at 78% 30%, rgba(180, 200, 255, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(120, 130, 240, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(200, 210, 255, 0.46), transparent 62%),
              linear-gradient(170deg, #f0f1ff 0%, #e8ecff 50%, #f2f4ff 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "72",
    name: "Molten Gold",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 5% 10%, rgba(255, 200, 0, 0.50), transparent 56%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(240, 160, 0, 0.45), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(255, 220, 40, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(220, 140, 0, 0.48), transparent 60%),
              radial-gradient(ellipse 55% 48% at 50% 50%, rgba(255, 180, 0, 0.22), transparent 68%),
              linear-gradient(180deg, #180e00 0%, #261500 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "73",
    name: "Lilac Fog",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 6% 6%, rgba(200, 170, 255, 0.45), transparent 60%),
              radial-gradient(ellipse 74% 64% at 80% 25%, rgba(230, 210, 255, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 65% at 14% 82%, rgba(180, 150, 240, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(220, 200, 255, 0.48), transparent 62%),
              linear-gradient(180deg, #f8f4ff 0%, #f2eeff 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "74",
    name: "Mint Glacé",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 10%, rgba(120, 255, 210, 0.40), transparent 60%),
              radial-gradient(ellipse 76% 62% at 80% 28%, rgba(180, 255, 240, 0.50), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(100, 230, 190, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(160, 255, 230, 0.46), transparent 62%),
              linear-gradient(165deg, #edfff9 0%, #e2fff5 50%, #ecfff8 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "75",
    name: "Carbon Spark",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 8%, rgba(200, 200, 220, 0.30), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(150, 160, 200, 0.28), transparent 62%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(180, 180, 220, 0.25), transparent 60%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(200, 210, 240, 0.30), transparent 62%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(160, 170, 210, 0.18), transparent 68%),
              linear-gradient(180deg, #0c0d12 0%, #141520 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "76",
    name: "Cherry Blossom",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 66% at 8% 6%, rgba(255, 180, 200, 0.48), transparent 58%),
              radial-gradient(ellipse 75% 65% at 78% 28%, rgba(255, 220, 230, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 62% at 14% 84%, rgba(255, 160, 185, 0.42), transparent 60%),
              radial-gradient(ellipse 70% 65% at 90% 88%, rgba(255, 200, 215, 0.48), transparent 62%),
              linear-gradient(170deg, #fff5f8 0%, #ffecf2 50%, #fff8fa 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "77",
    name: "Teal Depths",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 10%, rgba(0, 180, 180, 0.45), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(0, 220, 200, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(0, 160, 160, 0.38), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(0, 200, 190, 0.44), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(0, 140, 140, 0.20), transparent 70%),
              linear-gradient(180deg, #051818 0%, #082222 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "78",
    name: "Butter Cream",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 84% 68% at 8% 8%, rgba(255, 230, 130, 0.44), transparent 60%),
              radial-gradient(ellipse 76% 62% at 78% 30%, rgba(255, 245, 180, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(240, 210, 110, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(255, 240, 160, 0.46), transparent 62%),
              linear-gradient(170deg, #fffdf0 0%, #fffae0 50%, #fffcf0 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "79",
    name: "Cobalt Night",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 8%, rgba(30, 80, 255, 0.45), transparent 56%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(60, 120, 255, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(20, 60, 220, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(80, 140, 255, 0.44), transparent 60%),
              radial-gradient(ellipse 55% 48% at 50% 50%, rgba(40, 80, 200, 0.22), transparent 68%),
              linear-gradient(180deg, #060c20 0%, #0a1230 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "80",
    name: "Watermelon Fizz",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 66% at 8% 8%, rgba(255, 80, 100, 0.44), transparent 58%),
              radial-gradient(ellipse 75% 65% at 78% 28%, rgba(180, 255, 160, 0.48), transparent 62%),
              radial-gradient(ellipse 72% 62% at 14% 82%, rgba(255, 60, 80, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 65% at 90% 88%, rgba(160, 240, 140, 0.46), transparent 62%),
              linear-gradient(165deg, #fff5f6 0%, #f5fff3 50%, #fff5f6 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "81",
    name: "Amber Dusk",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 8%, rgba(255, 160, 0, 0.48), transparent 56%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(255, 120, 0, 0.44), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(240, 140, 0, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(255, 180, 40, 0.46), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(220, 130, 0, 0.22), transparent 68%),
              linear-gradient(180deg, #160a00 0%, #221000 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "82",
    name: "Cloud Nine",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 5% 5%, rgba(220, 235, 255, 0.60), transparent 58%),
              radial-gradient(ellipse 75% 65% at 80% 20%, rgba(240, 245, 255, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 65% at 20% 85%, rgba(200, 220, 255, 0.50), transparent 60%),
              radial-gradient(ellipse 70% 65% at 90% 88%, rgba(230, 240, 255, 0.58), transparent 62%),
              linear-gradient(160deg, #f8faff 0%, #f0f5ff 50%, #f5f8ff 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "83",
    name: "Forest Floor",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 10%, rgba(60, 120, 40, 0.45), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(100, 160, 60, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(40, 100, 30, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(80, 140, 50, 0.44), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(50, 110, 35, 0.20), transparent 68%),
              linear-gradient(180deg, #0a120a 0%, #101a0e 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "84",
    name: "Peachy Keen",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 66% at 8% 8%, rgba(255, 180, 140, 0.46), transparent 60%),
              radial-gradient(ellipse 75% 62% at 78% 30%, rgba(255, 210, 170, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(255, 160, 120, 0.40), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(255, 200, 160, 0.48), transparent 62%),
              linear-gradient(175deg, #fff8f4 0%, #fff2eb 50%, #fff6f2 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "85",
    name: "Sapphire Haze",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 10%, rgba(40, 80, 200, 0.46), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(80, 140, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(20, 60, 180, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 90%, rgba(100, 160, 255, 0.44), transparent 60%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(60, 100, 220, 0.20), transparent 68%),
              linear-gradient(180deg, #080e20 0%, #0e1830 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "86",
    name: "Creamsicle",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 66% at 8% 6%, rgba(255, 140, 60, 0.45), transparent 58%),
              radial-gradient(ellipse 75% 65% at 78% 26%, rgba(255, 240, 200, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 62% at 14% 84%, rgba(255, 160, 80, 0.40), transparent 60%),
              radial-gradient(ellipse 70% 65% at 90% 88%, rgba(255, 230, 180, 0.50), transparent 62%),
              linear-gradient(170deg, #fff8ef 0%, #fff3e2 50%, #fff9f0 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "87",
    name: "Raven Wing",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 8%, rgba(100, 60, 160, 0.40), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(60, 40, 120, 0.35), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(80, 50, 140, 0.38), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(120, 80, 180, 0.40), transparent 60%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(80, 50, 140, 0.18), transparent 68%),
              linear-gradient(180deg, #050308 0%, #0a060f 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "88",
    name: "Bubblegum Pop",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 84% 68% at 8% 8%, rgba(255, 100, 180, 0.46), transparent 58%),
              radial-gradient(ellipse 76% 62% at 78% 30%, rgba(255, 180, 240, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(255, 80, 160, 0.40), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(255, 160, 230, 0.48), transparent 62%),
              radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255, 120, 200, 0.25), transparent 68%),
              linear-gradient(170deg, #fff0fb 0%, #ffe8f8 50%, #fff4fc 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "89",
    name: "Volcanic Glass",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 66% at 5% 8%, rgba(255, 60, 0, 0.42), transparent 55%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(180, 0, 60, 0.38), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(220, 40, 0, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(255, 80, 20, 0.42), transparent 60%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(200, 30, 0, 0.18), transparent 68%),
              linear-gradient(180deg, #0f0200 0%, #180400 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "90",
    name: "Morning Dew",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 10%, rgba(180, 240, 220, 0.42), transparent 60%),
              radial-gradient(ellipse 76% 62% at 80% 28%, rgba(220, 250, 240, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(160, 230, 210, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(200, 245, 235, 0.48), transparent 62%),
              linear-gradient(165deg, #f2fdf8 0%, #eafaf4 50%, #f4fdf9 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "91",
    name: "Wisteria",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 68% at 6% 8%, rgba(180, 120, 240, 0.44), transparent 58%),
              radial-gradient(ellipse 74% 64% at 80% 25%, rgba(220, 180, 255, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(160, 100, 220, 0.38), transparent 60%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(200, 160, 245, 0.46), transparent 62%),
              linear-gradient(170deg, #f8f2ff 0%, #f2eaff 50%, #f6f0ff 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "92",
    name: "Solar Wind",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 68% at 5% 5%, rgba(255, 220, 80, 0.50), transparent 56%),
              radial-gradient(ellipse 74% 65% at 82% 20%, rgba(255, 160, 40, 0.46), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(255, 240, 100, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(255, 200, 60, 0.48), transparent 60%),
              radial-gradient(ellipse 55% 50% at 50% 48%, rgba(255, 180, 40, 0.24), transparent 68%),
              linear-gradient(180deg, #180d00 0%, #221200 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "93",
    name: "Frosted Plum",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 66% at 8% 8%, rgba(160, 80, 140, 0.42), transparent 60%),
              radial-gradient(ellipse 76% 62% at 78% 30%, rgba(210, 160, 200, 0.52), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(140, 60, 120, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(195, 140, 185, 0.48), transparent 62%),
              linear-gradient(170deg, #fdf0f8 0%, #f8e8f4 50%, #fdf2fa 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "94",
    name: "Neon Dusk",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 8%, rgba(255, 0, 120, 0.42), transparent 56%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(80, 0, 255, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(200, 0, 180, 0.38), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(120, 0, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 55% 48% at 50% 50%, rgba(180, 0, 200, 0.20), transparent 68%),
              linear-gradient(180deg, #0e001a 0%, #160028 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "95",
    name: "Citrus Burst",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 8%, rgba(255, 220, 0, 0.48), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(200, 255, 60, 0.44), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(255, 180, 0, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(180, 240, 40, 0.46), transparent 60%),
              linear-gradient(165deg, #feffec 0%, #f8ffe0 50%, #fdfff0 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "96",
    name: "Silver Lining",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 68% at 5% 10%, rgba(200, 210, 230, 0.50), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(220, 228, 240, 0.55), transparent 62%),
              radial-gradient(ellipse 72% 65% at 15% 80%, rgba(190, 200, 220, 0.44), transparent 60%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(215, 222, 238, 0.52), transparent 62%),
              linear-gradient(170deg, #f4f6fa 0%, #eff2f8 50%, #f6f8fc 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "97",
    name: "Orchid Mist",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 8%, rgba(220, 100, 200, 0.42), transparent 60%),
              radial-gradient(ellipse 76% 62% at 78% 30%, rgba(255, 160, 240, 0.50), transparent 62%),
              radial-gradient(ellipse 72% 65% at 16% 82%, rgba(200, 80, 180, 0.36), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(240, 140, 225, 0.46), transparent 62%),
              linear-gradient(170deg, #fef0fd 0%, #fce8fb 50%, #fef4fe 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "98",
    name: "Abyss",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 86% 66% at 6% 8%, rgba(0, 60, 100, 0.45), transparent 58%),
              radial-gradient(ellipse 74% 64% at 82% 22%, rgba(0, 80, 120, 0.40), transparent 60%),
              radial-gradient(ellipse 72% 65% at 15% 82%, rgba(0, 40, 80, 0.42), transparent 62%),
              radial-gradient(ellipse 70% 62% at 88% 88%, rgba(0, 100, 140, 0.44), transparent 60%),
              radial-gradient(ellipse 50% 45% at 50% 50%, rgba(0, 60, 100, 0.20), transparent 68%),
              linear-gradient(180deg, #000810 0%, #001018 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "99",
    name: "Peony Garden",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 68% at 8% 6%, rgba(255, 120, 140, 0.46), transparent 58%),
              radial-gradient(ellipse 76% 64% at 78% 28%, rgba(255, 200, 210, 0.54), transparent 62%),
              radial-gradient(ellipse 72% 65% at 14% 84%, rgba(240, 100, 120, 0.40), transparent 60%),
              radial-gradient(ellipse 70% 62% at 90% 88%, rgba(255, 180, 195, 0.48), transparent 62%),
              radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255, 150, 170, 0.26), transparent 68%),
              linear-gradient(175deg, #fff2f5 0%, #ffebf0 50%, #fff5f7 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "100",
    name: "Prism Break",
    category: "mesh",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 65% at 5% 8%, rgba(255, 60, 100, 0.40), transparent 55%),
              radial-gradient(ellipse 72% 62% at 50% 5%, rgba(255, 200, 0, 0.38), transparent 55%),
              radial-gradient(ellipse 75% 65% at 95% 8%, rgba(0, 200, 255, 0.40), transparent 55%),
              radial-gradient(ellipse 72% 62% at 5% 92%, rgba(0, 255, 160, 0.36), transparent 55%),
              radial-gradient(ellipse 75% 65% at 95% 92%, rgba(200, 0, 255, 0.40), transparent 55%),
              radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255, 255, 255, 0.30), transparent 65%),
              linear-gradient(145deg, #fef8ff 0%, #f8fff8 50%, #fff8f8 100%)
            `,
          }}
        />
      )
    },
  },
  {
    id: "101",
    name: "Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 10deg)",
              bottom: "-20%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%)",
              width: "200%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "102",
    name: "Grid Horizon",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "103",
    name: "Dot Field",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "104",
    name: "Sunburst Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 70%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 0%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 12deg)",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              transform: "translateX(-50%)",
              width: "200%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "105",
    name: "Diagonal Stripes",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "106",
    name: "Corner Rays",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom right, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              height: "150%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "107",
    name: "Hexagon Mesh",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 80%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 80%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "108",
    name: "Vertical Beams",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "109",
    name: "Horizontal Beams",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "110",
    name: "Fine Dot Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 25%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 130%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "111",
    name: "Left Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "112",
    name: "Right Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "113",
    name: "Cross Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "114",
    name: "Slash Rain",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 80%)",
              backgroundImage:
                "repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 80%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "115",
    name: "Concentric Rings",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 100%, transparent 0px, transparent 20px, var(--primary) 20px, var(--primary) 21px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "116",
    name: "Top Rings",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 0%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "117",
    name: "Dense Dots Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -20%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "118",
    name: "Checker Fade",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "24px 24px",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "119",
    name: "Starburst Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 15deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 65%)",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "120",
    name: "Wide Grid Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "121",
    name: "Perspective Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 35%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "50px 30px",
              bottom: "-10%",
              height: "70%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              opacity: "0.22",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%) perspective(300px) rotateX(45deg)",
              width: "200%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "122",
    name: "Diagonal Cross",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "123",
    name: "Coarse Dots Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 50%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "40px 40px",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "124",
    name: "Noise Vignette",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--background) 40%, var(--primary) 100%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "125",
    name: "Bottom Fan Wide",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 6deg)",
              bottom: "-15%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 70%)",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%)",
              width: "250%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "126",
    name: "Mosaic Fade",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "16px 16px",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 100%)",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "127",
    name: "Tight Vertical Lines",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "128",
    name: "Iris",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--primary) 0%, var(--background) 50%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 15px, var(--primary) 15px, var(--primary) 16px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 65%)",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "129",
    name: "Diagonal Fade Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "130",
    name: "Woven",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.22",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "131",
    name: "Scan Lines",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, var(--primary) 3px, var(--primary) 4px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "132",
    name: "Radial Dots Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              height: "60%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "133",
    name: "Dual Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              bottom: "-10%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%)",
              width: "300%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "134",
    name: "Tight Grid Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "135",
    name: "Corner Web",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom right, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              bottom: "0",
              height: "150%",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
              pointerEvents: "none",
              position: "absolute",
              right: "0",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "136",
    name: "Horizontal Lines Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 50%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "137",
    name: "Isometric Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "138",
    name: "Crosshatch Right",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              opacity: "0.22",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "139",
    name: "Radial Grid Spread",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              opacity: "0.22",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "140",
    name: "Top Left Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "141",
    name: "Slash Right",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 120% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "142",
    name: "Dense Grid Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 45%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 65%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "143",
    name: "Bottom Rings Tight",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 100%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px, transparent 31px, transparent 60px, var(--primary) 60px, var(--primary) 61px)",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "144",
    name: "Vertical Center Lines",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 60%), linear-gradient(to bottom, rgba(255,255,255,0) 40%, var(--background) 100%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 24px)",
              height: "70%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "145",
    name: "Dot Matrix Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 60%)",
              opacity: "0.45",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "146",
    name: "Pinwheel",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 3deg, transparent 3deg, transparent 20deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0) 70%)",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "147",
    name: "Full Conic Sweep",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 150%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.55) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 4deg)",
              bottom: "-5%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%)",
              width: "300%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "148",
    name: "Dual Grid Corners",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 55%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 0% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 0% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              opacity: "0.22",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "149",
    name: "Bottom Slash Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              opacity: "0.28",
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "150",
    name: "Full Grid Vignette",
    category: "layered",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 60%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "151",
    name: "Top Fade Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "152",
    name: "Bottom Fade Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "153",
    name: "Center Radial Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "154",
    name: "Left Edge Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 40%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "155",
    name: "Right Edge Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 100% 50%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 60% 80% at 100% 50%, #000 40%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "156",
    name: "Top-Left Corner Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "157",
    name: "Top-Right Corner Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 100% 0%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 100% 0%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "158",
    name: "Bottom-Left Corner Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 100%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 100%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "159",
    name: "Bottom-Right Corner Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 100% 100%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 100% 100%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "160",
    name: "Outer Vignette Grid",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "161",
    name: "Dot Grid Top Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #000 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #000 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "162",
    name: "Dot Grid Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "163",
    name: "Dot Grid Outer Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "32px 32px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 90%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 90%)",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "164",
    name: "Dot Grid Left Edge",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 85% at 0% 50%, #000 35%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 55% 85% at 0% 50%, #000 35%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "165",
    name: "Diagonal Stripe Top Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #000 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #000 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "166",
    name: "Diagonal Stripe Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 24px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, #000 25%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, #000 25%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "167",
    name: "Diagonal Stripe Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.7) 85%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.7) 85%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "168",
    name: "Horizontal Lines Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "169",
    name: "Vertical Lines Left",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "170",
    name: "Vertical Lines Right",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 65%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "171",
    name: "Isometric Grid Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "172",
    name: "Isometric Grid Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 25%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 25%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "173",
    name: "Fine Grid Full Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "15px 15px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 15%, rgba(0,0,0,0.6) 80%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 15%, rgba(0,0,0,0.6) 80%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "174",
    name: "Coarse Grid Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "175",
    name: "Rectangular Grid Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 50% 0%, #000 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 65% at 50% 0%, #000 55%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "176",
    name: "Cross Hatch Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 55% at 50% 0%, #000 45%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 55% at 50% 0%, #000 45%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "177",
    name: "Cross Hatch Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "178",
    name: "Grid Dual Corner Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 65% at 0% 0%, #000 30%, transparent 75%), radial-gradient(ellipse 50% 65% at 100% 0%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 50% 65% at 0% 0%, #000 30%, transparent 75%), radial-gradient(ellipse 50% 65% at 100% 0%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "179",
    name: "Grid Dual Corner Bottom",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 65% at 0% 100%, #000 30%, transparent 75%), radial-gradient(ellipse 50% 65% at 100% 100%, #000 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 50% 65% at 0% 100%, #000 30%, transparent 75%), radial-gradient(ellipse 50% 65% at 100% 100%, #000 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "180",
    name: "Dot Grid Top-Left Corner",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 65% at 0% 0%, #000 35%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 65% 65% at 0% 0%, #000 35%, transparent 80%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "181",
    name: "Dot Grid All Corners",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 0% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 100% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 0% 100%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 100% 100%, #000 25%, transparent 70%)",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 0% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 100% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 0% 100%, #000 25%, transparent 70%), radial-gradient(ellipse 55% 55% at 100% 100%, #000 25%, transparent 70%)",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "182",
    name: "Grid Linear Fade Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "183",
    name: "Grid Linear Fade Bottom",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "184",
    name: "Grid Linear Fade Left",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "185",
    name: "Grid Linear Fade Right",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "186",
    name: "Grid + Radial BG Top",
    category: "geometric",
    render: function () {
      return (
        <div className="relative h-full w-full overflow-hidden">
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "187",
    name: "Grid + Radial BG Center",
    category: "geometric",
    render: function () {
      return (
        <div className="relative h-full w-full overflow-hidden">
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 80%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "188",
    name: "Dot Grid + Radial BG Top",
    category: "geometric",
    render: function () {
      return (
        <div className="relative h-full w-full overflow-hidden">
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, #000 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, #000 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "189",
    name: "Diagonal + Radial BG Left",
    category: "geometric",
    render: function () {
      return (
        <div className="relative h-full w-full overflow-hidden">
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 35%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 35%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "190",
    name: "Thin Grid Wide Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--primary) 0.5px, transparent 0.5px)",
              backgroundSize: "40px 40px",
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 70% at 50% 0%, #000 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 100% 70% at 50% 0%, #000 55%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "191",
    name: "Thin Grid Wide Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--primary) 0.5px, transparent 0.5px)",
              backgroundSize: "40px 40px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
              height: "100%",
              left: "0",
              opacity: "0.5",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "192",
    name: "Wide Ellipse Grid Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, #000 60%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "193",
    name: "Narrow Ellipse Grid Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              WebkitMaskImage:
                "radial-gradient(ellipse 40% 70% at 50% 0%, #000 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 40% 70% at 50% 0%, #000 55%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.18",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "194",
    name: "Dot Grid Top-Bottom Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "195",
    name: "Diagonal Stripe Left Edge",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 90% at 0% 50%, #000 35%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 55% 90% at 0% 50%, #000 35%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "196",
    name: "Isometric Grid Top-Left",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 30%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 30%, transparent 80%)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "197",
    name: "Horizontal Lines Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 80%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "198",
    name: "Grid Both Sides Mask",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "199",
    name: "Grid Top + Bottom Mask",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
              height: "100%",
              left: "0",
              opacity: "1",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "200",
    name: "Dot Grid Diagonal Corners",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 60% 60% at 100% 100%, #000 25%, transparent 70%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, #000 25%, transparent 70%), radial-gradient(ellipse 60% 60% at 100% 100%, #000 25%, transparent 70%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "201",
    name: "Dashed Grid Full",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "202",
    name: "Dashed Grid Fine",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 2px, transparent 2px, transparent 6px), repeating-linear-gradient(to bottom, black 0px, black 2px, transparent 2px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 2px, transparent 2px, transparent 6px), repeating-linear-gradient(to bottom, black 0px, black 2px, transparent 2px, transparent 6px)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "203",
    name: "Dashed Grid Coarse",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 5px, transparent 5px, transparent 15px), repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 15px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 5px, transparent 5px, transparent 15px), repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 15px)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "204",
    name: "Dashed Grid Top Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "205",
    name: "Dashed Grid Center Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 55% 55% at 50% 50%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 55% 55% at 50% 50%, black 30%, transparent 80%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "206",
    name: "Dashed Grid Left Corner",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 65% 65% at 0% 0%, black 35%, transparent 80%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 65% 65% at 0% 0%, black 35%, transparent 80%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "207",
    name: "Dashed Grid Outer Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse at 50% 50%, transparent 20%, black 80%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse at 50% 50%, transparent 20%, black 80%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "208",
    name: "Dashed Grid Wide Spacing",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 12px), repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 12px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 12px), repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 12px)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "209",
    name: "Dashed Horizontal Only Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 10px), linear-gradient(to bottom, black 0%, transparent 65%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 10px), linear-gradient(to bottom, black 0%, transparent 65%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "210",
    name: "Dashed Vertical Only Left",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              maskImage:
                "repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 10px), linear-gradient(to right, black 0%, transparent 60%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 10px), linear-gradient(to right, black 0%, transparent 60%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  // ─── NOISE / DOT TEXTURE VARIANTS ───────────────────────────────────────────

  {
    id: "211",
    name: "Noise Dot Texture",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "212",
    name: "Noise Dot Texture Fine",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "12px 12px",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "213",
    name: "Noise Dot Texture Coarse",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1.5px, transparent 0)",
              backgroundSize: "32px 32px",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "214",
    name: "Noise Dot Top Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "215",
    name: "Noise Dot Center Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, black 25%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 50% 50%, black 25%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "216",
    name: "Noise Dot Outer Vignette",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 25%, black 85%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 25%, black 85%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "217",
    name: "Noise Dot Linear Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "16px 16px",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
              height: "100%",
              left: "0",
              opacity: "0.6",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "218",
    name: "Noise Dot Top-Left Corner",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 65% at 0% 0%, black 30%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 65% 65% at 0% 0%, black 30%, transparent 75%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "219",
    name: "Noise Dot All Corners",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 50% at 0% 0%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 0%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 20%, transparent 70%)",
              maskImage:
                "radial-gradient(ellipse 50% 50% at 0% 0%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 0%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 20%, transparent 70%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "220",
    name: "Noise Dot + Grid Overlay",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          {/* dot noise */}
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
          {/* grid */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  // ─── SPOTLIGHT / ANIMATED VARIANTS ─────────────────────────────────────────

  {
    id: "221",
    name: "Grid Spotlight Static Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              WebkitMask:
                "radial-gradient(circle at 50% 50%, black 0%, transparent 40%)",
              mask: "radial-gradient(circle at 50% 50%, black 0%, transparent 40%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "222",
    name: "Grid Spotlight Static Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              WebkitMask:
                "radial-gradient(circle at 50% 0%, black 0%, transparent 45%)",
              mask: "radial-gradient(circle at 50% 0%, black 0%, transparent 45%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "223",
    name: "Grid Spotlight Static Left",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              WebkitMask:
                "radial-gradient(ellipse 50% 70% at 0% 50%, black 0%, transparent 100%)",
              mask: "radial-gradient(ellipse 50% 70% at 0% 50%, black 0%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "224",
    name: "Diagonal Grid Spotlight Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0), repeating-linear-gradient(45deg, var(--primary) 0 1px, transparent 1px 6px)",
              backgroundSize: "24px 24px, 24px 24px, 24px 24px",
              WebkitMask:
                "radial-gradient(circle at 50% 50%, black 0%, transparent 35%)",
              mask: "radial-gradient(circle at 50% 50%, black 0%, transparent 35%)",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "225",
    name: "Diagonal Grid Spotlight Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0), repeating-linear-gradient(45deg, var(--primary) 0 1px, transparent 1px 6px)",
              backgroundSize: "24px 24px, 24px 24px, 24px 24px",
              WebkitMask:
                "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
              mask: "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "226",
    name: "Grid Animated Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes moveSpotlight226 {
              0%   { --x226: 20%; --y226: 20%; }
              25%  { --x226: 80%; --y226: 30%; }
              50%  { --x226: 60%; --y226: 80%; }
              75%  { --x226: 25%; --y226: 70%; }
              100% { --x226: 20%; --y226: 20%; }
            }
            .bg226 {
              animation: moveSpotlight226 10s ease-in-out infinite;
              --x226: 50%;
              --y226: 50%;
              -webkit-mask: radial-gradient(circle at var(--x226) var(--y226), black 0%, transparent 30%);
              mask: radial-gradient(circle at var(--x226) var(--y226), black 0%, transparent 30%);
            }
          `}</style>
          <div
            className="bg226"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "227",
    name: "Diagonal Animated Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes moveSpotlight227 {
              0%   { --x227: 10%; --y227: 50%; }
              33%  { --x227: 90%; --y227: 20%; }
              66%  { --x227: 50%; --y227: 90%; }
              100% { --x227: 10%; --y227: 50%; }
            }
            .bg227 {
              animation: moveSpotlight227 8s ease-in-out infinite;
              --x227: 50%;
              --y227: 50%;
              -webkit-mask: radial-gradient(ellipse 40% 40% at var(--x227) var(--y227), black 0%, transparent 100%);
              mask: radial-gradient(ellipse 40% 40% at var(--x227) var(--y227), black 0%, transparent 100%);
            }
          `}</style>
          <div
            className="bg227"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0), repeating-linear-gradient(45deg, var(--primary) 0 1px, transparent 1px 6px)",
              backgroundSize: "24px 24px, 24px 24px, 24px 24px",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "228",
    name: "Dot Grid Animated Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes moveSpotlight228 {
              0%   { --x228: 50%; --y228: 0%;  }
              50%  { --x228: 50%; --y228: 100%; }
              100% { --x228: 50%; --y228: 0%;  }
            }
            .bg228 {
              animation: moveSpotlight228 6s ease-in-out infinite;
              --x228: 50%;
              --y228: 50%;
              -webkit-mask: radial-gradient(ellipse 60% 35% at var(--x228) var(--y228), black 0%, transparent 100%);
              mask: radial-gradient(ellipse 60% 35% at var(--x228) var(--y228), black 0%, transparent 100%);
            }
          `}</style>
          <div
            className="bg228"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "229",
    name: "Dashed Grid Animated Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes moveSpotlight229 {
              0%   { --x229: 0%;   --y229: 0%;   }
              25%  { --x229: 100%; --y229: 0%;   }
              50%  { --x229: 100%; --y229: 100%; }
              75%  { --x229: 0%;   --y229: 100%; }
              100% { --x229: 0%;   --y229: 0%;   }
            }
            .bg229 {
              animation: moveSpotlight229 12s linear infinite;
              --x229: 50%;
              --y229: 50%;
              -webkit-mask: radial-gradient(circle at var(--x229) var(--y229), black 0%, transparent 28%);
              mask: radial-gradient(circle at var(--x229) var(--y229), black 0%, transparent 28%);
            }
          `}</style>
          <div
            className="bg229"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "230",
    name: "Grid Dual Spotlight",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes spot230a {
              0%,100% { opacity: 1; }
              50%      { opacity: 0.2; }
            }
            @keyframes spot230b {
              0%,100% { opacity: 0.2; }
              50%      { opacity: 1; }
            }
          `}</style>
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              WebkitMask:
                "radial-gradient(circle at 25% 40%, black 0%, transparent 30%)",
              mask: "radial-gradient(circle at 25% 40%, black 0%, transparent 30%)",
              animation: "spot230a 4s ease-in-out infinite",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              WebkitMask:
                "radial-gradient(circle at 75% 60%, black 0%, transparent 30%)",
              mask: "radial-gradient(circle at 75% 60%, black 0%, transparent 30%)",
              animation: "spot230b 4s ease-in-out infinite",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  // ─── MIXED / COMBO VARIANTS ──────────────────────────────────────────────────

  {
    id: "231",
    name: "Dashed + Diagonal Stripe Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 9px), radial-gradient(ellipse 80% 55% at 50% 0%, black 45%, transparent 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 9px), radial-gradient(ellipse 80% 55% at 50% 0%, black 45%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "232",
    name: "Noise + Dashed Grid Overlay",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "16px 16px",
              height: "100%",
              left: "0",
              opacity: "0.12",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 9px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 9px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 9px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 9px)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "233",
    name: "Dashed Isometric Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px)",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 10px), radial-gradient(ellipse 75% 60% at 50% 0%, black 50%, transparent 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 4px, transparent 4px, transparent 10px), radial-gradient(ellipse 75% 60% at 50% 0%, black 50%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "234",
    name: "Noise Dot + BG Radial Center",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, var(--primary) 0%, var(--background) 65%)",
          }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 20%, black 80%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 20%, black 80%)",
              height: "100%",
              left: "0",
              opacity: "0.25",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "235",
    name: "Grid Pulse Animation",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes pulse235 {
              0%, 100% { opacity: 0.05; }
              50%       { opacity: 0.25; }
            }
          `}</style>
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              animation: "pulse235 4s ease-in-out infinite",
              height: "100%",
              left: "0",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "236",
    name: "Grid Fade-In Top Animation",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes fadeTop236 {
              0%,100% { WebkitMaskSize: "80% 30%"; opacity: 0.1; }
              50%     { opacity: 0.3; }
            }
          `}</style>
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black 55%, transparent 100%)",
              animation: "fadeTop236 5s ease-in-out infinite",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "237",
    name: "Dashed Grid Bottom-Right Corner",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 65% 65% at 100% 100%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 65% 65% at 100% 100%, black 30%, transparent 75%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "238",
    name: "Dashed Grid Left Edge Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), linear-gradient(to right, black 0%, transparent 65%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), linear-gradient(to right, black 0%, transparent 65%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.45",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "239",
    name: "Noise Dot Bottom Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 100%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 100%, black 50%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "240",
    name: "Spotlight Grid + Radial BG",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, var(--primary) 0%, var(--background) 70%)",
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0), repeating-linear-gradient(45deg, var(--primary) 0 1px, transparent 1px 6px)",
              backgroundSize: "24px 24px, 24px 24px, 24px 24px",
              WebkitMask:
                "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
              mask: "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
              height: "100%",
              left: "0",
              opacity: "0.2",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "241",
    name: "Dashed Grid Both Sides",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), linear-gradient(to right, black 0%, transparent 40%, transparent 60%, black 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), linear-gradient(to right, black 0%, transparent 40%, transparent 60%, black 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.45",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "242",
    name: "Grid Sweep Animation",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes sweep242 {
              0%   { --x242: -10%; }
              100% { --x242: 110%; }
            }
            .bg242 {
              animation: sweep242 6s linear infinite;
              --x242: -10%;
              -webkit-mask: radial-gradient(ellipse 25% 100% at var(--x242) 50%, black 0%, transparent 100%);
              mask: radial-gradient(ellipse 25% 100% at var(--x242) 50%, black 0%, transparent 100%);
            }
          `}</style>
          <div
            className="bg242"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 0), linear-gradient(180deg, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "243",
    name: "Diagonal Stripe Dashed",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              maskImage:
                "repeating-linear-gradient(45deg, black 0px, black 4px, transparent 4px, transparent 10px)",
              WebkitMaskImage:
                "repeating-linear-gradient(45deg, black 0px, black 4px, transparent 4px, transparent 10px)",
              height: "100%",
              left: "0",
              opacity: "0.15",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "244",
    name: "Noise Dot Sweep Animation",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes sweep244 {
              0%   { --y244: -10%; }
              100% { --y244: 110%; }
            }
            .bg244 {
              animation: sweep244 7s linear infinite;
              --y244: -10%;
              -webkit-mask: radial-gradient(ellipse 100% 20% at 50% var(--y244), black 0%, transparent 100%);
              mask: radial-gradient(ellipse 100% 20% at 50% var(--y244), black 0%, transparent 100%);
            }
          `}</style>
          <div
            className="bg244"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              height: "100%",
              left: "0",
              opacity: "0.5",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "245",
    name: "Dashed Grid Dual Corner Top",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 50% 65% at 0% 0%, black 28%, transparent 72%), radial-gradient(ellipse 50% 65% at 100% 0%, black 28%, transparent 72%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 50% 65% at 0% 0%, black 28%, transparent 72%), radial-gradient(ellipse 50% 65% at 100% 0%, black 28%, transparent 72%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "246",
    name: "Noise Dot Two-Side Fade",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, transparent 40%, transparent 60%, black 100%)",
              maskImage:
                "linear-gradient(to right, black 0%, transparent 40%, transparent 60%, black 100%)",
              height: "100%",
              left: "0",
              opacity: "0.3",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "247",
    name: "Grid Spotlight Bounce",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes bounce247 {
              0%,100% { --x247: 30%; --y247: 30%; }
              25%     { --x247: 70%; --y247: 25%; }
              50%     { --x247: 65%; --y247: 70%; }
              75%     { --x247: 20%; --y247: 65%; }
            }
            .bg247 {
              animation: bounce247 9s ease-in-out infinite;
              --x247: 50%;
              --y247: 50%;
              -webkit-mask: radial-gradient(circle at var(--x247) var(--y247), black 0%, transparent 25%);
              mask: radial-gradient(circle at var(--x247) var(--y247), black 0%, transparent 25%);
            }
          `}</style>
          <div
            className="bg247"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "248",
    name: "Dashed Grid All Corners",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 50% 50% at 0% 0%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 100% 0%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 0% 100%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 100% 100%, black 22%, transparent 68%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 50% 50% at 0% 0%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 100% 0%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 0% 100%, black 22%, transparent 68%), radial-gradient(ellipse 50% 50% at 100% 100%, black 22%, transparent 68%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              height: "100%",
              left: "0",
              opacity: "0.4",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "249",
    name: "Dot Grid Animated Pulse Ring",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes ring249 {
              0%,100% { opacity: 0.35; transform: scale(1); }
              50%     { opacity: 0.1;  transform: scale(1.08); }
            }
          `}</style>
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 25%, black 80%)",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, transparent 25%, black 80%)",
              animation: "ring249 5s ease-in-out infinite",
              height: "100%",
              left: "0",
              opacity: "0.35",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              transformOrigin: "center",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },

  {
    id: "250",
    name: "Grid + Dot Noise Animated",
    category: "geometric",
    render: function () {
      return (
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ background: "var(--background)" }}
        >
          <style>{`
            @keyframes fadeAB250 {
              0%,100% { opacity: 0.2; }
              50%     { opacity: 0.05; }
            }
            @keyframes fadeBA250 {
              0%,100% { opacity: 0.05; }
              50%     { opacity: 0.2; }
            }
          `}</style>
          <div
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              animation: "fadeAB250 5s ease-in-out infinite",
              height: "100%",
              left: "0",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 0%, black 55%, transparent 100%)",
              animation: "fadeBA250 5s ease-in-out infinite",
              height: "100%",
              left: "0",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
      )
    },
  },
]
