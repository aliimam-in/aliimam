
import * as React from "react"

export interface TextProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Text = React.forwardRef<SVGSVGElement, TextProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 18H3M17 6H3m18 6H3"/>` }}
      {...props}
    />
  )
)

Text.displayName = "Text"
