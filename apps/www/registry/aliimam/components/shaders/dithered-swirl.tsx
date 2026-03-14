"use client"

"use client"

import { useEffect, useRef } from "react";
 
type RGBA = [number, number, number, number];
type PatternType = "bayer4" | "bayer8";
type AcMode = "blend" | "hard" | "pattern";

interface DitheredSwirlProps {
  width?: number;
  height?: number;
  fg?: string;       
  bg?: string;      
  ac?: string;      
  pixelSize?: number;
  threshold?: number;
  spread?: number;
  acMix?: number;
  acMode?: AcMode;
  patternType?: PatternType;
  speed?: number;
  intensity?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Returns [r, g, b, a] — a=0 for "transparent", a=255 for hex
function parseColor(hex: string): RGBA {
  if (!hex || hex === "transparent") return [0, 0, 0, 0];
  const h = hex.replace("#", "");
  const full = h.length === 3
    ? h.split("").map((c) => c + c).join("")
    : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255];
}

function makeBayer4() {
  const B = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ].map((r) => r.map((v) => v / 16));
  return (x: number, y: number) => B[y & 3][x & 3];
}

function makeBayer8() {
  const m: number[][] = Array.from({ length: 8 }, () => new Array(8));
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      let v = 0, xc = x ^ y, yc = y;
      for (let bit = 0; bit < 6; bit++) {
        v |= (yc & 1) << (5 - bit);
        bit++;
        if (bit < 6) v |= (xc & 1) << (5 - bit);
        yc >>= 1; xc >>= 1;
      }
      m[y][x] = v / 64;
    }
  }
  return (x: number, y: number) => m[y & 7][x & 7];
}

export function DitheredSwirl({
  width = 800,
  height = 800,
  fg = "#ff00ff",
  bg = "transparent",
  ac = "#00ffaa",
  pixelSize = 2,
  threshold = 150 / 250,
  spread = 0.5,
  acMix = 0,
  acMode = "blend",
  patternType = "bayer4",
  speed = 1,
  intensity = 0,
  scale = 2,
  className,
  style,
}: DitheredSwirlProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const propsRef = useRef({
    fg: parseColor(fg), bg: parseColor(bg), ac: parseColor(ac),
    pixelSize, threshold, spread, acMix, acMode,
    patternType, speed, intensity, scale,
  });

  useEffect(() => {
    propsRef.current = {
      fg: parseColor(fg), bg: parseColor(bg), ac: parseColor(ac),
      pixelSize, threshold, spread, acMix, acMode,
      patternType, speed, intensity, scale,
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = width, H = height;
    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const buf = new Float32Array(W * H);
    let t = 0;

    const draw = () => {
      const p = propsRef.current;
      t += 0.016 * p.speed;

      const pattern = p.patternType === "bayer8" ? makeBayer8() : makeBayer4();

      const cx = W / 2, cy = H / 2;
      const maxR = Math.sqrt(cx * cx + cy * cy);
      const twist = (p.intensity / 50) * 4;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const dx = x - cx, dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) / maxR;
          const angle = Math.atan2(dy, dx) + dist * twist * Math.sin(t * 2);
          const v = (Math.sin(angle * p.scale + t * 3) * 0.5 + 0.5) * (1 - dist * 0.3);
          buf[y * W + x] = clamp01(v);
        }
      }

      const img = ctx.createImageData(W, H);
      const d = img.data;
      const halfZone = p.acMix * 0.45;
      const acLo = 0.5 - halfZone;
      const acHi = 0.5 + halfZone;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const idx = y * W + x;
          const gray = buf[idx];
          const qx = Math.floor(x / p.pixelSize);
          const qy = Math.floor(y / p.pixelSize);
          const pv = pattern(qx, qy);
          const dithered = gray + (pv - 0.5) * p.spread > p.threshold ? 1 : 0;

          let r: number, g: number, b: number, a: number;

          if (gray < 0) {
            [r, g, b, a] = p.ac;
          } else if (p.acMix > 0.01 && gray >= acLo && gray <= acHi) {
            if (p.acMode === "hard") {
              [r, g, b, a] = p.ac;
            } else if (p.acMode === "pattern") {
              [r, g, b, a] = dithered ? p.ac : p.bg;
            } else {
              const dist2 = Math.abs(gray - 0.5);
              const ef = halfZone > 0.01 ? 1 - dist2 / halfZone : 1;
              const bl = ef * ef;
              const src = dithered ? p.fg : p.bg;
              r = src[0] + (p.ac[0] - src[0]) * bl;
              g = src[1] + (p.ac[1] - src[1]) * bl;
              b = src[2] + (p.ac[2] - src[2]) * bl;
              a = src[3] + (p.ac[3] - src[3]) * bl;
            }
          } else {
            [r, g, b, a] = dithered ? p.fg : p.bg;
          }

          const px4 = idx * 4;
          d[px4] = r; d[px4 + 1] = g; d[px4 + 2] = b; d[px4 + 3] = a;
        }
      }

      ctx.putImageData(img, 0, 0);
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        imageRendering: "pixelated",
        background: "transparent",
        ...style,
      }}
    />
  );
}
