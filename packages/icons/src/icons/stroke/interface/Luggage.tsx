
import * as React from "react"

export interface LuggageProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Luggage = React.forwardRef<SVGSVGElement, LuggageProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-6 2h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></g>` }}
      {...props}
    />
  )
)

Luggage.displayName = "Luggage"
