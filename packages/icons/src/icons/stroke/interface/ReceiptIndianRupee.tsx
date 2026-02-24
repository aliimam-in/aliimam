
import * as React from "react"

export interface ReceiptIndianRupeeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptIndianRupee = React.forwardRef<SVGSVGElement, ReceiptIndianRupeeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 5h8"/><path d="M12 17.5L8 15h1a4 4 0 0 0 0-8m-1 4h8"/></g>` }}
      {...props}
    />
  )
)

ReceiptIndianRupee.displayName = "ReceiptIndianRupee"
