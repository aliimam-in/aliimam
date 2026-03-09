'use client'

import { TabsList, TabsTrigger } from './tabs'
import { ScrollArea, ScrollBar } from '@/registry/aliimam/ui/scroll-area'
import { ChevronLeft, ChevronRight } from 'lucide-react'    
import { useRef, useEffect, useState } from "react" 

const tabs = [
  "SM Creative",
  "SM Festive",
  "Campaigns",
  "3D",
  "Packaging",
  "UI/UX",
  "Logos",
  "Music",
  "Videos",
  "Reels",
  "Other",
]

export function ScrollableTabs() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollableElementRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollableElementRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableElementRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    // Find the actual scrollable element inside ScrollArea
    if (scrollAreaRef.current) {
      const scrollableElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      ) as HTMLDivElement
      scrollableElementRef.current = scrollableElement

      if (scrollableElement) {
        // Initial check
        checkScrollability()

        // Add scroll event listener
        scrollableElement.addEventListener("scroll", checkScrollability)

        // Add resize event listener to handle window resize
        window.addEventListener("resize", checkScrollability)

        return () => {
          scrollableElement.removeEventListener("scroll", checkScrollability)
          window.removeEventListener("resize", checkScrollability)
        }
      }
    }
  }, [])

  const scroll = (offset: number) => {
    if (scrollableElementRef.current) {
      scrollableElementRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }
  }

  // Dynamic margin based on button visibility
  const getScrollAreaMargin = () => {
    const leftMargin = canScrollLeft ? "ml-8" : "-ml-7"
    const rightMargin = canScrollRight ? "mr-8" : "-mr-7"
    return `${leftMargin} ${rightMargin}`
  }

  return (
    <TabsList className="bg-background sticky top-24 z-20 h-11 max-w-7xl w-full border px-4 justify-center flex items-center">
      {canScrollLeft && (
        <button
          onClick={() => scroll(-150)}
          className="absolute left-1 z-30 p-1 bg-foreground text-muted-foreground hover:text-background transition-opacity duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20}/>
        </button>
      )}

      <ScrollArea
        ref={scrollAreaRef}
        className={`w-full overflow-hidden transition-all duration-200 ${getScrollAreaMargin()}`}
      >
        <div className="flex w-max space-x-2 px-4">
          {tabs.map((label, index) => (
            <TabsTrigger
              key={label}
              value={(index + 1).toString()}
              className="data-[state=active]:bg-foreground h-9 whitespace-nowrap px-6 data-[state=active]:text-white dark:data-[state=active]:text-black"
            >
              {label}
            </TabsTrigger>
          ))}
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>

      {canScrollRight && (
        <button
          onClick={() => scroll(150)}
          className="absolute right-1 z-30 bg-foreground p-1 text-muted-foreground hover:text-background transition-opacity duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight size={20}/>
        </button>
      )}
    </TabsList>
  )
}