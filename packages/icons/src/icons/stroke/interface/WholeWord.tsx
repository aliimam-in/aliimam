
import * as React from "react"

export interface WholeWordProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WholeWord = React.forwardRef<SVGSVGElement, WholeWordProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="12" r="3"/><path d="M10 9v6"/><circle cx="17" cy="12" r="3"/><path d="M14 7v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/></g>` }}
      {...props}
    />
  )
)

WholeWord.displayName = "WholeWord"
