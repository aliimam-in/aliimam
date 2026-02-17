import type { Pattern } from "@/src/types/pattern"

export const dotsPatterns: Pattern[] = [
  {
    id: "dots-01",
    name: "Centered Vignette Dot Fade",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
            opacity: 0.7,
          }}
        />
      )
    },
  },

  {
    id: "dots-02",
    name: "Bottom-Left Corner Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 0% 100%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 0% 100%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-03",
    name: "Top-Right Corner Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 100% 0%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 100% 0%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-04",
    name: "Top-Left Corner Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 0% 0%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 0% 0%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-05",
    name: "Bottom-Right Corner Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 100% 100%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 100% 100%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-06",
    name: "Diagonal Corners Dual Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 50% 50% at 0% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at 0% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 40%, transparent 70%)",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-07",
    name: "Anti-Diagonal Corners Dual Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 50% 50% at 100% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at 100% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, black 40%, transparent 70%)",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-08",
    name: "Four Corner Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(ellipse 40% 40% at 0% 0%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 100% 0%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 0% 100%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 100% 100%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 40% 40% at 0% 0%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 100% 0%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 0% 100%, black 30%, transparent 70%), radial-gradient(ellipse 40% 40% at 100% 100%, black 30%, transparent 70%)",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-09",
    name: "Fade Top to Bottom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-10",
    name: "Fade Bottom to Top",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-11",
    name: "Fade Left to Right",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-12",
    name: "Fade Right to Left",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 0%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-13",
    name: "Diagonal Fade Top-Left",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(135deg, black 0%, transparent 60%)",
            WebkitMaskImage:
              "linear-gradient(135deg, black 0%, transparent 60%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-14",
    name: "Diagonal Fade Bottom-Right",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(315deg, black 0%, transparent 60%)",
            WebkitMaskImage:
              "linear-gradient(315deg, black 0%, transparent 60%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-15",
    name: "Inverted Vignette (Outer Dots)",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 70%)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-16",
    name: "Dense Micro Dots Centered",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0.5px 0.5px, var(--primary) 0.5px, transparent 0)",
            backgroundSize: "8px 8px",
            maskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)",
            opacity: 0.4,
          }}
        />
      )
    },
  },

  {
    id: "dots-17",
    name: "Large Dot Sparse Centered",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--primary) 2px, transparent 0)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 70%)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-18",
    name: "Extra Large Dot Vignette",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 3px 3px, var(--primary) 3px, transparent 0)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 65%)",
            opacity: 0.45,
          }}
        />
      )
    },
  },

  {
    id: "dots-19",
    name: "Staggered Offset Dots",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0), radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
            maskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-20",
    name: "Conic Quadrant Reveal",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "conic-gradient(from 0deg at 50% 50%, black 0deg, black 90deg, transparent 90deg, transparent 360deg)",
            WebkitMaskImage:
              "conic-gradient(from 0deg at 50% 50%, black 0deg, black 90deg, transparent 90deg, transparent 360deg)",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-21",
    name: "Conic Half Reveal",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "conic-gradient(from 270deg at 50% 50%, black 0deg, black 180deg, transparent 180deg, transparent 360deg)",
            WebkitMaskImage:
              "conic-gradient(from 270deg at 50% 50%, black 0deg, black 180deg, transparent 180deg, transparent 360deg)",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-22",
    name: "Conic Alternating Sectors",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "16px 16px",
            maskImage:
              "conic-gradient(from 0deg at 50% 50%, black 0deg, transparent 60deg, black 120deg, transparent 180deg, black 240deg, transparent 300deg, black 360deg)",
            WebkitMaskImage:
              "conic-gradient(from 0deg at 50% 50%, black 0deg, transparent 60deg, black 120deg, transparent 180deg, black 240deg, transparent 300deg, black 360deg)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-23",
    name: "Radial Strip Reveal",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%), linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%), linear-gradient(to bottom, black 0%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            opacity: 0.65,
          }}
        />
      )
    },
  },

  {
    id: "dots-24",
    name: "Horizontal Band",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-25",
    name: "Vertical Band",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-26",
    name: "Ellipse Wide Vignette",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 100% 60% at 50% 50%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 60% at 50% 50%, black 40%, transparent 70%)",
            opacity: 0.65,
          }}
        />
      )
    },
  },

  {
    id: "dots-27",
    name: "Ellipse Tall Vignette",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 55% 100% at 50% 50%, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 100% at 50% 50%, black 40%, transparent 70%)",
            opacity: 0.65,
          }}
        />
      )
    },
  },

  {
    id: "dots-28",
    name: "Left Edge Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 50% 80% at 0% 50%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 0% 50%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-29",
    name: "Right Edge Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 50% 80% at 100% 50%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 100% 50%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-30",
    name: "Top Edge Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-31",
    name: "Bottom Edge Bloom",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 100%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 100%, black 30%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-32",
    name: "Tight Centered Hard Stop",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, black 60%, transparent 61%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, black 60%, transparent 61%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-33",
    name: "Soft Full-Field Uniform",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            opacity: 0.12,
          }}
        />
      )
    },
  },

  {
    id: "dots-34",
    name: "Depth Trio — Fine / Medium / Coarse",
    category: "dots",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 0.5px 0.5px, var(--primary) 0.5px, transparent 0)",
              backgroundSize: "8px 8px",
              opacity: 0.25,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              opacity: 0.18,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, var(--primary) 2px, transparent 0)",
              backgroundSize: "56px 56px",
              opacity: 0.12,
            }}
          />
        </div>
      )
    },
  },

  {
    id: "dots-35",
    name: "Depth Trio with Center Mask",
    category: "dots",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          {[
            { size: "8px 8px", dot: "0.5px", opacity: 0.3 },
            { size: "24px 24px", dot: "1px", opacity: 0.2 },
            { size: "56px 56px", dot: "2px", opacity: 0.15 },
          ].map((l, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) ${l.dot}, transparent 0)`,
                backgroundSize: l.size,
                maskImage:
                  "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)",
                opacity: l.opacity,
              }}
            />
          ))}
        </div>
      )
    },
  },

  {
    id: "dots-36",
    name: "Off-Center Bloom Left-Center",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 65% 65% at 25% 50%, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 65% at 25% 50%, black 35%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-37",
    name: "Off-Center Bloom Right-Center",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 65% 65% at 75% 50%, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 65% at 75% 50%, black 35%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )
    },
  },

  {
    id: "dots-38",
    name: "Twin Horizontal Blooms",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 40% 60% at 20% 50%, black 30%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 50%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 40% 60% at 20% 50%, black 30%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 50%, black 30%, transparent 70%)",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-39",
    name: "Twin Vertical Blooms",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 60% 40% at 50% 20%, black 30%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 80%, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 40% at 50% 20%, black 30%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 80%, black 30%, transparent 70%)",
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-40",
    name: "Hard Clip Left Half",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to right, black 0%, black 45%, transparent 55%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 45%, transparent 55%)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-41",
    name: "Hard Clip Right Half",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to left, black 0%, black 45%, transparent 55%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 0%, black 45%, transparent 55%)",
            opacity: 0.5,
          }}
        />
      )
    },
  },

  {
    id: "dots-42",
    name: "Diagonal Stripe Mask",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "repeating-linear-gradient(45deg, black 0px, black 20px, transparent 20px, transparent 40px)",
            WebkitMaskImage:
              "repeating-linear-gradient(45deg, black 0px, black 20px, transparent 20px, transparent 40px)",
            opacity: 0.3,
          }}
        />
      )
    },
  },

  {
    id: "dots-43",
    name: "Checkerboard Dot Mask",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "12px 12px",
            maskImage:
              "repeating-conic-gradient(black 0% 25%, transparent 0% 50%)",
            WebkitMaskImage:
              "repeating-conic-gradient(black 0% 25%, transparent 0% 50%)",
            maskSize: "48px 48px",
            WebkitMaskSize: "48px 48px",
            opacity: 0.45,
          }}
        />
      )
    },
  },

  {
    id: "dots-44",
    name: "Spotlight Center Tight",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(ellipse 40% 40% at 50% 50%, black 30%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 40% 40% at 50% 50%, black 30%, transparent 60%)",
            opacity: 0.8,
          }}
        />
      )
    },
  },

  {
    id: "dots-45",
    name: "Gradient Opacity Sweep",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to bottom right, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom right, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            opacity: 0.65,
          }}
        />
      )
    },
  },

  {
    id: "dots-46",
    name: "Rectangular Window Reveal",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            opacity: 0.55,
          }}
        />
      )
    },
  },

  {
    id: "dots-47",
    name: "Coarse Dot Top Fade",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--primary) 2px, transparent 0)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 100% 60% at 50% 0%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 60% at 50% 0%, black 0%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      )
    },
  },

  {
    id: "dots-48",
    name: "Coarse Dot Bottom Fade",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--primary) 2px, transparent 0)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 100% 60% at 50% 100%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 60% at 50% 100%, black 0%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      )
    },
  },

  {
    id: "dots-49",
    name: "Radial Inward Gradient Dots",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 0%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 0%, black 40%, transparent 80%)",
            opacity: 0.4,
          }}
        />
      )
    },
  },

  {
    id: "dots-50",
    name: "Full Bleed Uniform Fine",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 95% 95% at 50% 50%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 95% at 50% 50%, black 60%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      )
    },
  },
  {
    id: "dots-51",
    name: "Fine Dot Grid",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "dots-52",
    name: "Medium Dot Grid",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.5,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 3px, transparent 3px)",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "dots-53",
    name: "Polka Dot Staggered",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 2px, transparent 2px), radial-gradient(circle, var(--primary) 2px, transparent 2px)",
            backgroundSize: "30px 30px, 30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "dots-54",
    name: "Large Polka Dot Staggered",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 5px, transparent 5px), radial-gradient(circle, var(--primary) 5px, transparent 5px)",
            backgroundSize: "60px 60px, 60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
      )
    },
  },
  {
    id: "dots-55",
    name: "Dotted Crosshatch",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1px, transparent 1px), radial-gradient(circle, var(--primary) 1px, transparent 1px)",
            backgroundSize: "10px 10px, 10px 10px",
            backgroundPosition: "0 0, 5px 5px",
          }}
        />
      )
    },
  },
  {
    id: "dots-56",
    name: "Micro Dot Matrix",
    category: "dots",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1px, transparent 1px), radial-gradient(circle, color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "8px 8px, 8px 8px",
            backgroundPosition: "0 0, 4px 4px",
          }}
        />
      )
    },
  },
]
