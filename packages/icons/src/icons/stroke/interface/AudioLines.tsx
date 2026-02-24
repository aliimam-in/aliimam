
import * as React from "react"

export interface AudioLinesProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AudioLines = React.forwardRef<SVGSVGElement, AudioLinesProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3"/>` }}
      {...props}
    />
  )
)

AudioLines.displayName = "AudioLines"
