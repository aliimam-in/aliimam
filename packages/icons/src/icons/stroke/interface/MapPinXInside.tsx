
import * as React from "react"

export interface MapPinXInsideProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPinXInside = React.forwardRef<SVGSVGElement, MapPinXInsideProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0m-5.5-2.5l-5 5m0-5l5 5"/>` }}
      {...props}
    />
  )
)

MapPinXInside.displayName = "MapPinXInside"
