"use client";
import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
import { useLogos } from "@/src/components/icons/logo-context";
import { useIcons } from "@/src/components/icons/icon-context";

export function IconCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useIcons();

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Icons";
    
    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  return (
     <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
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
    if (category === "all") return "All Logos";
    
    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return lowerCategory.includes("icon") || 
           lowerCategory.includes("wordmark")
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  return (
     <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-12">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
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

export function FlagCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Flags";
    
    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return lowerCategory.includes("flag") || 
           lowerCategory.includes("country") ||
           lowerCategory.includes("nation");
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  return (
     <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-12">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
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


export function StickersCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Stickers";
    
    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return lowerCategory.includes("stickers") 
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  return (
     <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-12">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
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
