import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/aliimam/ui/avatar"

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

export function Contributors() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>Contributors</h1>
      <div className="w-full p-6">
        <div className="flex flex-wrap justify-center gap-2">
          {usernames.map((username) => (
            <Avatar key={username}>
              <AvatarImage
                src={`https://github.com/${username}.png`}
                alt={username}
              />
              <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="text-muted-foreground text-sm underline underline-offset-4"
      >
        + 810 contributors
      </a>
    </div>
  )
}
