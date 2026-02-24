
import * as React from "react"

export interface HeadphoneOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HeadphoneOff = React.forwardRef<SVGSVGElement, HeadphoneOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 14h-1.343M9.128 3.47A9 9 0 0 1 21 12v3.343M2 2l20 20m-1.586-1.586A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"/>` }}
      {...props}
    />
  )
)

HeadphoneOff.displayName = "HeadphoneOff"
