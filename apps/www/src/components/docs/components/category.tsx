import * as React from "react";
import Link from "next/link";

import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";

interface CategoryNavigationProps {
  currentCategory?: string;
  categories?: Array<{ name: string; slug: string }>;
}

export function CategoryNavigation({
  currentCategory,
  categories,
}: CategoryNavigationProps) {
  return (
    <div className="border-y p-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link href="/components">
          <Button
            size={"sm"}
            variant="ghost"
            className={cn(
              "text-xs h-7 font-light",
              !currentCategory &&
                "bg-input"
            )}
          >
            All Components
          </Button>
        </Link>
        {categories?.map((cat) => {
          const isActive = cat.slug === currentCategory;
          return (
            // eslint-disable-next-line react/jsx-key
            <Link key={cat.slug} href={`/components/${cat.slug}`}>
              <Button
                size={"sm"}
                key={cat.slug}
                variant="ghost"
                className={cn(
                  "capitalize text-xs h-7 font-light",
                  isActive &&
                    "bg-input"
                )}
              >
                {cat.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
