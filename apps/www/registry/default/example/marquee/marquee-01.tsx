import { Badge } from "@/registry/default/ui/badge"
import { Marquee } from "@/registry/default/components/marquee"

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "Framer Motion", color: "bg-pink-500" },
  { name: "Radix UI", color: "bg-green-500" },
  { name: "Lucide Icons", color: "bg-orange-500" },
  { name: "shadcn/ui", color: "bg-purple-500" },
]

export default function DemoOne() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-xl border">
      <main className="">
        <Marquee>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} rounded-md px-4 py-2 text-sm font-medium text-white`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee reverse>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} rounded-md px-4 py-2 text-white`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee speed="slow">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} rounded-md px-4 py-2 text-white`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee reverse speed="fast">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} rounded-md px-4 py-2 text-white`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
      </main>
    </div>
  )
}
