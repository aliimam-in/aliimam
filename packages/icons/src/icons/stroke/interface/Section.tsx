
import * as React from "react"

export interface SectionProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Section = React.forwardRef<SVGSVGElement, SectionProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"/><path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"/></g>` }}
      {...props}
    />
  )
)

Section.displayName = "Section"
