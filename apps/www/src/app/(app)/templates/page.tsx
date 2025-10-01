import Card from "@/src/components/templates/card";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const cards = [
  {
    id: 0,
    title: "Portfolio",
    src: "/templates/portfolio.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Dalim UI and shadcn/ui.",
    demoUrl: "https://portfolio.aliimam.in",
    repoUrl: "https://github.com/aliimam-in/templates/tree/main/apps/portfolio",
    imgHeight: 900,
  }
];

export default function Page() {
  return (
    <>
      <div className="py-3 pt-40 px-6 mx-auto max-w-7xl">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
