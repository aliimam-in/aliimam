
import * as React from "react"

export interface ReceiptPoundSterlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptPoundSterling = React.forwardRef<SVGSVGElement, ReceiptPoundSterlingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 11h5"/><path d="M10 17V9.5a2.5 2.5 0 0 1 5 0M8 17h7"/></g>` }}
      {...props}
    />
  )
)

ReceiptPoundSterling.displayName = "ReceiptPoundSterling"
