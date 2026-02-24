
import * as React from "react"

export interface MousePointer2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MousePointer2Off = React.forwardRef<SVGSVGElement, MousePointer2OffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m15.55 8.45l5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551M22 2L2 22m4.816-10.472l-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779"/>` }}
      {...props}
    />
  )
)

MousePointer2Off.displayName = "MousePointer2Off"
