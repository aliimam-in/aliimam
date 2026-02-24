
import * as React from "react"

export interface LassoSelectProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LassoSelect = React.forwardRef<SVGSVGElement, LassoSelectProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M7 22a5 5 0 0 1-2-4m2-1.07c.96.43 1.96.74 2.99.91M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.2 7.2 0 0 1-.33 2"/><path d="M5 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.33 4h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14"/></g>` }}
      {...props}
    />
  )
)

LassoSelect.displayName = "LassoSelect"
