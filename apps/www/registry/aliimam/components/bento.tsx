"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"

import { cn } from "@/registry/aliimam/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl"
type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>
const BREAKPOINTS: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"]

/* -------------------------------------------------------------------------- */
/*             Fully Static Responsive Maps (Tailwind JIT safe)               */
/*                                                                            */
/*  Tailwind's scanner reads source TEXT — it does NOT execute code.          */
/*  Every class that might be emitted MUST appear as a complete literal       */
/*  string somewhere in the scanned files.                                    */
/*                                                                            */
/*  Dynamic construction like `${bp}:col-span-${n}` or even               */
/*  `${bp}:${map[value]}` is invisible to the scanner — Tailwind only       */
/*  sees the template literal syntax, not what it evaluates to.             */
/*                                                                            */
/*  These nested objects are the single source of truth. Every possible       */
/*  responsive class is written out verbatim so JIT includes them all.        */
/* -------------------------------------------------------------------------- */

const RESPONSIVE_GRID_COLS = {
  base: {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
  },
  sm: {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    7: "sm:grid-cols-7",
    8: "sm:grid-cols-8",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    7: "xl:grid-cols-7",
    8: "xl:grid-cols-8",
  },
  "2xl": {
    1: "2xl:grid-cols-1",
    2: "2xl:grid-cols-2",
    3: "2xl:grid-cols-3",
    4: "2xl:grid-cols-4",
    5: "2xl:grid-cols-5",
    6: "2xl:grid-cols-6",
    7: "2xl:grid-cols-7",
    8: "2xl:grid-cols-8",
  },
} as const

const RESPONSIVE_COL_SPAN = {
  base: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
  },
  sm: {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
  },
  md: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
  },
  lg: {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
  },
  xl: {
    1: "xl:col-span-1",
    2: "xl:col-span-2",
    3: "xl:col-span-3",
    4: "xl:col-span-4",
    5: "xl:col-span-5",
  },
  "2xl": {
    1: "2xl:col-span-1",
    2: "2xl:col-span-2",
    3: "2xl:col-span-3",
    4: "2xl:col-span-4",
    5: "2xl:col-span-5",
  },
} as const

const RESPONSIVE_ROW_SPAN = {
  base: {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
  },
  sm: {
    1: "sm:row-span-1",
    2: "sm:row-span-2",
    3: "sm:row-span-3",
    4: "sm:row-span-4",
    5: "sm:row-span-5",
  },
  md: {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
    4: "md:row-span-4",
    5: "md:row-span-5",
  },
  lg: {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
    3: "lg:row-span-3",
    4: "lg:row-span-4",
    5: "lg:row-span-5",
  },
  xl: {
    1: "xl:row-span-1",
    2: "xl:row-span-2",
    3: "xl:row-span-3",
    4: "xl:row-span-4",
    5: "xl:row-span-5",
  },
  "2xl": {
    1: "2xl:row-span-1",
    2: "2xl:row-span-2",
    3: "2xl:row-span-3",
    4: "2xl:row-span-4",
    5: "2xl:row-span-5",
  },
} as const

const RESPONSIVE_GAP = {
  base: {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
  },
  sm: {
    0: "sm:gap-0",
    1: "sm:gap-1",
    2: "sm:gap-2",
    3: "sm:gap-3",
    4: "sm:gap-4",
    5: "sm:gap-5",
    6: "sm:gap-6",
    8: "sm:gap-8",
    10: "sm:gap-10",
  },
  md: {
    0: "md:gap-0",
    1: "md:gap-1",
    2: "md:gap-2",
    3: "md:gap-3",
    4: "md:gap-4",
    5: "md:gap-5",
    6: "md:gap-6",
    8: "md:gap-8",
    10: "md:gap-10",
  },
  lg: {
    0: "lg:gap-0",
    1: "lg:gap-1",
    2: "lg:gap-2",
    3: "lg:gap-3",
    4: "lg:gap-4",
    5: "lg:gap-5",
    6: "lg:gap-6",
    8: "lg:gap-8",
    10: "lg:gap-10",
  },
  xl: {
    0: "xl:gap-0",
    1: "xl:gap-1",
    2: "xl:gap-2",
    3: "xl:gap-3",
    4: "xl:gap-4",
    5: "xl:gap-5",
    6: "xl:gap-6",
    8: "xl:gap-8",
    10: "xl:gap-10",
  },
  "2xl": {
    0: "2xl:gap-0",
    1: "2xl:gap-1",
    2: "2xl:gap-2",
    3: "2xl:gap-3",
    4: "2xl:gap-4",
    5: "2xl:gap-5",
    6: "2xl:gap-6",
    8: "2xl:gap-8",
    10: "2xl:gap-10",
  },
} as const

/* -------------------------------------------------------------------------- */
/*                      Responsive Class Generator                            */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResponsiveMap<T extends keyof any> = Record<Breakpoint, Record<T, string>>

function getResponsiveClasses<T extends number>(
  value: ResponsiveValue<T> | undefined,
  map: ResponsiveMap<T>
): string {
  if (value === undefined) return ""

  if (typeof value !== "object") {
    return map.base[value] ?? ""
  }

  return BREAKPOINTS.filter(
    (bp) => (value as Partial<Record<Breakpoint, T>>)[bp] !== undefined
  )
    .map((bp) => {
      const key = (value as Partial<Record<Breakpoint, T>>)[bp] as T
      return map[bp]?.[key] ?? ""
    })
    .filter(Boolean)
    .join(" ")
}

/* -------------------------------------------------------------------------- */
/*                     Responsive Row Height Hook                             */
/* -------------------------------------------------------------------------- */

function useResponsiveRowHeight(
  value: ResponsiveValue<string> | undefined
): CSSProperties | undefined {
  const [rowHeight, setRowHeight] = useState<string | undefined>(
    typeof value === "string" ? value : value?.base
  )

  useEffect(() => {
    if (!value || typeof value === "string") return

    const queries: Record<Exclude<Breakpoint, "base">, MediaQueryList> = {
      sm: window.matchMedia("(min-width: 640px)"),
      md: window.matchMedia("(min-width: 768px)"),
      lg: window.matchMedia("(min-width: 1024px)"),
      xl: window.matchMedia("(min-width: 1280px)"),
      "2xl": window.matchMedia("(min-width: 1536px)"),
    }

    const update = () => {
      const ordered: Breakpoint[] = ["2xl", "xl", "lg", "md", "sm"]
      for (const bp of ordered) {
        if (queries[bp as keyof typeof queries].matches && value[bp]) {
          setRowHeight(value[bp])
          return
        }
      }
      setRowHeight(value.base)
    }

    update()
    Object.values(queries).forEach((q) => q.addEventListener("change", update))
    return () =>
      Object.values(queries).forEach((q) =>
        q.removeEventListener("change", update)
      )
  }, [value])

  return rowHeight ? { gridAutoRows: rowHeight } : undefined
}

/* -------------------------------------------------------------------------- */
/*                               BentoGrid                                    */
/* -------------------------------------------------------------------------- */

type GridColsValue = keyof typeof RESPONSIVE_GRID_COLS.base
type GapValue = keyof typeof RESPONSIVE_GAP.base

interface BentoGridProps {
  children: ReactNode
  className?: string
  cols?: ResponsiveValue<GridColsValue>
  gap?: ResponsiveValue<GapValue>
  rowHeight?: ResponsiveValue<string>
}

export function BentoGrid({
  children,
  className,
  cols = { base: 1, md: 3, lg: 5 },
  gap = { base: 1, md: 2, lg: 4 },
  rowHeight = { base: "60px", md: "80px", lg: "100px" },
}: BentoGridProps) {
  const style = useResponsiveRowHeight(rowHeight)
  return (
    <div
      style={style}
      className={cn(
        "mx-auto grid h-full w-full",
        getResponsiveClasses(
          cols,
          RESPONSIVE_GRID_COLS as ResponsiveMap<GridColsValue>
        ),
        getResponsiveClasses(gap, RESPONSIVE_GAP as ResponsiveMap<GapValue>),
        className
      )}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                             BentoGridItem                                  */
/* -------------------------------------------------------------------------- */

type ColSpanValue = keyof typeof RESPONSIVE_COL_SPAN.base
type RowSpanValue = keyof typeof RESPONSIVE_ROW_SPAN.base

interface BentoGridItemProps {
  children: ReactNode
  className?: string
  colSpan?: ResponsiveValue<ColSpanValue>
  rowSpan?: ResponsiveValue<RowSpanValue>
}

export function BentoGridItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "bg-background rounded-md border p-4 transition-transform",
        getResponsiveClasses(
          colSpan,
          RESPONSIVE_COL_SPAN as ResponsiveMap<ColSpanValue>
        ),
        getResponsiveClasses(
          rowSpan,
          RESPONSIVE_ROW_SPAN as ResponsiveMap<RowSpanValue>
        ),
        className
      )}
    >
      {children}
    </div>
  )
}
