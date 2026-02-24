
import * as React from "react"

export interface FileUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileUser = React.forwardRef<SVGSVGElement, FileUserProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5m-4 14a4 4 0 0 0-8 0"/><circle cx="12" cy="15" r="3"/></g>` }}
      {...props}
    />
  )
)

FileUser.displayName = "FileUser"
