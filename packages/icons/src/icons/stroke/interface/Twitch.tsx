
import * as React from "react"

export interface TwitchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Twitch = React.forwardRef<SVGSVGElement, TwitchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7"/>` }}
      {...props}
    />
  )
)

Twitch.displayName = "Twitch"
