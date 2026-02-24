
import * as React from "react"

export interface PrinterCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PrinterCheck = React.forwardRef<SVGSVGElement, PrinterCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5M16 19l2 2l4-4"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/></g>` }}
      {...props}
    />
  )
)

PrinterCheck.displayName = "PrinterCheck"
