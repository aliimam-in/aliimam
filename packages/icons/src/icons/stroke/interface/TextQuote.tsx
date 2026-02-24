
import * as React from "react"

export interface TextQuoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextQuote = React.forwardRef<SVGSVGElement, TextQuoteProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 5H3m18 7H8m13 7H8m-5-7v7"/>` }}
      {...props}
    />
  )
)

TextQuote.displayName = "TextQuote"
