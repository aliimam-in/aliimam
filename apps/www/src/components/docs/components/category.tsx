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
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <Link href="/components">
          <Button
            size={"sm"}
            variant="outline"
            className={cn(
              "text-xs h-7",
              !currentCategory &&
                "bg-accent dark:bg-input dark:hover:bg-input"
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
                variant="outline"
                className={cn(
                  "capitalize text-xs h-7",
                  isActive &&
                    "bg-accent !shadow-none before:!shadow-none dark:bg-input dark:hover:bg-input"
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
