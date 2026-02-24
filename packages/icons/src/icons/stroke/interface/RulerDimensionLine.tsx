
import * as React from "react"

export interface RulerDimensionLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RulerDimensionLine = React.forwardRef<SVGSVGElement, RulerDimensionLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v-3m4 3v-3m4 3v-3M2 8V4m20 2H2m20 2V4M6 15v-3"/><rect width="20" height="8" x="2" y="12" rx="2"/></g>` }}
      {...props}
    />
  )
)

RulerDimensionLine.displayName = "RulerDimensionLine"
