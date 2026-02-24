
import * as React from "react"

export interface ReceiptRussianRubleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptRussianRuble = React.forwardRef<SVGSVGElement, ReceiptRussianRubleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 13h5"/><path d="M8 11h5a2 2 0 1 0 0-4h-3v10"/></g>` }}
      {...props}
    />
  )
)

ReceiptRussianRuble.displayName = "ReceiptRussianRuble"
