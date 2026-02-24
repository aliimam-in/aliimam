
import * as React from "react"

export interface TrainTrackProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TrainTrack = React.forwardRef<SVGSVGElement, TrainTrackProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 17L17 2M2 14l8 8M5 11l8 8M8 8l8 8M11 5l8 8M14 2l8 8M7 22L22 7"/>` }}
      {...props}
    />
  )
)

TrainTrack.displayName = "TrainTrack"
