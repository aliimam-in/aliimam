
import * as React from "react"

export interface EarthLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EarthLock = React.forwardRef<SVGSVGElement, EarthLockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3.34V5a3 3 0 0 0 3 3m1 13.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05m19.49 4H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></g>` }}
      {...props}
    />
  )
)

EarthLock.displayName = "EarthLock"
