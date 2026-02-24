
import * as React from "react"

export interface FilePlus2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FilePlus2 = React.forwardRef<SVGSVGElement, FilePlus2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15h6m-3-3v6"/></g>` }}
      {...props}
    />
  )
)

FilePlus2.displayName = "FilePlus2"
