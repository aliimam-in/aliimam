
import * as React from "react"

export interface ChevronFirstProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronFirst = React.forwardRef<SVGSVGElement, ChevronFirstProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m17 18l-6-6l6-6M7 6v12"/>` }}
      {...props}
    />
  )
)

ChevronFirst.displayName = "ChevronFirst"
