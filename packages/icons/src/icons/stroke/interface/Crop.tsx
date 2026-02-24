
import * as React from "react"

export interface CropProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Crop = React.forwardRef<SVGSVGElement, CropProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></g>` }}
      {...props}
    />
  )
)

Crop.displayName = "Crop"
