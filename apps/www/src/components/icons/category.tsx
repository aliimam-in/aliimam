"use client";
import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
import { useLogos } from "@/src/components/icons/logo-context";
import { useIcons } from "@/src/components/icons/icon-context";

export function IconCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useIcons();

  const getDisplayName = (category: string): string => {
    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  return (
    <Sidebar
      collapsible="none"
      className="top-38 hidden md:block sticky bg-transparent h-full"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-12">
        <div className="grid gap-1 pl-1">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-md text-sm cursor-pointer py-1.5 text-start px-4 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              {getDisplayName(category).charAt(0).toUpperCase() +
                getDisplayName(category).slice(1)}
            </button>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export function LogoCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();

  const getDisplayName = (category: string): string => {
    const parts = category.split("/");

    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  return (
    <Sidebar
      collapsible="none"
      className="top-38 hidden md:block sticky bg-transparent h-full"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-12">
        <div className="grid gap-1 pl-1">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-md text-sm cursor-pointer py-1.5 text-start px-4 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              {getDisplayName(category).charAt(0).toUpperCase() +
                getDisplayName(category).slice(1)}
            </button>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
