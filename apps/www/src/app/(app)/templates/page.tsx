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
    title: "Ali Imam",
    src: "/templates/Ali Imam-www.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/www",
    imgHeight: 900,
  },
  {
    id: 2,
    title: "Ali Imam UI",
    src: "/templates/Ali Imam-ui.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://ui.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/ui",
    imgHeight: 900,
  },
  {
    id: 3,
    title: "Ali Imam Icons",
    src: "/templates/Ali Imam-icons.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://icons.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/icons",
    imgHeight: 900,
  },
  {
    id: 4,
    title: "Ali Imam Agency",
    src: "/templates/Ali Imam-agency.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://agency.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/agency",
    imgHeight: 900,
  },
  {
    id: 5,
    title: "Ali Imam Works",
    src: "/templates/Ali Imam-works.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://works.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/works",
    imgHeight: 900,
  },
  {
    id: 6,
    title: "Ali Imam Graphic",
    src: "/templates/Ali Imam-graphic.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://graphic.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/graphic",
    imgHeight: 900,
  },
  {
    id: 7,
    title: "Ali Imam Fonts",
    src: "/templates/Ali Imam-fonts.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://fonts.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/fonts",
    imgHeight: 900,
  },
  {
    id: 8,
    title: "Ali Imam Visuals",
    src: "/templates/Ali Imam-visuals.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://visuals.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/visuals",
    imgHeight: 900,
  },
  {
    id: 9,
    title: "Ali Imam Tools",
    src: "/templates/Ali Imam-tools.jpg",
    subheading:
      "Beautifully designed open-source templates and UI components built with Ali Imam UI and shadcn/ui.",
    demoUrl: "https://tools.Ali Imam.in",
    repoUrl: "https://github.com/Ali Imam-in/Ali Imam/tree/main/apps/tools",
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
