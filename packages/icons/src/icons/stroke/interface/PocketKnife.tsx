
import * as React from "react"

export interface PocketKnifeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PocketKnife = React.forwardRef<SVGSVGElement, PocketKnifeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"/><path d="M18 11.66V22a4 4 0 0 0 4-4V6"/></g>` }}
      {...props}
    />
  )
)

PocketKnife.displayName = "PocketKnife"
