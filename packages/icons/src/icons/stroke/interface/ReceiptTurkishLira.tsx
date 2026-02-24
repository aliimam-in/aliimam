
import * as React from "react"

export interface ReceiptTurkishLiraProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReceiptTurkishLira = React.forwardRef<SVGSVGElement, ReceiptTurkishLiraProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5M14 8l-6 3"/><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1z"/></g>` }}
      {...props}
    />
  )
)

ReceiptTurkishLira.displayName = "ReceiptTurkishLira"
