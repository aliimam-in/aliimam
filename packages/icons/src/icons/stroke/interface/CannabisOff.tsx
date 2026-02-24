
import * as React from "react"

export interface CannabisOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CannabisOff = React.forwardRef<SVGSVGElement, CannabisOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 22v-4c1.5 1.5 3.5 3 6 3c0-1.5-.5-3.5-2-5m-2.012-7.673C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9m6.82 6.825C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684M2 2l20 20m-.976-6.622A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6c-1.5 0-4.5 1.5-5 3c3.5 1.5 6 1 6 1c-1.5 1.5-2 3.5-2 5c2.5 0 4.5-1.5 6-3"/>` }}
      {...props}
    />
  )
)

CannabisOff.displayName = "CannabisOff"
