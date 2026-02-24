
import * as React from "react"

export interface TextAlignJustifyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextAlignJustify = React.forwardRef<SVGSVGElement, TextAlignJustifyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 5h18M3 12h18M3 19h18"/>` }}
      {...props}
    />
  )
)

TextAlignJustify.displayName = "TextAlignJustify"
