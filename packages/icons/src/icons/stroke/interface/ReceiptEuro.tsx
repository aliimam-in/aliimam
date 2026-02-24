
import * as React from "react"

export interface ReceiptEuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptEuro = React.forwardRef<SVGSVGElement, ReceiptEuroProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 10h5"/><path d="M16 9.5a4 4 0 1 0 0 5.2"/></g>` }}
      {...props}
    />
  )
)

ReceiptEuro.displayName = "ReceiptEuro"
