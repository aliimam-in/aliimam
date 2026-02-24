
import * as React from "react"

export interface ReceiptSwissFrancProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptSwissFranc = React.forwardRef<SVGSVGElement, ReceiptSwissFrancProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z"/><path d="M10 17V7h5m-5 4h4m-6 4h5"/></g>` }}
      {...props}
    />
  )
)

ReceiptSwissFranc.displayName = "ReceiptSwissFranc"
