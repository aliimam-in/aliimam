import { Marquee } from "@/registry/aliimam/components/marquee"
import { Badge } from "@/registry/aliimam/ui/badge"

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
    <div className="flex h-full w-full items-center justify-center overflow-hidden border">
      <main className="">
        <Marquee autoFill speed="fast" pauseOnHover reverse>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} px-4 py-2 text-white last:mr-2`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
      </main>
    </div>
  )
}
