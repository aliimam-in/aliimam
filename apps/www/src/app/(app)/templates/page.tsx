import Card from "@/src/components/templates/card";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const cards = [
  {
    id: 10,
    title: "Vercel",
    src: "/templates/vercel.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://vercel.aliimam.in",
    repoUrl: "https://github.com/aliimam-in/templates/tree/main/apps/vercel",
    imgHeight: 900,
  },
  {
    id: 0,
    title: "Portfolio",
    src: "/templates/portfolio.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://portfolio.aliimam.in",
    repoUrl: "https://github.com/aliimam-in/templates/tree/main/apps/portfolio",
    imgHeight: 900,
  },
  {
    id: 1,
    title: "Dalim",
    src: "/templates/dalim-www.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/www",
    imgHeight: 900,
  },
  {
    id: 2,
    title: "Dalim UI",
    src: "/templates/dalim-ui.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://ui.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/ui",
    imgHeight: 900,
  },
  {
    id: 3,
    title: "Dalim Icons",
    src: "/templates/dalim-icons.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://icons.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/icons",
    imgHeight: 900,
  },
  {
    id: 4,
    title: "Dalim Agency",
    src: "/templates/dalim-agency.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://agency.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/agency",
    imgHeight: 900,
  },
  {
    id: 5,
    title: "Dalim Works",
    src: "/templates/dalim-works.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://works.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/works",
    imgHeight: 900,
  },
  {
    id: 6,
    title: "Dalim Graphic",
    src: "/templates/dalim-graphic.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://graphic.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/graphic",
    imgHeight: 900,
  },
  {
    id: 7,
    title: "Dalim Fonts",
    src: "/templates/dalim-fonts.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://fonts.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/fonts",
    imgHeight: 900,
  },
  {
    id: 8,
    title: "Dalim Visuals",
    src: "/templates/dalim-visuals.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://visuals.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/visuals",
    imgHeight: 900,
  },
  {
    id: 9,
    title: "Dalim Tools",
    src: "/templates/dalim-tools.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://tools.dalim.in",
    repoUrl: "https://github.com/dalim-in/dalim/tree/main/apps/tools",
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
