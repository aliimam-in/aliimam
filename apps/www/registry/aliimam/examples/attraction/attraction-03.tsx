import { Attraction } from "@/registry/aliimam/components/attraction"

export default function AttractionDemo() {
  const usernames = [
    "shadcn",
    "vercel",
    "nextjs",
    "tailwindlabs",
    "typescript-lang",
    "eslint",
    "prettier",
    "babel",
    "webpack",
    "rollup",
    "vite",
    "react",
  ]

  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center overflow-hidden">
      <Attraction
        gravity={{ x: 0, y: 0.6 }}
        restitution={0.7}
        frictionAir={0.02}
        dragStiffness={0.3}
      >
        {usernames.map((username) => (
          <div
            key={username}
            className="h-18 w-18 rounded-none bg-transparent shadow-none select-none"
          >
            <img
              src={`https://github.com/${username}.png`}
              alt={username}
              className="pointer-events-none select-none"
              draggable={false}
            />
          </div>
        ))}
      </Attraction>
    </div>
  )
}
