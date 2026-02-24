
import * as React from "react"

export interface LaptopMinimalCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LaptopMinimalCheck = React.forwardRef<SVGSVGElement, LaptopMinimalCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M9 10l2 2l4-4"/><rect width="18" height="12" x="3" y="4" rx="2"/></g>` }}
      {...props}
    />
  )
)

LaptopMinimalCheck.displayName = "LaptopMinimalCheck"
