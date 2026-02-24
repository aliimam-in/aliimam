
import * as React from "react"

export interface CannabisProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cannabis = React.forwardRef<SVGSVGElement, CannabisProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 22v-4m-5-6c-1.5 0-4.5 1.5-5 3c3.5 1.5 6 1 6 1c-1.5 1.5-2 3.5-2 5c2.5 0 4.5-1.5 6-3c1.5 1.5 3.5 3 6 3c0-1.5-.5-3.5-2-5c0 0 2.5.5 6-1c-.5-1.5-3.5-3-5-3c1.5-1 4-4 4-6c-2.5 0-5.5 1.5-7 3c0-2.5-.5-5-2-7c-1.5 2-2 4.5-2 7c-1.5-1.5-4.5-3-7-3c0 2 2.5 5 4 6"/>` }}
      {...props}
    />
  )
)

Cannabis.displayName = "Cannabis"
