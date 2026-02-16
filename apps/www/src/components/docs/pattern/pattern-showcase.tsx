"use client"

import { useEffect, useState } from "react"
import { gridPatterns } from "@/src/config/patterns"
import { useFavorites } from "@/src/context/favourites-context"
import { useCopy } from "@/src/hooks/useCopy"
import { categories } from "@/src/lib/categories"
import { searchPatterns } from "@/src/lib/utils"
import { Eye } from "@aliimam/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import reactElementToJSXString from "react-element-to-jsx-string"

import { ScrollArea, ScrollBar } from "@/registry/aliimam/ui/scroll-area"

import PatternEmptyState from "./pattern-empty-state"
import PatternGrid from "./pattern-grid"
import { SearchBar } from "./search-bar"

interface PatternShowcaseProps {
  activePattern: string | null
  setActivePattern: (pattern: string | null) => void
  theme: "light" | "dark"
}

export default function PatternShowcase({
  activePattern,
  setActivePattern,
  theme,
}: PatternShowcaseProps) {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("all")
  const { favourites } = useFavorites()
  const isPatternDark = theme === "dark"

  const { copyToClipboard, isCopied } = useCopy()

  const [searchInput, setSearchInput] = useState<string>("")
  const [columns, setColumns] = useState<number>(2)

  const handleCopyActive = () => {
    if (!activePattern) return

    const pattern = gridPatterns.find((p) => p.id === activePattern)
    if (!pattern?.render) return

    const element = pattern.render()

    const jsxString = reactElementToJSXString(element, {
      showFunctions: false,
      useBooleanShorthandSyntax: true,
    })

    copyToClipboard(jsxString, pattern.id)
  }

  useEffect(() => {
    if (activePattern) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [activePattern])

  const handleRandomSelect = () => {
    if (gridPatterns.length === 0) return

    let random

    do {
      random = gridPatterns[Math.floor(Math.random() * gridPatterns.length)]
    } while (random.id === activePattern && gridPatterns.length > 1)

    setActivePattern(random.id)
    setActiveTab("view")
  }

  const filteredPatterns =
    searchInput === ""
      ? activeTab === "all"
        ? gridPatterns
        : activeTab === "favourites"
          ? gridPatterns.filter((pattern) => favourites.includes(pattern.id))
          : gridPatterns.filter((pattern) => pattern.category === activeTab)
      : searchPatterns(gridPatterns, activeTab, searchInput)

  return (
    <section className="container grid h-full w-full gap-2 px-2 pt-2">
      <Tabs
        defaultValue="view"
        value={activeTab}
        onValueChange={setActiveTab}
        className="items-center justify-center"
      >
        <div className="flex w-full flex-wrap items-center gap-2 xl:flex-nowrap">
          <ScrollArea className="w-full">
            <TabsList className="bg-background flex h-full w-96 space-x-2 overflow-auto border p-1 md:w-fit lg:w-full">
              <TabsTrigger
                className={`data-[state=active]:bg-foreground data-[state=active]:text-background shrink-0 px-3 text-xs whitespace-nowrap uppercase`}
                value={"view"}
              >
                <Eye className="w-4" />
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`shrink-0 px-4 py-2 text-xs whitespace-nowrap uppercase ${
                    isPatternDark
                      ? ""
                      : "data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:hover:text-muted-foreground"
                  }`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>
          <div className="flex flex-wrap gap-2 md:w-full md:flex-nowrap">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />

            <div className="bg-background flex items-center gap-1 border px-1 py-1">
              {[1, 2, 3, 4].map((col) => (
                <button
                  key={col}
                  onClick={() => setColumns(col)}
                  className={`px-3 py-2 text-xs transition ${
                    columns === col
                      ? "bg-foreground text-background"
                      : "hover:bg-muted"
                  }`}
                >
                  {col}
                </button>
              ))}
            </div>

            <button
              onClick={handleRandomSelect}
              disabled={gridPatterns.length === 0}
              className="bg-background cursor-pointer hover:bg-muted border px-4 py-2 text-xs uppercase transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              Random
            </button>
            <button
              onClick={handleCopyActive}
              disabled={!activePattern}
              className="bg-background cursor-pointer hover:bg-muted border px-6 py-2 text-xs uppercase transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {activePattern && isCopied(activePattern) ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="mt-2 h-[85vh] w-full overflow-auto"
          >
            {filteredPatterns.length > 0 ? (
              <PatternGrid
                patterns={filteredPatterns}
                activePattern={activePattern}
                setActivePattern={setActivePattern}
                theme={theme}
                activeMobileCard={activeMobileCard}
                setActiveMobileCard={setActiveMobileCard}
                columns={columns}
              />
            ) : (
              <PatternEmptyState activeTab={activeTab} theme={theme} />
            )}
          </TabsContent>
        ))}
        <TabsContent
          value="view"
          className="mt-2 flex h-[85vh] w-full items-center justify-center overflow-auto"
        >
          {activePattern ? (
            <PatternGrid
              patterns={filteredPatterns.filter((p) => p.id === activePattern)}
              activePattern={activePattern}
              setActivePattern={setActivePattern}
              theme={theme}
              activeMobileCard={activeMobileCard}
              setActiveMobileCard={setActiveMobileCard}
              columns={columns}
            />
          ) : (
            <div
              className={`text-center text-sm ${
                isPatternDark ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              Select a pattern
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
