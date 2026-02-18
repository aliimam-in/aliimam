import type { Pattern } from "@/src/types/pattern"

export const meshPatterns: Pattern[] = [
  {
    id: "mesh-01",
    name: "Lavender Dusk",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 75% at 10% 10%, rgba(200, 180, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 72% at 78% 28%, rgba(230, 220, 255, 0.32), transparent 74%),
              radial-gradient(ellipse 88% 70% at 18% 82%, rgba(210, 190, 255, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 74% at 88% 88%, rgba(220, 210, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(240, 230, 255, 0.20), transparent 78%),
              linear-gradient(180deg, #faf8ff 0%, #f5f2ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 75% at 10% 10%, rgba(120, 80, 200, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 72% at 78% 28%, rgba(150, 110, 220, 0.28), transparent 74%),
              radial-gradient(ellipse 88% 70% at 18% 82%, rgba(100, 60, 180, 0.22), transparent 76%),
              radial-gradient(ellipse 92% 74% at 88% 88%, rgba(140, 100, 210, 0.26), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(160, 120, 230, 0.18), transparent 78%),
              linear-gradient(180deg, #0f0a1a 0%, #140e22 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-02",
    name: "Arctic Melt",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 8% 10%, rgba(180, 230, 255, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(210, 245, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 16% 84%, rgba(190, 235, 255, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 88%, rgba(200, 240, 255, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 67% at 50% 50%, rgba(220, 248, 255, 0.19), transparent 78%),
              linear-gradient(165deg, #f5fbff 0%, #edf7ff 50%, #f2f9ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 8% 10%, rgba(60, 140, 200, 0.24), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(90, 170, 230, 0.27), transparent 74%),
              radial-gradient(ellipse 87% 71% at 16% 84%, rgba(50, 130, 190, 0.21), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 88%, rgba(80, 160, 220, 0.25), transparent 74%),
              radial-gradient(ellipse 84% 67% at 50% 50%, rgba(100, 180, 240, 0.17), transparent 78%),
              linear-gradient(165deg, #0a1418 0%, #0e1820 50%, #0c1619 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-03",
    name: "Golden Peach",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 9%, rgba(255, 220, 170, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(255, 235, 200, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 83%, rgba(255, 210, 150, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(255, 228, 185, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(255, 240, 210, 0.20), transparent 78%),
              linear-gradient(175deg, #fffaf2 0%, #fff5ea 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 9%, rgba(200, 120, 40, 0.25), transparent 72%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(230, 150, 70, 0.28), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 83%, rgba(180, 100, 30, 0.22), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(220, 140, 60, 0.26), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(240, 160, 80, 0.18), transparent 78%),
              linear-gradient(175deg, #1a1208 0%, #22160a 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-04",
    name: "Emerald Haze",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 11%, rgba(180, 240, 210, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 75% at 80% 26%, rgba(210, 255, 235, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(160, 230, 200, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(195, 250, 225, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(220, 255, 240, 0.19), transparent 78%),
              linear-gradient(168deg, #f2fff8 0%, #e8faf0 50%, #effdf5 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 11%, rgba(40, 150, 100, 0.24), transparent 72%),
              radial-gradient(ellipse 90% 75% at 80% 26%, rgba(70, 180, 130, 0.27), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(30, 130, 80, 0.21), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(60, 170, 120, 0.25), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(80, 190, 140, 0.17), transparent 78%),
              linear-gradient(168deg, #081a12 0%, #0e1f16 50%, #0b1c14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-05",
    name: "Rose Quartz",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 11% 9%, rgba(255, 200, 220, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(255, 230, 240, 0.32), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(255, 180, 210, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(255, 215, 232, 0.30), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(255, 240, 248, 0.20), transparent 78%),
              linear-gradient(180deg, #fffbfd 0%, #fff5f9 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 11% 9%, rgba(180, 60, 120, 0.25), transparent 72%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(210, 90, 150, 0.29), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(160, 50, 110, 0.22), transparent 76%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(200, 80, 140, 0.27), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(220, 100, 160, 0.18), transparent 78%),
              linear-gradient(180deg, #1a0812 0%, #220a16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-06",
    name: "Midnight Bloom",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(200, 180, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 25%, rgba(230, 210, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 16% 82%, rgba(180, 160, 245, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 88% 88%, rgba(215, 195, 250, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 225, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f9f6ff 0%, #f2eeff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(100, 40, 200, 0.35), transparent 70%),
              radial-gradient(ellipse 90% 73% at 80% 25%, rgba(140, 70, 230, 0.32), transparent 72%),
              radial-gradient(ellipse 87% 71% at 16% 82%, rgba(80, 30, 180, 0.30), transparent 74%),
              radial-gradient(ellipse 91% 75% at 88% 88%, rgba(120, 60, 210, 0.33), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(160, 90, 240, 0.22), transparent 76%),
              linear-gradient(180deg, #0d0518 0%, #150a25 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-07",
    name: "Deep Ocean",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 8% 9%, rgba(180, 220, 255, 0.26), transparent 72%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(210, 240, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(160, 210, 245, 0.23), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(195, 230, 250, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(220, 245, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f5faff 0%, #edf5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 8% 9%, rgba(0, 100, 180, 0.35), transparent 70%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(20, 130, 210, 0.32), transparent 72%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(0, 80, 160, 0.30), transparent 74%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(30, 120, 200, 0.33), transparent 72%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(40, 140, 220, 0.22), transparent 76%),
              linear-gradient(180deg, #030e18 0%, #051420 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-08",
    name: "Sunset Coral",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 8%, rgba(255, 190, 170, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 75% at 78% 26%, rgba(255, 220, 200, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(255, 170, 150, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 76% at 88% 88%, rgba(255, 205, 185, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 235, 220, 0.20), transparent 78%),
              linear-gradient(165deg, #fff9f5 0%, #fff2ea 50%, #fff6f0 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 8%, rgba(200, 80, 60, 0.32), transparent 70%),
              radial-gradient(ellipse 90% 75% at 78% 26%, rgba(230, 110, 90, 0.29), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(180, 60, 40, 0.28), transparent 74%),
              radial-gradient(ellipse 91% 76% at 88% 88%, rgba(220, 100, 80, 0.30), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(240, 130, 110, 0.20), transparent 76%),
              linear-gradient(165deg, #1a0c08 0%, #220f0a 50%, #1c0d09 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-09",
    name: "Nebula Dream",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(230, 180, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 80% 24%, rgba(200, 220, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 82%, rgba(245, 190, 255, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 75% at 88% 89%, rgba(215, 200, 255, 0.28), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 48%, rgba(240, 220, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #fcf8ff 0%, #f6f0ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(180, 60, 220, 0.30), transparent 70%),
              radial-gradient(ellipse 91% 74% at 80% 24%, rgba(80, 120, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 88% 71% at 17% 82%, rgba(200, 80, 240, 0.26), transparent 74%),
              radial-gradient(ellipse 92% 75% at 88% 89%, rgba(120, 100, 230, 0.29), transparent 72%),
              radial-gradient(ellipse 85% 68% at 50% 48%, rgba(160, 120, 250, 0.18), transparent 76%),
              linear-gradient(180deg, #0e0618 0%, #150a25 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-10",
    name: "Sage Whisper",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 225, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 29%, rgba(230, 245, 230, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(180, 215, 180, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(215, 238, 215, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 250, 240, 0.19), transparent 78%),
              linear-gradient(172deg, #f8fcf8 0%, #f2f9f2 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(60, 120, 80, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 29%, rgba(90, 150, 110, 0.26), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(50, 110, 70, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(80, 140, 100, 0.27), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(100, 160, 120, 0.17), transparent 78%),
              linear-gradient(172deg, #0a140e 0%, #0e1912 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-11",
    name: "Copper Glow",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 11%, rgba(240, 200, 160, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 74% at 80% 27%, rgba(255, 230, 190, 0.32), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(230, 180, 140, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(250, 215, 175, 0.30), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(255, 240, 210, 0.20), transparent 78%),
              linear-gradient(168deg, #fffaf2 0%, #fff4e8 50%, #fff7f0 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 11%, rgba(160, 90, 40, 0.30), transparent 70%),
              radial-gradient(ellipse 89% 74% at 80% 27%, rgba(190, 120, 70, 0.28), transparent 72%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(140, 70, 30, 0.26), transparent 74%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(180, 110, 60, 0.29), transparent 72%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(200, 130, 80, 0.19), transparent 76%),
              linear-gradient(168deg, #1a100a 0%, #22140c 50%, #1c120b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-12",
    name: "Frost & Berry",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 9%, rgba(210, 180, 240, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 75% at 79% 28%, rgba(240, 220, 255, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(190, 160, 230, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(225, 200, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(245, 235, 255, 0.20), transparent 78%),
              linear-gradient(178deg, #fcf8ff 0%, #f7f2ff 50%, #faf5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 9%, rgba(120, 60, 180, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 75% at 79% 28%, rgba(160, 100, 220, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(100, 50, 160, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(140, 80, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(180, 120, 240, 0.18), transparent 76%),
              linear-gradient(178deg, #0e0618 0%, #140a22 50%, #100820 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-13",
    name: "Candy Floss",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 92% 76% at 11% 8%, rgba(255, 200, 230, 0.29), transparent 72%),
              radial-gradient(ellipse 88% 73% at 82% 20%, rgba(255, 235, 210, 0.33), transparent 74%),
              radial-gradient(ellipse 85% 71% at 12% 88%, rgba(230, 180, 255, 0.26), transparent 76%),
              radial-gradient(ellipse 90% 75% at 88% 82%, rgba(255, 215, 220, 0.31), transparent 74%),
              radial-gradient(ellipse 82% 68% at 50% 50%, rgba(255, 240, 250, 0.21), transparent 78%),
              linear-gradient(148deg, #fffbfe 0%, #fef7fc 50%, #fff9fd 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 92% 76% at 11% 8%, rgba(200, 80, 160, 0.27), transparent 70%),
              radial-gradient(ellipse 88% 73% at 82% 20%, rgba(230, 120, 100, 0.25), transparent 72%),
              radial-gradient(ellipse 85% 71% at 12% 88%, rgba(160, 60, 200, 0.24), transparent 74%),
              radial-gradient(ellipse 90% 75% at 88% 82%, rgba(220, 100, 140, 0.26), transparent 72%),
              radial-gradient(ellipse 82% 68% at 50% 50%, rgba(240, 140, 180, 0.17), transparent 76%),
              linear-gradient(148deg, #1a0a14 0%, #220e1a 50%, #1c0c16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-14",
    name: "Neon Jungle",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 12%, rgba(180, 255, 220, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 74% at 81% 22%, rgba(200, 255, 200, 0.29), transparent 74%),
              radial-gradient(ellipse 87% 72% at 16% 84%, rgba(160, 240, 200, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 88%, rgba(190, 255, 230, 0.27), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(220, 255, 240, 0.18), transparent 78%),
              linear-gradient(180deg, #f2fff8 0%, #e8faf2 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 12%, rgba(0, 180, 120, 0.30), transparent 68%),
              radial-gradient(ellipse 90% 74% at 81% 22%, rgba(40, 200, 100, 0.28), transparent 70%),
              radial-gradient(ellipse 87% 72% at 16% 84%, rgba(0, 160, 100, 0.26), transparent 72%),
              radial-gradient(ellipse 91% 76% at 89% 88%, rgba(30, 190, 130, 0.29), transparent 70%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(60, 220, 160, 0.20), transparent 74%),
              linear-gradient(180deg, #051410 0%, #0a1a14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-15",
    name: "Blush Marble",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 72% at 5% 5%, rgba(255, 220, 230, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 75% at 95% 8%, rgba(255, 235, 245, 0.34), transparent 72%),
              radial-gradient(ellipse 90% 70% at 8% 92%, rgba(250, 210, 225, 0.27), transparent 74%),
              radial-gradient(ellipse 92% 73% at 92% 88%, rgba(255, 230, 240, 0.32), transparent 72%),
              radial-gradient(ellipse 80% 65% at 50% 50%, rgba(255, 245, 250, 0.22), transparent 76%),
              linear-gradient(140deg, #fffcfd 0%, #fff8fb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 72% at 5% 5%, rgba(180, 80, 120, 0.28), transparent 68%),
              radial-gradient(ellipse 88% 75% at 95% 8%, rgba(210, 110, 150, 0.26), transparent 70%),
              radial-gradient(ellipse 90% 70% at 8% 92%, rgba(160, 70, 110, 0.24), transparent 72%),
              radial-gradient(ellipse 92% 73% at 92% 88%, rgba(200, 100, 140, 0.27), transparent 70%),
              radial-gradient(ellipse 80% 65% at 50% 50%, rgba(220, 130, 170, 0.18), transparent 74%),
              linear-gradient(140deg, #1a0a12 0%, #220e16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-16",
    name: "Storm Front",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 8% 10%, rgba(180, 200, 240, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(210, 225, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(160, 185, 230, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 75% at 89% 87%, rgba(195, 215, 245, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 48%, rgba(220, 235, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f6f9ff 0%, #f0f5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 8% 10%, rgba(40, 80, 160, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(70, 110, 200, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(30, 70, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 75% at 89% 87%, rgba(60, 100, 180, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 68% at 50% 48%, rgba(80, 120, 220, 0.21), transparent 74%),
              linear-gradient(180deg, #060c18 0%, #0a1020 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-17",
    name: "Papaya Sorbet",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(255, 200, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 26%, rgba(255, 235, 180, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(255, 180, 120, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(255, 220, 160, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 245, 210, 0.20), transparent 78%),
              linear-gradient(172deg, #fffcf0 0%, #fff7e5 50%, #fffaeb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(200, 100, 40, 0.30), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 26%, rgba(230, 140, 80, 0.28), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(180, 80, 30, 0.26), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(220, 120, 60, 0.29), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(240, 160, 100, 0.19), transparent 76%),
              linear-gradient(172deg, #1a100a 0%, #22140c 50%, #1c120b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-18",
    name: "Violet Noir",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(200, 160, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(180, 140, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 82%, rgba(220, 180, 255, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(190, 150, 245, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(230, 210, 255, 0.18), transparent 78%),
              linear-gradient(180deg, #f9f5ff 0%, #f2eaff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(120, 20, 200, 0.35), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(80, 0, 160, 0.32), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 82%, rgba(160, 40, 240, 0.30), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(100, 10, 180, 0.33), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(140, 60, 220, 0.22), transparent 74%),
              linear-gradient(180deg, #0a0314 0%, #10051c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-19",
    name: "Sea Glass",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(180, 235, 225, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(210, 250, 245, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(160, 230, 220, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(195, 245, 238, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(220, 255, 250, 0.19), transparent 78%),
              linear-gradient(168deg, #f2fefb 0%, #eafcf8 50%, #f0fefa 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(40, 160, 140, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(70, 190, 170, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(30, 140, 120, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(60, 180, 160, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(80, 200, 180, 0.18), transparent 76%),
              linear-gradient(168deg, #081a16 0%, #0e1f1a 50%, #0b1c18 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-20",
    name: "Cinder & Ember",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 9% 10%, rgba(255, 180, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(255, 200, 160, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(240, 160, 120, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(255, 190, 150, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(255, 220, 190, 0.19), transparent 78%),
              linear-gradient(180deg, #fff8f2 0%, #fff2e8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 9% 10%, rgba(200, 60, 20, 0.35), transparent 68%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(230, 90, 40, 0.32), transparent 70%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(180, 40, 10, 0.30), transparent 72%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(220, 80, 30, 0.33), transparent 70%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(240, 120, 60, 0.22), transparent 74%),
              linear-gradient(180deg, #140500 0%, #1c0800 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-21",
    name: "Periwinkle Soft",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(190, 200, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(220, 230, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(170, 185, 250, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(205, 215, 255, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(235, 240, 255, 0.19), transparent 78%),
              linear-gradient(172deg, #f8f9ff 0%, #f2f5ff 50%, #f6f8ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(80, 100, 200, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(110, 130, 230, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(60, 80, 180, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(100, 120, 220, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(130, 150, 240, 0.18), transparent 76%),
              linear-gradient(172deg, #080c18 0%, #0c1020 50%, #0a0e1c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-22",
    name: "Molten Gold",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(255, 230, 150, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(255, 245, 180, 0.32), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 82%, rgba(245, 215, 130, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(255, 240, 165, 0.30), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(255, 250, 200, 0.20), transparent 78%),
              linear-gradient(180deg, #fffef5 0%, #fffaeb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(200, 140, 0, 0.32), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(230, 170, 20, 0.30), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 82%, rgba(180, 120, 0, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(220, 160, 10, 0.31), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(240, 180, 30, 0.21), transparent 74%),
              linear-gradient(180deg, #140d00 0%, #1c1200 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-23",
    name: "Lilac Fog",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 78% at 10% 9%, rgba(220, 200, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 75% at 80% 26%, rgba(240, 230, 255, 0.32), transparent 74%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(200, 180, 245, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 76% at 90% 89%, rgba(230, 215, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(250, 245, 255, 0.20), transparent 78%),
              linear-gradient(180deg, #fcfaff 0%, #f7f3ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 78% at 10% 9%, rgba(140, 80, 220, 0.27), transparent 70%),
              radial-gradient(ellipse 91% 75% at 80% 26%, rgba(170, 110, 240, 0.25), transparent 72%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(120, 70, 200, 0.23), transparent 74%),
              radial-gradient(ellipse 92% 76% at 90% 89%, rgba(160, 100, 230, 0.26), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(190, 130, 250, 0.17), transparent 76%),
              linear-gradient(180deg, #0e0818 0%, #140c20 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-24",
    name: "Mint Glacé",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(180, 250, 230, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(210, 255, 245, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(160, 240, 220, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(195, 255, 240, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(225, 255, 250, 0.18), transparent 78%),
              linear-gradient(168deg, #f2fffc 0%, #ecfff9 50%, #f0fffa 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(60, 180, 150, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(90, 210, 180, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(50, 160, 130, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(80, 200, 170, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(110, 220, 190, 0.18), transparent 76%),
              linear-gradient(168deg, #081814 0%, #0e1f1a 50%, #0b1c17 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-25",
    name: "Carbon Spark",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(220, 225, 240, 0.26), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(235, 238, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(210, 215, 235, 0.23), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(228, 232, 245, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(245, 248, 255, 0.18), transparent 78%),
              linear-gradient(180deg, #f8f9fc 0%, #f3f5f9 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(140, 150, 180, 0.25), transparent 70%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(160, 170, 200, 0.23), transparent 72%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(130, 140, 170, 0.21), transparent 74%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(150, 160, 190, 0.24), transparent 72%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(170, 180, 210, 0.16), transparent 76%),
              linear-gradient(180deg, #080a0f 0%, #0c0e14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-26",
    name: "Cherry Blossom",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(255, 200, 215, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(255, 230, 240, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(255, 185, 205, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(255, 215, 230, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 245, 250, 0.20), transparent 78%),
              linear-gradient(173deg, #fffcfd 0%, #fff7fb 50%, #fffafe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(200, 80, 120, 0.27), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(230, 110, 150, 0.25), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(180, 70, 110, 0.23), transparent 74%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(220, 100, 140, 0.26), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 130, 170, 0.17), transparent 76%),
              linear-gradient(173deg, #1a0a12 0%, #220e16 50%, #1c0c14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-27",
    name: "Teal Depths",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(180, 230, 230, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(210, 250, 250, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(160, 220, 220, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(195, 245, 245, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(225, 255, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f2fefe 0%, #edfcfc 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(0, 140, 140, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(20, 170, 170, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(0, 120, 120, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(30, 160, 160, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(50, 180, 180, 0.21), transparent 74%),
              linear-gradient(180deg, #031414 0%, #051a1a 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-28",
    name: "Butter Cream",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(255, 240, 180, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 250, 210, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(250, 230, 160, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(255, 245, 195, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 252, 225, 0.19), transparent 78%),
              linear-gradient(172deg, #fffef8 0%, #fffcf0 50%, #fffeF4 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(180, 140, 40, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(210, 170, 70, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(160, 120, 30, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(200, 160, 60, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(220, 180, 80, 0.18), transparent 76%),
              linear-gradient(172deg, #14100a 0%, #1c140c 50%, #18120b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-29",
    name: "Cobalt Night",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(160, 190, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(190, 215, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(140, 175, 245, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(175, 205, 250, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(210, 230, 255, 0.18), transparent 78%),
              linear-gradient(180deg, #f5f8ff 0%, #f0f4ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(20, 60, 200, 0.33), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(50, 90, 230, 0.31), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(10, 50, 180, 0.29), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(40, 80, 220, 0.32), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(60, 100, 240, 0.22), transparent 74%),
              linear-gradient(180deg, #040a18 0%, #060d20 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-30",
    name: "Watermelon Fizz",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 180, 190, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(210, 255, 220, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 160, 180, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(195, 245, 210, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(245, 255, 240, 0.19), transparent 78%),
              linear-gradient(168deg, #fffbfc 0%, #f8fff6 50%, #fefefa 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 60, 80, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(100, 180, 120, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(180, 50, 70, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(90, 170, 110, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(160, 200, 140, 0.18), transparent 76%),
              linear-gradient(168deg, #140a0c 0%, #0e1a12 50%, #11140e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-31",
    name: "Amber Dusk",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(255, 200, 120, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(255, 220, 150, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 83%, rgba(245, 180, 100, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(255, 210, 135, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(255, 235, 180, 0.19), transparent 78%),
              linear-gradient(180deg, #fff9f0 0%, #fff4e8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(200, 100, 20, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(230, 130, 40, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 72% at 17% 83%, rgba(180, 80, 10, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(220, 120, 30, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(240, 150, 60, 0.21), transparent 74%),
              linear-gradient(180deg, #140c05 0%, #1c1008 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-32",
    name: "Cloud Nine",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 78% at 8% 8%, rgba(230, 240, 255, 0.30), transparent 70%),
              radial-gradient(ellipse 92% 75% at 80% 22%, rgba(245, 250, 255, 0.34), transparent 72%),
              radial-gradient(ellipse 89% 73% at 18% 84%, rgba(220, 235, 255, 0.27), transparent 74%),
              radial-gradient(ellipse 93% 77% at 88% 88%, rgba(238, 245, 255, 0.32), transparent 72%),
              radial-gradient(ellipse 86% 70% at 50% 50%, rgba(250, 252, 255, 0.22), transparent 76%),
              linear-gradient(162deg, #fcfdff 0%, #f7faff 50%, #fafcff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 78% at 8% 8%, rgba(120, 150, 200, 0.23), transparent 70%),
              radial-gradient(ellipse 92% 75% at 80% 22%, rgba(140, 170, 220, 0.21), transparent 72%),
              radial-gradient(ellipse 89% 73% at 18% 84%, rgba(110, 140, 190, 0.19), transparent 74%),
              radial-gradient(ellipse 93% 77% at 88% 88%, rgba(130, 160, 210, 0.22), transparent 72%),
              radial-gradient(ellipse 86% 70% at 50% 50%, rgba(150, 180, 230, 0.15), transparent 76%),
              linear-gradient(162deg, #0a0e14 0%, #0e1218 50%, #0c1016 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-33",
    name: "Forest Floor",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(180, 210, 170, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(210, 235, 200, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(160, 200, 150, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(195, 225, 185, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(225, 245, 220, 0.19), transparent 78%),
              linear-gradient(180deg, #f6faf4 0%, #f0f7ec 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(40, 100, 30, 0.32), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(70, 130, 50, 0.30), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(30, 80, 20, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(60, 120, 40, 0.31), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(80, 140, 60, 0.21), transparent 74%),
              linear-gradient(180deg, #060e05 0%, #0a1408 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-34",
    name: "Peachy Keen",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 210, 180, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(255, 230, 200, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 195, 165, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(255, 220, 190, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 240, 220, 0.20), transparent 78%),
              linear-gradient(177deg, #fffcf8 0%, #fff7f0 50%, #fffaf4 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 110, 70, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(230, 140, 100, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(180, 90, 60, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(220, 130, 90, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 160, 120, 0.19), transparent 76%),
              linear-gradient(177deg, #140e08 0%, #1c120a 50%, #18100a 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-35",
    name: "Sapphire Haze",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(170, 200, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(200, 225, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(150, 185, 245, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(185, 215, 250, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(220, 240, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f6f9ff 0%, #f0f5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(30, 70, 180, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(60, 100, 220, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(20, 60, 160, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(50, 90, 200, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(70, 110, 240, 0.21), transparent 74%),
              linear-gradient(180deg, #050c18 0%, #081020 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-36",
    name: "Creamsicle",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(255, 190, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(255, 245, 220, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(255, 175, 125, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(255, 235, 200, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 250, 235, 0.20), transparent 78%),
              linear-gradient(172deg, #fffcf5 0%, #fff8ed 50%, #fffaf1 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(200, 90, 40, 0.30), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(230, 180, 120, 0.28), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(180, 75, 30, 0.26), transparent 74%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(220, 150, 90, 0.29), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 180, 130, 0.19), transparent 76%),
              linear-gradient(172deg, #14100a 0%, #1c140c 50%, #18120b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-37",
    name: "Raven Wing",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(200, 180, 240, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(180, 160, 230, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(220, 200, 250, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(190, 170, 235, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(230, 220, 255, 0.18), transparent 78%),
              linear-gradient(180deg, #f8f6ff 0%, #f2eeff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(80, 40, 140, 0.30), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(60, 30, 120, 0.28), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(100, 50, 160, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(70, 35, 130, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(120, 70, 180, 0.20), transparent 74%),
              linear-gradient(180deg, #080510 0%, #0c0818 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-38",
    name: "Bubblegum Pop",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(255, 180, 220, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 210, 245, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(255, 165, 210, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(255, 195, 235, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 230, 250, 0.20), transparent 78%),
              linear-gradient(172deg, #fffcfe 0%, #fff8fc 50%, #fffafe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(200, 60, 140, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(230, 90, 180, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(180, 50, 130, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(220, 80, 170, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(240, 120, 200, 0.19), transparent 76%),
              linear-gradient(172deg, #140a10 0%, #1c0e18 50%, #180c14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-39",
    name: "Volcanic Glass",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 9% 10%, rgba(255, 180, 150, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(230, 150, 180, 0.30), transparent 74%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(255, 165, 140, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(245, 170, 160, 0.28), transparent 74%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(255, 200, 190, 0.18), transparent 78%),
              linear-gradient(180deg, #fff8f5 0%, #fff2ee 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 76% at 9% 10%, rgba(200, 40, 20, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 73% at 81% 24%, rgba(150, 0, 60, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 71% at 17% 83%, rgba(180, 30, 10, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 75% at 89% 89%, rgba(220, 50, 30, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 68% at 50% 50%, rgba(240, 80, 60, 0.21), transparent 74%),
              linear-gradient(180deg, #100300 0%, #180500 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-40",
    name: "Morning Dew",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(200, 245, 235, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(230, 255, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(180, 240, 230, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(215, 252, 245, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(240, 255, 252, 0.18), transparent 78%),
              linear-gradient(168deg, #f8fffe 0%, #f2fcfb 50%, #f5fefe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 11%, rgba(80, 180, 160, 0.27), transparent 70%),
              radial-gradient(ellipse 90% 74% at 80% 27%, rgba(110, 210, 190, 0.25), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(70, 160, 150, 0.23), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(100, 200, 180, 0.26), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(130, 220, 200, 0.17), transparent 76%),
              linear-gradient(168deg, #0a1612 0%, #0e1f1a 50%, #0c1a16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-41",
    name: "Wisteria",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(210, 180, 250, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(235, 215, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 83%, rgba(190, 160, 240, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(225, 200, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(245, 235, 255, 0.19), transparent 78%),
              linear-gradient(172deg, #fcf8ff 0%, #f7f2ff 50%, #faf5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(130, 80, 200, 0.28), transparent 70%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(160, 110, 230, 0.26), transparent 72%),
              radial-gradient(ellipse 86% 72% at 17% 83%, rgba(110, 60, 180, 0.24), transparent 74%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(150, 100, 220, 0.27), transparent 72%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(180, 130, 240, 0.18), transparent 76%),
              linear-gradient(172deg, #0e0818 0%, #140c22 50%, #100a1c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-42",
    name: "Solar Wind",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 77% at 9% 8%, rgba(255, 235, 160, 0.29), transparent 70%),
              radial-gradient(ellipse 92% 74% at 81% 22%, rgba(255, 210, 130, 0.32), transparent 72%),
              radial-gradient(ellipse 89% 72% at 17% 83%, rgba(255, 245, 180, 0.26), transparent 74%),
              radial-gradient(ellipse 93% 76% at 89% 89%, rgba(255, 225, 145, 0.30), transparent 72%),
              radial-gradient(ellipse 86% 69% at 50% 50%, rgba(255, 250, 210, 0.21), transparent 76%),
              linear-gradient(180deg, #fffef0 0%, #fffae5 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 77% at 9% 8%, rgba(210, 150, 30, 0.33), transparent 68%),
              radial-gradient(ellipse 92% 74% at 81% 22%, rgba(240, 120, 20, 0.31), transparent 70%),
              radial-gradient(ellipse 89% 72% at 17% 83%, rgba(190, 160, 40, 0.29), transparent 72%),
              radial-gradient(ellipse 93% 76% at 89% 89%, rgba(230, 140, 25, 0.32), transparent 70%),
              radial-gradient(ellipse 86% 69% at 50% 50%, rgba(250, 170, 50, 0.22), transparent 74%),
              linear-gradient(180deg, #140d00 0%, #1c1200 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-43",
    name: "Frosted Plum",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 170, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(230, 210, 230, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(180, 150, 185, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(215, 190, 215, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(245, 235, 245, 0.19), transparent 78%),
              linear-gradient(172deg, #fdf9fd 0%, #f8f2f8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(120, 60, 120, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(150, 90, 150, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(100, 50, 105, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(140, 80, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(170, 110, 170, 0.19), transparent 76%),
              linear-gradient(172deg, #100810 0%, #180e18 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-44",
    name: "Neon Dusk",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(255, 180, 220, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 24%, rgba(200, 180, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(245, 160, 230, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(220, 170, 245, 0.28), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(240, 210, 250, 0.18), transparent 78%),
              linear-gradient(180deg, #fef8fd 0%, #f9f2fc 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(200, 0, 120, 0.32), transparent 68%),
              radial-gradient(ellipse 91% 74% at 81% 24%, rgba(60, 0, 200, 0.30), transparent 70%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(180, 0, 160, 0.28), transparent 72%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(100, 0, 180, 0.31), transparent 70%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(150, 0, 200, 0.21), transparent 74%),
              linear-gradient(180deg, #0e001a 0%, #140024 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-45",
    name: "Citrus Burst",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(255, 240, 150, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(220, 255, 180, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(255, 225, 130, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(210, 250, 165, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(250, 255, 220, 0.19), transparent 78%),
              linear-gradient(168deg, #feffef 0%, #fbffe5 50%, #fdfff0 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(180, 140, 20, 0.30), transparent 70%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(140, 200, 60, 0.28), transparent 72%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(200, 120, 10, 0.26), transparent 74%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(130, 180, 40, 0.29), transparent 72%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(190, 210, 80, 0.19), transparent 76%),
              linear-gradient(168deg, #14120a 0%, #1c180c 50%, #18140b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-46",
    name: "Silver Lining",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(220, 230, 245, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(235, 242, 252, 0.32), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(210, 220, 240, 0.25), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(228, 235, 248, 0.30), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(245, 248, 255, 0.20), transparent 78%),
              linear-gradient(172deg, #f9fbfe 0%, #f4f7fc 50%, #f7f9fd 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 11%, rgba(130, 150, 180, 0.26), transparent 70%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(150, 170, 200, 0.24), transparent 72%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(120, 140, 170, 0.22), transparent 74%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(140, 160, 190, 0.25), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(160, 180, 210, 0.17), transparent 76%),
              linear-gradient(172deg, #0a0c10 0%, #0e1014 50%, #0c0e12 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-47",
    name: "Orchid Mist",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(235, 180, 230, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 210, 250, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(220, 160, 220, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(248, 195, 245, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 235, 255, 0.19), transparent 78%),
              linear-gradient(172deg, #fef8fe 0%, #fcf2fc 50%, #fef6fe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(180, 60, 160, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(220, 90, 200, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(160, 50, 150, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(200, 80, 190, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(230, 120, 220, 0.18), transparent 76%),
              linear-gradient(172deg, #140a14 0%, #1c0e1c 50%, #180c18 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-48",
    name: "Abyss",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(160, 200, 230, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(180, 220, 250, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(140, 190, 220, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(170, 210, 240, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(200, 235, 255, 0.18), transparent 78%),
              linear-gradient(180deg, #f3f8fc 0%, #edf4fa 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(0, 80, 140, 0.33), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(10, 100, 170, 0.31), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(0, 70, 130, 0.29), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(20, 90, 160, 0.32), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(30, 110, 180, 0.22), transparent 74%),
              linear-gradient(180deg, #000a12 0%, #001018 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-49",
    name: "Peony Garden",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(255, 190, 200, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(255, 220, 230, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(250, 175, 190, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(255, 205, 220, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 240, 245, 0.20), transparent 78%),
              linear-gradient(177deg, #fffbfc 0%, #fff6f9 50%, #fff9fb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(200, 80, 100, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(230, 110, 130, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(180, 70, 90, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(220, 100, 120, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(240, 140, 160, 0.19), transparent 76%),
              linear-gradient(177deg, #140a0c 0%, #1c0e12 50%, #180c0e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-50",
    name: "Prism Break",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 88% 72% at 8% 10%, rgba(255, 180, 200, 0.25), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 8%, rgba(255, 230, 150, 0.24), transparent 70%),
              radial-gradient(ellipse 86% 70% at 92% 10%, rgba(180, 220, 255, 0.25), transparent 70%),
              radial-gradient(ellipse 84% 68% at 8% 90%, rgba(180, 255, 220, 0.23), transparent 70%),
              radial-gradient(ellipse 86% 70% at 92% 90%, rgba(230, 180, 255, 0.25), transparent 70%),
              radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.22), transparent 72%),
              linear-gradient(148deg, #fefbff 0%, #fbfffb 50%, #fffbfb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 88% 72% at 8% 10%, rgba(200, 40, 80, 0.28), transparent 68%),
              radial-gradient(ellipse 84% 68% at 50% 8%, rgba(200, 150, 20, 0.27), transparent 68%),
              radial-gradient(ellipse 86% 70% at 92% 10%, rgba(40, 120, 200, 0.28), transparent 68%),
              radial-gradient(ellipse 84% 68% at 8% 90%, rgba(40, 180, 120, 0.26), transparent 68%),
              radial-gradient(ellipse 86% 70% at 92% 90%, rgba(160, 60, 200, 0.28), transparent 68%),
              radial-gradient(ellipse 75% 65% at 50% 50%, rgba(180, 180, 200, 0.20), transparent 72%),
              linear-gradient(148deg, #0e0a10 0%, #0a100a 50%, #100a0a 100%)
            `,
            }}
          />
        </>
      )
    },
  },

  {
    id: "mesh-101",
    name: "Bioluminescent",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(160, 255, 240, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 25%, rgba(180, 255, 210, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 17% 84%, rgba(140, 245, 230, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(170, 255, 225, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(210, 255, 250, 0.18), transparent 78%),
              linear-gradient(168deg, #f0fffd 0%, #e8fefb 50%, #edfffe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(0, 220, 200, 0.35), transparent 68%),
              radial-gradient(ellipse 90% 73% at 80% 25%, rgba(30, 255, 180, 0.32), transparent 70%),
              radial-gradient(ellipse 87% 71% at 17% 84%, rgba(0, 200, 190, 0.29), transparent 72%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(20, 240, 210, 0.32), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(50, 255, 230, 0.22), transparent 74%),
              linear-gradient(168deg, #001a18 0%, #002220 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-102",
    name: "Dusty Mauve",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 11% 9%, rgba(210, 175, 195, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(235, 205, 220, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(195, 160, 180, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(225, 192, 210, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(248, 235, 242, 0.19), transparent 78%),
              linear-gradient(172deg, #fdf9fb 0%, #f8f2f6 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 11% 9%, rgba(140, 80, 110, 0.29), transparent 70%),
              radial-gradient(ellipse 89% 74% at 79% 27%, rgba(170, 110, 140, 0.27), transparent 72%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(120, 70, 100, 0.25), transparent 74%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(160, 100, 130, 0.28), transparent 72%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(190, 130, 160, 0.18), transparent 76%),
              linear-gradient(172deg, #14080e 0%, #1c0e14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-103",
    name: "Lemon Zest",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 11%, rgba(255, 255, 140, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 26%, rgba(255, 255, 170, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(250, 245, 120, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(255, 252, 155, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 255, 200, 0.18), transparent 78%),
              linear-gradient(175deg, #ffffef 0%, #fffde5 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 11%, rgba(200, 180, 0, 0.32), transparent 68%),
              radial-gradient(ellipse 90% 73% at 80% 26%, rgba(230, 210, 20, 0.30), transparent 70%),
              radial-gradient(ellipse 87% 71% at 18% 84%, rgba(180, 160, 0, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 75% at 90% 89%, rgba(220, 200, 10, 0.31), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 220, 40, 0.20), transparent 74%),
              linear-gradient(175deg, #141200 0%, #1c1800 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-104",
    name: "Ink Wash",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 10% 10%, rgba(190, 195, 210, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(215, 220, 235, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(175, 180, 200, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(205, 210, 228, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(235, 238, 248, 0.19), transparent 78%),
              linear-gradient(180deg, #f8f9fb 0%, #f2f4f8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 10% 10%, rgba(80, 90, 120, 0.28), transparent 70%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(100, 110, 145, 0.26), transparent 72%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(70, 80, 110, 0.24), transparent 74%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(90, 100, 135, 0.27), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(120, 130, 160, 0.17), transparent 76%),
              linear-gradient(180deg, #080a0e 0%, #0c0e14 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-105",
    name: "Flamingo Dip",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 92% 78% at 8% 8%, rgba(255, 190, 195, 0.29), transparent 70%),
              radial-gradient(ellipse 88% 75% at 82% 20%, rgba(255, 225, 180, 0.33), transparent 72%),
              radial-gradient(ellipse 85% 73% at 10% 90%, rgba(255, 180, 190, 0.26), transparent 74%),
              radial-gradient(ellipse 90% 77% at 86% 82%, rgba(255, 210, 200, 0.31), transparent 72%),
              radial-gradient(ellipse 82% 70% at 50% 50%, rgba(255, 240, 235, 0.21), transparent 76%),
              linear-gradient(145deg, #fffcfb 0%, #fff8f5 50%, #fffbf9 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 92% 78% at 8% 8%, rgba(220, 80, 90, 0.29), transparent 68%),
              radial-gradient(ellipse 88% 75% at 82% 20%, rgba(210, 130, 60, 0.27), transparent 70%),
              radial-gradient(ellipse 85% 73% at 10% 90%, rgba(200, 70, 85, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 77% at 86% 82%, rgba(215, 110, 75, 0.28), transparent 70%),
              radial-gradient(ellipse 82% 70% at 50% 50%, rgba(230, 140, 110, 0.19), transparent 74%),
              linear-gradient(145deg, #160a0a 0%, #1e100c 50%, #190c0b 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-106",
    name: "Nordic Sky",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 74% at 6% 8%, rgba(200, 225, 245, 0.27), transparent 70%),
              radial-gradient(ellipse 92% 70% at 92% 12%, rgba(215, 238, 255, 0.30), transparent 72%),
              radial-gradient(ellipse 90% 73% at 8% 88%, rgba(185, 215, 240, 0.24), transparent 74%),
              radial-gradient(ellipse 94% 72% at 91% 88%, rgba(205, 230, 250, 0.28), transparent 72%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(230, 248, 255, 0.18), transparent 76%),
              linear-gradient(155deg, #f5fbff 0%, #eef6ff 50%, #f3faff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 74% at 6% 8%, rgba(50, 110, 160, 0.30), transparent 68%),
              radial-gradient(ellipse 92% 70% at 92% 12%, rgba(80, 140, 190, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 73% at 8% 88%, rgba(40, 100, 150, 0.26), transparent 72%),
              radial-gradient(ellipse 94% 72% at 91% 88%, rgba(70, 130, 180, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(90, 150, 200, 0.19), transparent 74%),
              linear-gradient(155deg, #061018 0%, #0a1622 50%, #08131e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-107",
    name: "Spiced Rum",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 75% at 10% 12%, rgba(240, 190, 140, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 72% at 79% 28%, rgba(255, 215, 165, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 70% at 18% 83%, rgba(230, 170, 120, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 74% at 89% 89%, rgba(248, 200, 150, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(255, 230, 195, 0.19), transparent 78%),
              linear-gradient(168deg, #fff9f2 0%, #fff4e8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 75% at 10% 12%, rgba(170, 90, 30, 0.32), transparent 68%),
              radial-gradient(ellipse 89% 72% at 79% 28%, rgba(200, 120, 50, 0.30), transparent 70%),
              radial-gradient(ellipse 86% 70% at 18% 83%, rgba(150, 75, 20, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 89% 89%, rgba(190, 110, 40, 0.31), transparent 70%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(210, 135, 65, 0.20), transparent 74%),
              linear-gradient(168deg, #160a04 0%, #1e1008 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-108",
    name: "Glacier Melt",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 78% at 5% 5%, rgba(220, 245, 255, 0.30), transparent 70%),
              radial-gradient(ellipse 91% 75% at 95% 5%, rgba(200, 235, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 88% 72% at 50% 95%, rgba(215, 242, 255, 0.25), transparent 74%),
              radial-gradient(ellipse 85% 70% at 50% 50%, rgba(235, 250, 255, 0.20), transparent 76%),
              radial-gradient(ellipse 92% 76% at 20% 55%, rgba(205, 240, 255, 0.23), transparent 74%),
              linear-gradient(160deg, #f5fbff 0%, #edf7ff 50%, #f2f9ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 78% at 5% 5%, rgba(80, 160, 220, 0.28), transparent 68%),
              radial-gradient(ellipse 91% 75% at 95% 5%, rgba(60, 140, 200, 0.26), transparent 70%),
              radial-gradient(ellipse 88% 72% at 50% 95%, rgba(70, 150, 210, 0.24), transparent 72%),
              radial-gradient(ellipse 85% 70% at 50% 50%, rgba(90, 170, 230, 0.18), transparent 74%),
              radial-gradient(ellipse 92% 76% at 20% 55%, rgba(55, 130, 190, 0.22), transparent 72%),
              linear-gradient(160deg, #061018 0%, #081420 50%, #071219 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-109",
    name: "Terracotta Bloom",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(235, 175, 145, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(255, 205, 175, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(225, 160, 130, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(248, 190, 160, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(255, 225, 205, 0.19), transparent 78%),
              linear-gradient(173deg, #fff8f4 0%, #fff3ec 50%, #fff6f1 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(180, 80, 50, 0.31), transparent 68%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(210, 110, 75, 0.29), transparent 70%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(160, 65, 40, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(200, 100, 65, 0.30), transparent 70%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(220, 130, 95, 0.20), transparent 74%),
              linear-gradient(173deg, #160a06 0%, #1e0e08 50%, #1a0c07 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-110",
    name: "Electric Iris",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(185, 170, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(160, 210, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(200, 180, 255, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(175, 200, 255, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(220, 220, 255, 0.18), transparent 78%),
              linear-gradient(175deg, #f8f8ff 0%, #f2f5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 9%, rgba(100, 40, 255, 0.32), transparent 68%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(40, 100, 255, 0.30), transparent 70%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(120, 50, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(60, 110, 255, 0.31), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(80, 80, 255, 0.21), transparent 74%),
              linear-gradient(175deg, #060518 0%, #080720 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-111",
    name: "Champagne Toast",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(255, 245, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 250, 220, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(248, 238, 185, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(255, 248, 210, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 252, 235, 0.19), transparent 78%),
              linear-gradient(180deg, #fffef8 0%, #fffbf0 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(190, 160, 60, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(215, 185, 90, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(170, 140, 50, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(205, 175, 75, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(230, 200, 100, 0.17), transparent 76%),
              linear-gradient(180deg, #140e04 0%, #1c1408 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-112",
    name: "Radioactive",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(200, 255, 160, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(220, 255, 180, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(180, 248, 140, 0.23), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(210, 252, 170, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(235, 255, 210, 0.18), transparent 78%),
              linear-gradient(168deg, #f6fff0 0%, #f0fde8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(100, 220, 0, 0.35), transparent 66%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(120, 240, 20, 0.32), transparent 68%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(80, 200, 0, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(110, 230, 10, 0.33), transparent 68%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(140, 255, 40, 0.23), transparent 72%),
              linear-gradient(168deg, #041000 0%, #061800 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-113",
    name: "Desert Sand",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 11%, rgba(245, 225, 185, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(255, 240, 205, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(238, 215, 170, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(252, 232, 192, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 248, 225, 0.19), transparent 78%),
              linear-gradient(177deg, #fffdf5 0%, #fff9eb 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 11%, rgba(160, 120, 50, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(185, 145, 75, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(140, 105, 40, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(175, 135, 65, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(200, 160, 90, 0.18), transparent 76%),
              linear-gradient(177deg, #120e06 0%, #1a1408 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-114",
    name: "Quantum Foam",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 90% 70% at 15% 15%, rgba(220, 230, 255, 0.26), transparent 68%),
              radial-gradient(ellipse 86% 66% at 85% 15%, rgba(200, 245, 230, 0.24), transparent 68%),
              radial-gradient(ellipse 88% 68% at 15% 85%, rgba(240, 210, 255, 0.23), transparent 68%),
              radial-gradient(ellipse 84% 64% at 85% 85%, rgba(210, 240, 220, 0.24), transparent 68%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 255, 255, 0.20), transparent 70%),
              linear-gradient(135deg, #fafbff 0%, #f5fff9 50%, #fdf8ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 90% 70% at 15% 15%, rgba(60, 100, 200, 0.27), transparent 66%),
              radial-gradient(ellipse 86% 66% at 85% 15%, rgba(40, 160, 130, 0.25), transparent 66%),
              radial-gradient(ellipse 88% 68% at 15% 85%, rgba(140, 60, 200, 0.24), transparent 66%),
              radial-gradient(ellipse 84% 64% at 85% 85%, rgba(60, 140, 100, 0.25), transparent 66%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(100, 120, 180, 0.17), transparent 68%),
              linear-gradient(135deg, #060810 0%, #04100a 50%, #0a0612 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-115",
    name: "Dusty Rose",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(230, 185, 185, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(250, 210, 210, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(215, 170, 170, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(242, 198, 198, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 230, 230, 0.19), transparent 78%),
              linear-gradient(173deg, #fdf9f9 0%, #f9f3f3 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(160, 80, 80, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(190, 105, 105, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(140, 70, 70, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(178, 95, 95, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(210, 125, 125, 0.17), transparent 76%),
              linear-gradient(173deg, #120808 0%, #1a0c0c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-116",
    name: "Aurora Veil",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 90% 80% at 5% 50%, rgba(180, 255, 220, 0.25), transparent 70%),
              radial-gradient(ellipse 85% 75% at 50% 10%, rgba(180, 200, 255, 0.24), transparent 70%),
              radial-gradient(ellipse 90% 80% at 95% 50%, rgba(230, 180, 255, 0.25), transparent 70%),
              radial-gradient(ellipse 85% 75% at 50% 90%, rgba(200, 240, 255, 0.23), transparent 70%),
              radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.20), transparent 72%),
              linear-gradient(110deg, #f3fff9 0%, #f0f5ff 50%, #f9f2ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 90% 80% at 5% 50%, rgba(0, 200, 120, 0.30), transparent 68%),
              radial-gradient(ellipse 85% 75% at 50% 10%, rgba(60, 100, 220, 0.28), transparent 68%),
              radial-gradient(ellipse 90% 80% at 95% 50%, rgba(160, 0, 220, 0.30), transparent 68%),
              radial-gradient(ellipse 85% 75% at 50% 90%, rgba(0, 160, 210, 0.27), transparent 68%),
              radial-gradient(ellipse 75% 65% at 50% 50%, rgba(100, 100, 200, 0.18), transparent 70%),
              linear-gradient(110deg, #00100a 0%, #050818 50%, #0a0014 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-117",
    name: "Honey Dew",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(220, 255, 200, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(240, 255, 220, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(200, 248, 180, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(230, 252, 210, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(250, 255, 240, 0.18), transparent 78%),
              linear-gradient(170deg, #f8fff4 0%, #f2fdec 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(120, 190, 60, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(150, 220, 90, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(100, 170, 50, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(140, 210, 80, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(170, 230, 110, 0.17), transparent 76%),
              linear-gradient(170deg, #0c1408 0%, #101c0c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-118",
    name: "Iron Bloom",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(200, 210, 225, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(220, 230, 245, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(185, 195, 215, 0.23), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(210, 220, 238, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(238, 242, 252, 0.18), transparent 78%),
              linear-gradient(183deg, #f6f8fb 0%, #f1f4f9 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(90, 110, 150, 0.29), transparent 70%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(110, 130, 170, 0.27), transparent 72%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(80, 100, 140, 0.25), transparent 74%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(100, 120, 160, 0.28), transparent 72%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(130, 150, 190, 0.18), transparent 76%),
              linear-gradient(183deg, #060810 0%, #0a0c16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-119",
    name: "Dragonfruit",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(255, 160, 200, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(245, 160, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(255, 140, 190, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(248, 150, 245, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 210, 250, 0.19), transparent 78%),
              linear-gradient(172deg, #fff6fd 0%, #fef0fd 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(210, 20, 100, 0.31), transparent 68%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(180, 20, 200, 0.29), transparent 70%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(220, 0, 120, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(190, 10, 210, 0.30), transparent 70%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(230, 60, 220, 0.20), transparent 74%),
              linear-gradient(172deg, #12001a 0%, #0e0018 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-120",
    name: "Moonstone",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 78% at 8% 10%, rgba(225, 235, 250, 0.29), transparent 70%),
              radial-gradient(ellipse 92% 75% at 80% 22%, rgba(240, 245, 255, 0.33), transparent 72%),
              radial-gradient(ellipse 89% 73% at 18% 84%, rgba(218, 228, 248, 0.26), transparent 74%),
              radial-gradient(ellipse 93% 77% at 88% 88%, rgba(235, 242, 255, 0.31), transparent 72%),
              radial-gradient(ellipse 86% 70% at 50% 50%, rgba(248, 250, 255, 0.21), transparent 76%),
              linear-gradient(160deg, #fafbff 0%, #f5f9ff 50%, #f8faff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 78% at 8% 10%, rgba(160, 175, 220, 0.24), transparent 70%),
              radial-gradient(ellipse 92% 75% at 80% 22%, rgba(175, 190, 235, 0.22), transparent 72%),
              radial-gradient(ellipse 89% 73% at 18% 84%, rgba(150, 165, 210, 0.20), transparent 74%),
              radial-gradient(ellipse 93% 77% at 88% 88%, rgba(168, 182, 228, 0.23), transparent 72%),
              radial-gradient(ellipse 86% 70% at 50% 50%, rgba(188, 200, 242, 0.15), transparent 76%),
              linear-gradient(160deg, #0a0c12 0%, #0e1018 50%, #0c0e15 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-121",
    name: "Jade Temple",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(160, 220, 195, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(190, 242, 220, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(145, 208, 182, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(178, 235, 210, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(215, 252, 238, 0.19), transparent 78%),
              linear-gradient(170deg, #f3fdf7 0%, #edfaf4 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(30, 130, 100, 0.30), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(50, 160, 125, 0.28), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(20, 110, 85, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(45, 150, 115, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(65, 175, 140, 0.19), transparent 74%),
              linear-gradient(170deg, #061410 0%, #0a1c16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-122",
    name: "Sunset Haze",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 60% at 50% 0%, rgba(255, 190, 140, 0.32), transparent 70%),
              radial-gradient(ellipse 85% 70% at 10% 60%, rgba(255, 150, 170, 0.25), transparent 72%),
              radial-gradient(ellipse 85% 70% at 90% 60%, rgba(200, 160, 255, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 60% at 50% 100%, rgba(255, 120, 150, 0.28), transparent 70%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 230, 200, 0.18), transparent 72%),
              linear-gradient(180deg, #fff8f2 0%, #fff2f5 50%, #fef5ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 60% at 50% 0%, rgba(220, 100, 40, 0.35), transparent 68%),
              radial-gradient(ellipse 85% 70% at 10% 60%, rgba(200, 40, 80, 0.28), transparent 70%),
              radial-gradient(ellipse 85% 70% at 90% 60%, rgba(100, 40, 200, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 60% at 50% 100%, rgba(180, 20, 80, 0.32), transparent 68%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200, 80, 120, 0.18), transparent 70%),
              linear-gradient(180deg, #140800 0%, #14000a 50%, #080016 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-123",
    name: "Milky Way",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(230, 220, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(250, 240, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(215, 205, 248, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(242, 232, 255, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(255, 250, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #fdfbff 0%, #f9f6ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(150, 100, 230, 0.26), transparent 70%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(180, 130, 255, 0.24), transparent 72%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(130, 90, 210, 0.22), transparent 74%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(165, 120, 248, 0.25), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(200, 155, 255, 0.16), transparent 76%),
              linear-gradient(180deg, #0a0618 0%, #0e0a1e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-124",
    name: "Cantaloupe",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 205, 155, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(255, 228, 185, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 190, 138, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(255, 218, 172, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 242, 215, 0.20), transparent 78%),
              linear-gradient(175deg, #fffbf4 0%, #fff6ea 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(210, 120, 40, 0.30), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(240, 148, 65, 0.28), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(190, 105, 30, 0.26), transparent 74%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(228, 135, 55, 0.29), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(248, 165, 85, 0.19), transparent 76%),
              linear-gradient(175deg, #140e04 0%, #1c1408 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-125",
    name: "Deep Sea",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(160, 200, 220, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(185, 220, 240, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 17% 83%, rgba(145, 188, 210, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(175, 212, 232, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(210, 240, 252, 0.18), transparent 78%),
              linear-gradient(180deg, #f3f9fc 0%, #edf5fa 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(0, 90, 140, 0.34), transparent 66%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(15, 110, 165, 0.32), transparent 68%),
              radial-gradient(ellipse 87% 71% at 17% 83%, rgba(0, 80, 130, 0.29), transparent 70%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(10, 100, 155, 0.32%), transparent 68%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(25, 120, 175, 0.21), transparent 72%),
              linear-gradient(180deg, #010c14 0%, #021018 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-126",
    name: "Strawberry Sorbet",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(255, 160, 170, 0.29), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(255, 200, 195, 0.33), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(255, 145, 155, 0.26), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(255, 185, 185, 0.31), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 230, 228, 0.21), transparent 78%),
              linear-gradient(172deg, #fff7f7 0%, #fff0f0 50%, #fff4f4 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(210, 40, 60, 0.31), transparent 68%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(235, 70, 80, 0.29), transparent 70%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(190, 30, 50, 0.26%), transparent 72%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(225, 60, 70, 0.30), transparent 70%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(245, 90, 100, 0.20), transparent 74%),
              linear-gradient(172deg, #160204 0%, #200408 50%, #1c0406 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-127",
    name: "Obsidian Glow",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(200, 200, 215, 0.26), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(220, 220, 232, 0.30), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(185, 185, 205, 0.23), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(212, 212, 225, 0.28), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(240, 240, 248, 0.18), transparent 78%),
              linear-gradient(180deg, #f8f8fa 0%, #f3f3f7 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(80, 80, 120, 0.33), transparent 66%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(100, 100, 150, 0.31), transparent 68%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(70, 70, 110, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(90, 90, 140, 0.32), transparent 68%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(110, 110, 160, 0.22), transparent 72%),
              linear-gradient(180deg, #050508 0%, #07070c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-128",
    name: "Pine & Mist",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(165, 210, 185, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(195, 232, 210, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(148, 198, 172, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(182, 222, 198, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(220, 248, 232, 0.18), transparent 78%),
              linear-gradient(168deg, #f3fbf6 0%, #ecf8f1 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(30, 100, 65, 0.30), transparent 68%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(55, 130, 88, 0.28), transparent 70%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(22, 88, 55, 0.25), transparent 72%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(45, 120, 78, 0.29), transparent 70%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(65, 148, 100, 0.19), transparent 74%),
              linear-gradient(168deg, #051008 0%, #091810 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-129",
    name: "Bluebell",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(175, 195, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(200, 218, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(158, 180, 248, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(190, 210, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(225, 235, 255, 0.19), transparent 78%),
              linear-gradient(173deg, #f7f9ff 0%, #f2f6ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(60, 90, 200, 0.29), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(85, 115, 230, 0.27), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(50, 80, 185, 0.25), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(75, 108, 220, 0.28), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(100, 135, 248, 0.18), transparent 76%),
              linear-gradient(173deg, #070a18 0%, #0b0e1e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-130",
    name: "Turmeric",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(255, 220, 100, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 27%, rgba(255, 235, 130, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 18% 83%, rgba(248, 210, 85, 0.25), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(255, 228, 118, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(255, 248, 195, 0.19), transparent 78%),
              linear-gradient(175deg, #fffef0 0%, #fffae0 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(200, 150, 0, 0.32), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 27%, rgba(225, 170, 20, 0.30), transparent 70%),
              radial-gradient(ellipse 86% 71% at 18% 83%, rgba(180, 135, 0, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(215, 162, 10, 0.31), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(238, 188, 40, 0.20), transparent 74%),
              linear-gradient(175deg, #140c00 0%, #1c1200 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-131",
    name: "Cotton Candy Sky",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 210, 240, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(210, 230, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 200, 235, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(200, 220, 255, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(240, 235, 255, 0.19), transparent 78%),
              linear-gradient(170deg, #fffaff 0%, #f8faff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 80, 160, 0.27), transparent 70%),
              radial-gradient(ellipse 90% 73% at 79% 28%, rgba(80, 120, 220, 0.25), transparent 72%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(185, 70, 150, 0.23), transparent 74%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(70, 110, 210, 0.26), transparent 72%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(150, 100, 200, 0.17), transparent 76%),
              linear-gradient(170deg, #120812 0%, #080c1c 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-132",
    name: "Sandstone",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(242, 222, 195, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 238, 215, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(232, 210, 182, 0.24), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(248, 228, 205, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 248, 238, 0.19), transparent 78%),
              linear-gradient(173deg, #fdfcf8 0%, #faf6ef 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(155, 125, 80, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(180, 150, 100, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(138, 110, 72, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(170, 140, 95, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(200, 168, 120, 0.17), transparent 76%),
              linear-gradient(173deg, #12100a 0%, #1a1610 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-133",
    name: "Ultraviolet",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(200, 150, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(170, 130, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(215, 168, 255, 0.24%), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(185, 148, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(232, 215, 255, 0.19), transparent 78%),
              linear-gradient(178deg, #faf7ff 0%, #f5f0ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(130, 0, 255, 0.34), transparent 66%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(100, 0, 220, 0.32), transparent 68%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(150, 20, 255, 0.29), transparent 70%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(115, 10, 235, 0.33), transparent 68%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(165, 50, 255, 0.22), transparent 72%),
              linear-gradient(178deg, #080018 0%, #0c0020 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-134",
    name: "Morning Glory",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(190, 215, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(220, 200, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(175, 205, 248, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(210, 192, 252, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(238, 235, 255, 0.18), transparent 78%),
              linear-gradient(168deg, #f8f9ff 0%, #f5f2ff 50%, #f6f9ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 9%, rgba(60, 100, 200, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 27%, rgba(110, 70, 210, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 84%, rgba(50, 90, 185, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(100, 65, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(90, 100, 220, 0.17), transparent 76%),
              linear-gradient(168deg, #060a18 0%, #0a0618 50%, #070a18 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-135",
    name: "Vermilion Dreams",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 175, 155, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(255, 200, 170, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 162, 142, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(255, 190, 160, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 225, 215, 0.20), transparent 78%),
              linear-gradient(172deg, #fff8f6 0%, #fff3ee 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(210, 50, 30, 0.32), transparent 68%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(235, 75, 45, 0.30), transparent 70%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(195, 40, 22, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(225, 65, 38, 0.31), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(248, 100, 70, 0.21), transparent 74%),
              linear-gradient(172deg, #150200 0%, #1e0400 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-136",
    name: "Sea Foam",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 96% 74% at 6% 6%, rgba(195, 248, 238, 0.28), transparent 70%),
              radial-gradient(ellipse 92% 70% at 94% 6%, rgba(210, 252, 244, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 73% at 6% 94%, rgba(182, 242, 232, 0.24), transparent 74%),
              radial-gradient(ellipse 94% 72% at 93% 93%, rgba(200, 248, 240, 0.27), transparent 72%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(232, 255, 252, 0.18), transparent 76%),
              linear-gradient(140deg, #f2fffd 0%, #ecfefb 50%, #f0fffc 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 96% 74% at 6% 6%, rgba(30, 160, 140, 0.29), transparent 68%),
              radial-gradient(ellipse 92% 70% at 94% 6%, rgba(50, 178, 160, 0.27), transparent 70%),
              radial-gradient(ellipse 90% 73% at 6% 94%, rgba(22, 148, 130, 0.25), transparent 72%),
              radial-gradient(ellipse 94% 72% at 93% 93%, rgba(42, 168, 150, 0.28), transparent 70%),
              radial-gradient(ellipse 83% 67% at 50% 50%, rgba(65, 192, 172, 0.18), transparent 74%),
              linear-gradient(140deg, #041614 0%, #071e1a 50%, #061c18 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-137",
    name: "Plum Wine",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(210, 165, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(235, 195, 225, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(195, 152, 188, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(225, 182, 215, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(248, 228, 244, 0.19), transparent 78%),
              linear-gradient(177deg, #fef8fc 0%, #f9f2f8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 10%, rgba(130, 50, 110, 0.31), transparent 68%),
              radial-gradient(ellipse 89% 74% at 80% 26%, rgba(158, 75, 138, 0.29), transparent 70%),
              radial-gradient(ellipse 86% 72% at 18% 83%, rgba(112, 42, 96, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(148, 65, 128, 0.30), transparent 70%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(175, 95, 155, 0.20), transparent 74%),
              linear-gradient(177deg, #12060e 0%, #1a0c16 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-138",
    name: "Cactus Bloom",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(190, 230, 175, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(215, 248, 198, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(172, 220, 158, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(205, 240, 188, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(238, 255, 228, 0.19), transparent 78%),
              linear-gradient(170deg, #f7fcf4 0%, #f1faea 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(60, 130, 50, 0.30), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(85, 160, 70, 0.28), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(50, 115, 42, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(78, 150, 65, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(100, 175, 88, 0.19), transparent 74%),
              linear-gradient(170deg, #081008 0%, #0c1810 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-139",
    name: "Glacier Glow",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 9%, rgba(200, 235, 255, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 75% at 79% 26%, rgba(218, 245, 255, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 73% at 18% 83%, rgba(188, 228, 252, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 77% at 89% 89%, rgba(210, 240, 255, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 70% at 50% 50%, rgba(235, 250, 255, 0.20), transparent 78%),
              linear-gradient(162deg, #f5fcff 0%, #edf8ff 50%, #f2faff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 78% at 10% 9%, rgba(70, 155, 215, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 75% at 79% 26%, rgba(90, 175, 235, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 73% at 18% 83%, rgba(60, 142, 200, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 77% at 89% 89%, rgba(82, 168, 225, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 70% at 50% 50%, rgba(105, 190, 248, 0.17), transparent 76%),
              linear-gradient(162deg, #051018 0%, #081620 50%, #061318 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-140",
    name: "Fuschsia Haze",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(255, 170, 230, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(255, 198, 242, 0.32), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(255, 155, 222, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(255, 185, 238, 0.30), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 225, 248, 0.20), transparent 78%),
              linear-gradient(172deg, #fff6fd 0%, #ffeffe 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(220, 0, 150, 0.32), transparent 68%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(245, 30, 175, 0.30), transparent 70%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(200, 0, 138, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 76% at 89% 89%, rgba(235, 20, 165, 0.31), transparent 70%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(255, 60, 195, 0.21), transparent 74%),
              linear-gradient(172deg, #10001a 0%, #160020 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-141",
    name: "Topaz",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(175, 225, 235, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(200, 242, 250, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(158, 215, 228, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(190, 235, 248, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(225, 252, 255, 0.19), transparent 78%),
              linear-gradient(173deg, #f3fdff 0%, #ebfaff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 10%, rgba(20, 140, 170, 0.30), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 24%, rgba(40, 165, 195, 0.28), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 83%, rgba(15, 125, 155, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(35, 155, 185, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(58, 180, 210, 0.19), transparent 74%),
              linear-gradient(173deg, #031416 0%, #061a1e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-142",
    name: "Hazy Tangerine",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 11%, rgba(255, 185, 120, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(255, 215, 155, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(248, 170, 105, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(255, 202, 140, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 235, 198, 0.19), transparent 78%),
              linear-gradient(175deg, #fffaf3 0%, #fff5e8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 11%, rgba(210, 105, 20, 0.31), transparent 68%),
              radial-gradient(ellipse 90% 73% at 79% 27%, rgba(238, 130, 40, 0.29), transparent 70%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(190, 90, 15, 0.26), transparent 72%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(225, 120, 30, 0.30), transparent 70%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(248, 150, 55, 0.20), transparent 74%),
              linear-gradient(175deg, #140c04 0%, #1e1206 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-143",
    name: "Lavender Ice",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(218, 208, 255, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 26%, rgba(235, 228, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 83%, rgba(205, 195, 250, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(228, 220, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(248, 245, 255, 0.19), transparent 78%),
              linear-gradient(178deg, #fafaff 0%, #f5f4ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(128, 100, 220, 0.27), transparent 70%),
              radial-gradient(ellipse 91% 74% at 81% 26%, rgba(152, 125, 240, 0.25), transparent 72%),
              radial-gradient(ellipse 88% 72% at 17% 83%, rgba(112, 88, 205, 0.23), transparent 74%),
              radial-gradient(ellipse 92% 76% at 89% 89%, rgba(142, 115, 232, 0.26), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(172, 148, 255, 0.17), transparent 76%),
              linear-gradient(178deg, #0c0a18 0%, #100e20 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-144",
    name: "Marmalade",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 9%, rgba(255, 195, 100, 0.28), transparent 72%),
              radial-gradient(ellipse 89% 74% at 80% 25%, rgba(255, 218, 130, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(255, 182, 85, 0.24%), transparent 76%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(255, 208, 115, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(255, 240, 185, 0.19), transparent 78%),
              linear-gradient(173deg, #fff9ed 0%, #fff4e2 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 77% at 9% 9%, rgba(205, 110, 10, 0.31), transparent 68%),
              radial-gradient(ellipse 89% 74% at 80% 25%, rgba(230, 135, 30, 0.29), transparent 70%),
              radial-gradient(ellipse 86% 72% at 17% 84%, rgba(185, 98, 5, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 76% at 89% 89%, rgba(220, 125, 20, 0.30), transparent 70%),
              radial-gradient(ellipse 83% 69% at 50% 50%, rgba(245, 155, 50, 0.20), transparent 74%),
              linear-gradient(173deg, #140c02 0%, #1c1204 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-145",
    name: "Powder Blue",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 10% 10%, rgba(195, 222, 248, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(218, 238, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(180, 212, 245, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 90% 89%, rgba(210, 232, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(238, 248, 255, 0.19), transparent 78%),
              linear-gradient(175deg, #f5faff 0%, #eef6ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 10% 10%, rgba(55, 118, 185, 0.27), transparent 70%),
              radial-gradient(ellipse 91% 74% at 79% 28%, rgba(78, 142, 210, 0.25), transparent 72%),
              radial-gradient(ellipse 88% 72% at 18% 83%, rgba(45, 105, 170, 0.23), transparent 74%),
              radial-gradient(ellipse 92% 76% at 90% 89%, rgba(68, 132, 200, 0.26), transparent 72%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(90, 155, 225, 0.17), transparent 76%),
              linear-gradient(175deg, #060c18 0%, #0a1020 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-146",
    name: "Dark Matter",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(195, 185, 215, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(218, 208, 235, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 71% at 17% 83%, rgba(178, 168, 202, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(208, 198, 228, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(238, 232, 250, 0.18), transparent 78%),
              linear-gradient(180deg, #f8f7fb 0%, #f2f0f8 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 9% 10%, rgba(60, 40, 100, 0.35), transparent 66%),
              radial-gradient(ellipse 90% 73% at 80% 24%, rgba(80, 60, 128, 0.33), transparent 68%),
              radial-gradient(ellipse 87% 71% at 17% 83%, rgba(50, 35, 90, 0.30), transparent 70%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(72, 52, 118, 0.34), transparent 68%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(92, 72, 145, 0.23), transparent 72%),
              linear-gradient(180deg, #040208 0%, #06030e 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-147",
    name: "Sage & Cream",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(195, 218, 195, 0.26), transparent 72%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(222, 240, 215, 0.30), transparent 74%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(178, 208, 178, 0.23), transparent 76%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(212, 232, 205, 0.28), transparent 74%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(242, 252, 238, 0.18), transparent 78%),
              linear-gradient(168deg, #f6fbf4 0%, #f0f8ee 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 77% at 10% 10%, rgba(68, 115, 72, 0.28), transparent 70%),
              radial-gradient(ellipse 90% 74% at 79% 28%, rgba(90, 140, 95, 0.26), transparent 72%),
              radial-gradient(ellipse 87% 72% at 18% 83%, rgba(58, 105, 62, 0.24), transparent 74%),
              radial-gradient(ellipse 91% 76% at 90% 89%, rgba(80, 128, 85, 0.27), transparent 72%),
              radial-gradient(ellipse 84% 69% at 50% 50%, rgba(105, 155, 110, 0.17), transparent 76%),
              linear-gradient(168deg, #080e08 0%, #0c1610 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-148",
    name: "Hot Springs",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(255, 215, 200, 0.27), transparent 72%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(255, 238, 220, 0.31), transparent 74%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(255, 202, 185, 0.24), transparent 76%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(255, 228, 210, 0.29), transparent 74%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(255, 248, 240, 0.19), transparent 78%),
              linear-gradient(172deg, #fff9f6 0%, #fff4ee 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 93% 76% at 9% 11%, rgba(200, 100, 70, 0.30), transparent 68%),
              radial-gradient(ellipse 89% 73% at 80% 25%, rgba(225, 130, 95, 0.28), transparent 70%),
              radial-gradient(ellipse 86% 71% at 17% 84%, rgba(180, 88, 60, 0.25), transparent 72%),
              radial-gradient(ellipse 90% 75% at 89% 89%, rgba(215, 120, 88, 0.29), transparent 70%),
              radial-gradient(ellipse 83% 68% at 50% 50%, rgba(238, 150, 118, 0.19), transparent 74%),
              linear-gradient(172deg, #140a06 0%, #1c1008 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-149",
    name: "Neptune",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(175, 218, 248, 0.27), transparent 72%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(198, 232, 255, 0.31), transparent 74%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(158, 208, 242, 0.24), transparent 76%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(188, 225, 252, 0.29), transparent 74%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(222, 245, 255, 0.19), transparent 78%),
              linear-gradient(180deg, #f3faff 0%, #edf6ff 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 95% 77% at 9% 10%, rgba(20, 80, 180, 0.34), transparent 66%),
              radial-gradient(ellipse 91% 74% at 81% 25%, rgba(35, 100, 210, 0.32), transparent 68%),
              radial-gradient(ellipse 88% 72% at 17% 82%, rgba(15, 70, 165, 0.29), transparent 70%),
              radial-gradient(ellipse 92% 76% at 89% 90%, rgba(28, 92, 200, 0.33), transparent 68%),
              radial-gradient(ellipse 85% 69% at 50% 50%, rgba(45, 112, 228, 0.22), transparent 72%),
              linear-gradient(180deg, #030918 0%, #040d20 100%)
            `,
            }}
          />
        </>
      )
    },
  },
  {
    id: "mesh-150",
    name: "Autumn Ember",
    category: "mesh",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 185, 110, 0.28), transparent 72%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(255, 158, 120, 0.31), transparent 74%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(248, 170, 95, 0.25), transparent 76%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(255, 172, 115, 0.29), transparent 74%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(255, 225, 195, 0.19), transparent 78%),
              linear-gradient(175deg, #fff9f2 0%, #fff4ea 100%)
            `,
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              radial-gradient(ellipse 94% 76% at 10% 10%, rgba(210, 90, 20, 0.33), transparent 66%),
              radial-gradient(ellipse 90% 73% at 79% 26%, rgba(195, 58, 30, 0.31), transparent 68%),
              radial-gradient(ellipse 87% 71% at 18% 83%, rgba(190, 82, 15, 0.28), transparent 70%),
              radial-gradient(ellipse 91% 75% at 89% 89%, rgba(205, 72, 25, 0.32), transparent 68%),
              radial-gradient(ellipse 84% 68% at 50% 50%, rgba(228, 110, 50, 0.22), transparent 72%),
              linear-gradient(175deg, #140800 0%, #1c0c00 100%)
            `,
            }}
          />
        </>
      )
    },
  },
]
