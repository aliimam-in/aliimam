"use client";

import { Pattern } from "@/src/types/pattern";
import PatternCard from "./pattern-card";
import { useFavorites } from "@/src/context/favourites-context";

interface PatternGridProps {
  patterns: Pattern[];
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
  activeMobileCard: string | null;
  setActiveMobileCard: (id: string | null) => void;
  columns: number
}

export default function PatternGrid({
  patterns,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
  columns,
}: PatternGridProps) {
  const { favourites } = useFavorites();

  return (
    <div
  className="grid pb-2 gap-2 w-full"
  style={{
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  }}
>

      {patterns.map((pattern) => (
        <PatternCard
          key={`${pattern.id}-${favourites.includes(pattern.id)}`}
          pattern={pattern}
          activePattern={activePattern}
          setActivePattern={setActivePattern}
          theme={theme}
          activeMobileCard={activeMobileCard}
          setActiveMobileCard={setActiveMobileCard}
        />
      ))}
    </div>
  );
}