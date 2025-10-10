"use client";

import { useEffect, useRef } from "react";

type GameState = "ready" | "playing" | "gameover";

type Obstacle = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type DinoGameProps = {
  dinoColor?: string;
  obstacleColor?: string;
  groundColor?: string;
  backgroundColor?: string;
  accentColor?: string;
  initialSpeed?: number;
  jumpPower?: number;
  gravity?: number;
};

export function DinoGame({
  dinoColor = "#fff200",
  obstacleColor,
  groundColor,
  backgroundColor,
  accentColor,
  initialSpeed = 5,
  jumpPower = 15,
  gravity = 0.8,
}: DinoGameProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const stateRef = useRef<GameState>("ready");
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
 
  const groundYRef = useRef(300);

  const speedRef = useRef(initialSpeed);
  const dinoRef = useRef({ x: 60, y: 0, w: 20, h: 40, vy: 0 });
  const obstaclesRef = useRef<Obstacle[]>([]);
  const spawnTimerRef = useRef(0);
  const nextSpawnRef = useRef(1000);
  const colorsRef = useRef({
    bg: "#ffffff",
    fg: "#111111",
    accent: "#0ea5e9",
    muted: "#e5e7eb",
    dino: dinoColor,
  });

  function readCssVar(name: string, fallback: string) {
    try {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return v || fallback;
    } catch {
      return fallback;
    }
  }

  function initColors() {
    colorsRef.current = {
      bg:
        backgroundColor ||
        readCssVar("--color-background", readCssVar("--background", "#ffffff")),
      fg:
        obstacleColor ||
        readCssVar("--color-foreground", readCssVar("--foreground", "#111111")),
      accent: accentColor || readCssVar("--color-primary", "#0ea5e9"),
      muted: groundColor || readCssVar("--color-muted", "#e5e7eb"),
      dino: dinoColor,
    };
  }

  function resetGame(canvas: HTMLCanvasElement) {
    stateRef.current = "ready";
    scoreRef.current = 0;
    speedRef.current = initialSpeed;
    obstaclesRef.current = [];
    spawnTimerRef.current = 0;
    nextSpawnRef.current = 800 + Math.random() * 800;
    const groundY = groundYRef.current;
    dinoRef.current = { x: 20, y: groundY - 44, w: 10, h: 50, vy: 0 };
    lastTimeRef.current = null;
    drawIntro(canvas);
  }

  function jump() {
    const dino = dinoRef.current;
    const groundY = groundYRef.current;
    if (dino.y >= groundY - dino.h - 0.5) {
      dino.vy = -jumpPower;
    }
  }

  function aabb(
    a: { x: number; y: number; w: number; h: number },
    b: { x: number; y: number; w: number; h: number }
  ) {
    return (
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    );
  }

  function drawIntro(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { bg, fg, muted, accent, dino: dinoCol } = colorsRef.current;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(640, Math.floor(rect.width * dpr)); 
    canvas.height = Math.floor(400 * dpr);

    ctx.scale(dpr, dpr);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = muted;
    const groundY = groundYRef.current;
    ctx.fillRect(0, groundY + 1, canvas.width, 2);

    const dino = dinoRef.current;
    ctx.fillStyle = dinoCol;
    ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

    ctx.fillStyle = fg;
    ctx.fillText("Dino", 24, 36);

    ctx.fillStyle = accent;
    ctx.fillText("Press Space or Tap to Start", 24, 60);
    ctx.fillStyle = fg;
    ctx.fillText("Press Space to Jump", 24, 80);

    const best = bestRef.current;
    if (best > 0) {
      ctx.textAlign = "right";
      ctx.fillText(`Best: ${best}`, canvas.width / dpr - 16, 28);
      ctx.textAlign = "start";
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  let loop: (timestamp: number) => void = () => {};

  useEffect(() => {
    initColors();
    try {
      const saved = localStorage.getItem("dino-best-score");
      bestRef.current = saved ? Number.parseInt(saved, 10) || 0 : 0;
    } catch {
      bestRef.current = 0;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    resetGame(canvas);

    const keydown = (e: KeyboardEvent) => {
      if (
        e.code === "Space" ||
        e.key === " " ||
        e.key === "Spacebar" ||
        e.code === "ArrowUp"
      ) {
        e.preventDefault();
        if (stateRef.current === "ready") {
          stateRef.current = "playing";
        }
        if (stateRef.current === "playing") {
          jump();
        } else if (stateRef.current === "gameover") {
          resetGame(canvas);
          stateRef.current = "playing";
        }
      }
    };

    const interact = () => {
      if (stateRef.current === "ready") {
        stateRef.current = "playing";
      } else if (stateRef.current === "playing") {
        jump();
      } else if (stateRef.current === "gameover") {
        resetGame(canvas);
        stateRef.current = "playing";
      }
    };

    window.addEventListener("keydown", keydown);
    canvas.addEventListener("pointerdown", interact, { passive: true });

    const observer = new MutationObserver(() => initColors());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    const run = (t: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const targetWidth = Math.max(640, Math.floor(rect.width * dpr)); 
      const targetHeight = Math.floor(400 * dpr);
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      const { bg, fg, muted, accent, dino: dinoCol } = colorsRef.current;

      let dt = 16;
      if (lastTimeRef.current != null)
        dt = Math.min(150, t - lastTimeRef.current);
      lastTimeRef.current = t;

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const groundY = groundYRef.current;

      ctx.fillStyle = muted;
      ctx.fillRect(0, groundY + 1, width, 2);

      const dino = dinoRef.current;

      if (stateRef.current === "playing") {
        const targetSpeed = initialSpeed + Math.min(8, scoreRef.current / 100);
        speedRef.current = speedRef.current * 0.98 + targetSpeed * 0.02;

        dino.vy += gravity;
        dino.y += dino.vy;
        if (dino.y > groundY - dino.h) {
          dino.y = groundY - dino.h;
          dino.vy = 0;
        }

        spawnTimerRef.current += dt;
        if (spawnTimerRef.current >= nextSpawnRef.current) {
          spawnTimerRef.current = 0;
          nextSpawnRef.current = 700 + Math.random() * 900;
          const heightVariant = 30 + Math.random() * 30;
          obstaclesRef.current.push({
            x: width + 20,
            y: groundY - heightVariant,
            w: 20 + Math.random() * 18,
            h: heightVariant,
          });
        }

        const spd = speedRef.current;
        obstaclesRef.current.forEach((o) => (o.x -= spd));
        obstaclesRef.current = obstaclesRef.current.filter(
          (o) => o.x + o.w > -40
        );

        scoreRef.current += dt * 0.02;
      }

      ctx.fillStyle = fg;
      for (const o of obstaclesRef.current) {
        ctx.fillRect(o.x, o.y, o.w, o.h);
      }

      ctx.fillStyle = dinoCol;
      ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

      if (stateRef.current === "playing") {
        for (const o of obstaclesRef.current) {
          if (aabb(dino, o)) {
            stateRef.current = "gameover";
            const score = Math.floor(scoreRef.current);
            if (score > bestRef.current) {
              bestRef.current = score;
              try {
                localStorage.setItem("dino-best-score", String(bestRef.current));
              } catch {}
            }
            break;
          }
        }
      }

      ctx.fillStyle = fg;
      ctx.textAlign = "right";
      ctx.fillText(`Score: ${Math.floor(scoreRef.current)}`, width - 16, 28);
      if (bestRef.current > 0) {
        ctx.fillText(`Best: ${bestRef.current}`, width - 16, 48);
      }
      ctx.textAlign = "start";

      if (stateRef.current === "ready") {
        ctx.fillStyle = accent;
        ctx.fillText("Press Space or Tap to Start", 24, 60);
      } else if (stateRef.current === "gameover") {
        ctx.fillStyle = accent;
        ctx.fillText("Game Over", 4, 60);
        ctx.fillText("Press Space or Tap to Restart", 24, 84);
      }

      rafRef.current = requestAnimationFrame(run);
    };

    loop = run;
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", keydown);
      canvas.removeEventListener("pointerdown", interact);
      observer.disconnect();
    };
  }, [
    dinoColor,
    obstacleColor,
    groundColor,
    backgroundColor,
    accentColor,
    initialSpeed,
    jumpPower,
    gravity,
  ]);

  return (
    <div className="w-full h-full mx-auto max-w-5xl">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-label="Dino game canvas. Press Space to jump; tap or click on the canvas on touch devices."
        role="img"
      />
    </div>
  );
}
