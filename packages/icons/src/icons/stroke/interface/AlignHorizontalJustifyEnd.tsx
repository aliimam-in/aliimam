
import * as React from "react"

export interface AlignHorizontalJustifyEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignHorizontalJustifyEnd = React.forwardRef<SVGSVGElement, AlignHorizontalJustifyEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="12" y="7" rx="2"/><path d="M22 2v20"/></g>` }}
      {...props}
    />
  )
)

AlignHorizontalJustifyEnd.displayName = "AlignHorizontalJustifyEnd"
