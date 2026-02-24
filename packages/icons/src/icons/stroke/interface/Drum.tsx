
import * as React from "react"

export interface DrumProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Drum = React.forwardRef<SVGSVGElement, DrumProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m2 2l8 8m12-8l-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9"/></g>` }}
      {...props}
    />
  )
)

Drum.displayName = "Drum"
