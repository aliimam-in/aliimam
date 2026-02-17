import { Attraction } from "@/registry/aliimam/components/attraction"

export default function AttractionDemo() {
  const ingredients = [
    { name: "🧅 Onion", weight: "200g" },
    { name: "🧄 Garlic", weight: "4 cloves" },
    { name: "🍅 Tomato", weight: "3 pcs" },
    { name: "🌿 Basil", weight: "handful" },
    { name: "🫒 Olive oil", weight: "3 tbsp" },
    { name: "🧂 Salt", weight: "to taste" },
    { name: "🌶 Chilli", weight: "1 dried" },
    { name: "🍝 Pasta", weight: "320g" },
    { name: "🧀 Pecorino", weight: "60g" },
  ]

  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center overflow-hidden">
      <Attraction
        gravity={{ x: 0, y: 1.2 }}
        restitution={0.25}
        friction={0.9}
        frictionAir={0.02}
        dragStiffness={0.4}
      >
        {ingredients.map((ing, i) => (
          <div
            key={ing.name}
            data-x={`${10 + (i % 3) * 30}%`}
            data-y={`${8 + Math.floor(i / 3) * 14}%`}
            data-angle={String(Math.round(Math.random() * 20 - 10))}
            data-friction="0.85"
            data-restitution="0.2"
            className="cursor-grab rounded-sm border border-[#d4b896] bg-[#fff8f0] px-4 py-2 whitespace-nowrap shadow-sm select-none"
          >
            <p className="font-serif text-base text-[#3d2b1f]">{ing.name}</p>
            <p className="mt-0.5 font-mono text-[10px] text-[#b8977e]">
              {ing.weight}
            </p>
          </div>
        ))}
      </Attraction>
    </div>
  )
}
