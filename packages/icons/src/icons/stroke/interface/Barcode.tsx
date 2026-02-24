
import * as React from "react"

export interface BarcodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Barcode = React.forwardRef<SVGSVGElement, BarcodeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14"/>` }}
      {...props}
    />
  )
)

Barcode.displayName = "Barcode"
