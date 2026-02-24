
import * as React from "react"

export interface TouchpadOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TouchpadOff = React.forwardRef<SVGSVGElement, TouchpadOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 20v-6m7.656 0H22M2 14h12M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.656 0H20a2 2 0 0 1 2 2v10.344"/>` }}
      {...props}
    />
  )
)

TouchpadOff.displayName = "TouchpadOff"
