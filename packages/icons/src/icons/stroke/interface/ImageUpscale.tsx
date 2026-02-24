
import * as React from "react"

export interface ImageUpscaleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ImageUpscale = React.forwardRef<SVGSVGElement, ImageUpscaleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5m-4 13h2a2 2 0 0 0 2-2m0-7v3m0-12l-5 5M3 7V5a2 2 0 0 1 2-2m0 18l4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3"/><rect width="10" height="10" x="3" y="11" rx="1"/></g>` }}
      {...props}
    />
  )
)

ImageUpscale.displayName = "ImageUpscale"
