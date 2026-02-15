import { Attraction } from "@/registry/aliimam/components/attraction"

export default function AttractionDemo() {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-lime-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-slate-500",
    "bg-gray-500",
    "bg-zinc-500",
  ]
  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center">
      <Attraction>
        {colors.map((color, index) => (
          <div key={index} className={`h-16 w-16 ${color}`} />
        ))}
      </Attraction>
    </div>
  )
}
