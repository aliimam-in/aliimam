
import * as React from "react"

export interface TextWrapProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextWrap = React.forwardRef<SVGSVGElement, TextWrapProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16l-3 3l3 3"/><path d="M3 12h14.5a1 1 0 0 1 0 7H13M3 19h6M3 5h18"/></g>` }}
      {...props}
    />
  )
)

TextWrap.displayName = "TextWrap"
