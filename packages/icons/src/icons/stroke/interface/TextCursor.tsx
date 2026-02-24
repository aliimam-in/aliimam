
import * as React from "react"

export interface TextCursorProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextCursor = React.forwardRef<SVGSVGElement, TextCursorProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1M7 22h1a4 4 0 0 0 4-4v-1M7 2h1a4 4 0 0 1 4 4v1"/>` }}
      {...props}
    />
  )
)

TextCursor.displayName = "TextCursor"
