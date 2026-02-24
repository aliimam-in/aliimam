
import * as React from "react"

export interface GalleryVerticalEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GalleryVerticalEnd = React.forwardRef<SVGSVGElement, GalleryVerticalEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M7 2h10M5 6h14"/><rect width="18" height="12" x="3" y="10" rx="2"/></g>` }}
      {...props}
    />
  )
)

GalleryVerticalEnd.displayName = "GalleryVerticalEnd"
