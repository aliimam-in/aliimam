"use client";
import { Sidebar, SidebarContent } from "@/registry/default/ui/sidebar";
import { useLogos } from "@/src/components/icons/logo-context";
import { useIcons } from "@/src/components/icons/icon-context";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function IconCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useIcons();
  const pathname = usePathname();

  useEffect(() => {
    // Reset category when switching nav pages
    setActiveCategory("all");
  }, [pathname]);

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Icons";

    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-40">
        <div className="grid gap-1 pl-1">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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
  const pathname = usePathname();

  useEffect(() => {
    // Reset category when switching nav pages
    setActiveCategory("all");
  }, [pathname]);

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
    return (
      lowerCategory.includes("icon") ||
      lowerCategory.includes("wordmark") ||
      (!category.includes("card") &&
        !category.includes("shape") &&
        !category.includes("flag"))
    );
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-40">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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

export function SymbolsCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();

  const pathname = usePathname();

  useEffect(() => {
    // Reset category when switching nav pages
    setActiveCategory("all");
  }, [pathname]);

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Symbols";

    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return (
      lowerCategory.includes("symbols") ||
      lowerCategory.includes("country") ||
      lowerCategory.includes("nation")
    );
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-40">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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

export function VectorsCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();

  const pathname = usePathname();

  useEffect(() => {
    // Reset category when switching nav pages
    setActiveCategory("all");
  }, [pathname]);

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Vectors";

    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return lowerCategory.includes("vectors");
  });

  const categoriesToShow = ["all", ...flagCategories];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-40">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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

export function ShapesCategoryTabs() {
  const { activeCategory, setActiveCategory, allCategories } = useLogos();
  const pathname = usePathname();

  useEffect(() => {
    // Reset category when switching nav pages
    setActiveCategory("all");
  }, [pathname]);

  const getDisplayName = (category: string): string => {
    if (category === "all") return "All Shapes";

    const parts = category.split("/");
    //@ts-ignore
    return parts.length > 1 ? parts[1] : category;
  };

  // Filter to show only flag-related categories
  const flagCategories = allCategories.filter((category) => {
    if (category === "all") return false; // Exclude "all" from the filtered list
    const lowerCategory = category.toLowerCase();
    return lowerCategory.includes("shapes");
  });

  // Add "all" at the beginning for "All Flags" option
  const categoriesToShow = ["all", ...flagCategories];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Sidebar
      className="sticky top-36 z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar pl-1 pb-40">
        <div className="grid gap-1 pl-1">
          {categoriesToShow.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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
