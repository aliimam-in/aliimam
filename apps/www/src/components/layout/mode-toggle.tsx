"use client";

import * as React from "react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Toggle } from "@/registry/default/ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <Toggle
          variant={"outline"}
          className="group data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    </div>
  );
}

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeSwitch = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-2 cursor-pointer rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <Sun className="h-5 w-5" />
        </button>

        <button
          className="cursor-pointer"
          type="button"
          onClick={handleScrollTop}
        >
          <ArrowUp className="h-3 w-3" />
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-white ml-2 cursor-pointer rounded-full p-2 text-black dark:text-black"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export { ThemeSwitch };
