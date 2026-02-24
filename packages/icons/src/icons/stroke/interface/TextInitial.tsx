
import * as React from "react"

export interface TextInitialProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextInitial = React.forwardRef<SVGSVGElement, TextInitialProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 5h6m-6 7h6M3 19h18M3 12l3.553-7.724a.5.5 0 0 1 .894 0L11 12m-7.08-2h6.16"/>` }}
      {...props}
    />
  )
)

TextInitial.displayName = "TextInitial"
