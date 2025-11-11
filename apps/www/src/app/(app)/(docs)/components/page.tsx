import * as React from "react";
import { Metadata } from "next";

import { getUniqueComponentCategories } from "@/src/lib/components"; 
import { components } from "@/registry/default/components";

import { CategoryNavigation } from "@/src/components/docs/components/category";
import { ParticleDisplay } from "@/src/components/docs/components/display";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const particleCategories = getUniqueComponentCategories(components);

export const metadata: Metadata = {
  title: "Components",
  description: "Built with React and Tailwind CSS",
};

export default async function Page() {
  return (
    <div className="pt-20">
      <CategoryNavigation categories={particleCategories} />
      <div className="mx-auto px-6 max-w-7xl w-full pt-10">
        <div className="grid flex-1 items-stretch gap-6">
          {components.map((component) => {
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
