
import * as React from "react"

export interface SmartphoneNfcProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SmartphoneNfc = React.forwardRef<SVGSVGElement, SmartphoneNfcProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"/></g>` }}
      {...props}
    />
  )
)

SmartphoneNfc.displayName = "SmartphoneNfc"
