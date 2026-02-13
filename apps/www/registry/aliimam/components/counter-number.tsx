"use client"

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"

import { cn } from "@/registry/aliimam/lib/utils"

type SizeVariant = "sm" | "md" | "lg" | "xl" | "2xl"
type ColorVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"

interface CounterNumberProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  duration?: number // new: animation duration in ms

  decimalPlaces?: number
  prefix?: string
  suffix?: string
  separator?: string
  currency?: string
  locale?: string

  size?: SizeVariant
  color?: ColorVariant
  preserveAspectRatio?: boolean
}

const sizeClasses: Record<SizeVariant, string> = {
  sm: "text-md",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-5xl",
  "2xl": "text-7xl",
}

const colorClasses: Record<ColorVariant, string> = {
  default: "text-foreground",
  primary: "text-blue-600 dark:text-blue-400",
  secondary: "text-gray-600 dark:text-gray-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
}

export function CounterNumber({
  value,
  startValue = 0,
  duration = 1000,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  currency,
  locale = "en-US",
  size = "md",
  color = "default",
  preserveAspectRatio = false,
  className,
  ...props
}: CounterNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(startValue)

  useEffect(() => {
    let startTime: number | null = null
    const start = displayValue
    const end = value
    const diff = end - start

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setDisplayValue(start + diff * progress)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [value, duration]) // animate whenever value or duration changes

  const formatNumber = (numValue: number): string => {
    let formattedValue: string

    if (currency) {
      formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(numValue)
    } else {
      formattedValue = new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(numValue)

      if (separator !== ",") {
        formattedValue = formattedValue.replace(/,/g, separator)
      }
    }

    return `${prefix}${formattedValue}${suffix}`
  }

  const combinedClassName = cn(
    "inline-block tabular-nums tracking-wider transition-all",
    sizeClasses[size],
    colorClasses[color],
    preserveAspectRatio && "font-mono",
    className
  )

  return (
    <span ref={ref} className={combinedClassName} {...props}>
      {formatNumber(displayValue)}
    </span>
  )
}
