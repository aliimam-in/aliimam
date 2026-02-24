
import * as React from "react"

export interface BinaryProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Binary = React.forwardRef<SVGSVGElement, BinaryProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="4" height="6" x="14" y="14" rx="2"/><rect width="4" height="6" x="6" y="4" rx="2"/><path d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6"/></g>` }}
      {...props}
    />
  )
)

Binary.displayName = "Binary"
