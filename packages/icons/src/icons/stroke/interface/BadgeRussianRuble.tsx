
import * as React from "react"

export interface BadgeRussianRubleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BadgeRussianRuble = React.forwardRef<SVGSVGElement, BadgeRussianRubleProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M9 16h5"/><path d="M9 12h5a2 2 0 1 0 0-4h-3v9"/></g>` }}
      {...props}
    />
  )
)

BadgeRussianRuble.displayName = "BadgeRussianRuble"
