
import * as React from "react"

export interface CloudBackupProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudBackup = React.forwardRef<SVGSVGElement, CloudBackupProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607"/><path d="M7 11v4h4"/><path d="M8 19a5 5 0 0 0 9-3a4.5 4.5 0 0 0-4.5-4.5a4.82 4.82 0 0 0-3.41 1.41L7 15"/></g>` }}
      {...props}
    />
  )
)

CloudBackup.displayName = "CloudBackup"
