
import * as React from "react"

export interface LetterTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LetterText = React.forwardRef<SVGSVGElement, LetterTextProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 12h6m-6-6h6M3 13l3.553-7.724a.5.5 0 0 1 .894 0L11 13m-8 5h18M3.92 11h6.16"/>` }}
      {...props}
    />
  )
)

LetterText.displayName = "LetterText"
