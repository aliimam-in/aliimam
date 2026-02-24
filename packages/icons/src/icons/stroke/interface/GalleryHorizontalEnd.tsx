
import * as React from "react"

export interface GalleryHorizontalEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GalleryHorizontalEnd = React.forwardRef<SVGSVGElement, GalleryHorizontalEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 7v10M6 5v14"/><rect width="12" height="18" x="10" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

GalleryHorizontalEnd.displayName = "GalleryHorizontalEnd"
