
import * as React from "react"

export interface UndoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Undo = React.forwardRef<SVGSVGElement, UndoProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9a9 9 0 0 0-6 2.3L3 13"/></g>` }}
      {...props}
    />
  )
)

Undo.displayName = "Undo"
