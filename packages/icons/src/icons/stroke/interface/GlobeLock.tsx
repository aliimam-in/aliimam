
import * as React from "react"

export interface GlobeLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GlobeLock = React.forwardRef<SVGSVGElement, GlobeLockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20a10 10 0 1 0 9.542 13M2 12h8.5M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></g>` }}
      {...props}
    />
  )
)

GlobeLock.displayName = "GlobeLock"
