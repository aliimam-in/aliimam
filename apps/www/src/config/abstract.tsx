import type { Pattern } from "@/src/types/pattern"

export const abstractPatterns: Pattern[] = [
  {
    id: "abstract-01",
    name: "Radial Web on Linear",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-radial-gradient(circle at 0 0, transparent 0, var(--background) 35px), repeating-linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent), var(--primary))",
          }}
        />
      )
    },
  },

  {
    id: "abstract-02",
    name: "Tight Chevron 15px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%), linear-gradient(225deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(315deg, var(--primary) 25%, var(--background) 25%)",
            backgroundPosition: "15px 0, 15px 0, 0 0, 0 0",
            backgroundSize: "15px 15px",
            backgroundRepeat: "repeat",
          }}
        />
      )
    },
  },

  {
    id: "abstract-03",
    name: "Chevron 30px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%), linear-gradient(225deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(315deg, var(--primary) 25%, var(--background) 25%)",
            backgroundPosition: "15px 0, 15px 0, 0 0, 0 0",
            backgroundSize: "30px 30px",
            backgroundRepeat: "repeat",
          }}
        />
      )
    },
  },

  {
    id: "abstract-04",
    name: "Chevron 60px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%), linear-gradient(225deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(315deg, var(--primary) 25%, var(--background) 25%)",
            backgroundPosition: "30px 0, 30px 0, 0 0, 0 0",
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
          }}
        />
      )
    },
  },

  {
    id: "abstract-05",
    name: "Alpha Chevron Mix",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--primary) 55%, transparent) 25%, transparent 25%) -15px 0 / 30px 30px, linear-gradient(225deg, var(--primary) 25%, transparent 25%) -15px 0 / 30px 30px, linear-gradient(315deg, color-mix(in srgb, var(--primary) 55%, transparent) 25%, transparent 25%) 0px 0 / 30px 30px, linear-gradient(45deg, var(--primary) 25%, var(--background) 25%) 0px 0 / 30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-06",
    name: "Radial Ellipse Corner Halftone",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(ellipse farthest-corner at 15px 15px, var(--primary), var(--primary) 50%, var(--background) 50%)",
            backgroundSize: "15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-07",
    name: "Radial Ellipse Corner Halftone 30px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(ellipse farthest-corner at 30px 30px, var(--primary), var(--primary) 50%, var(--background) 50%)",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-08",
    name: "Blended Radial Rings",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at center center, var(--primary), var(--background)), repeating-radial-gradient(circle at center center, var(--primary), var(--primary), 15px, transparent 30px, transparent 15px)",
            backgroundBlendMode: "multiply",
          }}
        />
      )
    },
  },

  {
    id: "abstract-09",
    name: "Blended Radial Rings 30px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at center center, var(--primary), var(--background)), repeating-radial-gradient(circle at center center, var(--primary), var(--primary), 30px, transparent 60px, transparent 30px)",
            backgroundBlendMode: "multiply",
          }}
        />
      )
    },
  },

  {
    id: "abstract-10",
    name: "45deg Stripe Narrow",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(45deg, var(--primary), var(--primary) 7.5px, var(--background) 7.5px, var(--background) 37.5px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-11",
    name: "45deg Stripe Wide",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(45deg, var(--primary), var(--primary) 15px, var(--background) 15px, var(--background) 60px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-12",
    name: "Blueprint Grid",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 3px, transparent 3px), linear-gradient(90deg, var(--primary) 3px, transparent 3px), linear-gradient(var(--primary) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--primary) 1.5px, var(--background) 1.5px)",
            backgroundSize: "75px 75px, 75px 75px, 15px 15px, 15px 15px",
            backgroundPosition: "-3px -3px, -3px -3px, -1.5px -1.5px, -1.5px -1.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-13",
    name: "Hexagon Mesh",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(60deg, color-mix(in srgb, var(--primary) 77%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--primary) 77%, transparent) 75%, color-mix(in srgb, var(--primary) 77%, transparent)), linear-gradient(60deg, color-mix(in srgb, var(--primary) 77%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--primary) 77%, transparent) 75%, color-mix(in srgb, var(--primary) 77%, transparent))",
            backgroundSize: "30px 53px",
            backgroundPosition: "0 0, 0 0, 15px 26px, 15px 26px, 0 0, 15px 26px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-14",
    name: "Hexagon Mesh Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(30deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(150deg, var(--primary) 12%, transparent 12.5%, transparent 87%, var(--primary) 87.5%, var(--primary)), linear-gradient(60deg, color-mix(in srgb, var(--primary) 77%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--primary) 77%, transparent) 75%, color-mix(in srgb, var(--primary) 77%, transparent)), linear-gradient(60deg, color-mix(in srgb, var(--primary) 77%, transparent) 25%, transparent 25.5%, transparent 75%, color-mix(in srgb, var(--primary) 77%, transparent) 75%, color-mix(in srgb, var(--primary) 77%, transparent))",
            backgroundSize: "60px 106px",
            backgroundPosition: "0 0, 0 0, 30px 53px, 30px 53px, 0 0, 30px 53px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-15",
    name: "45deg Half-Tile",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 50%, var(--background) 50%)",
            backgroundSize: "15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-16",
    name: "45deg Half-Tile 30px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 50%, var(--background) 50%)",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-17",
    name: "-45deg Half-Tile",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(-45deg, var(--background), var(--background) 50%, var(--primary) 50%, var(--primary))",
            backgroundSize: "15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-18",
    name: "-45deg Half-Tile 30px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(-45deg, var(--background), var(--background) 50%, var(--primary) 50%, var(--primary))",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-19",
    name: "Diagonal Checkerboard",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%, var(--primary)), repeating-linear-gradient(45deg, var(--primary) 25%, var(--background) 25%, var(--background) 75%, var(--primary) 75%, var(--primary))",
            backgroundPosition: "0 0, 15px 15px",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-20",
    name: "Diagonal Checkerboard 60px",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%, var(--primary)), repeating-linear-gradient(45deg, var(--primary) 25%, var(--background) 25%, var(--background) 75%, var(--primary) 75%, var(--primary))",
            backgroundPosition: "0 0, 30px 30px",
            backgroundSize: "60px 60px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-21",
    name: "Circle Window Grid",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "radial-gradient(circle, transparent 20%, var(--background) 20%, var(--background) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, var(--background) 20%, var(--background) 80%, transparent 80%, transparent) 37.5px 37.5px, linear-gradient(var(--primary) 3px, transparent 3px) 0 -1.5px, linear-gradient(90deg, var(--primary) 3px, var(--background) 3px) -1.5px 0",
            backgroundSize: "75px 75px, 75px 75px, 37.5px 37.5px, 37.5px 37.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-22",
    name: "Circle Window Grid Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "radial-gradient(circle, transparent 20%, var(--background) 20%, var(--background) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, var(--background) 20%, var(--background) 80%, transparent 80%, transparent) 75px 75px, linear-gradient(var(--primary) 3px, transparent 3px) 0 -1.5px, linear-gradient(90deg, var(--primary) 3px, var(--background) 3px) -1.5px 0",
            backgroundSize: "150px 150px, 150px 150px, 75px 75px, 75px 75px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-23",
    name: "0deg Horizontal Stripes",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(0deg, var(--primary), var(--primary) 3px, var(--background) 3px, var(--background) 20px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-24",
    name: "90deg Vertical Stripes",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(90deg, var(--primary), var(--primary) 3px, var(--background) 3px, var(--background) 20px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-25",
    name: "-45deg Stripe Narrow",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(-45deg, var(--primary), var(--primary) 7.5px, var(--background) 7.5px, var(--background) 37.5px)",
          }}
        />
      )
    },
  },

  

  

  {
    id: "abstract-31",
    name: "Wavy Stripe Blend",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-radial-gradient(circle at 0 0, transparent 0, var(--background) 30px), repeating-linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent), var(--primary))",
          }}
        />
      )
    },
  },

  {
    id: "abstract-32",
    name: "Vertical Blueprint",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 3px, transparent 3px), linear-gradient(90deg, var(--primary) 3px, transparent 3px), linear-gradient(var(--primary) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--primary) 1.5px, var(--background) 1.5px)",
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
            backgroundPosition: "-3px -3px, -3px -3px, -1.5px -1.5px, -1.5px -1.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-33",
    name: "Micro Blueprint",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 2px, transparent 2px), linear-gradient(90deg, var(--primary) 2px, transparent 2px), linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, var(--background) 1px)",
            backgroundSize: "30px 30px, 30px 30px, 6px 6px, 6px 6px",
            backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-34",
    name: "30deg Triangle Stripe",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(30deg, var(--primary), var(--primary) 5px, var(--background) 5px, var(--background) 25px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-35",
    name: "60deg Triangle Stripe",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(60deg, var(--primary), var(--primary) 5px, var(--background) 5px, var(--background) 25px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-36",
    name: "Diamond Argyle",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%), linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-37",
    name: "Conic Checkerboard",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-conic-gradient(var(--primary) 0% 25%, var(--background) 0% 50%)",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-38",
    name: "Conic Checkerboard Fine",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-conic-gradient(var(--primary) 0% 25%, var(--background) 0% 50%)",
            backgroundSize: "15px 15px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-39",
    name: "Zigzag",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%), linear-gradient(225deg, var(--primary) 25%, transparent 25%)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-40",
    name: "Zigzag Inverse",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(315deg, var(--primary) 25%, transparent 25%)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-41",
    name: "Wave Radial Scale",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(ellipse farthest-corner at 0 0, var(--primary), var(--background))",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-42",
    name: "Moroccan Tile",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% 0%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 50% 100%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 0% 50%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 100% 50%, var(--primary) 25%, transparent 25%)",
            backgroundSize: "40px 40px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-43",
    name: "Moroccan Tile Small",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% 0%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 50% 100%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 0% 50%, var(--primary) 25%, transparent 25%), radial-gradient(circle at 100% 50%, var(--primary) 25%, transparent 25%)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  

  {
    id: "abstract-46",
    name: "Candy Stripe Bold",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 10px, var(--background) 10px, var(--background) 20px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-47",
    name: "Sunburst Conic",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-conic-gradient(var(--primary) 0deg 10deg, var(--background) 10deg 20deg)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-48",
    name: "Sunburst Conic Fine",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            background:
              "repeating-conic-gradient(var(--primary) 0deg 5deg, var(--background) 5deg 10deg)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-49",
    name: "Noise Radial Web Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-radial-gradient(circle at 0 0, transparent 0, var(--background) 30px), repeating-linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent), var(--primary))",
          }}
        />
      )
    },
  },


  {
    id: "abstract-51",
    name: "Brick Wall",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 2px, transparent 2px), linear-gradient(90deg, var(--primary) 2px, transparent 2px), linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "60px 30px, 60px 30px, 30px 30px, 60px 30px",
            backgroundPosition: "0 0, 0 0, 30px 0, 0 15px",
          }}
        />
      )
    },
  },

  

  {
    id: "abstract-53",
    name: "Triangles Up",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(120deg, var(--primary) 33.33%, transparent 33.33%), linear-gradient(240deg, var(--primary) 33.33%, transparent 33.33%), linear-gradient(0deg, var(--primary) 33.33%, transparent 33.33%)",
            backgroundSize: "30px 52px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-54",
    name: "Triangles Down",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(60deg, var(--primary) 33.33%, transparent 33.33%), linear-gradient(300deg, var(--primary) 33.33%, transparent 33.33%), linear-gradient(180deg, var(--primary) 33.33%, transparent 33.33%)",
            backgroundSize: "30px 52px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-55",
    name: "Houndstooth",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%), linear-gradient(-45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-56",
    name: "Houndstooth Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%), linear-gradient(-45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-57",
    name: "Scales / Fish Scale",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% 0%, transparent 60%, var(--primary) 60%), radial-gradient(circle at 50% 0%, transparent 60%, var(--primary) 60%)",
            backgroundSize: "40px 40px, 40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-58",
    name: "Scales Fine",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% 0%, transparent 60%, var(--primary) 60%), radial-gradient(circle at 50% 0%, transparent 60%, var(--primary) 60%)",
            backgroundSize: "20px 20px, 20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-59",
    name: "Herringbone",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 5px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--primary) 0, var(--primary) 5px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-60",
    name: "Herringbone Wide",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 8px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--primary) 0, var(--primary) 8px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-61",
    name: "Plaid / Tartan",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 14px, var(--primary) 14px, var(--primary) 15px, transparent 15px, transparent 29px, color-mix(in srgb, var(--primary) 55%, transparent) 29px, color-mix(in srgb, var(--primary) 55%, transparent) 34px), repeating-linear-gradient(90deg, transparent, transparent 14px, var(--primary) 14px, var(--primary) 15px, transparent 15px, transparent 29px, color-mix(in srgb, var(--primary) 55%, transparent) 29px, color-mix(in srgb, var(--primary) 55%, transparent) 34px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-62",
    name: "Woven / Basket Weave",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--primary), var(--primary) 5px, transparent 5px, transparent 15px), repeating-linear-gradient(90deg, var(--primary), var(--primary) 5px, transparent 5px, transparent 15px)",
            backgroundSize: "20px 20px, 20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-63",
    name: "Woven Wide",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--primary), var(--primary) 8px, transparent 8px, transparent 24px), repeating-linear-gradient(90deg, var(--primary), var(--primary) 8px, transparent 8px, transparent 24px)",
            backgroundSize: "40px 40px, 40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-64",
    name: "Quatrefoil",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 0% 50%, transparent 20%, var(--primary) 21%, var(--primary) 30%, transparent 31%), radial-gradient(circle at 100% 50%, transparent 20%, var(--primary) 21%, var(--primary) 30%, transparent 31%), radial-gradient(circle at 50% 0%, transparent 20%, var(--primary) 21%, var(--primary) 30%, transparent 31%), radial-gradient(circle at 50% 100%, transparent 20%, var(--primary) 21%, var(--primary) 30%, transparent 31%)",
            backgroundSize: "40px 40px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-65",
    name: "Trellis / Lattice",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 10%, transparent 10%, transparent 40%, var(--primary) 40%, var(--primary) 60%, transparent 60%, transparent 90%, var(--primary) 90%), linear-gradient(-45deg, var(--primary) 10%, transparent 10%, transparent 40%, var(--primary) 40%, var(--primary) 60%, transparent 60%, transparent 90%, var(--primary) 90%)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-66",
    name: "Trellis Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 10%, transparent 10%, transparent 40%, var(--primary) 40%, var(--primary) 60%, transparent 60%, transparent 90%, var(--primary) 90%), linear-gradient(-45deg, var(--primary) 10%, transparent 10%, transparent 40%, var(--primary) 40%, var(--primary) 60%, transparent 60%, transparent 90%, var(--primary) 90%)",
            backgroundSize: "40px 40px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-67",
    name: "Halftone Radial",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 30%, transparent 31%), radial-gradient(circle, var(--primary) 30%, transparent 31%)",
            backgroundSize: "20px 20px, 20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-68",
    name: "Halftone Radial Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 30%, transparent 31%), radial-gradient(circle, var(--primary) 30%, transparent 31%)",
            backgroundSize: "40px 40px, 40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-69",
    name: "Windmill",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 50%, transparent 50%), linear-gradient(-45deg, var(--primary) 50%, transparent 50%)",
            backgroundSize: "20px 40px",
            backgroundPosition: "0 0, 10px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-70",
    name: "Windmill Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 50%, transparent 50%), linear-gradient(-45deg, var(--primary) 50%, transparent 50%)",
            backgroundSize: "40px 80px",
            backgroundPosition: "0 0, 20px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-71",
    name: "Pinwheel",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(-45deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--primary) 75%), linear-gradient(-45deg, transparent 75%, var(--primary) 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-72",
    name: "Pinwheel Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(-45deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--primary) 75%), linear-gradient(-45deg, transparent 75%, var(--primary) 75%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-73",
    name: "Wavy Horizontal",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% -50%, var(--primary) 40%, transparent 41%), radial-gradient(circle at 50% 150%, var(--primary) 40%, transparent 41%)",
            backgroundSize: "40px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-74",
    name: "Wavy Vertical",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at -50% 50%, var(--primary) 40%, transparent 41%), radial-gradient(circle at 150% 50%, var(--primary) 40%, transparent 41%)",
            backgroundSize: "20px 40px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-75",
    name: "Bowtie / Hourglass",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 33%, transparent 33%, transparent 66%, var(--primary) 66%), linear-gradient(-45deg, var(--primary) 33%, transparent 33%, transparent 66%, var(--primary) 66%)",
            backgroundSize: "30px 30px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-76",
    name: "Arrow / Chevron Right",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 50%, transparent 50%), linear-gradient(-45deg, var(--primary) 50%, transparent 50%)",
            backgroundSize: "30px 15px",
            backgroundPosition: "0 0, 0 7.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-77",
    name: "Arrow / Chevron Left",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 50%, transparent 50%), linear-gradient(-135deg, var(--primary) 50%, transparent 50%)",
            backgroundSize: "30px 15px",
            backgroundPosition: "0 0, 0 7.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-78",
    name: "Star of David / Hex Star",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(60deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%), linear-gradient(-60deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%), linear-gradient(0deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--primary) 75%)",
            backgroundSize: "30px 52px",
            backgroundPosition: "0 0, 0 0, 0 26px",
          }}
        />
      )
    },
  }, 
  {
    id: "abstract-81",
    name: "Offset Square Grid",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px), linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
            backgroundPosition: "-1px -1px, -1px -1px, -0.5px -0.5px, -0.5px -0.5px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-82",
    name: "Stacked Waves",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, var(--primary) 20%, transparent 21%), radial-gradient(ellipse at 50% 50%, var(--primary) 20%, transparent 21%)",
            backgroundSize: "40px 20px, 40px 20px",
            backgroundPosition: "0 0, 20px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-83",
    name: "Diamonds Outline",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 1px, transparent 1px), linear-gradient(-45deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-84",
    name: "Diamonds Outline Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 1px, transparent 1px), linear-gradient(-45deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-85",
    name: "Triple Stripe",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 3px, transparent 3px, transparent 8px, color-mix(in srgb, var(--primary) 55%, transparent) 8px, color-mix(in srgb, var(--primary) 55%, transparent) 11px, transparent 11px, transparent 16px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-86",
    name: "Railroad Track",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--primary) 0, var(--primary) 2px, transparent 2px, transparent 20px), repeating-linear-gradient(0deg, transparent 0, transparent 14px, var(--primary) 14px, var(--primary) 16px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-87",
    name: "Graph Paper",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "10px 10px, 10px 10px, 50px 50px, 50px 50px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-88",
    name: "Micro Graph Paper",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px), linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "5px 5px, 5px 5px, 25px 25px, 25px 25px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-89",
    name: "Caterpillar / Chain",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 25% 50%, var(--primary) 30%, transparent 31%), radial-gradient(circle at 75% 50%, var(--primary) 30%, transparent 31%), linear-gradient(var(--primary) 2px, transparent 2px)",
            backgroundSize: "40px 20px, 40px 20px, 40px 20px",
            backgroundPosition: "0 0, 0 0, 0 9px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-90",
    name: "Honeycomb Outline",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(60deg, transparent 33%, var(--primary) 33%, var(--primary) 34%, transparent 34%, transparent 66%, var(--primary) 66%, var(--primary) 67%, transparent 67%), linear-gradient(120deg, transparent 33%, var(--primary) 33%, var(--primary) 34%, transparent 34%, transparent 66%, var(--primary) 66%, var(--primary) 67%, transparent 67%), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "40px 70px, 40px 70px, 40px 70px",
            backgroundPosition: "0 0, 20px 35px, 0 0",
          }}
        />
      )
    },
  },

  {
    id: "abstract-91",
    name: "Confetti Diagonal",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 2px, transparent 2px, transparent 10px, color-mix(in srgb, var(--primary) 55%, transparent) 10px, color-mix(in srgb, var(--primary) 55%, transparent) 12px, transparent 12px, transparent 20px), repeating-linear-gradient(-45deg, color-mix(in srgb, var(--primary) 55%, transparent) 0, color-mix(in srgb, var(--primary) 55%, transparent) 2px, transparent 2px, transparent 10px, var(--primary) 10px, var(--primary) 12px, transparent 12px, transparent 20px)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-92",
    name: "Gradient Stripe Fade",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--primary) 0, transparent 1px, transparent 19px, var(--primary) 20px), linear-gradient(to right, var(--background) 0%, transparent 40%, transparent 60%, var(--background) 100%)",
          }}
        />
      )
    },
  },

  {
    id: "abstract-93",
    name: "Dot-Dash Mix",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle, var(--primary) 2px, transparent 2px), linear-gradient(90deg, var(--primary) 3px, transparent 3px)",
            backgroundSize: "20px 20px, 20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-94",
    name: "Crisscross Fine",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(45deg, var(--primary) 0, var(--primary) 1px, transparent 1px, transparent 100%), linear-gradient(-45deg, var(--primary) 0, var(--primary) 1px, transparent 1px, transparent 100%)",
            backgroundSize: "10px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-95",
    name: "Staggered Bars Horizontal",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--primary) 0, var(--primary) 4px, transparent 4px, transparent 20px), repeating-linear-gradient(0deg, color-mix(in srgb, var(--primary) 55%, transparent) 0, color-mix(in srgb, var(--primary) 55%, transparent) 4px, transparent 4px, transparent 20px)",
            backgroundSize: "40px 20px, 40px 20px",
            backgroundPosition: "0 0, 20px 10px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-96",
    name: "Staggered Bars Vertical",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--primary) 0, var(--primary) 4px, transparent 4px, transparent 20px), repeating-linear-gradient(90deg, color-mix(in srgb, var(--primary) 55%, transparent) 0, color-mix(in srgb, var(--primary) 55%, transparent) 4px, transparent 4px, transparent 20px)",
            backgroundSize: "20px 40px, 20px 40px",
            backgroundPosition: "0 0, 10px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-97",
    name: "Rhombus Fill",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%, transparent 50%, var(--primary) 50%, var(--primary) 75%, transparent 75%, transparent)",
            backgroundSize: "20px 20px",
          }}
        />
      )
    },
  },

  {
    id: "abstract-98",
    name: "Rhombus Fill Large",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 25%, transparent 25%, transparent 50%, var(--primary) 50%, var(--primary) 75%, transparent 75%, transparent)",
            backgroundSize: "40px 40px",
          }}
        />
      )
    },
  },

  
  {
    id: "abstract-100",
    name: "Overlapping Rings",
    category: "abstract",
    render: function () {
      return (
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 50% 50%, transparent 30%, var(--primary) 31%, var(--primary) 33%, transparent 34%), radial-gradient(circle at 50% 50%, transparent 30%, var(--primary) 31%, var(--primary) 33%, transparent 34%)",
            backgroundSize: "40px 40px, 40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      )
    },
  },
]
