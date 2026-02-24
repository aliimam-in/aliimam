
import * as React from "react"

export interface TvMinimalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TvMinimal = React.forwardRef<SVGSVGElement, TvMinimalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

TvMinimal.displayName = "TvMinimal"
