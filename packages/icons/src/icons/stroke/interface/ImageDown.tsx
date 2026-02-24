
import * as React from "react"

export interface ImageDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ImageDown = React.forwardRef<SVGSVGElement, ImageDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19l3 3v-5.5m0 5.5l3-3"/><circle cx="9" cy="9" r="2"/></g>` }}
      {...props}
    />
  )
)

ImageDown.displayName = "ImageDown"
