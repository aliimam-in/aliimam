
import * as React from "react"

export interface RailSymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RailSymbol = React.forwardRef<SVGSVGElement, RailSymbolProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 15h14M5 9h14m-5 11l-5-5l6-6l-5-5"/>` }}
      {...props}
    />
  )
)

RailSymbol.displayName = "RailSymbol"
