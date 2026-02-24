
import * as React from "react"

export interface ReceiptCentProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptCent = React.forwardRef<SVGSVGElement, ReceiptCentProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm8 4.5v11"/><path d="M15 9.4a4 4 0 1 0 0 5.2"/></g>` }}
      {...props}
    />
  )
)

ReceiptCent.displayName = "ReceiptCent"
