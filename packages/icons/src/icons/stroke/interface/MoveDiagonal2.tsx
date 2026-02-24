
import * as React from "react"

export interface MoveDiagonal2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveDiagonal2 = React.forwardRef<SVGSVGElement, MoveDiagonal2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M19 13v6h-6m-8-8V5h6M5 5l14 14"/>` }}
      {...props}
    />
  )
)

MoveDiagonal2.displayName = "MoveDiagonal2"
