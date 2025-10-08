import { getAllBlockIds } from "@/src/lib/blocks";
import { BlockDisplay } from "@/src/components/docs/blocks/block-display";
import { registryCategories } from "@/registry/registry-categories";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }));
}

export default async function BlocksPage({
  params,
}: {
  params: { categories?: string[] };
}) {
  const { categories = [] } = params;
  const blocks = await getAllBlockIds(["registry:block"], categories);

  return (
    <div className="flex mt-3 min-w-0 p-6 flex-col w-full gap-12 md:gap-24">
      {blocks.map((name) => (
        <BlockDisplay name={name} key={name} />
      ))}
    </div>
  );
}
