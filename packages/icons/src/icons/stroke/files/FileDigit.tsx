
import * as React from "react"

export interface FileDigitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileDigit = React.forwardRef<SVGSVGElement, FileDigitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"/><path d="M14 2v5a1 1 0 0 0 1 1h5m-10 8h2v6m-2 0h4"/><rect width="4" height="6" x="2" y="16" rx="2"/></g>` }}
      {...props}
    />
  )
)

FileDigit.displayName = "FileDigit"
