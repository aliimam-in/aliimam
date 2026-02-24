
import * as React from "react"

export interface SaveOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SaveOff = React.forwardRef<SVGSVGElement, SaveOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13 13H8a1 1 0 0 0-1 1v7m7-13h1m2 13v-4M2 2l20 20"/><path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"/></g>` }}
      {...props}
    />
  )
)

SaveOff.displayName = "SaveOff"
