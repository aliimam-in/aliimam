import type { Metadata } from "next"
 

import Card from "@/src/components/templates/card"

export const metadata: Metadata = {
  title: "Templates - Dalim UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and React to help you get started with your next project.",
}

const cards = [ 
  {
    id: 1,
    title: "Simple Portfolio",
    subheading: "Beautifully designed open-source templates and UI components built with Dalim UI and shadcn/ui.",
    demoUrl: "https://template-01-ui.dalim.in",
    repoUrl:
      "https://github.com/dalim-in/templates/tree/main/apps/template-01",
    imgHeight: 900,
  },
  {
    id: 2,
    title: "Design Agency",
    subheading: "Beautifully designed open-source templates and UI components built with Dalim UI and shadcn/ui.",
    demoUrl: "https://template-02-ui.dalim.in",
    repoUrl:
      "https://github.com/dalim-in/templates/tree/main/apps/template-02",
    imgHeight: 900,
  }
]

export default function Page() {
  return (
    <> 
      <div className="py-3 pt-40 px-6 mx-auto max-w-7xl">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}