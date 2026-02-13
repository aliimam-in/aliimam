import { showcaseSource } from "@/src/lib/source";
import { ShowcaseCard } from "@/src/components/docs/showcase";

type Showcase = {
  url: string;
  data: {
    title: string;
    image: string;
    affiliation: string;
  };
};

export default function Page() {
  // Map or adapt the output of getPages() to satisfy the Showcase[] type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showcases: Showcase[] = showcaseSource.getPages().map((page: any) => ({
    url: page.url,
    data: {
      title: page.data.title ?? "",
      image: page.data.image ?? "",
      affiliation: page.data.affiliation ?? "",
    },
  }));

  return (
    <article className="container">
      <h2 className="mb-2 text-center text-5xl font-bold tracking-tighter">
        Showcase
      </h2>
      <h3 className="mx-auto mb-8 text-center text-lg text-muted-foreground">
        Companies choose Ali Imam to build their landing pages.
      </h3>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {showcases.map((showcase) => (
          <ShowcaseCard
            key={showcase.url}
            {...showcase}
            href={showcase.url}
            title={showcase.data.title ?? ""}
            image={showcase.data.image ?? ""}
            affiliation={showcase.data.affiliation ?? ""}
          />
        ))}
      </div>
    </article>
  );
}
