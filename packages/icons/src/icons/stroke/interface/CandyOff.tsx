
import * as React from "react"

export interface CandyOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CandyOff = React.forwardRef<SVGSVGElement, CandyOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 10v7.9m1.802-11.755a5 5 0 0 1 6.053 6.053M14 6.1v2.243m1.5 7.228l-.964.964a5 5 0 0 1-7.071 0a5 5 0 0 1 0-7.07l.964-.965"/><path d="M16 7V3a1 1 0 0 1 1.707-.707a2.5 2.5 0 0 0 2.152.717a1 1 0 0 1 1.131 1.131a2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4M2 2l20 20M8 17v4a1 1 0 0 1-1.707.707a2.5 2.5 0 0 0-2.152-.717a1 1 0 0 1-1.131-1.131a2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/></g>` }}
      {...props}
    />
  )
)

CandyOff.displayName = "CandyOff"
