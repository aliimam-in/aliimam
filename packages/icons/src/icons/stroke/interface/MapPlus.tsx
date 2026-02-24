
import * as React from "react"

export interface MapPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPlus = React.forwardRef<SVGSVGElement, MapPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"/>` }}
      {...props}
    />
  )
)

MapPlus.displayName = "MapPlus"
