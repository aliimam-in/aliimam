import { CounterNumber } from "@/registry/aliimam/components/counter-number"

export default function Stats() {
  return (
    <div className="relative container flex h-svh flex-col items-center justify-center overflow-hidden py-20">
      <div className="z-10 flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="text-muted-foreground mb-10 max-w-sm text-center text-sm md:max-w-md">
          Ali Imam is more than just models - it powers APIs and platforms that
          help developers and businesses innovate.
        </h1>
        <div className="grid flex-wrap justify-center gap-6 space-y-4 text-center md:flex">
          <div className="space-y-3 px-6">
            <CounterNumber
              className="text-primary"
              prefix="+"
              value={1200}
              size="xl"
            />
            <p>Projects Deliver</p>
          </div>
          <div className="space-y-3 md:border-x md:px-12">
            <CounterNumber
              className="text-primary"
              value={22}
              suffix="Million"
              size="xl"
            />
            <p>Active Requests</p>
          </div>
          <div className="space-y-3 px-6">
            <CounterNumber
              className="text-primary"
              prefix="+"
              value={5000}
              size="xl"
            />
            <p>App Downloads</p>
          </div>
        </div>
      </div>
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
    </div>
  )
}
