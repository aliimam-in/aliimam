import type { Pattern } from "@/src/types/pattern"

export const linePatterns: Pattern[] = [
  {
    id: "lines-01",
    name: "Grid Fade Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
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
    id: "lines-02",
    name: "Grid Fade Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
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
    id: "lines-03",
    name: "Grid Fade Center",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 50%, transparent 100%)",
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
    id: "lines-04",
    name: "Grid Fade Left",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 60%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 80% at 0% 50%, #000 60%, transparent 100%)",
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
    id: "lines-05",
    name: "Grid Fade Right",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 100% 50%, #000 60%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 80% at 100% 50%, #000 60%, transparent 100%)",
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
    id: "lines-06",
    name: "Vertical Lines Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 100%",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
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
    id: "lines-07",
    name: "Vertical Lines Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 100%",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to top, #000 0%, transparent 80%)",
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
    id: "lines-08",
    name: "Horizontal Lines Left",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "100% 30px",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to right, #000 0%, transparent 80%)",
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
    id: "lines-09",
    name: "Horizontal Lines Right",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "100% 30px",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to left, #000 0%, transparent 80%)",
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
    id: "lines-10",
    name: "Diagonal Lines TL",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(135deg, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(135deg, #000 0%, transparent 75%)",
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
    id: "lines-11",
    name: "Diagonal Lines TR",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(225deg, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(225deg, #000 0%, transparent 75%)",
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
    id: "lines-12",
    name: "Diagonal Lines BL",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(45deg, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(45deg, #000 0%, transparent 75%)",
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
    id: "lines-13",
    name: "Diagonal Lines BR",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(315deg, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(315deg, #000 0%, transparent 75%)",
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
    id: "lines-14",
    name: "Dense Grid Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 75%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "15px 15px",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
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
    id: "lines-15",
    name: "Wide Grid Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, #000 0%, transparent 75%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to top, #000 0%, transparent 75%)",
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
    id: "lines-16",
    name: "Corner Grid TL",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, #000 50%, transparent 100%)",
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
    id: "lines-17",
    name: "Corner Grid TR",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 100% 0%, #000 50%, transparent 100%)",
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
    id: "lines-18",
    name: "Corner Grid BL",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 0% 100%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 0% 100%, #000 50%, transparent 100%)",
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
    id: "lines-19",
    name: "Corner Grid BR",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 100% 100%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 100% 100%, #000 50%, transparent 100%)",
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
    id: "lines-20",
    name: "Dashed Grid",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, var(--primary) 1px, transparent 1px),
        linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
      `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient( to right,black 0px,black 3px,transparent 3px,transparent 8px),repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px ) ",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-21",
    name: "Dashed Grid Bottom Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px) ",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient( to right, black 0px, black 3px, transparent 3px, transparent 8px ), repeating-linear-gradient( to bottom, black 0px, black 3px,  transparent 3px,  transparent 8px ), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%) ",
              WebkitMaskImage:
                "repeating-linear-gradient( to right, black 0px, black 3px, transparent 3px, transparent 8px ), repeating-linear-gradient( to bottom, black 0px, black 3px,  transparent 3px, transparent 8px ), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%) ",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-22",
    name: "Dashed Grid Top Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px) ",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient( to right, black 0px, black 3px, transparent 3px, transparent 8px ), repeating-linear-gradient( to bottom, black 0px, black 3px, transparent 3px, transparent 8px ), radial-gradient(ellipse 100% 80% at 50% 100%, var(--background) 50%, transparent 90%)",
              WebkitMaskImage:
                "repeating-linear-gradient( to right, black 0px, black 3px, transparent 3px, transparent 8px ), repeating-linear-gradient( to bottom, black 0px, black 3px, transparent 3px, transparent 8px ), radial-gradient(ellipse 100% 80% at 50% 100%, var(--background) 50%, transparent 90%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-23",
    name: "Dashed Grid Corners Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-24",
    name: "Dashed Grid Corners Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-25",
    name: "Crosshatch Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
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
    id: "lines-26",
    name: "Crosshatch Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 20px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to top, #000 0%, transparent 75%)",
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
    id: "lines-27",
    name: "Thin Vertical Lines",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 100% at 50% 50%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "15px 100%",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 80% 100% at 50% 50%, #000 50%, transparent 100%)",
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
    id: "lines-28",
    name: "Thick Horizontal Lines",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 70% at 50% 50%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 2px, transparent 2px)",
              backgroundSize: "100% 50px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 100% 70% at 50% 50%, #000 50%, transparent 100%)",
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
    id: "lines-29",
    name: "Diagonal Mesh Left",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to right, #000 0%, transparent 75%)",
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
    id: "lines-30",
    name: "Diagonal Mesh Right",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to left, #000 0%, transparent 75%)",
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
    id: "lines-31",
    name: "Dashed Grid Bottom Left Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-32",
    name: "Dashed Grid Bottom Left Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-33",
    name: "Tight Lines Vertical",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "8px 100%",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
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
    id: "lines-34",
    name: "Wide Lines Horizontal",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, #000 0%, transparent 80%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "100% 60px",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to right, #000 0%, transparent 80%)",
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
    id: "lines-35",
    name: "Perspective Grid Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 25px",
              bottom: "0",
              height: "60%",
              left: "50%",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)",
              opacity: "0.5",
              pointerEvents: "none",
              position: "absolute",
              transform: "translateX(-50%) perspective(300px) rotateX(45deg)",
              width: "150%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-36",
    name: "Dashed Grid Center Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: "0.5",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-37",
    name: "Circuit Board Light",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 19px, var(--primary) 19px, var(--primary) 20px, transparent 20px, transparent 39px, var(--primary) 39px, var(--primary) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 19px, var(--primary) 19px, var(--primary) 20px, transparent 20px, transparent 39px, var(--primary) 39px, var(--primary) 40px),
              radial-gradient(circle at 20px 20px, var(--primary) 2px, transparent 2px),
              radial-gradient(circle at 40px 40px, var(--primary) 2px, transparent 2px)
            `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
              opacity: "0.3",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-38",
    name: "Dual Grid Layers",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 50%, transparent 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px), linear-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--primary) 0.5px, transparent 0.5px)",
              backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 50%, transparent 100%)",
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
    id: "lines-39",
    name: "Isometric Lines",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 30px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
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
    id: "lines-40",
    name: "Diagonal Grid TL",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 50%, transparent 100%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 22px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 0% 0%, #000 50%, transparent 100%)",
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
    id: "lines-41",
    name: "Concentric Circles Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 0%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 70%)",
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
    id: "lines-42",
    name: "Concentric Circles Bottom",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, #000 0%, transparent 70%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 100%, transparent 0px, transparent 30px, var(--primary) 30px, var(--primary) 31px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to top, #000 0%, transparent 70%)",
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
    id: "lines-43",
    name: "Concentric Circles Center",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, #000 35%, transparent 100%)",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 25px, var(--primary) 25px, var(--primary) 26px)",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(circle at 50% 50%, #000 35%, transparent 100%)",
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
    id: "lines-44",
    name: "Scan Lines",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, var(--primary) 3px, var(--primary) 4px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
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
    id: "lines-45",
    name: "Dense Diagonal Left",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to right, #000 0%, transparent 75%)",
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
    id: "lines-46",
    name: "Dense Diagonal Right",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 12px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to left, #000 0%, transparent 75%)",
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
    id: "lines-47",
    name: "Hex Pattern Top",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, transparent 75%)",
              backgroundImage:
                "repeating-linear-gradient(60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-60deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 25px)",
              height: "100%",
              left: "0",
              maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
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
    id: "lines-48",
    name: "Diagonal Grid Spotlight",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
              linear-gradient(90deg, var(--primary) 1px, transparent 0),
              linear-gradient(180deg, var(--primary) 1px, transparent 0),
              repeating-linear-gradient(45deg, var(--primary), transparent 2px 10px)
            `,
              backgroundSize: "24px 24px, 24px 24px, 24px 24px",
              WebkitMask:
                "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 80%)",
              mask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 80%)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "lines-49",
    name: "Checkerboard Fade",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 65% at 50% 50%, #000 45%, transparent 100%)",
              backgroundImage:
                "repeating-conic-gradient(var(--primary) 0%, var(--primary) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "20px 20px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 65% 65% at 50% 50%, #000 45%, transparent 100%)",
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
    id: "lines-50",
    name: "Vignette Grid",
    category: "lines",
    render: function () {
      return (
        <div className="absolute inset-0 z-0">
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, #000 70%, #000 100%)",
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              height: "100%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, #000 70%, #000 100%)",
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
    id: "lines-51",
    name: "Perspective Grid",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
            opacity: 0.4,
            transform: "perspective(500px) rotateX(30deg)",
            transformOrigin: "50% 100%",
          }}
        />
      )
    },
  },
  {
    id: "lines-52",
    name: "Simple Crosshatch",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--primary) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },
  {
    id: "lines-53",
    name: "Tartan Cross",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 9px, color-mix(in srgb, var(--primary) 55%, transparent) 9px, color-mix(in srgb, var(--primary) 55%, transparent) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, var(--primary) 9px, var(--primary) 10px)",
          }}
        />
      )
    },
  },

  {
    id: "lines-54",
    name: "Pinstripe",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--primary), var(--primary) 1px, var(--background) 1px, var(--background) 15px)",
          }}
        />
      )
    },
  },
  {
    id: "lines-55",
    name: "Cross Hatch Diagonal",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },
  {
    id: "lines-56",
    name: "Brick Wall Fine",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "30px 15px, 30px 15px, 15px 15px",
            backgroundPosition: "0 0, 0 0, 15px 7.5px",
          }}
        />
      )
    },
  },
  {
    id: "lines-57",
    name: "Cross Plus Sign",
    category: "lines",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "10px 10px",
          }}
        />
      )
    },
  },
]
