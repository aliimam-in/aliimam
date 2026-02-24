
import * as React from "react"

export interface Redo2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Redo2 = React.forwardRef<SVGSVGElement, Redo2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m15 14l5-5l-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/></g>` }}
      {...props}
    />
  )
)

Redo2.displayName = "Redo2"
