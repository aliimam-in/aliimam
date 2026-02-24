
import * as React from "react"

export interface RussianRubleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RussianRuble = React.forwardRef<SVGSVGElement, RussianRubleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 11h8a4 4 0 0 0 0-8H9v18m-3-6h8"/>` }}
      {...props}
    />
  )
)

RussianRuble.displayName = "RussianRuble"
