
import * as React from "react"

export interface SpadeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Spade = React.forwardRef<SVGSVGElement, SpadeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 18v4M2 14.499a5.5 5.5 0 0 0 9.591 3.675a.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"/>` }}
      {...props}
    />
  )
)

Spade.displayName = "Spade"
