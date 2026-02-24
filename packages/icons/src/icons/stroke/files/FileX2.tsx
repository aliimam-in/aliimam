
import * as React from "react"

export interface FileX2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileX2 = React.forwardRef<SVGSVGElement, FileX2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 12.5l-5 5m0-5l5 5"/></g>` }}
      {...props}
    />
  )
)

FileX2.displayName = "FileX2"
