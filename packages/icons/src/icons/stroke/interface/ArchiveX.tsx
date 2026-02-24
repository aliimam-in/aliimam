
import * as React from "react"

export interface ArchiveXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArchiveX = React.forwardRef<SVGSVGElement, ArchiveXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M9.5 17l5-5m-5 0l5 5"/></g>` }}
      {...props}
    />
  )
)

ArchiveX.displayName = "ArchiveX"
