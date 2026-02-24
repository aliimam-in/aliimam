
import * as React from "react"

export interface PersonStandingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PersonStanding = React.forwardRef<SVGSVGElement, PersonStandingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="1"/><path d="m9 20l3-6l3 6M6 8l6 2l6-2m-6 2v4"/></g>` }}
      {...props}
    />
  )
)

PersonStanding.displayName = "PersonStanding"
