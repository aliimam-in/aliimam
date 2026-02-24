
import * as React from "react"

export interface CircleFadingPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleFadingPlus = React.forwardRef<SVGSVGElement, CircleFadingPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2a10 10 0 0 1 7.38 16.75M12 8v8m4-4H8M2.5 8.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38"/>` }}
      {...props}
    />
  )
)

CircleFadingPlus.displayName = "CircleFadingPlus"
