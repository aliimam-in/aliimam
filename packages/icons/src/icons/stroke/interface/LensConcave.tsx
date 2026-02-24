
import * as React from "react"

export interface LensConcaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LensConcave = React.forwardRef<SVGSVGElement, LensConcaveProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 2a1 1 0 0 0-.8 1.6a14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6a14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z"/>` }}
      {...props}
    />
  )
)

LensConcave.displayName = "LensConcave"
