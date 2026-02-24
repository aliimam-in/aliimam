
import * as React from "react"

export interface TurkishLiraProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TurkishLira = React.forwardRef<SVGSVGElement, TurkishLiraProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 4L5 9m10-.5l-10 5M18 12a9 9 0 0 1-9 9V3"/>` }}
      {...props}
    />
  )
)

TurkishLira.displayName = "TurkishLira"
