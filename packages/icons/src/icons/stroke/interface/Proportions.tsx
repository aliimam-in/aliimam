
import * as React from "react"

export interface ProportionsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Proportions = React.forwardRef<SVGSVGElement, ProportionsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9v11M2 9h13a2 2 0 0 1 2 2v9"/></g>` }}
      {...props}
    />
  )
)

Proportions.displayName = "Proportions"
