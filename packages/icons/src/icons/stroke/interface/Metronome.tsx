
import * as React from "react"

export interface MetronomeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Metronome = React.forwardRef<SVGSVGElement, MetronomeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 11.4V9.1m0 7.9l6.59-6.59M15.05 5.7l-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"/><circle cx="20" cy="9" r="2"/></g>` }}
      {...props}
    />
  )
)

Metronome.displayName = "Metronome"
