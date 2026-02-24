
import * as React from "react"

export interface CircleFadingArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleFadingArrowUp = React.forwardRef<SVGSVGElement, CircleFadingArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2a10 10 0 0 1 7.38 16.75M16 12l-4-4l-4 4m4 4V8m-9.5.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38"/>` }}
      {...props}
    />
  )
)

CircleFadingArrowUp.displayName = "CircleFadingArrowUp"
