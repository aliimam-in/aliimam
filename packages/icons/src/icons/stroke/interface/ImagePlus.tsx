
import * as React from "react"

export interface ImagePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ImagePlus = React.forwardRef<SVGSVGElement, ImagePlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></g>` }}
      {...props}
    />
  )
)

ImagePlus.displayName = "ImagePlus"
