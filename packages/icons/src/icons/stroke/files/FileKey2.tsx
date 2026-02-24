
import * as React from "react"

export interface FileKey2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileKey2 = React.forwardRef<SVGSVGElement, FileKey2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="4" cy="16" r="2"/><path d="m10 10l-4.5 4.5M9 11l1 1"/></g>` }}
      {...props}
    />
  )
)

FileKey2.displayName = "FileKey2"
