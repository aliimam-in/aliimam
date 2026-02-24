
import * as React from "react"

export interface MapPinMinusInsideProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPinMinusInside = React.forwardRef<SVGSVGElement, MapPinMinusInsideProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0M9 10h6"/>` }}
      {...props}
    />
  )
)

MapPinMinusInside.displayName = "MapPinMinusInside"
