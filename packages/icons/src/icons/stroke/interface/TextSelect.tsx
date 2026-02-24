
import * as React from "react"

export interface TextSelectProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextSelect = React.forwardRef<SVGSVGElement, TextSelectProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 21h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1m0-6v1m2 11a2 2 0 0 1-2-2M5 3a2 2 0 0 0-2 2m4 7h10M7 16h6M7 8h8M9 21h1M9 3h1"/>` }}
      {...props}
    />
  )
)

TextSelect.displayName = "TextSelect"
