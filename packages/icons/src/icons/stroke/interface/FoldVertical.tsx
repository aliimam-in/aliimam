
import * as React from "react"

export interface FoldVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FoldVertical = React.forwardRef<SVGSVGElement, FoldVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 22v-6m0-8V2M4 12H2m8 0H8m8 0h-2m8 0h-2m-5 7l-3-3l-3 3m6-14l-3 3l-3-3"/>` }}
      {...props}
    />
  )
)

FoldVertical.displayName = "FoldVertical"
