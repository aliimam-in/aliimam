
import * as React from "react"

export interface SquareSigmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareSigma = React.forwardRef<SVGSVGElement, SquareSigmaProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 8.9V7H8l4 5l-4 5h8v-1.9"/></g>` }}
      {...props}
    />
  )
)

SquareSigma.displayName = "SquareSigma"
