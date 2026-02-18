"use client"

import { useFavorites } from "@/src/context/favourites-context"
import { Star } from "lucide-react"

interface PatternEmptyStateProps {
  activeTab: string
  theme: "light" | "dark"
}

export default function PatternEmptyState({
  activeTab,
  theme,
}: PatternEmptyStateProps) {
  const { favourites } = useFavorites()
  const isPatternDark = theme === "dark"

  if (activeTab === "favourites" && favourites.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mb-4 flex justify-center text-6xl text-yellow-500">
          <Star className="h-12 w-12" />
        </div>
        <h3
          className={`mb-2 text-lg font-semibold ${
            isPatternDark ? "text-gray-200" : "text-black dark:text-gray-200"
          }`}
        >
          No favourites yet
        </h3>
        <p
          className={`${
            isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
          }`}
        >
          You haven&apos;t saved any favorites yet. Tap the{" "}
          <Star className="-mt-1 inline h-4 w-4 text-yellow-500" /> icon on a
          pattern to add it to your favorites!
        </p>
      </div>
    )
  }

  return (
    <div className="py-12 text-center">
      <h3
        className={`mb-2 text-lg font-semibold ${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns found
      </h3>
      <p
        className={`${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns available in this category yet.
      </p>
    </div>
  )
}
