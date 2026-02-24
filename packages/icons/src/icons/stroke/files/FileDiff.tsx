
import * as React from "react"

export interface FileDiffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileDiff = React.forwardRef<SVGSVGElement, FileDiffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zm3-12h6m-3 3V7M9 17h6"/>` }}
      {...props}
    />
  )
)

FileDiff.displayName = "FileDiff"
