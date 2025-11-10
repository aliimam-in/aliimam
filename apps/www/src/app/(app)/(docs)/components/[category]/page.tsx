import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getUniqueComponentCategories } from "@/src/lib/components";
import { components } from "@/registry/default/components";
import { CategoryNavigation } from "@/src/components/docs/components/category";
import { ParticleDisplay } from "@/src/components/docs/components/display";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const particleCategories = getUniqueComponentCategories(components);

function getCategoryDetails(categorySlug: string) {
  const categoryObj = particleCategories.find(
    (cat) => cat.slug === categorySlug
  );

  if (!categoryObj) {
    return { categoryObj: null, categoryParticles: [] };
  }

  const categoryParticles = components.filter((component) =>
    component.category?.includes(categoryObj.name)
  );

  return { categoryObj, categoryParticles };
}

export async function generateStaticParams() {
  return particleCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const { categoryObj, categoryParticles } = getCategoryDetails(categorySlug);

  if (!categoryObj) {
    notFound();
  }

  return {
    title: `${
      categoryObj.name.charAt(0).toUpperCase() + categoryObj.name.slice(1)
    } particle components built with React and Tailwind CSS - coss ui`,
    description: `Showing ${categoryParticles.length} particle component${
      categoryParticles.length !== 1 ? "s" : ""
    } in the ${categoryObj.name} category`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const { categoryObj, categoryParticles } = getCategoryDetails(categorySlug);

  if (!categoryObj) {
    notFound();
  }

  // If no particles found for this category, show 404
  if (categoryParticles.length === 0) {
    notFound();
  }

  return (
    <div className="pt-20">
      <CategoryNavigation
        categories={particleCategories}
        currentCategory={categorySlug}
      />
      <div className="mx-auto px-6 max-w-7xl w-full pt-10">
        <div className="grid flex-1 items-stretch gap-8">
          {categoryParticles.map((component) => {
            const ParticleComponent = component.component;
            return (
              <ParticleDisplay key={component.id} name={component.id}>
                <ParticleComponent
                  currentPage={1}
                  totalPages={10}
                  totalResults={100}
                />
              </ParticleDisplay>
            );
          })}
        </div>
      </div>
    </div>
  );
}
