
import * as React from "react"

export interface LigatureProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ligature = React.forwardRef<SVGSVGElement, LigatureProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 12h2v8m-2 0h4M6 12h4m-4 8h4m-2 0V8a4 4 0 0 1 7.464-2"/>` }}
      {...props}
    />
  )
)

Ligature.displayName = "Ligature"
