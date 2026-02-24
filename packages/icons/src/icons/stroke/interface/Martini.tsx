
import * as React from "react"

export interface MartiniProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Martini = React.forwardRef<SVGSVGElement, MartiniProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 22h8m-4-11v11m7-19l-7 8l-7-8Z"/>` }}
      {...props}
    />
  )
)

Martini.displayName = "Martini"
