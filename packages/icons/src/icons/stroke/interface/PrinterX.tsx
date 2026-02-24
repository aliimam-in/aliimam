
import * as React from "react"

export interface PrinterXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PrinterX = React.forwardRef<SVGSVGElement, PrinterXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377m3.123 2.5l5 5m-5 0l5-5"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/></g>` }}
      {...props}
    />
  )
)

PrinterX.displayName = "PrinterX"
