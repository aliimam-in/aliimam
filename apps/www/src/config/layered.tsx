import type { Pattern } from "@/src/types/pattern"

export const layeredPatterns: Pattern[] = [
  {
    id: "layered-01",
    name: "Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 80%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 10deg)",
              bottom: "-20%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              opacity: 0.2,
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
    id: "layered-02",
    name: "Grid Horizon",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
              opacity: 0.8,
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
    id: "layered-03",
    name: "Dot Field",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",
              opacity: "0.8",
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
    id: "layered-04",
    name: "Sunburst Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            className="dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 0%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 12deg)",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              opacity: 0.2,
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              transform: "translateX(-50%)",
              width: "200%",
            }}
          />
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 0%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 12deg)",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              opacity: 0.6,
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
    id: "layered-05",
    name: "Diagonal Stripes",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",

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
    id: "layered-06",
    name: "Corner Rays",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 100%)",
          }}
        >
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              height: "150%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.3,
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "150%",
            }}
          />
          <div
            className="block dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              height: "150%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.1,
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
    id: "layered-07",
    name: "Hexagon Mesh",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 85%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 85%)",

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
    id: "layered-08",
    name: "Vertical Beams",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 60%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",

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
    id: "layered-09",
    name: "Horizontal Beams",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",

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
    id: "layered-10",
    name: "Fine Dot Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 35%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 130%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",

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
    id: "layered-11",
    name: "Left Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 100%)",
          }}
        >
          <div
            className="block dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.1,
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }}
          />
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.2,
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
    id: "layered-12",
    name: "Right Conic Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 75%)",
          }}
        >
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.3,
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }}
          />
          <div
            className="block dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 50%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 10deg)",
              height: "200%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.1,
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
    id: "layered-13",
    name: "Cross Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",

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
    id: "layered-14",
    name: "Slash Rain",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 85%)",
              backgroundImage:
                "repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 85%)",

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
    id: "layered-15",
    name: "Concentric Rings",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 100%, transparent 0px, transparent 20px, var(--primary) 20px, var(--primary) 21px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
    id: "layered-16",
    name: "Top Rings",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 0%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 75%)",
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
    id: "layered-17",
    name: "Dense Dots Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -20%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%)",

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
    id: "layered-18",
    name: "Checker Fade",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "24px 24px",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.4) 100%)",
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
    id: "layered-19",
    name: "Starburst Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 2deg, transparent 2deg, transparent 15deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
              opacity: 0.1,
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
    id: "layered-20",
    name: "Wide Grid Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 55%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",

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
    id: "layered-21",
    name: "Perspective Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "50px 30px",
              bottom: "-10%",
              height: "70%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 80%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 80%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "40px 40px",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--background) 50%, var(--primary) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 60%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 75%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 6deg)",
              bottom: "-15%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 75%)",
              opacity: 0.1,
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "16px 16px",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 100%)",
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
    id: "127",
    name: "Tight Vertical Lines",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--primary) 0%, var(--background) 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 15px, var(--primary) 15px, var(--primary) 16px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 70%)",
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
    id: "129",
    name: "Diagonal Fade Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 16px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 75%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, var(--primary) 3px, var(--primary) 4px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              height: "60%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, var(--primary) 0%, var(--background) 65%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              bottom: "-10%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              opacity: 0.1,
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 35%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              bottom: "0",
              height: "150%",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 35%, rgba(0,0,0,0.4) 100%)",
              opacity: 0.1,
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 70%)",
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 40px)",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 65%), radial-gradient(ellipse at 120% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 100%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px, transparent 31px, transparent 60px, var(--primary) 60px, var(--primary) 61px)",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              opacity: "0.5",
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 70%), linear-gradient(to bottom, rgba(255,255,255,0) 50%, var(--background) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 24px)",
              height: "70%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 65%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 3deg, transparent 3deg, transparent 20deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0) 75%)",
              opacity: 0.1,
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 150%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(0,0,0,0.35) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 4deg)",
              bottom: "-5%",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(0,0,0,0.35) 100%)",
              opacity: 0.2,
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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 65%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 0% 0%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 0% 0%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 55%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",

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
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 85%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 85%)",

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
    id: "layered-51",
    name: "Aurora Sweep",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--background) 50%), linear-gradient(225deg, var(--primary) 0%, transparent 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(120deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 35px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-52",
    name: "Spiral Rings",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 30% 70%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 30% 70%, transparent 0px, transparent 18px, var(--primary) 18px, var(--primary) 19px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 30% 70%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-53",
    name: "Wave Bands",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 30%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -20%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 28px)",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-54",
    name: "Mesh Vignette",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--background) 30%, var(--primary) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 90%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 90%)",
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
    id: "layered-55",
    name: "Top Fan Wide",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 25%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 80%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 0%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 7deg)",
              height: "100%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              opacity: 0.15,
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              transform: "translateX(-50%)",
              width: "250%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-56",
    name: "Micro Dots Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 65%), radial-gradient(ellipse at -5% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "60%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-57",
    name: "Split Horizon",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--primary) 0%, var(--background) 50%, var(--primary) 100%)",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.3) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.3) 100%)",
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
    id: "layered-58",
    name: "Corner Bloom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 100% 0%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              height: "150%",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)",
              opacity: 0.2,
              pointerEvents: "none",
              position: "absolute",
              right: "0",
              top: "0",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-59",
    name: "Thin Grid Fade",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.6,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 80%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "15px 15px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 80%)",
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
    id: "layered-60",
    name: "Radial Stripes",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 4deg, transparent 4deg, transparent 30deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0) 70%)",
              opacity: 0.12,
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
    id: "layered-61",
    name: "Dot Rain Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "60%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-62",
    name: "Tight Lines Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 8px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-63",
    name: "Triangle Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 28px)",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
    id: "layered-64",
    name: "Side Rings Right",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 110% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 100% 50%, transparent 0px, transparent 25px, var(--primary) 25px, var(--primary) 26px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-65",
    name: "Coarse Grid Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-66",
    name: "Backlight",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 65%), linear-gradient(to bottom, var(--background) 0%, transparent 50%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)",
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
    id: "layered-67",
    name: "Fanned Slashes",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 35%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 130%, var(--primary) 0%, var(--background) 80%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 15px)",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
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
    id: "layered-68",
    name: "Dot Halo",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 80%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 80%)",
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
    id: "layered-69",
    name: "Triple Fan Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 55%)",
            opacity: 0.6,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 5deg)",
              bottom: "-10%",
              height: "80%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
              opacity: 0.12,
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%)",
              width: "350%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-70",
    name: "Horizon Glow",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 30%, var(--primary) 65%, var(--background) 100%)",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 45px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
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
    id: "layered-71",
    name: "Diamond Field",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
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
    id: "layered-72",
    name: "Chevron Bottom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              bottom: "0",
              height: "55%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
    id: "layered-73",
    name: "Center Lines H",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-74",
    name: "Quad Bloom",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 100% 0%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 0% 100%, var(--primary) 0%, var(--background) 55%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 55%)",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-75",
    name: "Fine Hatching",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 65%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(30deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 14px)",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-76",
    name: "Dense Rings Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 10px, var(--primary) 10px, var(--primary) 11px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0) 70%)",
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
    id: "layered-77",
    name: "Bottom Left Fan",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top right, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 0% 110%, var(--primary) 0%, var(--background) 80%)",
          }}
        >
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              bottom: "0",
              height: "150%",
              left: "0",
              maskImage:
                "linear-gradient(to top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              opacity: 0.3,
              pointerEvents: "none",
              position: "absolute",
              width: "150%",
            }}
          />
          <div
            className="block dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 0% 100%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 9deg)",
              bottom: "0",
              height: "150%",
              left: "0",
              maskImage:
                "linear-gradient(to top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              opacity: 0.1,
              pointerEvents: "none",
              position: "absolute",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-78",
    name: "Checker Vignette",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--background) 40%, var(--primary) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.35) 85%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.35) 85%)",
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
    id: "layered-79",
    name: "Side Rings Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 65%), radial-gradient(ellipse at -10% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 0% 50%, transparent 0px, transparent 25px, var(--primary) 25px, var(--primary) 26px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-80",
    name: "Pixel Grid",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "8px 8px",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
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
    id: "layered-81",
    name: "Long Dashes",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 30px, transparent 30px, transparent 55px)",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-82",
    name: "Dot Spray Top",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              height: "55%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
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
    id: "layered-83",
    name: "Soft Beams",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 50px)",
              bottom: "0",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
    id: "layered-84",
    name: "Top Right Rays",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom left, var(--background) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 110% -10%, var(--primary) 0%, var(--background) 80%)",
          }}
        >
          <div
            className="hidden dark:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              height: "150%",
              maskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              opacity: 0.35,
              pointerEvents: "none",
              position: "absolute",
              right: "0",
              top: "0",
              width: "150%",
            }}
          />
          <div
            className="block dark:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 100% 0%, var(--primary) 0deg, var(--primary) 1.5deg, transparent 1.5deg, transparent 8deg)",
              height: "150%",
              maskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
              opacity: 0.1,
              pointerEvents: "none",
              position: "absolute",
              right: "0",
              top: "0",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-85",
    name: "Dot Columns",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 35%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "24px 12px",
              bottom: "0",
              height: "70%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
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
    id: "layered-86",
    name: "Layered Arcs",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(ellipse at 50% 50%, transparent 0px, transparent 22px, var(--primary) 22px, var(--primary) 23px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-87",
    name: "Sparse Dots",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.6,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1.5px, transparent 1.5px)",
              backgroundSize: "50px 50px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 75%)",
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
    id: "layered-88",
    name: "Brick Pattern",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 48px)",
              bottom: "0",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
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
    id: "layered-89",
    name: "Cross Halo",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--primary) 0%, var(--background) 60%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 75%)",
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
    id: "layered-90",
    name: "Dense Diagonals",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 50% -5%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 8px)",
              height: "65%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)",
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
    id: "layered-91",
    name: "Half Grid Right",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at 120% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "40%",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "60%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-92",
    name: "Ripple Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 12px, var(--primary) 12px, var(--primary) 13px, transparent 13px, transparent 25px, var(--primary) 25px, var(--primary) 26px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)",
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
    id: "layered-93",
    name: "Half Grid Left",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse at -20% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "60%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-94",
    name: "Top Cross Hatch",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
              height: "60%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-95",
    name: "Scattered Checks",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.6,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 75%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 75%)",
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
    id: "layered-96",
    name: "Broad Scan Lines",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 110%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 6px, var(--primary) 6px, var(--primary) 8px)",
              height: "100%",
              left: "0",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
    id: "layered-97",
    name: "Spoke Wheel",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0) 68%)",
              backgroundImage:
                "repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 12deg)",
              height: "200%",
              left: "50%",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0) 68%)",
              opacity: 0.15,
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
    id: "layered-98",
    name: "Isometric Corner",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, var(--background) 40%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 100% 100%, var(--primary) 0%, var(--background) 70%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 100%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 32px)",
              bottom: "0",
              height: "75%",
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 100%)",
              pointerEvents: "none",
              position: "absolute",
              right: "0",
              width: "75%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "layered-99",
    name: "Crosshatch Center",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 65%)",
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
    id: "layered-100",
    name: "Full Dot Vignette",
    category: "layered",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--background) 30%, var(--primary) 100%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.45) 90%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.45) 90%)",
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
