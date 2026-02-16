"use client"

import { useFavorites } from "@/src/context/favourites-context"
import { useCopy } from "@/src/hooks/useCopy"
import { Pattern } from "@/src/types/pattern"
import { Check, Copy, Star } from "lucide-react"
import reactElementToJSXString from "react-element-to-jsx-string"

import { Button } from "@/registry/aliimam/ui/button"

interface PatternCardProps {
  pattern: Pattern
  activePattern: string | null
  setActivePattern: (pattern: string | null) => void
  theme: "light" | "dark"
  activeMobileCard: string | null
  setActiveMobileCard: (id: string | null) => void
}

export default function PatternCard({
  pattern,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
}: PatternCardProps) {
  const { copyToClipboard, isCopied } = useCopy()
  const { toggleFavourite, isFavourite } = useFavorites()
  const isPatternDark = theme === "dark"

  const previewPattern = (patternId: string) => {
    setActivePattern(patternId === activePattern ? null : patternId)
     
  }

  const handleCardInteraction = (patternId: string) => {
    setActiveMobileCard(activeMobileCard === patternId ? null : patternId)
  }

  // 🔥 Convert render() to JSX string
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (!pattern.render) return

    const element = pattern.render()
    const jsxString = reactElementToJSXString(element, {
      showFunctions: false,
      useBooleanShorthandSyntax: true,
    })

    copyToClipboard(jsxString, pattern.id)
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        previewPattern(pattern.id)
      }}
      className="group relative cursor-pointer"
    >
      <div
        className={`bg-background relative aspect-video w-full overflow-hidden border transition-all duration-300 ${
          activePattern === pattern.id ? "" : ""
        } ${activeMobileCard === pattern.id ? "" : ""}`}
        onClick={() => handleCardInteraction(pattern.id)}
      >
        <div className="theme-container absolute inset-0">
          {pattern.render ? (
            pattern.render()
          ) : pattern.render ? (
            <div className="absolute inset-0" style={pattern.render} />
          ) : null}
        </div>

        {pattern.badge && (
          <div className="absolute top-2 right-2 z-10 h-1.5 w-1.5 rounded-full bg-blue-500" />
        )}

        <div className=" absolute inset-0 hidden items-end justify-start p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex">
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={(e) => {
              e.stopPropagation()
              toggleFavourite(pattern.id)
            }}
            className={`absolute top-2 left-2 z-10 cursor-pointer backdrop-blur-md${
              isFavourite(pattern.id)
                ? isPatternDark
                  ? "bg-yellow-500/20 text-yellow-500"
                  : "bg-yellow-500/20 text-yellow-500"
                : isPatternDark
                  ? "bg-black/20 text-white"
                  : "dark:bg-black/20"
            }`}
          >
            <Star
              className={`h-4 w-4 ${
                isFavourite(pattern.id) ? "fill-current" : ""
              }`}
            />
          </Button>
          <div className="text-center">
            <h3 className="mb-3 text-lg font-semibold">{pattern.name}</h3>

            <div className="flex justify-start gap-3">
              <Button
                size="sm"
                onClick={handleCopy}
                disabled={isCopied(pattern.id)}
                className="cursor-pointer"
              >
                {isCopied(pattern.id) ? (
                  <>
                    <Check className="mr-1 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
