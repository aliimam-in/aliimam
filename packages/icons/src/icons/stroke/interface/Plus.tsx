
import * as React from "react"

export interface PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Plus = React.forwardRef<SVGSVGElement, PlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 12h14m-7-7v14"/>` }}
      {...props}
    />
  )
)

Plus.displayName = "Plus"
